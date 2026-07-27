"use client";

import { useState, type FormEvent } from "react";
import type { Dictionary } from "@/i18n";
import { API_BASE_URL, CONTACT_EMAIL } from "@/lib/site";

type Status = "idle" | "submitting" | "success" | "error";

const inputCls =
  "rounded-md border border-line bg-paper px-3 py-2.5 text-[15px] text-ink outline-none transition-colors focus:border-ink";

export function PilotForm({ t }: { t: Dictionary }) {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "submitting") return;

    const data = new FormData(e.currentTarget);
    const payload = {
      fullName: String(data.get("fullName") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      industry: String(data.get("industry") ?? ""),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      dailyCallVolume: String(data.get("dailyCallVolume") ?? "").trim() || null,
    };

    // Backend ünvanı verilməyibsə sorğunu heç göndərmirik — "göndərildi"
    // deyib itirməkdənsə email təklif etmək dürüstdür.
    if (!API_BASE_URL) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const res = await fetch(`${API_BASE_URL}/api/v1/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="pilot" className="mt-24 border-t border-line bg-wash py-[88px]">
      <div className="mx-auto grid max-w-[1240px] grid-cols-[repeat(auto-fit,minmax(320px,1fr))] items-start gap-14 px-5 min-[860px]:px-8">
        <div>
          <h2 className="m-0 text-[clamp(30px,3.4vw,44px)] leading-[1.05] font-bold tracking-[-0.04em]">
            {t.pilot.title}
          </h2>
          <p className="mt-4 max-w-[460px] text-[18px] leading-[1.55] text-muted">
            {t.pilot.subtitle}
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="rounded-[10px] border border-line bg-paper p-7"
        >
          <div className="grid grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-4">
            <label className="flex flex-col gap-1.5 text-[13px] font-medium">
              {t.pilot.fields.name}
              <input name="fullName" type="text" required autoComplete="name" className={inputCls} />
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium">
              {t.pilot.fields.company}
              <input name="company" type="text" required autoComplete="organization" className={inputCls} />
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium">
              {t.pilot.fields.industry}
              <select name="industry" className={inputCls} defaultValue={t.pilot.industries[0]}>
                {t.pilot.industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium">
              {t.pilot.fields.phone}
              <input name="phone" type="tel" required autoComplete="tel" className={inputCls} />
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium">
              {t.pilot.fields.email}
              <input name="email" type="email" required autoComplete="email" className={inputCls} />
            </label>

            <label className="flex flex-col gap-1.5 text-[13px] font-medium">
              <span>
                {t.pilot.fields.callVolume}{" "}
                <span className="font-normal text-muted">{t.pilot.fields.optional}</span>
              </span>
              <input name="dailyCallVolume" type="text" inputMode="numeric" className={inputCls} />
            </label>
          </div>

          <button
            type="submit"
            disabled={status === "submitting"}
            className="mt-5 w-full cursor-pointer rounded-md bg-acid py-3.5 text-[16px] font-semibold text-ink transition-colors hover:bg-ink hover:text-paper disabled:cursor-default disabled:opacity-60"
          >
            {status === "submitting" ? t.pilot.submitting : t.pilot.submit}
          </button>

          {/* Status badge kimi deyil, sadə mətn kimi göstərilir. */}
          <p role="status" aria-live="polite" className="mt-3 min-h-5 text-[14px]">
            {status === "success" && <span className="text-ink">{t.pilot.success}</span>}
            {status === "error" && (
              <span className="text-muted">
                {t.pilot.error}{" "}
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-ink underline">
                  {CONTACT_EMAIL}
                </a>
              </span>
            )}
          </p>
        </form>
      </div>
    </section>
  );
}
