import { Boundaries } from "@/components/Boundaries";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Nav } from "@/components/Nav";
import { PanelPreview } from "@/components/PanelPreview";
import { PilotForm } from "@/components/PilotForm";
import { Platform } from "@/components/Platform";
import { Pricing } from "@/components/Pricing";
import { getDictionary, type Lang } from "@/i18n";
import { CONTACT_EMAIL, SITE_URL } from "@/lib/site";

/**
 * Səhifənin özü — üç dil marşrutu da bunu render edir, yalnız `lang` fərqlidir.
 */
export function Landing({ lang }: { lang: Lang }) {
  const t = getDictionary(lang);

  // Strukturlaşdırılmış data. Bilərəkdən yalnız yoxlana bilən faktlar var —
  // reytinq, müştəri sayı və digər uydurma siqnallar yoxdur.
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Voint",
    applicationCategory: "BusinessApplication",
    description: t.meta.description,
    url: SITE_URL,
    inLanguage: ["az", "en", "ru"],
    offers: {
      "@type": "AggregateOffer",
      lowPrice: "149",
      priceCurrency: "AZN",
    },
    publisher: {
      "@type": "Organization",
      name: "Voint",
      url: SITE_URL,
      email: CONTACT_EMAIL,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <a
        href="#imkanlar"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t.nav.skipToContent}
      </a>

      <Nav t={t} lang={lang} />

      <main>
        <Hero t={t} />
        <Platform t={t} />
        <PanelPreview t={t} />
        <Boundaries t={t} />
        <Pricing t={t} />
        <PilotForm t={t} />
      </main>

      <Footer t={t} lang={lang} />
    </>
  );
}
