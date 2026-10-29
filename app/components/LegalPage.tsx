import Link from "next/link";
import type { ReactNode } from "react";
import { site } from "../site.config";

export function LegalPage({ title, children }: { title: string; children: ReactNode }) {
  return (
    <main className="grain mx-auto min-h-screen max-w-3xl px-4 py-20 sm:px-6">
      <Link href="/" className="stamp text-safety-dark">← {site.brand}</Link>
      <h1 className="mt-6 font-display text-6xl font-black uppercase">{title}</h1>
      <div className="mt-8 space-y-4 text-lg leading-relaxed text-ink/80">{children}</div>
    </main>
  );
}
