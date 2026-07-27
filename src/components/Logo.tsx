/**
 * Voint wordmark — "Voint" + sağ-yuxarıda üç iç-içə səs arcı.
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
  const arc = Math.round(size * 0.64);

  return (
    <span className={`flex items-start gap-px ${className ?? ""}`}>
      <span
        className="font-bold leading-none tracking-[-0.045em]"
        style={{ fontSize: size }}
      >
        Voint
      </span>
      <svg
        width={arc}
        height={arc}
        viewBox="0 0 14 14"
        fill="none"
        aria-hidden
        style={{ marginTop: -size * 0.14 }}
      >
        <path d="M12 12A10 10 0 0 0 2 2" stroke="#39FF14" strokeWidth={1.6} strokeLinecap="round" />
        <path d="M9 12A7 7 0 0 0 2 5" stroke="#39FF14" strokeWidth={1.6} strokeLinecap="round" />
        <path d="M6 12A4 4 0 0 0 2 8" stroke="#39FF14" strokeWidth={1.6} strokeLinecap="round" />
      </svg>
    </span>
  );
}
