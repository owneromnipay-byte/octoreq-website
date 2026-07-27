import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const base = SITE.url;
const lastModified = new Date();

const pages = [
  {
    path: "",
    priority: 1,
    changeFrequency: "weekly",
  },
  {
    path: "/partners",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/developers",
    priority: 0.9,
    changeFrequency: "weekly",
  },
  {
    path: "/pricing",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/company",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/contact",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  {
    path: "/legal",
    priority: 0.6,
    changeFrequency: "yearly",
  },
  {
    path: "/legal/terms",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/legal/privacy",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/legal/merchant-agreement",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/legal/acceptable-use",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/legal/cookies",
    priority: 0.5,
    changeFrequency: "yearly",
  },
  {
    path: "/legal/compliance",
    priority: 0.5,
    changeFrequency: "yearly",
  },
] satisfies Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}>;

export default function sitemap(): MetadataRoute.Sitemap {
  return pages.map((page) => ({
    url: `${base}${page.path}`,
    lastModified,
    priority: page.priority,
    changeFrequency: page.changeFrequency,
  }));
}