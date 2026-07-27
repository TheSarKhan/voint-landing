import type { Dictionary } from "@/i18n";

export function Pricing({ t }: { t: Dictionary }) {
  return (
    <section
      id="qiymet"
      className="wrap pt-24"
    >
      <h2 className="m-0 mb-10 max-w-[720px] text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">
        {t.pricing.title}
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] items-start gap-4">
        {t.pricing.plans.map((plan) => {
          // Vurğu badge ilə deyil, tam qara kartla verilir.
          const dark = plan.featured;
          return (
            <div
              key={plan.name}
              className={`rounded-[10px] border px-7 py-[30px] ${
                dark ? "border-ink bg-ink text-paper" : "border-line"
              }`}
            >
              <div className="text-[16px] font-semibold tracking-[-0.02em]">
                {plan.name}
              </div>

              <div className="mt-3.5 mb-[22px] flex items-baseline gap-1.5">
                <span className="text-[40px] leading-none font-bold tracking-[-0.045em]">
                  {plan.price}
                </span>
                {/* "Fərdi" tarifində "AZN / ay" yazmaq mənasızdır */}
                {/^\d+$/.test(plan.price) && (
                  <span
                    className={`text-[15px] ${dark ? "text-on-dark-muted" : "text-muted"}`}
                  >
                    {t.pricing.perMonth}
                  </span>
                )}
              </div>

              <dl
                className={`flex flex-col gap-2.5 border-t pt-5 text-[15px] ${
                  dark ? "border-line-dark" : "border-line"
                }`}
              >
                <div className="flex justify-between">
                  <dt className={dark ? "text-on-dark-muted" : "text-muted"}>
                    {t.pricing.includedLabel}
                  </dt>
                  <dd className="m-0 font-medium">{plan.included}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className={dark ? "text-on-dark-muted" : "text-muted"}>
                    {t.pricing.overageLabel}
                  </dt>
                  <dd className="m-0 font-medium">{plan.overage}</dd>
                </div>
              </dl>

              <a
                href="#pilot"
                className={`mt-[26px] block rounded-md text-center transition-colors ${
                  dark
                    ? "bg-acid py-[13px] text-[15px] font-semibold text-ink hover:bg-paper"
                    : "border border-ink py-3 text-[15px] font-medium hover:bg-ink hover:text-paper"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          );
        })}
      </div>

      <div className="mt-[22px] flex flex-wrap gap-x-10 gap-y-2 text-[15px] text-muted">
        {t.pricing.notes.map((note) => (
          <span key={note}>{note}</span>
        ))}
      </div>
    </section>
  );
}
