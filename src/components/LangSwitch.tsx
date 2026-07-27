"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { LANGS, pathForLang, type Lang } from "@/i18n";

/**
 * Dil seçici. Hər dil öz marşrutudur (`/`, `/en`, `/ru`), ona görə menyunun
 * içindəkilər sadə linkdir — client state ilə dil dəyişdirilmir. SEO üçün
 * vacibdir: axtarış sistemi üç ayrı səhifə görür.
 */
export function LangSwitch({
  current,
  variant = "light",
  placement = "down",
}: {
  current: Lang;
  variant?: "light" | "dark";
  /** Footer səhifənin altındadır — menyu aşağı açılsa ekrandan çıxır. */
  placement?: "down" | "up";
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;

    const onPointerDown = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    document.addEventListener("mousedown", onPointerDown);
    document.addEventListener("keydown", onKeyDown);
    return () => {
      document.removeEventListener("mousedown", onPointerDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  const dark = variant === "dark";

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-haspopup="menu"
        className={`flex cursor-pointer items-center gap-1 text-[13px] font-semibold uppercase transition-colors ${
          dark ? "text-paper/75 hover:text-paper" : "text-muted hover:text-ink"
        }`}
      >
        {current}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden
          className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul
          role="menu"
          className={`absolute right-0 z-10 min-w-[84px] overflow-hidden rounded-md border py-1 shadow-sm ${
            placement === "up" ? "bottom-full mb-2" : "top-full mt-2"
          } ${dark ? "border-line-dark bg-ink" : "border-line bg-paper"}`}
        >
          {LANGS.map((lang) => {
            const active = lang === current;
            return (
              <li key={lang} role="none">
                <Link
                  role="menuitem"
                  href={pathForLang(lang)}
                  hrefLang={lang}
                  aria-current={active ? "true" : undefined}
                  onClick={() => setOpen(false)}
                  className={`block px-3 py-1.5 text-[13px] uppercase transition-colors ${
                    active ? "font-semibold" : "font-medium"
                  } ${
                    dark
                      ? active
                        ? "text-paper"
                        : "text-on-dark-muted hover:text-paper"
                      : active
                        ? "text-ink"
                        : "text-muted hover:text-ink"
                  }`}
                >
                  {lang}
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
