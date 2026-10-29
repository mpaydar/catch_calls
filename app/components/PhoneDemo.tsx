import type { CSSProperties } from "react";

type Line =
  | { kind: "system"; text: string }
  | { kind: "ai" | "customer"; text: string }
  | { kind: "booked" };

const script: Line[] = [
  { kind: "system", text: "Missed call · 2:14 PM" },
  { kind: "ai", text: "Hi, this is ABC Plumbing! Sorry we missed you, we're on a job. How can we help?" },
  { kind: "customer", text: "Water heater is leaking all over the basement 😩" },
  { kind: "ai", text: "So sorry! What's the address, and is the water still running?" },
  { kind: "customer", text: "14 Oak St, Closter. Yes it's still dripping" },
  { kind: "ai", text: "Got it, marking this urgent. Can a tech come today 4–6 PM?" },
  { kind: "customer", text: "Yes please!" },
  { kind: "booked" },
];

export function PhoneDemo({ className = "" }: { className?: string }) {
  return (
    <div className={`relative mx-auto w-[300px] sm:w-[320px] ${className}`}>
      <div className="rounded-[2.6rem] border border-white/10 bg-[#0c0b09] p-3 shadow-[0_40px_80px_-20px_rgb(0_0_0/0.7),0_0_0_1px_rgb(255_255_255/0.04)_inset]">
        <div className="overflow-hidden rounded-[2rem] bg-asphalt-2">
          <div className="flex items-center justify-between px-6 pt-3 pb-2 text-[11px] text-white/60">
            <span>2:14</span>
            <span className="h-5 w-20 rounded-full bg-black" />
            <span>5G ▮▮▮</span>
          </div>
          <div className="flex items-center gap-3 border-b border-white/5 px-4 pb-3">
            <div className="grid size-9 place-items-center rounded-full bg-safety font-display text-lg font-extrabold text-asphalt">
              A
            </div>
            <div className="leading-tight">
              <div className="text-sm font-semibold text-white">ABC Plumbing</div>
              <div className="text-[11px] text-signal">● AI assistant · replies in seconds</div>
            </div>
          </div>

          <div className="chat flex h-[520px] flex-col gap-2 overflow-hidden px-3 py-4 text-[13px] leading-snug">
            {script.map((line, i) => {
              const style = { "--i": i } as CSSProperties;
              if (line.kind === "system")
                return (
                  <div key={i} style={style} className="stamp mx-auto mb-1 flex items-center gap-2 rounded-full bg-safety/15 px-3 py-1 text-[10px]! text-safety">
                    <span className="ring inline-block">☎</span> {line.text}
                  </div>
                );
              if (line.kind === "booked")
                return (
                  <div key={i} style={style} className="mt-1 rounded-xl border border-signal/40 bg-signal/10 p-3 text-white">
                    <div className="stamp text-[10px]! text-signal">✓ New job booked · sent to owner</div>
                    <div className="mt-1 font-semibold">Water heater leak · URGENT</div>
                    <div className="text-white/70">14 Oak St, Closter · Today 4–6 PM</div>
                  </div>
                );
              const ai = line.kind === "ai";
              return (
                <div
                  key={i}
                  style={style}
                  className={`max-w-[82%] rounded-2xl px-3 py-2 ${
                    ai
                      ? "self-start rounded-bl-sm bg-bubble text-white/90"
                      : "self-end rounded-br-sm bg-safety text-asphalt"
                  }`}
                >
                  {line.text}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
