import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: {
    default: "OCTOREQ Technologies Limited",
    template: "%s | OCTOREQ",
  },

  description:
    "The Operating System for Commerce. Unified payment infrastructure for modern businesses.",

  keywords: [
    "OCTOREQ",
    "Payment Infrastructure",
    "Payment Orchestration",
    "Unified API",
    "Fintech",
    "Commerce",
  ],

  openGraph: {
    title: "OCTOREQ Technologies Limited",
    description:
      "The Operating System for Commerce.",
    url: "https://octoreq.com",
    siteName: "OCTOREQ",
    type: "website",
  },
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
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
