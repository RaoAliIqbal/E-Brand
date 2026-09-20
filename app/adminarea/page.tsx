import type { Metadata } from "next";
import { isAdminAuthenticated } from "@/lib/admin-auth";
import { AdminLogin } from "@/components/admin-login";
import { AdminDashboard } from "@/components/admin-dashboard";

export const dynamic = "force-dynamic";
export const metadata: Metadata = { title: "Admin Area", robots: { index: false, follow: false } };

export default async function AdminAreaPage() {
  return await isAdminAuthenticated() ? <AdminDashboard /> : <AdminLogin />;
}
