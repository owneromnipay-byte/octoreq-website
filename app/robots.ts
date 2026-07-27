import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const isProduction =
  process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: isProduction ? "/" : "",
      disallow: isProduction
        ? [
            "/api/",
            "/portal/",
            "/partners/dashboard/",
            "/admin/",
          ]
        : "/",
    },

    sitemap: `${SITE.url}/sitemap.xml`,

    host: SITE.url,
  };
}