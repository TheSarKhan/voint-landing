/** Landing-in mühit asılı sabitləri — bir yerdə saxlanılır ki, domen dəyişəndə tək fayl dəyişsin. */

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://landing-voint.sarkhan.az";

/** Pilot formunun getdiyi backend. Boşdursa form göndərilmir (bax: PilotForm). */
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "";

/** Nav-dakı "Panelə giriş" linki. */
export const PANEL_URL =
  process.env.NEXT_PUBLIC_PANEL_URL ?? "https://voint.sarkhan.az";

export const CONTACT_EMAIL = "salam@voint.az";

/**
 * Hero videosu. Hələlik Pexels-dən müvəqqəti stok materialdır — real video
 * hazır olanda bu iki sətri dəyişmək kifayətdir (faylı `public/` altına qoyub
 * `/hero.mp4` yazmaq daha yaxşıdır: uzaq host LCP-ni gecikdirir).
 */
export const HERO_VIDEO_SRC =
  "https://videos.pexels.com/video-files/7682763/7682763-hd_1920_1080_24fps.mp4";
export const HERO_VIDEO_POSTER =
  "https://images.pexels.com/videos/7682763/pexels-photo-7682763.jpeg?auto=compress&cs=tinysrgb&w=1600";
