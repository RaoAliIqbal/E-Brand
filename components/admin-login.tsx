"use client";
import { FormProtectionFields, protectedFormFields } from "@/components/form-protection";

import { useState, type FormEvent } from "react";
import { Eye, EyeOff, LockKeyhole, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export function AdminLogin() {
  const router = useRouter();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); if (loading) return; setLoading(true); setError("");
    const form = event.currentTarget; const data = new FormData(form);
    try {
    const protection = await protectedFormFields(form, "admin_login");
    const response = await fetch("/api/admin/login", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...protection, username: data.get("username"), password: data.get("password") }) });
    const result = await response.json(); setLoading(false);
    if (!response.ok) { setError(result.error || "Unable to sign in."); return; }
    router.refresh();
    } catch (error) { setError(error instanceof Error ? error.message : "Unable to sign in."); } finally { setLoading(false); }
  }
  return <main className="adminLoginPage"><section className="adminLoginCard"><Image className="adminBrandLogo" src="/images/storybound-house-approved-logo.png" alt="Storybound House" width={1902} height={378} priority /><div className="adminLoginMark"><LockKeyhole /></div><h1>Admin area</h1><p>Sign in to review visitor activity, page performance, and client enquiries.</p><form onSubmit={submit}><FormProtectionFields /><label>Username<input name="username" autoComplete="username" required autoFocus /></label><div className="adminPasswordField"><label htmlFor="admin-password">Password</label><div className="adminPasswordInput"><input id="admin-password" name="password" type={showPassword ? "text" : "password"} autoComplete="current-password" required /><button className="adminPasswordToggle" type="button" onClick={() => setShowPassword(value => !value)} aria-label={showPassword ? "Hide password" : "Show password"} aria-pressed={showPassword} title={showPassword ? "Hide password" : "Show password"}>{showPassword ? <EyeOff size={20} aria-hidden="true" /> : <Eye size={20} aria-hidden="true" />}</button></div></div><button disabled={loading}>{loading ? "Signing in…" : "Sign in securely"}</button><p className="adminLoginError" role="alert">{error}</p></form><div className="adminSecurityNote"><ShieldCheck size={18} />Protected by a signed, HTTP-only session.</div></section></main>;
}
