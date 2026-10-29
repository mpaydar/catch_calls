import type { CSSProperties, ReactNode } from "react";
import { Calculator } from "./components/Calculator";
import { Calendar, Chat, Check, PhoneMissed, Shield } from "./components/Icons";
import { LeadForm } from "./components/LeadForm";
import { PhoneDemo } from "./components/PhoneDemo";
import { site } from "./site.config";

const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;

function Eyebrow({ n, children, dark }: { n: string; children: ReactNode; dark?: boolean }) {
  return (
    <div className={`stamp mb-5 flex items-center gap-3 ${dark ? "text-safety" : "text-safety-dark"}`}>
      <span className={`rounded px-1.5 py-0.5 ${dark ? "bg-safety text-asphalt" : "bg-asphalt text-paper"}`}>{n}</span>
      {children}
    </div>
  );
}

function H2({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <h2 className={`font-display text-[clamp(2.6rem,7vw,4.8rem)] leading-[0.92] font-extrabold tracking-tight uppercase ${className}`}>
      {children}
    </h2>
  );
}

const steps = [
  {
    icon: PhoneMissed,
    title: "Missed call → instant text",
    body: (
      <>
        Within seconds your customer gets: <em>“Hi, this is ABC Plumbing! Sorry we missed you. How can we help?”</em>
      </>
    ),
  },
  {
    icon: Chat,
    title: "AI handles the conversation",
    body: "It asks what the job is, the address, and how urgent it is, and answers basics like hours and service area.",
  },
  {
    icon: Calendar,
    title: "You get the job",
    body: "It books right onto your calendar, or texts you a summary so you call back a ready-to-go customer.",
  },
];

const included = [
  "Instant missed-call text-back, 24/7",
  "AI that qualifies the lead: job type, address, urgency",
  "Appointment booking: Google Calendar, Jobber, Housecall Pro & more",
  "Job summaries by text or email",
  "Automatic Google review requests after jobs",
  "Monthly report: calls caught, jobs booked",
  "Local support from a real engineer, not a call center",
];

const faqs = [
  { q: "Do I need to change my phone number?", a: "No. It works with your current business number. Customers call the same number they always have." },
  {
    q: "Will it sound like a robot?",
    a: "No. It texts like a friendly office manager, using your business name. Scroll up to the sample conversation to see exactly what your customers get.",
  },
  { q: "What if the customer has a complicated question?", a: "It forwards it to you immediately, with the full conversation, so you can jump in." },
  { q: "Is there a contract?", a: "No. It's month-to-month. Cancel anytime." },
  { q: "How fast is setup?", a: "Usually within 24 hours. We do the setup with you; you don't need to touch anything technical." },
  { q: "What does it work with?", a: "Google Calendar, Jobber, Housecall Pro, and more. If you use something else, ask. We can usually connect it." },
];

