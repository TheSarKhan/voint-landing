import type { Metadata } from "next";
import { getDictionary, pathForLang, type Lang } from "@/i18n";
import { SITE_URL } from "@/lib/site";

/**
 * Üç dilin hər biri üçün eyni qaydada metadata qurur.
 *
 * `alternates.languages` hreflang teqlərini yaradır — axtarış sistemi üç
 * səhifənin eyni məzmunun dil variantları olduğunu buradan bilir, əks halda
 * onları təkrar (duplicate) məzmun sayır.
 */
export function buildMetadata(lang: Lang): Metadata {
  const t = getDictionary(lang);
  const path = pathForLang(lang);

  return {
    metadataBase: new URL(SITE_URL),
    title: t.meta.title,
    description: t.meta.description,
    alternates: {
      canonical: path,
      languages: {
        az: "/",
        en: "/en",
        ru: "/ru",
        "x-default": "/",
      },
    },
    openGraph: {
      type: "website",
      siteName: "Voint",
      locale: lang,
      url: path,
      title: t.meta.title,
      description: t.meta.description,
      // TODO: 1200×630 OG şəkli hazırlanıb `public/og.png`-ə qoyulmalıdır,
      // sonra burada və twitter blokunda `images` açılmalıdır. Mövcud olmayan
      // fayla istinad etmək paylaşımda sınıq önizləmə verir, ona görə hələlik yoxdur.
    },
    twitter: {
      card: "summary_large_image",
      title: t.meta.title,
      description: t.meta.description,
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
