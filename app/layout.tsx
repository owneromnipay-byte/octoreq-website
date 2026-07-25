import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { SITE } from "@/lib/site";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  applicationName: SITE.name,

  title: {
    default: SITE.legalName,
    template: "%s | OCTOREQ",
  },

  description: SITE.description,

  keywords: [
    "OCTOREQ",
    "Payment Infrastructure",
    "Payment Orchestration",
    "Payment Gateway",
    "Unified Payments",
    "Commerce Infrastructure",
    "Merchant Payments",
    "Fintech",
    "Nigeria",
    "Africa",
    "API",
  ],

  authors: [
    {
      name: SITE.legalName,
      url: SITE.url,
    },
  ],

  creator: SITE.legalName,

  publisher: SITE.legalName,

  category: "Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  openGraph: {
    type: "website",

    locale: SITE.locale,

    url: SITE.url,

    siteName: SITE.name,

    title: SITE.legalName,

    description: SITE.description,

    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: SITE.legalName,

    description: SITE.description,

    images: ["/og-image.png"],
  },

  icons: {
    icon: "/favicon.ico",

    shortcut: "/favicon.ico",

    apple: "/apple-touch-icon.png",
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#000000",

  colorScheme: "dark",

  width: "device-width",

  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}