import Link from "next/link";
import { LANGS, pathForLang, type Lang } from "@/i18n";

/**
 * Dil keçidi. Client state deyil — hər dil öz marşrutudur (`/`, `/en`, `/ru`),
 * ona görə bunlar sadə linklərdir. SEO üçün vacibdir: axtarış sistemi üç ayrı
 * səhifə görür, JS ilə dəyişən bir səhifə yox.
 */
export function LangSwitch({
  current,
  variant = "light",
}: {
  current: Lang;
  variant?: "light" | "dark";
}) {
  return (
    <div className="flex gap-2.5 text-[13px]">
      {LANGS.map((lang) => {
        const active = lang === current;
        const color = active
          ? variant === "dark"
            ? "text-paper font-semibold"
            : "text-ink font-semibold"
          : variant === "dark"
            ? "text-on-dark-muted font-medium hover:text-paper"
            : "text-muted font-medium hover:text-ink";

        return (
          <Link
            key={lang}
            href={pathForLang(lang)}
            hrefLang={lang}
            aria-current={active ? "true" : undefined}
            className={`border-b-[1.5px] uppercase transition-colors ${color} ${
              active ? "border-acid" : "border-transparent"
            }`}
          >
            {lang}
          </Link>
        );
      })}
    </div>
  );
}
