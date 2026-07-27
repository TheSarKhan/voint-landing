import { LangSwitch } from "@/components/LangSwitch";
import { Logo } from "@/components/Logo";
import type { Dictionary, Lang } from "@/i18n";
import { PANEL_URL } from "@/lib/site";

export function Nav({ t, lang }: { t: Dictionary; lang: Lang }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/92 backdrop-blur-[8px]">
      <div className="mx-auto flex h-[62px] max-w-[1240px] items-center gap-10 px-5 min-[860px]:px-8">
        <a href="#top" aria-label="Voint">
          <Logo size={22} />
        </a>

        <nav className="hidden gap-7 text-[15px] font-medium text-muted min-[860px]:flex">
          <a href="#imkanlar" className="transition-colors hover:text-ink">
            {t.nav.features}
          </a>
          <a href="#panel" className="transition-colors hover:text-ink">
            {t.nav.panel}
          </a>
          <a href="#qiymet" className="transition-colors hover:text-ink">
            {t.nav.pricing}
          </a>
        </nav>

        <div className="ml-auto flex items-center gap-[22px]">
          <LangSwitch current={lang} />
          <a
            href={PANEL_URL}
            className="hidden text-[15px] font-medium text-muted transition-colors hover:text-ink min-[860px]:inline"
          >
            {t.nav.login}
          </a>
          <a
            href="#pilot"
            className="rounded-md bg-acid px-[18px] py-2.5 text-[15px] font-semibold tracking-[-0.01em] text-ink transition-colors hover:bg-ink hover:text-paper"
          >
            {t.nav.cta}
          </a>
        </div>
      </div>
    </header>
  );
}
