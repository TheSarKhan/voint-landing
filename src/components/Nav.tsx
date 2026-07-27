"use client";

import { useEffect, useState } from "react";
import { LangSwitch } from "@/components/LangSwitch";
import { Logo } from "@/components/Logo";
import type { Dictionary, Lang } from "@/i18n";
import { PANEL_URL } from "@/lib/site";

/**
 * İki vəziyyəti var:
 *  - yuxarıda: şəffaf, iri, ağ mətn — qaranlıq hero-nun üzərində "üzür"
 *  - scroll olunduqda: ağ fon, incə sərhəd, kiçik hündürlük, qara mətn
 *
 * `fixed`-dir (sticky deyil), ona görə hero səhifənin ən yuxarısından başlayır
 * və nav onun üstünə düşür. Bunun əvəzi: anchor keçidləri üçün bölmələrə
 * `scroll-mt` lazımdır, yoxsa başlıq nav-ın altında qalır.
 */
export function Nav({ t, lang }: { t: Dictionary; lang: Lang }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll(); // səhifə scroll olunmuş vəziyyətdə açıla bilər (reload, anchor)
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-[background-color,border-color,color] duration-300 ${
        scrolled
          ? "border-b border-line bg-paper/92 text-ink backdrop-blur-[8px]"
          : "border-b border-transparent text-paper"
      }`}
    >
      <div
        className={`wrap relative flex items-center gap-10 transition-[height] duration-300 ${
          scrolled ? "h-[62px]" : "h-[88px]"
        }`}
      >
        <a href="#top" aria-label="Voint">
          <Logo size={scrolled ? 22 : 28} />
        </a>

        {/* Mütləq mövqe ilə mərkəzləşdirilir: axın içində olsaydı, mərkəz
            loqonun və sağ qrupun enindən asılı olardı və dil keçidi
            dəyişəndə sürüşərdi. */}
        <nav
          className={`absolute left-1/2 hidden -translate-x-1/2 gap-7 text-[15px] font-medium min-[860px]:flex ${
            scrolled ? "text-muted" : "text-paper/75"
          }`}
        >
          <a href="#imkanlar" className="transition-colors hover:text-current hover:opacity-100">
            {t.nav.features}
          </a>
          <a href="#panel" className="transition-colors hover:text-current hover:opacity-100">
            {t.nav.panel}
          </a>
          <a href="#qiymet" className="transition-colors hover:text-current hover:opacity-100">
            {t.nav.pricing}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-[22px]">
          <LangSwitch current={lang} variant={scrolled ? "light" : "dark"} />
          <a
            href={PANEL_URL}
            className={`hidden text-[15px] font-medium transition-colors min-[860px]:inline ${
              scrolled ? "text-muted hover:text-ink" : "text-paper/75 hover:text-paper"
            }`}
          >
            {t.nav.login}
          </a>
          <a
            href="#pilot"
            className={`rounded-md bg-acid px-[18px] py-2.5 text-[15px] font-semibold tracking-[-0.01em] text-ink transition-colors ${
              scrolled ? "hover:bg-ink hover:text-paper" : "hover:bg-paper"
            }`}
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
