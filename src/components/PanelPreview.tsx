import type { Dictionary } from "@/i18n";

/**
 * Panelin nümunə görüntüsü — skrinşot deyil, canlı HTML.
 * Data bilərəkdən demo datasıdır (nömrələr maskalanıb), real müştəri
 * məlumatı və ya real görünən uydurma şirkət adı yoxdur.
 */
export function PanelPreview({ t }: { t: Dictionary }) {
  return (
    <section
      id="panel"
      className="mt-24 border-y border-line bg-wash py-[88px]"
    >
      <div className="wrap">
        <h2 className="m-0 text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">
          {t.panel.title}
        </h2>
        <p className="mt-3.5 mb-10 max-w-[620px] text-[18px] leading-[1.55] text-muted">
          {t.panel.subtitle}
        </p>

        <div className="overflow-hidden rounded-[10px] border border-line bg-paper">
          {/* Brauzer çərçivəsi */}
          <div className="flex items-center gap-3.5 border-b border-line px-4 py-3">
            <div className="flex gap-1.5" aria-hidden>
              <span className="h-[9px] w-[9px] rounded-full bg-line" />
              <span className="h-[9px] w-[9px] rounded-full bg-line" />
              <span className="h-[9px] w-[9px] rounded-full bg-line" />
            </div>
            <div className="max-w-[340px] flex-1 rounded-[5px] bg-wash px-3 py-[5px] text-[12px] text-muted">
              {t.panel.browserUrl}
            </div>
          </div>

          <div className="grid grid-cols-1 min-[860px]:grid-cols-[minmax(300px,1.1fr)_minmax(320px,1.4fr)]">
            {/* Zəng siyahısı */}
            <div className="border-line min-[860px]:border-r">
              <div className="flex items-center justify-between px-5 pt-4 pb-3">
                <span className="text-[14px] font-semibold tracking-[-0.01em]">
                  {t.panel.callsHeading}
                </span>
                <span className="text-[12px] text-muted">{t.panel.callsCount}</span>
              </div>

              {t.panel.calls.map((call, i) => (
                <div
                  key={call.phone}
                  className={`border-t border-line px-5 py-3.5 ${
                    i === 0 ? "border-l-2 border-l-acid bg-paper" : ""
                  }`}
                >
                  <div className="flex justify-between text-[14px] font-medium">
                    <span>{call.phone}</span>
                    <span className="text-[13px] font-normal text-muted">
                      {call.duration}
                    </span>
                  </div>
                  <div className="mt-[3px] text-[13px] text-muted">{call.label}</div>
                </div>
              ))}
            </div>

            {/* Transkript */}
            <div className="border-t border-line px-6 pt-4 pb-6 min-[860px]:border-t-0">
              <div className="flex items-baseline justify-between border-b border-line pb-3">
                <span className="text-[14px] font-semibold tracking-[-0.01em]">
                  {t.panel.transcriptHeading}
                </span>
                <span className="text-[12px] text-muted">{t.panel.transcriptDate}</span>
              </div>

              <div className="flex flex-col gap-3.5 pt-4">
                {t.panel.transcript.map((line, i) => (
                  <div key={i}>
                    <div className="text-[11px] font-semibold tracking-[0.04em] text-muted">
                      {line.speaker === "agent"
                        ? t.panel.speakerAgent
                        : t.panel.speakerCustomer}
                    </div>
                    <p className="m-0 mt-1 text-[14px] leading-[1.5]">{line.text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap gap-7 border-t border-line pt-4">
                {t.panel.meta.map((m) => (
                  <div key={m.label}>
                    <div className="text-[12px] text-muted">{m.label}</div>
                    <div className="mt-0.5 text-[14px] font-medium">{m.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
