"use client";

import { type } from "os";
import React, { useState } from "react";
import { GoEye, GoEyeClosed } from "react-icons/go";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function SettingsPage() {
  const [prevPassword, setPrevPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [infoMessage, setInfoMessage] = useState<string | null>(null);
const [showCurrentPassword, setShowCurrentPassword] = useState(false);
const [showNewPassword, setShowNewPassword] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (loading) return;

    setLoading(true);
    setInfoMessage(null);

    try {
      const response = await fetch("/api/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "change",
          prevPassword,
          newPassword,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Unable to update password.", {
          position: "top-right",
        });
        return;
      }

      localStorage.setItem("emailPassToken", data.token);
      setInfoMessage("Password updated and token saved in browser storage.");
      toast.success("Password changed successfully!", {
        position: "top-right",
      });
      setPrevPassword("");
      setNewPassword("");
    } catch (error) {
      toast.error("Unable to update password.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleRefreshToken = async () => {
    if (!prevPassword) {
      toast.error("Enter the current password to refresh the token.", {
        position: "top-right",
      });
      return;
    }

    setLoading(true);
    setInfoMessage(null);

    try {
      const response = await fetch("/api/password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          action: "token",
          prevPassword,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        toast.error(data.message || "Unable to refresh token.", {
          position: "top-right",
        });
        return;
      }

      localStorage.setItem("emailPassToken", data.token);
      setInfoMessage("Token refreshed and saved in browser storage.");
      toast.success("Token refreshed successfully!", {
        position: "top-right",
      });
    } catch (error) {
      toast.error("Unable to refresh token.", {
        position: "top-right",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-50 py-16 px-4 mt-22">
      <ToastContainer />
      <div className="mx-auto w-full max-w-3xl rounded-3xl bg-white p-10 shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
        <h1 className="text-4xl font-bold text-slate-900 mb-4">SMTP Password Settings</h1>
        <p className="text-slate-600 mb-8">
          Change the SMTP password for the email contact and application routes. The updated password is stored securely in PostgreSQL, and a JWT token containing the email password is returned for authenticated email delivery.
        </p>

        <form onSubmit={handleSubmit} className="space-y-7">
          <div className="grid gap-6 md:grid-cols-2">
           <div className="relative">
  <input
    type={showCurrentPassword ? "text" : "password"}
    value={prevPassword}
    onChange={(e) => setPrevPassword(e.target.value)}
    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-[#2F8BDD]"
    placeholder="Enter current password"
    required
  />

  <button
    type="button"
    onClick={() => setShowCurrentPassword((prev) => !prev)}
    className="absolute right-4 top-4/7 -translate-y-1/2 text-slate-500"
  >
    {showCurrentPassword ? <GoEyeClosed /> : <GoEye /> }
  </button>
</div>

           <div className="relative">
  <input
    type={showNewPassword ? "text" : "password"}
    value={newPassword}
    onChange={(e) => setNewPassword(e.target.value)}
    className="mt-3 w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 pr-12 text-slate-900 outline-none transition focus:border-[#2F8BDD]"
    placeholder="New password (min 8 chars)"
    required
  />

  <button
    type="button"
    onClick={() => setShowNewPassword((prev) => !prev)}
    className="absolute right-4 top-4/7 -translate-y-1/2 text-slate-500"
  >
    {showNewPassword ? <GoEyeClosed /> :<GoEye /> }
  </button>
</div>
          </div>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <button
              type="submit"
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-[#2F8BDD] to-[#6FDEF7] px-8 py-4 font-semibold text-white shadow-md shadow-sky-200 transition hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Saving..." : "Save Password"}
            </button>
            <button
              type="button"
              onClick={handleRefreshToken}
              disabled={loading}
              className="inline-flex items-center justify-center rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {loading ? "Refreshing..." : "Refresh Token"}
            </button>
          </div>

          {infoMessage ? (
            <div className="rounded-2xl border border-emerald-100 bg-emerald-50 p-4 text-sm text-emerald-800">
              {infoMessage}
            </div>
          ) : null}
        </form>
      </div>
    </main>
  );
}
