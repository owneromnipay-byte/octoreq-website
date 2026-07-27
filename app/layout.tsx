import type { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";
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

  keywords: SITE.keywords,

  authors: [
    {
      name: SITE.legalName,
      url: SITE.url,
    },
  ],

  creator: SITE.legalName,

  publisher: SITE.legalName,

  category: "Technology",

  generator: "Next.js",

  referrer: "origin-when-cross-origin",

  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },

  verification: {
    google:
      process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,

    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-video-preview": -1,
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
        url: SITE.images.og,
        width: 1200,
        height: 630,
        alt: SITE.name,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    creator: "@octoreqhq",

    title: SITE.legalName,

    description: SITE.description,

    images: [SITE.images.og],
  },

  appleWebApp: {
    capable: true,

    title: SITE.name,

    statusBarStyle: "black-translucent",
  },

  icons: {
    icon: SITE.images.favicon,

    shortcut: SITE.images.favicon,

    apple: SITE.images.appleTouch,
  },

  manifest: "/site.webmanifest",
};

export const viewport: Viewport = {
  themeColor: SITE.themeColor,

  colorScheme: "dark",

  width: "device-width",

  initialScale: 1,
};

export default function RootLayout({
  children,
}: PropsWithChildren) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-black text-white">
        {children}
      </body>
    </html>
  );
}