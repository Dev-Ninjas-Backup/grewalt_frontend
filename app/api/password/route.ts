import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { getEmailCredentials, updateEmailPassword } from "@/lib/db";

const JWT_SECRET = process.env.JWT_SECRET || "change-this-secret";
const EMAIL_USER = process.env.EMAIL_USER || "info@aventra3.com";

function generateToken(password: string) {
  return jwt.sign(
    {
      email_user: EMAIL_USER,
      email_pass: password,
    },
    JWT_SECRET,
    {
      expiresIn: "1h",
    }
  );
}

export async function POST(req: Request) {
  try {
    console.log("[password] POST request received");
    const body = (await req.json()) as {
      action?: string;
      prevPassword?: string;
      newPassword?: string;
    };

    const { action, prevPassword, newPassword } = body;
    console.log("[password] action:", action, "prevPassword provided:", !!prevPassword, "newPassword provided:", !!newPassword);

    if (!prevPassword) {
      console.log("[password] prevPassword is missing");
      return NextResponse.json({ message: "Previous password is required." }, { status: 400 });
    }

    console.log("[password] Fetching email credentials from database...");
    const credentials = await getEmailCredentials();
    console.log("[password] Credentials fetched:", credentials ? { id: credentials.id, email_user: credentials.email_user } : null);
    if (!credentials) {
      console.error("[password] No credentials found in database!");
      return NextResponse.json({ message: "Email credentials are not configured yet." }, { status: 500 });
    }

    console.log("[password] Comparing prevPassword with stored hash...");
    const passwordMatches = await bcrypt.compare(prevPassword, credentials.email_pass_hash);
    console.log("[password] Password match result:", passwordMatches);
    if (!passwordMatches) {
      console.log("[password] Password mismatch - returning 401");
      return NextResponse.json({ message: "Previous password does not match." }, { status: 401 });
    }

    if (action === "token") {
      console.log("[password] Generating token only (no password change)...");
      const token = generateToken(prevPassword);
      console.log("[password] Token generated, returning 200");
      return NextResponse.json({ message: "Token issued.", token }, { status: 200 });
    }

    if (!newPassword || newPassword.length < 8) {
      console.log("[password] newPassword validation failed");
      return NextResponse.json({ message: "New password must be at least 8 characters." }, { status: 400 });
    }

    console.log("[password] Updating password in database...");
    await updateEmailPassword(credentials.id, newPassword);
    console.log("[password] Password updated, generating new token...");
    const token = generateToken(newPassword);
    console.log("[password] Password changed and token generated, returning 200");

    return NextResponse.json({ message: "Password changed and token issued.", token }, { status: 200 });
  } catch (error) {
    console.error("[password] error", error);
    if (error instanceof Error) {
      console.error("[password] error message:", error.message);
      console.error("[password] error stack:", error.stack);
    }
    return NextResponse.json({ message: "Unable to change password." }, { status: 500 });
  }
}
