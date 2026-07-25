// lib/site.ts

export const SITE = {
  // Company Information
  name: "OCTOREQ",
  legalName: "OCTOREQ Technologies Limited",

  // Branding
  tagline: "The Operating System for Commerce",

  description:
    "OCTOREQ provides modern payment infrastructure that enables businesses to accept payments, manage merchants, automate settlements, and scale across Africa through a unified commerce platform.",

  // Website
  url: "https://octoreq.com",

  // Platform URLs
  merchantPortal: "https://portal.octoreq.com",
  partnerPortal: "https://partners.octoreq.com",
  api: "https://api.octoreq.com",
  docs: "https://docs.octoreq.com",

  // Contact
  email: "support@octoreq.com",
  salesEmail: "sales@octoreq.com",
  partnershipsEmail: "partners@octoreq.com",

  // Social Media
  socials: {
    x: "",
    linkedin: "",
    github: "",
    instagram: "",
  },

  // SEO
  locale: "en_US",
  country: "Nigeria",
  currency: "NGN",

  // Copyright
  copyright:
    "© 2026 OCTOREQ Technologies Limited. All rights reserved.",
} as const;

export type SiteConfig = typeof SITE;

export const NAVIGATION = [
  {
    label: "Products",
    href: "/",
  },
  {
    label: "Developers",
    href: "/developers",
  },
  {
    label: "Pricing",
    href: "/pricing",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Resources",
    href: "/resources",
  },
  {
    label: "Company",
    href: "/company",
  },
] as const;

export const FOOTER = {
  platform: [
    {
      label: "Merchant Portal",
      href: SITE.merchantPortal,
    },
    {
      label: "Partner Portal",
      href: SITE.partnerPortal,
    },
    {
      label: "Developers",
      href: "/developers",
    },
  ],

  company: [
    {
      label: "About",
      href: "/company",
    },
    {
      label: "Contact",
      href: "/contact",
    },
  ],

  resources: [
    {
      label: "Documentation",
      href: SITE.docs,
    },
    {
      label: "Partners",
      href: "/partners",
    },
    {
      label: "Pricing",
      href: "/pricing",
    },
  ],

  legal: [
    {
      label: "Terms of Service",
      href: "/legal/terms",
    },
    {
      label: "Privacy Policy",
      href: "/legal/privacy",
    },
    {
      label: "Merchant Agreement",
      href: "/legal/merchant-agreement",
    },
    {
      label: "Acceptable Use Policy",
      href: "/legal/acceptable-use",
    },
    {
      label: "Cookie Policy",
      href: "/legal/cookies",
    },
    {
      label: "Compliance",
      href: "/legal/compliance",
    },
  ],
} as const;

export const APP = {
  version: "1.0.0",
  environment: process.env.NODE_ENV,
} as const;