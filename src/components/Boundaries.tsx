import type { Dictionary } from "@/i18n";

/**
 * Məhsulun hələ müştərisi olmadığı üçün səhifənin yeganə etibar dayağı budur —
 * loqo divarı, rəy və case study bilərəkdən yoxdur.
 */
export function Boundaries({ t }: { t: Dictionary }) {
  return (
    <section className="wrap pt-24">
      <h2 className="m-0 max-w-[720px] text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">
        {t.boundaries.title}
      </h2>
      <p className="mt-3.5 mb-12 max-w-[620px] text-[18px] leading-[1.55] text-muted">
        {t.boundaries.subtitle}
      </p>

      {/* Sabit 2 sütun: auto-fit geniş ekranda 3-4 sütun verib 6 bəndi
          natamam sıra ilə bitirirdi. 2 sütunda həmişə 3 tam sıra alınır. */}
      <ol className="m-0 grid list-none grid-cols-1 gap-x-16 p-0 min-[860px]:grid-cols-2">
        {t.boundaries.items.map((item, i) => (
          <li
            key={item.title}
            className="grid grid-cols-[46px_1fr] border-t border-line py-[22px]"
          >
            <span className="text-[26px] leading-none font-medium tracking-[-0.04em] text-line">
              {i + 1}
            </span>
            <div>
              <h3 className="m-0 mb-[5px] text-[19px] font-semibold tracking-[-0.025em]">
                {item.title}
              </h3>
              <p className="m-0 text-[15px] leading-[1.55] text-muted">{item.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <p className="mt-11 border-t border-line pt-[22px] text-[15px] text-muted">
        {t.boundaries.note}
      </p>
    </section>
  );
}
