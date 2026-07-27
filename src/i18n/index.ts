import az, { type Dictionary } from "./az";
import en from "./en";
import ru from "./ru";

export type Lang = "az" | "en" | "ru";
export type { Dictionary };

export const LANGS: readonly Lang[] = ["az", "en", "ru"] as const;

/** Azərbaycan dili kökdədir (`/`), qalanları prefiksli. */
export const DEFAULT_LANG: Lang = "az";

const dictionaries: Record<Lang, Dictionary> = { az, en, ru };

export function getDictionary(lang: Lang): Dictionary {
  return dictionaries[lang];
}

/** Dilin marşrutu: az → "/", en → "/en", ru → "/ru". */
export function pathForLang(lang: Lang): string {
  return lang === DEFAULT_LANG ? "/" : `/${lang}`;
}
