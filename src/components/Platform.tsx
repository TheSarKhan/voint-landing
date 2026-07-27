import { icons, type IconName } from "@/components/icons";
import type { Dictionary } from "@/i18n";

export function Platform({ t }: { t: Dictionary }) {
  return (
    <section
      id="imkanlar"
      className="mx-auto max-w-[1240px] px-5 pt-24 min-[860px]:px-8"
    >
      <h2 className="m-0 mb-10 text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">
        {t.platform.title}
      </h2>

      {/* Kartlar arasındakı 1px xətt grid gap + fon rəngi ilə alınır —
          hər karta ayrıca border qoymaqdan fərqli olaraq ikiqat xətt vermir. */}
      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-px overflow-hidden rounded-[10px] border border-line bg-line">
        {t.platform.cards.map((card) => {
          const Icon = icons[card.icon as IconName];
          return (
            <div key={card.title} className="bg-paper px-[26px] py-7">
              <Icon />
              <h3 className="mt-4 mb-1.5 text-[17px] font-semibold tracking-[-0.02em]">
                {card.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.5] text-muted">{card.body}</p>
            </div>
          );
        })}
      </div>

      <p className="mt-5 text-[15px] text-muted">{t.platform.note}</p>
    </section>
  );
}