export default function Home() {
  return (
    <>
      {/* NAV */}
      <header className="fixed inset-x-0 top-0 z-40 border-b border-white/5 bg-asphalt/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-display text-2xl font-black tracking-tight text-paper uppercase">
            <span className="grid size-8 place-items-center rounded bg-safety text-asphalt">
              <PhoneMissed width={18} height={18} strokeWidth={2.4} />
            </span>
            {site.brand}
          </a>
          <nav className="flex items-center gap-2 sm:gap-6">
            <a href="#how" className="hidden text-sm text-white/70 hover:text-white md:block">How it works</a>
            <a href="#pricing" className="hidden text-sm text-white/70 hover:text-white md:block">Pricing</a>
            <a href="#faq" className="hidden text-sm text-white/70 hover:text-white md:block">FAQ</a>
            <a href={site.phoneHref} className="hidden text-sm font-semibold text-paper sm:block">{site.phone}</a>
            <a href="#start" className="rounded-md bg-safety px-4 py-2 text-sm font-bold text-asphalt hover:bg-paper">
              Free trial
            </a>
          </nav>
        </div>
      </header>

      <main>
        {/* 1. HERO */}
        <section className="blueprint relative overflow-hidden pt-28 pb-20 text-paper sm:pt-36 sm:pb-28">
          <div className="pointer-events-none absolute -top-40 right-[-10%] size-[620px] rounded-full bg-safety/20 blur-[140px]" />
          <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.15fr_1fr]">
            <div>
              <div className="rise stamp mb-6 inline-flex items-center gap-2 rounded-full border border-safety/40 px-3 py-1.5 text-safety" style={delay(0)}>
                <span className="size-2 animate-pulse rounded-full bg-safety" /> Now onboarding 10 North Jersey contractors
              </div>
              <h1 className="rise font-display text-[clamp(3.4rem,10vw,7rem)] leading-[0.86] font-black tracking-tight uppercase" style={delay(100)}>
                Never lose another job to a <span className="relative whitespace-nowrap text-safety">missed call.</span>
              </h1>
              <p className="rise mt-7 max-w-xl text-lg leading-relaxed text-white/75 sm:text-xl" style={delay(250)}>
                When you can&apos;t pick up, our AI texts your customer back in seconds, finds out what they need, and books the
                job, so they don&apos;t call your competitor.
              </p>
              <div className="rise mt-9 flex flex-col gap-4 sm:flex-row sm:items-center" style={delay(400)}>
                <a
                  href="#start"
                  className="rounded-lg bg-safety px-7 py-5 text-center text-lg font-bold text-asphalt shadow-[0_6px_0_var(--color-safety-dark)] transition hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_var(--color-safety-dark)]"
                >
                  Start your free 14-day trial
                </a>
                <a href="#demo" className="px-2 py-3 text-center font-semibold text-white/85 underline-offset-4 hover:underline">
                  Watch the 60-second demo ↓
                </a>
              </div>
              <p className="rise mt-6 max-w-lg text-sm leading-relaxed text-white/50" style={delay(550)}>
                Built for HVAC, plumbing, roofing, electrical &amp; landscaping pros in North Jersey · No contract · Setup in 24
                hours
              </p>
            </div>
            <div className="rise" style={delay(300)}>
              <PhoneDemo />
            </div>
          </div>
        </section>
        <div className="hazard h-3" />

        {/* 2. DEMO */}
        <section id="demo" className="grain scroll-mt-16 py-20 sm:py-28">
          <div className="reveal mx-auto max-w-4xl px-4 text-center sm:px-6">
            <Eyebrow n="02">See it work</Eyebrow>
            <H2>60 seconds. One missed call. One booked job.</H2>
            <div className="mt-10 overflow-hidden rounded-2xl border-4 border-asphalt bg-asphalt shadow-[12px_12px_0_var(--color-safety)]">
              {site.demoVideoSrc ? (
                <video src={site.demoVideoSrc} controls playsInline preload="metadata" className="aspect-video w-full" />
              ) : (
                <div className="blueprint grid aspect-video place-items-center p-6 text-paper">
                  <div>
                    <div className="mx-auto grid size-20 place-items-center rounded-full bg-safety text-3xl text-asphalt">▶</div>
                    <p className="mt-5 font-display text-2xl font-bold uppercase">Demo video coming soon</p>
                    <p className="mt-1 text-sm text-white/60">Until then, watch the live sample conversation at the top of this page.</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* 3. PROBLEM */}
        <section className="bg-paper-2 py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:items-center">
            <div className="reveal">
              <Eyebrow n="03">Sound familiar?</Eyebrow>
              <ol className="space-y-6">
                {[
                  "You're on a roof, under a sink, or driving between jobs.",
                  "The phone rings. You can't answer.",
                  "That customer calls the next contractor on Google and books with them.",
                ].map((t, i) => (
                  <li key={t} className="flex gap-5 border-b-2 border-dashed border-ink/15 pb-6">
                    <span className="font-display text-5xl leading-none font-black text-safety">{i + 1}</span>
                    <span className="text-xl leading-snug font-medium sm:text-2xl">{t}</span>
                  </li>
                ))}
              </ol>
            </div>
            <blockquote className="reveal relative rounded-2xl bg-asphalt p-8 text-paper sm:p-12">
              <div className="hazard absolute inset-x-0 top-0 h-2 rounded-t-2xl" />
              <p className="font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.95] font-extrabold uppercase">
                Most callers who reach voicemail won&apos;t leave a message.
              </p>
              <p className="mt-4 font-display text-[clamp(2.2rem,5vw,3.6rem)] leading-[0.95] font-extrabold text-safety uppercase">
                They just call someone else.
              </p>
            </blockquote>
          </div>
        </section>

        {/* 4. HOW IT WORKS */}
        <section id="how" className="grain scroll-mt-16 py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal max-w-2xl">
              <Eyebrow n="04">How it works</Eyebrow>
              <H2>Three steps. Zero extra work for you.</H2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {steps.map(({ icon: Icon, title, body }, i) => (
                <div key={title} className="reveal group relative rounded-2xl border-2 border-ink bg-white p-7 shadow-[6px_6px_0_var(--color-ink)] transition hover:-translate-y-1 hover:shadow-[10px_10px_0_var(--color-safety)]">
                  <div className="flex items-center justify-between">
                    <span className="grid size-14 place-items-center rounded-xl bg-safety text-asphalt">
                      <Icon />
                    </span>
                    <span className="font-display text-6xl leading-none font-black text-ink/10">0{i + 1}</span>
                  </div>
                  <h3 className="mt-6 font-display text-3xl leading-none font-extrabold uppercase">{title}</h3>
                  <p className="mt-3 leading-relaxed text-ink/75">{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. CALCULATOR */}
        <section className="blueprint py-20 text-paper sm:py-28">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="reveal mb-12 max-w-2xl">
              <Eyebrow n="05" dark>Do the math</Eyebrow>
              <H2>What are missed calls costing you?</H2>
            </div>
            <div className="reveal">
              <Calculator />
            </div>
          </div>
        </section>

        {/* 6. INCLUDED + 8. GUARANTEE */}
        <section className="grain py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl gap-14 px-4 sm:px-6 lg:grid-cols-[1.3fr_1fr]">
            <div className="reveal">
              <Eyebrow n="06">What&apos;s included</Eyebrow>
              <H2>Your 24/7 front desk.</H2>
              <ul className="mt-10 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex gap-3 text-lg leading-snug">
                    <span className="mt-0.5 grid size-7 shrink-0 place-items-center rounded-md bg-signal text-white">
                      <Check width={16} height={16} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="reveal self-center">
              <div className="relative rotate-[-1.5deg] rounded-2xl border-4 border-dashed border-safety bg-white p-8 text-center shadow-xl sm:p-10">
                <Shield className="mx-auto text-safety" width={52} height={52} />
                <div className="stamp mt-4 text-safety-dark">The 5-lead guarantee</div>
                <p className="mt-3 font-display text-3xl leading-tight font-extrabold uppercase sm:text-4xl">
                  If it doesn&apos;t catch at least 5 missed leads in your first 30 days, your first month is free.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. PRICING */}
        <section id="pricing" className="scroll-mt-16 bg-paper-2 py-20 sm:py-28">
          <div className="mx-auto max-w-5xl px-4 sm:px-6">
            <div className="reveal text-center">
              <Eyebrow n="07">Pricing</Eyebrow>
              <H2>Simple prices. No surprises.</H2>
            </div>
            <div className="mt-14 grid gap-6 md:grid-cols-2">
              {site.plans.map((plan) => {
                const featured = "featured" in plan && plan.featured;
                return (
                  <div
                    key={plan.name}
                    className={`reveal relative flex flex-col rounded-2xl p-8 sm:p-10 ${
                      featured ? "bg-asphalt text-paper shadow-[10px_10px_0_var(--color-safety)]" : "border-2 border-ink bg-white"
                    }`}
                  >
                    {featured && (
                      <span className="stamp absolute -top-3 right-8 rounded bg-safety px-2 py-1 text-asphalt">Most popular</span>
                    )}
                    <h3 className="font-display text-4xl font-extrabold uppercase">{plan.name}</h3>
                    <p className={featured ? "text-white/65" : "text-ink/65"}>{plan.blurb}</p>
                    <div className="mt-6 flex items-baseline gap-1">
                      <span className="font-display text-7xl font-black">${plan.price}</span>
                      <span className={featured ? "text-white/60" : "text-ink/60"}>/month</span>
                    </div>
                    <ul className="mt-6 flex-1 space-y-3">
                      {plan.features.map((f) => (
                        <li key={f} className="flex gap-3">
                          <Check className="shrink-0 text-safety" /> {f}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#start"
                      className={`mt-8 rounded-lg px-6 py-4 text-center text-lg font-bold transition ${
                        featured ? "bg-safety text-asphalt hover:bg-paper" : "bg-asphalt text-paper hover:bg-safety hover:text-asphalt"
                      }`}
                    >
                      Start free trial
                    </a>
                  </div>
                );
              })}
            </div>
            <p className="stamp mt-10 text-center text-ink/60">14-day free trial · No setup fee this month · Cancel anytime</p>
          </div>
        </section>

        {/* 9. ABOUT + 10. PROOF */}
        <section className="grain py-20 sm:py-28">
          <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-[auto_1fr]">
            <div className="reveal mx-auto">
              <div className="relative size-64 rotate-2 overflow-hidden rounded-2xl border-4 border-asphalt bg-asphalt shadow-[10px_10px_0_var(--color-safety)] sm:size-72">
                {site.founderPhoto ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img src={site.founderPhoto} alt="Moe, founder" className="size-full object-cover" />
                ) : (
                  <div className="blueprint grid size-full place-items-center font-display text-9xl font-black text-safety">M</div>
                )}
              </div>
            </div>
            <div className="reveal">
              <Eyebrow n="09">Who you&apos;re working with</Eyebrow>
              <p className="font-display text-[clamp(2rem,4.5vw,3.2rem)] leading-[1] font-extrabold uppercase">
                &ldquo;You&apos;ll work directly with me.&rdquo;
              </p>
              <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink/80">
                I&apos;m Moe, an AI engineer based in Closter, NJ. I build AI systems professionally, including HIPAA-compliant
                systems for healthcare. I started this because good local contractors lose work just because they can&apos;t
                answer the phone mid-job.
              </p>
              <a href={site.founderSite} target="_blank" rel="noopener" className="mt-4 inline-block font-semibold text-safety-dark underline underline-offset-4">
                More about my engineering work →
              </a>

              <div className="mt-10 flex flex-col gap-4 rounded-xl border-2 border-ink bg-white p-6 sm:flex-row sm:items-center">
                <span className="stamp shrink-0 rounded bg-signal px-2 py-1 text-white">Founding members</span>
                <p className="text-lg font-medium">
                  Now onboarding our first 10 North Jersey contractors at founding-member pricing.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 11. FAQ */}
        <section id="faq" className="scroll-mt-16 bg-paper-2 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl px-4 sm:px-6">
            <div className="reveal">
              <Eyebrow n="11">FAQ</Eyebrow>
              <H2>Straight answers.</H2>
            </div>
            <div className="mt-10 divide-y-2 divide-ink/10 border-y-2 border-ink/10">
              {faqs.map(({ q, a }) => (
                <details key={q} className="group py-2">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-4 text-xl font-semibold">
                    {q}
                    <span className="faq-plus grid size-9 shrink-0 place-items-center rounded-md bg-asphalt text-2xl text-paper transition-transform">+</span>
                  </summary>
                  <p className="pb-5 text-lg leading-relaxed text-ink/75">{a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* 12. FINAL CTA */}
        <section id="start" className="blueprint relative scroll-mt-16 overflow-hidden py-20 text-paper sm:py-28">
          <div className="pointer-events-none absolute -bottom-40 -left-40 size-[520px] rounded-full bg-safety/20 blur-[140px]" />
          <div className="relative mx-auto grid max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1.1fr] lg:items-center">
            <div className="reveal">
              <Eyebrow n="12" dark>Get started</Eyebrow>
              <H2>Every missed call is a job going to your competitor.</H2>
              <p className="mt-6 text-xl text-white/75">Start your free trial today. We&apos;ll text you within a minute.</p>
              <a
                href={site.bookingUrl}
                target="_blank"
                rel="noopener"
                className="mt-8 inline-flex items-center gap-3 rounded-lg border-2 border-white/25 px-6 py-4 font-semibold transition hover:border-safety hover:text-safety"
              >
                <Calendar width={22} height={22} /> Prefer to talk first? Book a 15-min call
              </a>
            </div>
            <div className="reveal rounded-2xl bg-paper p-6 text-ink sm:p-9">
              <LeadForm />
            </div>
          </div>
        </section>
      </main>

      {/* 13. FOOTER */}
      <footer className="bg-asphalt pt-14 pb-28 text-white/60 sm:pb-14">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 sm:px-6 md:grid-cols-3">
          <div>
            <div className="font-display text-3xl font-black text-paper uppercase">{site.brand}</div>
            <p className="mt-2 text-sm">AI missed-call text-back for home service pros.</p>
          </div>
          <div className="space-y-1 text-sm">
            <a href={site.phoneHref} className="block text-paper hover:text-safety">{site.phone}</a>
            <a href={`mailto:${site.email}`} className="block hover:text-safety">{site.email}</a>
            <p>Serving {site.serviceArea}</p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm md:justify-end">
            <a href="/privacy" className="hover:text-paper">Privacy Policy</a>
            <a href="/terms" className="hover:text-paper">Terms</a>
            <a href="/sms-terms" className="hover:text-paper">SMS Terms</a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl px-4 text-xs text-white/35 sm:px-6">© 2026 {site.brand}. All rights reserved.</p>
      </footer>

      {/* Mobile sticky action bar: tap-to-call + trial */}
      <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 gap-2 border-t border-white/10 bg-asphalt/95 p-3 backdrop-blur sm:hidden">
        <a href={site.phoneHref} className="rounded-lg border-2 border-white/20 py-3.5 text-center font-bold text-paper">
          📞 Call
        </a>
        <a href="#start" className="rounded-lg bg-safety py-3.5 text-center font-bold text-asphalt">
          Free trial
        </a>
      </div>
    </>
  );
}
