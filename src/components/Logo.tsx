/**
 * Voint wordmark — "Voint." + sağ-yuxarıda üç iç-içə səs arcı.
 * Arclar həmişə `#39FF14` qalır; mətnin rəngi fondan asılı olaraq dəyişir
 * (`currentColor` ilə: ağ fonda qara, qara fonda ağ).
 */
export function Logo({
  size = 22,
  className,
}: {
  size?: number;
  className?: string;
}) {
  const arc = Math.round(size * 0.6);

  return (
    <span className={`flex items-start ${className ?? ""}`}>
      {/* Ölçü nav-da scroll ilə dəyişdiyi üçün font-size və svg ölçüləri
          CSS xassəsi kimi verilir — atribut olsaydı keçid ani olardı. */}
      <span
        className="leading-none font-bold tracking-[-0.045em] transition-[font-size] duration-300"
        style={{ fontSize: size }}
      >
        Voint.
      </span>
      {/*
        viewBox arc-ların tam sərhədinə kəsilib (yol 2→12, ştrix yarısı 0.8),
        yəni SVG-nin içində boş sahə yoxdur. Əvvəl "0 0 14 14" idi və hər
        tərəfdən ~14% ölü sahə saxlayırdı — arclar mətndən aralı görünürdü.
        Yerini dəqiqləşdirmək lazım olsa bu iki offset kifayətdir.
      */}
      <svg
        viewBox="1.2 1.2 11.6 11.6"
        fill="none"
        aria-hidden
        className="shrink-0 transition-[width,height,margin] duration-300"
        style={{
          width: arc,
          height: arc,
          marginLeft: -size * 0.03,
          marginTop: -size * 0.2,
        }}
      >
        <path d="M12 12A10 10 0 0 0 2 2" stroke="#39FF14" strokeWidth={1.6} strokeLinecap="round" />
        <path d="M9 12A7 7 0 0 0 2 5" stroke="#39FF14" strokeWidth={1.6} strokeLinecap="round" />
        <path d="M6 12A4 4 0 0 0 2 8" stroke="#39FF14" strokeWidth={1.6} strokeLinecap="round" />
      </svg>
    </span>
  );
}
