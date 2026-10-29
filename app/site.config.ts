// Everything a non-developer might need to change lives here.
export const site = {
  brand: "CallCatch",
  domain: "callcatch.co",
  phone: "(201) 555-0100",
  phoneHref: "tel:+12015550100",
  email: "moe@callcatch.co",
  bookingUrl: "https://cal.com/your-handle/15min",
  founderSite: "https://bayatcompute.com",
  // Drop your phone screen-recording in /public and set e.g. "/demo.mp4".
  // While empty, the page shows the animated sample conversation instead.
  demoVideoSrc: "",
  // Put your headshot at /public/moe.jpg and set "/moe.jpg".
  founderPhoto: "",
  serviceArea: "Bergen, Passaic, Hudson & Essex counties",
  trades: ["HVAC", "Plumbing", "Roofing", "Electrical", "Landscaping", "Other"],
  plans: [
    {
      name: "Starter",
      price: 199,
      blurb: "Catch every missed call and know who called.",
      features: [
        "Missed-call text-back, 24/7",
        "AI lead qualification",
        "Instant owner alerts",
      ],
    },
    {
      name: "Pro",
      price: 349,
      featured: true,
      blurb: "Let the AI fill your calendar for you.",
      features: [
        "Everything in Starter",
        "Calendar booking",
        "Google review requests",
        "Monthly results report",
      ],
    },
  ],
} as const;
