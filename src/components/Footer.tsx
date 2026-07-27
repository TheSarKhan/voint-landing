import { LangSwitch } from "@/components/LangSwitch";
import { Logo } from "@/components/Logo";
import type { Dictionary, Lang } from "@/i18n";
import { CONTACT_EMAIL } from "@/lib/site";

export function Footer({ t, lang }: { t: Dictionary; lang: Lang }) {
  return (
    <footer className="bg-ink py-11 text-paper">
      <div className="wrap flex flex-wrap items-center gap-x-10 gap-y-6">
        <Logo size={20} />

        <span className="text-[15px] text-on-dark-muted">{t.footer.tagline}</span>

        <div className="ml-auto flex flex-wrap items-center gap-6 text-[14px]">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="text-on-dark-muted transition-colors hover:text-paper"
          >
            {CONTACT_EMAIL}
          </a>
          <LangSwitch current={lang} variant="dark" placement="up" />
          <span className="text-muted">{t.footer.copyright}</span>
        </div>
      </div>
    </footer>
  );
}
