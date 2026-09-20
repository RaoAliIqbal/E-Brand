"use client";

type Captcha = { ready: (callback: () => void) => void; execute: (key: string, options: { action: string }) => Promise<string> };
declare global { interface Window { grecaptcha?: Captcha } }
let loader: Promise<void> | undefined;
const key = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
const storageKey = "storybound-form-attempts";

function recentAttempts(action: string): number[] {
  try {
    const entries: unknown = JSON.parse(localStorage.getItem(`${storageKey}:${action}`) || "[]");
    return Array.isArray(entries) ? entries.filter((n): n is number => typeof n === "number" && n > Date.now() - 600000 && n <= Date.now()) : [];
  } catch { return []; }
}

async function token(action: string) {
  if (!key) return "";
  if (!loader) loader = new Promise<void>((resolve, reject) => {
    if (window.grecaptcha) { resolve(); return; }
    const script = document.createElement("script");
    script.src = `https://www.google.com/recaptcha/api.js?render=${encodeURIComponent(key)}`;
    script.async = true; script.defer = true;
    const timer = window.setTimeout(() => { script.remove(); loader = undefined; reject(new Error("Verification timed out. Please try again.")); }, 12000);
    script.onload = () => { clearTimeout(timer); resolve(); };
    script.onerror = () => { clearTimeout(timer); script.remove(); loader = undefined; reject(new Error("Unable to load verification. Please try again.")); };
    document.head.append(script);
  });
  await loader;
  return new Promise<string>((resolve, reject) => {
    const timer = window.setTimeout(() => reject(new Error("Verification timed out. Please try again.")), 12000);
    window.grecaptcha?.ready(() => {
      window.grecaptcha!.execute(key, { action }).then(value => { clearTimeout(timer); resolve(value); }, () => { clearTimeout(timer); reject(new Error("Verification failed. Please try again.")); });
    });
  });
}

export async function protectedFormFields(form: HTMLFormElement, action: "enquiry" | "admin_login" = "enquiry") {
  const attempts = recentAttempts(action);
  if (attempts.length >= 3) throw new Error("You have reached three submissions. Please wait ten minutes before trying again.");
  const recaptchaToken = await token(action);
  try { localStorage.setItem(`${storageKey}:${action}`, JSON.stringify([...recentAttempts(action), Date.now()])); } catch { /* Server rate limit remains authoritative. */ }
  return { website_hp: new FormData(form).get("website_hp") || "", recaptchaToken };
}

export function FormProtectionFields() {
  return <><div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, overflow: "hidden", clipPath: "inset(50%)", pointerEvents: "none" }}><label>Leave this field empty<input name="website_hp" type="text" tabIndex={-1} autoComplete="off" /></label></div>{key && <small style={{ display: "block", fontSize: 11, gridColumn: "1 / -1" }}>Protected by reCAPTCHA. Google’s <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Privacy Policy</a> and <a href="https://policies.google.com/terms" target="_blank" rel="noreferrer">Terms</a> apply.</small>}</>;
}
