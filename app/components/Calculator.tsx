"use client";

import { useState, type CSSProperties } from "react";

const WEEKS_PER_MONTH = 4.33;

/**
 * Turns the visitor's two inputs into the monthly dollar figure shown in big type.
 *
 * TODO(Moe): decide how honest/aggressive this number should be.
 * Right now it assumes EVERY missed call would have become a paid job,
 * which overstates the loss — a skeptical contractor will notice.
 * Consider: what share of missed callers would actually have booked
 * (e.g. 30–50%)? Should you round down to look conservative?
 */
export function estimateMonthlyLoss(missedPerWeek: number, avgJobValue: number): number {
  return missedPerWeek * WEEKS_PER_MONTH * avgJobValue;
}

const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

function fill(value: number, min: number, max: number) {
  return { "--fill": `${((value - min) / (max - min)) * 100}%` } as CSSProperties;
}

export function Calculator() {
  const [missed, setMissed] = useState(5);
  const [jobValue, setJobValue] = useState(450);
  const monthly = estimateMonthlyLoss(missed, jobValue);

  return (
    <div className="grid gap-10 rounded-2xl border border-white/10 bg-asphalt-2/80 p-6 backdrop-blur sm:p-10 lg:grid-cols-[1fr_1.1fr] lg:items-center">
      <div className="space-y-9">
        <label className="block">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="stamp text-white/60">Missed calls per week</span>
            <span className="font-display text-4xl font-extrabold text-white">{missed}</span>
          </div>
          <input
            type="range"
            min={1}
            max={40}
            value={missed}
            onChange={(e) => setMissed(Number(e.target.value))}
            className="slider"
            style={fill(missed, 1, 40)}
          />
        </label>

        <label className="block">
          <div className="mb-3 flex items-baseline justify-between">
            <span className="stamp text-white/60">Average job value</span>
            <span className="font-display text-4xl font-extrabold text-white">{usd.format(jobValue)}</span>
          </div>
          <input
            type="range"
            min={100}
            max={5000}
            step={50}
            value={jobValue}
            onChange={(e) => setJobValue(Number(e.target.value))}
            className="slider"
            style={fill(jobValue, 100, 5000)}
          />
        </label>
      </div>

      <div className="relative overflow-hidden rounded-xl bg-paper p-7 text-ink sm:p-9">
        <div className="hazard absolute inset-x-0 top-0 h-2" />
        <div className="stamp text-muted">Estimated revenue walking away</div>
        <div className="mt-3 text-lg">You may be losing about</div>
        <div
          aria-live="polite"
          className="font-display text-[clamp(3.5rem,11vw,6rem)] leading-[0.9] font-black tracking-tight text-safety-dark tabular-nums"
        >
          {usd.format(monthly)}
        </div>
        <div className="text-lg">a month.</div>
        <a
          href="#start"
          className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-asphalt px-6 py-4 text-lg font-semibold text-paper transition hover:bg-safety hover:text-asphalt sm:w-auto"
        >
          Stop losing this money →
        </a>
      </div>
    </div>
  );
}
