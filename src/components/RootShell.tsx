import { Poppins } from "next/font/google";
import type { ReactNode } from "react";
import type { Lang } from "@/i18n";
import "@/app/globals.css";

/**
 * Poppins panel ilə eyni şriftdir. `next/font` onu self-host edir —
 * Google-a xarici sorğu getmir, şrift dəyişməsi (layout shift) olmur.
 * `latin-ext` alt çoxluğu Azərbaycan hərflərini (ə, ğ, ş, ı, ö, ü, ç) əhatə edir.
 */
const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

/**
 * Hər dil öz root layout-una sahibdir ki, `<html lang>` düzgün olsun —
 * ekran oxuyucular və axtarış sistemləri üçün vacibdir.
 */
export function RootShell({
  lang,
  children,
}: {
  lang: Lang;
  children: ReactNode;
}) {
  return (
    <html lang={lang} className={poppins.variable}>
      <body className={poppins.className}>{children}</body>
    </html>
  );
}
