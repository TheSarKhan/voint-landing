import { icons, type IconName } from "@/components/icons";
import type { Dictionary } from "@/i18n";

export function Platform({ t }: { t: Dictionary }) {
  return (
    <section
      id="imkanlar"
      className="wrap pt-24"
    >
      <h2 className="m-0 mb-10 text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">
        {t.platform.title}
      </h2>

      {/* Sütun sayı sabitdir: auto-fit 1240px-də 4 sütun verirdi və 6 kart
          "4 + 2" şəklində düzülüb ikinci sıranın yarısını boş qoyurdu.
          3 / 2 / 1 sütunda 6 kart həmişə tam sıra ilə bitir.
          Aradakı 1px xətt grid gap + fon rəngi ilə alınır — hər karta ayrıca
          border qoymaqdan fərqli olaraq ikiqat xətt vermir. */}
      <div className="grid grid-cols-1 gap-px overflow-hidden rounded-[10px] border border-line bg-line sm:grid-cols-2 min-[860px]:grid-cols-3">
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

    </section>
  );
}
