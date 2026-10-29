"use client";

import { useActionState, useEffect } from "react";
import { submitLead, type LeadState } from "../actions";
import { site } from "../site.config";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

const field =
  "w-full rounded-lg border-2 border-ink/15 bg-white px-4 py-3.5 text-base text-ink outline-none transition placeholder:text-ink/35 focus:border-safety";

export function LeadForm() {
  const [state, action, pending] = useActionState<LeadState, FormData>(submitLead, null);

  useEffect(() => {
    if (!state?.ok) return;
    window.gtag?.("event", "generate_lead", { form: "free_trial" });
    window.fbq?.("track", "Lead");
  }, [state]);

  if (state?.ok) {
    return (
      <div className="rounded-xl border-2 border-signal bg-signal/10 p-8 text-center">
        <div className="font-display text-4xl font-extrabold">You&apos;re in. 📲</div>
        <p className="mt-2 text-lg text-ink/80">{state.message}</p>
      </div>
    );
  }

  return (
    <form action={action} className="grid gap-4 sm:grid-cols-2">
      <input name="name" placeholder="Your name" autoComplete="name" required className={field} />
      <input name="business" placeholder="Business name" autoComplete="organization" required className={field} />
      <input name="phone" type="tel" placeholder="Mobile phone" autoComplete="tel" inputMode="tel" required className={field} />
      <select name="trade" required defaultValue="" className={field}>
        <option value="" disabled>
          Your trade
        </option>
        {site.trades.map((t) => (
          <option key={t}>{t}</option>
        ))}
      </select>
      <select name="missedPerWeek" required defaultValue="" className={`${field} sm:col-span-2`}>
        <option value="" disabled>
          About how many calls do you miss per week?
        </option>
        <option>1–3</option>
        <option>4–7</option>
        <option>8–15</option>
        <option>15+</option>
        <option>Not sure</option>
      </select>

      <label className="flex gap-3 text-sm leading-relaxed text-ink/70 sm:col-span-2">
        <input name="smsConsent" type="checkbox" required className="mt-1 size-5 shrink-0 accent-safety" />
        <span>
          I agree to receive text messages from {site.brand} about my trial and account. Msg &amp; data rates may apply.
          Msg frequency varies. Reply STOP to opt out, HELP for help. See our{" "}
          <a href="/sms-terms" className="underline">SMS Terms</a> and{" "}
          <a href="/privacy" className="underline">Privacy Policy</a>.
        </span>
      </label>

      {state && !state.ok && (
        <p role="alert" className="rounded-lg bg-safety/10 px-4 py-3 text-sm font-medium text-safety-dark sm:col-span-2">
          {state.message}
        </p>
      )}

      <button
        type="submit"
        disabled={pending}
        className="rounded-lg bg-safety px-6 py-5 text-lg font-bold text-asphalt shadow-[0_6px_0_var(--color-safety-dark)] transition active:translate-y-1 active:shadow-[0_2px_0_var(--color-safety-dark)] disabled:opacity-60 sm:col-span-2"
      >
        {pending ? "Sending…" : "Start my free 14-day trial"}
      </button>
    </form>
  );
}
