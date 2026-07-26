import { LucideIcon } from "lucide-react";
import {
  FileText,
  ShieldCheck,
  Cookie,
  Ban,
  Store,
  Handshake,
  Shield,
  BadgeCheck,
  FileCheck,
  Code2,
  Landmark,
} from "lucide-react";

export interface LegalPolicy {
  order: number;
  slug: string;
  title: string;
  description: string;
  href: string;
  category: "legal" | "security" | "developer";
  icon: LucideIcon;
}
export const legalCategories = [
  {
    id: "legal",
    title: "Legal",
  },
  {
    id: "security",
    title: "Security & Compliance",
  },
  {
    id: "developer",
    title: "Developers",
  },
] as const;

export const legalPolicies: LegalPolicy[] = [
  // ============================
  // LEGAL POLICIES
  // ============================

  {
  order: 1,
  slug: "terms",
  title: "Terms of Service",
    description:
      "General terms governing access to and use of the OCTOREQ platform and services.",
    href: "/legal/terms",
    category: "legal",
    icon: FileText,
  },

  {
  order: 2,
  slug: "privacy",
  title: "Privacy Policy",
    description:
      "Learn how OCTOREQ collects, uses, stores and protects personal information.",
    href: "/legal/privacy",
    category: "legal",
    icon: ShieldCheck,
  },

  {
    order: 3,
    slug: "cookies",
    title: "Cookie Policy",
    description:
      "Understand how cookies and similar technologies are used across OCTOREQ services.",
    href: "/legal/cookies",
    category: "legal",
    icon: Cookie,
  },

  {
    order: 4,
    slug: "acceptableUse",
    title: "Acceptable Use Policy",
    description:
      "Activities permitted and prohibited while using the OCTOREQ platform.",
    href: "/legal/acceptable-use",
    category: "legal",
    icon: Ban,
  },

  {
    order: 5,
    slug: "merchantAgreement",
    title: "Merchant Agreement",
    description:
      "Terms governing merchants who use OCTOREQ's payment infrastructure.",
    href: "/legal/merchant-agreement",
    category: "legal",
    icon: Store,
  },

  {
    order: 6,
    slug: "partnerAgreement",
    title: "Partner Agreement",
    description:
      "Requirements, responsibilities and commission terms for OCTOREQ partners.",
    href: "/legal/partner-agreement",
    category: "legal",
    icon: Handshake,
  },

  // ============================
  // SECURITY & COMPLIANCE
  // ============================

  {
    order: 7,
    slug: "security",
    title: "Security Policy",
    description:
      "Learn about OCTOREQ's security architecture, encryption and operational controls.",
    href: "/legal/security",
    category: "security",
    icon: Shield,
  },

  {
    order: 8,
    slug: "compliance",
    title: "Compliance Policy",
    description:
      "Understand OCTOREQ's compliance framework and regulatory commitments.",
    href: "/legal/compliance",
    category: "security",
    icon: BadgeCheck,
  },

  {
    order: 9,
    slug: "dpa",
    title: "Data Processing Agreement",
    description:
      "Enterprise commitments for processing and protecting customer data.",
    href: "/legal/dpa",
    category: "security",
    icon: FileCheck,
  },

  {
    order: 10,
    slug: "sla",
    title: "Service Level Agreement",
    description:
      "Availability objectives, maintenance windows and support commitments.",
    href: "/legal/sla",
    category: "security",
    icon: FileCheck,
  },

  {
    order: 11,
    slug: "trust",
    title: "Trust Center",
    description:
      "Explore OCTOREQ's security, privacy, compliance and reliability practices.",
    href: "/legal/trust",
    category: "security",
    icon: Landmark,
  },

  // ============================
  // DEVELOPER
  // ============================

  {
    order: 12,
    slug: "apiTerms",
    title: "API Terms of Use",
    description:
      "Rules governing access to OCTOREQ APIs, webhooks and developer services.",
    href: "/legal/api-terms",
    category: "developer",
    icon: Code2,
  },
];