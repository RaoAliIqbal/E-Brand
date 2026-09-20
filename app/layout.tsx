import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import Script from "next/script";
import { Arsenal, Poppins } from "next/font/google";
import { PublicSiteChrome } from "@/components/public-site-chrome";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://storyboundhouse.com";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});
const arsenal = Arsenal({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-arsenal",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Storybound House | Premium Ghostwriting & Author Services",
    template: "%s | Storybound House",
  },
  description:
    "Transform your idea into a compelling, publication-ready book with confidential ghostwriting, editing, design, and publishing support.",
  keywords: [
    "ghostwriting services",
    "book ghostwriter",
    "book editing",
    "book publishing assistance",
    "book cover design",
    "author marketing",
  ],
  applicationName: "Storybound House",
  category: "Professional Services",
  authors: [{ name: "Storybound House" }],
  creator: "Storybound House",
  publisher: "Storybound House",
  referrer: "strict-origin-when-cross-origin",
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    title: "Storybound House",
    description: "Your story. Your voice. Beautifully written.",
    url: siteUrl,
    siteName: "Storybound House",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Storybound House",
    description: "Your story. Your voice. Beautifully written.",
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const gtmId = process.env.NEXT_PUBLIC_GTM_ID;

  return (
    <html lang="en" suppressHydrationWarning>
      <head><meta httpEquiv="Content-Security-Policy" content="object-src 'none'; base-uri 'self'; form-action 'self'" /></head>
      <body className={`${poppins.variable} ${arsenal.variable}`} suppressHydrationWarning>
        {gtmId ? (
          <Script id="gtm" strategy="afterInteractive">
            {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${gtmId}');`}
          </Script>
        ) : null}
        {children}
        <PublicSiteChrome />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
