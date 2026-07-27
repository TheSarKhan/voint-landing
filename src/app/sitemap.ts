import type { MetadataRoute } from "next";
import { LANGS, pathForLang } from "@/i18n";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return LANGS.map((lang) => ({
    url: new URL(pathForLang(lang), SITE_URL).toString(),
    changeFrequency: "monthly",
    priority: lang === "az" ? 1 : 0.8,
    alternates: {
      languages: Object.fromEntries(
        LANGS.map((l) => [l, new URL(pathForLang(l), SITE_URL).toString()]),
      ),
    },
  }));
}
