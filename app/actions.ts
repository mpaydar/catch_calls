"use server";

export type LeadState = { ok: boolean; message: string } | null;

const required = ["name", "business", "phone", "trade", "missedPerWeek"] as const;

export async function submitLead(_prev: LeadState, formData: FormData): Promise<LeadState> {
  const data = Object.fromEntries(
    [...required, "smsConsent"].map((k) => [k, String(formData.get(k) ?? "").trim()]),
  );

  if (required.some((k) => !data[k])) {
    return { ok: false, message: "Please fill in every field." };
  }
  if (data.phone.replace(/\D/g, "").length < 10) {
    return { ok: false, message: "That phone number looks too short." };
  }
  if (data.smsConsent !== "on") {
    return { ok: false, message: "Please agree to receive texts so we can reach you." };
  }

  // n8n workflow: texts the lead within 60s and notifies Moe.
  const webhook = process.env.N8N_WEBHOOK_URL;
  if (!webhook) {
    console.warn("[lead] N8N_WEBHOOK_URL not set; lead not forwarded", data);
    return { ok: true, message: "Got it! We'll text you within a minute." };
  }

  try {
    const res = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, source: "landing", submittedAt: new Date().toISOString() }),
    });
    if (!res.ok) throw new Error(`n8n responded ${res.status}`);
  } catch (err) {
    console.error("[lead] forward failed", err);
    return {
      ok: false,
      message: "Something went wrong on our end. Please call or text us directly.",
    };
  }

  return { ok: true, message: "Got it! We'll text you within a minute." };
}
