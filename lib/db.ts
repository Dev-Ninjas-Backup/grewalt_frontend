import { Client } from "pg";
import bcrypt from "bcryptjs";

const connectionString =
  process.env.DATABASE_URL ||
  `postgresql://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.DATABASE_HOST ?? "localhost"}:${process.env.DATABASE_PORT ?? "5432"}/${process.env.POSTGRES_DB ?? "appdb"}`;

console.log("[DB] Connecting with:", {
  connectionString: connectionString?.replace(/:[^@]*@/, ":***@"),
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  db: process.env.POSTGRES_DB,
});

if (!connectionString) {
  throw new Error("DATABASE_URL environment variable is required for database connection.");
}

const globalWithPg = globalThis as typeof globalThis & {
  __pgClient?: ReturnType<typeof createPgClient>;
};

function createPgClient() {
  return new Client({ connectionString });
}

const client = globalWithPg.__pgClient ?? createPgClient();
if (!globalWithPg.__pgClient) {
  globalWithPg.__pgClient = client;
}

let isConnected = false;

async function ensureEmailCredentials() {
  console.log("[DB] Creating email_credentials table if not exists...");
  await client.query(`
    CREATE TABLE IF NOT EXISTS email_credentials (
      id SERIAL PRIMARY KEY,
      email_user TEXT NOT NULL,
      email_pass_hash TEXT NOT NULL,
      prev_email_pass_hash TEXT,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT now(),
      updated_at TIMESTAMP WITH TIME ZONE DEFAULT now()
    )
  `);
  console.log("[DB] Table created/verified.");

  console.log("[DB] Adding prev_email_pass_hash column if missing...");
  await client.query("ALTER TABLE email_credentials ADD COLUMN IF NOT EXISTS prev_email_pass_hash TEXT;");

  const result = await client.query("SELECT COUNT(*)::int AS count FROM email_credentials");
  const count = result.rows[0]?.count ?? 0;
  console.log("[DB] Row count:", count);

  if (count === 0) {
    console.log("[DB] Seeding initial email credentials...");
    const initialPassword = process.env.EMAIL_PASS || "Aventra121!";
    const hash = await bcrypt.hash(initialPassword, 10);
    const emailUser = process.env.EMAIL_USER || "info@aventra3.com";
    await client.query(
      "INSERT INTO email_credentials (email_user, email_pass_hash, prev_email_pass_hash) VALUES ($1, $2, $3)",
      [emailUser, hash, hash]
    );
    console.log("[DB] Seeded initial credentials for:", emailUser);
  } else {
    console.log("[DB] Updating prev_email_pass_hash for existing rows...");
    await client.query(
      "UPDATE email_credentials SET prev_email_pass_hash = email_pass_hash WHERE prev_email_pass_hash IS NULL"
    );
  }
}

export async function getDbClient() {
  if (!isConnected) {
    console.log("[DB] Attempting to connect...");
    try {
      await client.connect();
      console.log("[DB] Connected successfully!");
    } catch (error: any) {
      console.error("[DB] Connection error:", error?.message);
      if (!error?.message?.includes("already been connected")) {
        throw error;
      }
      console.log("[DB] Client already connected, continuing...");
    }

    isConnected = true;
    console.log("[DB] Running ensureEmailCredentials...");
    await ensureEmailCredentials();
    console.log("[DB] Email credentials ensured!");
  }

  return client;
}

export async function getEmailCredentials() {
  const db = await getDbClient();
  console.log("[DB:getEmailCredentials] Querying credentials...");
  const result = await db.query(
    "SELECT id, email_user, email_pass_hash, prev_email_pass_hash FROM email_credentials ORDER BY id ASC LIMIT 1"
  );
  console.log("[DB:getEmailCredentials] Query result rows:", result.rows.length);
  if (result.rows.length > 0) {
    const row = result.rows[0];
    console.log("[DB:getEmailCredentials] Credentials found:", {
      id: row.id,
      email_user: row.email_user,
      has_pass_hash: !!row.email_pass_hash,
      has_prev_pass_hash: !!row.prev_email_pass_hash,
    });
  }
  return result.rows[0] ?? null;
}

export async function updateEmailPassword(id: number, newPassword: string) {
  console.log("[DB:updateEmailPassword] Starting update for id:", id);
  const db = await getDbClient();
  
  console.log("[DB:updateEmailPassword] Fetching current hash...");
  const currentResult = await db.query(
    "SELECT email_pass_hash FROM email_credentials WHERE id = $1",
    [id]
  );
  const currentHash = currentResult.rows[0]?.email_pass_hash ?? null;
  console.log("[DB:updateEmailPassword] Current hash retrieved:", !!currentHash);
  
  console.log("[DB:updateEmailPassword] Hashing new password...");
  const passwordHash = await bcrypt.hash(newPassword, 10);
  console.log("[DB:updateEmailPassword] New hash generated, updating DB...");
  
  const updateResult = await db.query(
    "UPDATE email_credentials SET prev_email_pass_hash = $1, email_pass_hash = $2, updated_at = now() WHERE id = $3 RETURNING id, email_user, updated_at",
    [currentHash, passwordHash, id]
  );
  
  console.log("[DB:updateEmailPassword] Update result rows:", updateResult.rows.length);
  if (updateResult.rows.length > 0) {
    console.log("[DB:updateEmailPassword] Updated successfully:", updateResult.rows[0]);
  } else {
    console.error("[DB:updateEmailPassword] Update affected no rows!");
  }
}
