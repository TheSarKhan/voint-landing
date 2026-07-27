"use client";

import { useRef, useState } from "react";
import { ArrowRight } from "@/components/icons";
import type { Dictionary } from "@/i18n";
import { HERO_VIDEO_POSTER, HERO_VIDEO_SRC } from "@/lib/site";

export function Hero({ t }: { t: Dictionary }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  /** Fon videosu səssiz oynayır; düymə onu real pleyerə çevirir. */
  const openDemo = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.controls = true;
    video.loop = false;
    setPlaying(true);
    void video.play().catch(() => {});
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[calc(100vh-62px)] items-end overflow-hidden bg-ink"
    >
      <video
        ref={videoRef}
        src={HERO_VIDEO_SRC}
        poster={HERO_VIDEO_POSTER}
        aria-label={t.hero.videoLabel}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        // Tailwind-in arbitrary property sintaksisi bu filtr zəncirini səhv
        // kompilyasiya edir (grayscale(1) → grayscale()), ona görə inline style.
        style={{ filter: "grayscale(1) contrast(1.06)" }}
        className="absolute inset-0 block h-full w-full object-cover"
      />
      {/* Mətnin oxunması üçün qaralma. Videonun üstündə, məzmunun altında. */}
      <div
        className="absolute inset-0 bg-ink opacity-[0.62] transition-opacity"
        style={playing ? { opacity: 0.25 } : undefined}
        aria-hidden
      />

      <div className="relative mx-auto flex w-full max-w-[1240px] flex-wrap items-end justify-between gap-10 px-5 pt-24 pb-16 min-[860px]:px-8">
        <div className="max-w-[860px]">
          <h1 className="m-0 text-[clamp(40px,5.6vw,72px)] leading-[1.02] font-bold tracking-[-0.045em] text-balance text-paper">
            {t.hero.title}
          </h1>
          <p className="mt-[22px] max-w-[620px] text-[18px] leading-[1.55] text-pretty text-on-dark">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#pilot"
              className="rounded-md bg-acid px-[26px] py-3.5 text-[16px] font-semibold tracking-[-0.01em] text-ink transition-colors hover:bg-paper"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#imkanlar"
              className="rounded-md border border-paper px-[26px] py-3.5 text-[16px] font-medium text-paper transition-colors hover:bg-paper hover:text-ink"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>

        <button
          type="button"
          onClick={openDemo}
          className="flex cursor-pointer items-center gap-2.5 border-b border-white/40 pb-1 text-[15px] font-medium text-paper transition-colors hover:border-acid"
        >
          {t.hero.demoLink}
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
