// lib/site.ts

export const SITE = {
  /*
   |--------------------------------------------------------------------------
   | Company
   |--------------------------------------------------------------------------
   */

  name: "OCTOREQ",

  legalName: "OCTOREQ Technologies Limited",

  tagline: "The Operating System for Commerce",

  description:
    "OCTOREQ is the operating system for commerce, providing unified commerce infrastructure that enables businesses to accept payments, orchestrate financial operations, provision merchant services, and scale through a single integration.",

  /*
   |--------------------------------------------------------------------------
   | Website
   |--------------------------------------------------------------------------
   */

  url: "https://octoreq.com",

  locale: "en_US",

  country: "Nigeria",

  currency: "NGN",

  /*
   |--------------------------------------------------------------------------
   | Platform
   |--------------------------------------------------------------------------
   */

  merchantPortal: "https://portal.octoreq.com",

  partnerPortal: "https://partners.octoreq.com",

  api: "https://api.octoreq.com",

  docs: "https://docs.octoreq.com",

  /*
   |--------------------------------------------------------------------------
   | Contact
   |--------------------------------------------------------------------------
   */

  email: "octoreqhq@gmail.com",

  partnershipsEmail: "octoreqhq@gmail.com",

  /*
   |--------------------------------------------------------------------------
   | Social
   |--------------------------------------------------------------------------
   */

  socials: {
    x: "https://x.com/octoreqhq",
    linkedin: "https://linkedin.com/company/octoreq",
    instagram:
      "https://www.instagram.com/octoreqhq?igsh=MWRxbmRleTNxd2IxdA%3D%3D&utm_source=qr",
  },

  /*
   |--------------------------------------------------------------------------
   | SEO
   |--------------------------------------------------------------------------
   */

  keywords: [
    "OCTOREQ",
    "Commerce Infrastructure",
    "Payment Orchestration",
    "Payment APIs",
    "Merchant Infrastructure",
    "Checkout",
    "Virtual Accounts",
    "Wallet Infrastructure",
    "Payout Orchestration",
    "Developer APIs",
    "Fintech",
    "Africa",
  ] satisfies string[],
  

  images: {
    og: "/og-image.png",

    favicon: "/favicon.ico",

    appleTouch: "/apple-touch-icon.png",
  },

  themeColor: "#000000",

  /*
   |--------------------------------------------------------------------------
   | Copyright
   |--------------------------------------------------------------------------
   */

  copyright:
    "© 2026 OCTOREQ Technologies Limited. All rights reserved.",
} as const;

export type SiteConfig = typeof SITE;

export const APP = {
  version: "1.0.0",

  environment: process.env.NODE_ENV,
} as const;