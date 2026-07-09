// ─────────────────────────────────────────────────────────────
// SQUARE CHECKOUT LINKS
// Paste the Square payment (checkout) link for each plan below.
// The link charges the one-time build fee now; the $100/month plan is
// started separately at launch via Square Subscriptions (see SQUARE-SETUP.md).
// Until a link is filled in, that button falls back to the contact form.
// ─────────────────────────────────────────────────────────────
const PAYMENT_LINKS: Record<string, string> = {
  "Turbo Start": "https://square.link/u/9djK7gXO",
  "Turbo Growth": "https://square.link/u/DLwFFYWK",
  "Turbo Pro": "https://square.link/u/oiy5WAKz",
};

type Tier = {
  name: string;
  price: string;
  blurb: string;
  features: string[];
  highlight: boolean;
  badge?: string;
};

const TIERS: Tier[] = [
  {
    name: "Turbo Start",
    price: "$700",
    blurb:
      "The ultimate launchpad for new brands and freelancers. A high-impact landing page built for maximum conversion.",
    features: [
      "High-impact landing page",
      "Full mobile responsiveness",
      "Lightning-fast loading speeds",
      "Clean, professional design",
      "Your 24/7 digital salesperson",
    ],
    highlight: false,
  },
  {
    name: "Turbo Growth",
    price: "$1,000",
    blurb:
      "Designed for businesses ready to scale. A structured site of up to 6 dedicated pages to showcase your services.",
    features: [
      "Up to 6 dedicated pages",
      "Professional SEO optimization",
      "Social media integration",
      "Authority-building layout",
      "Detailed service mapping",
    ],
    highlight: true,
    badge: "Most Popular",
  },
  {
    name: "Turbo Pro",
    price: "$1,500",
    blurb:
      "Our most powerful lead-generation engine. A premium, comprehensive website with a complete digital ecosystem.",
    features: [
      "Up to 12 pages",
      "Professional blogging system",
      "Advanced GA4 analytics",
      "High-end custom animations",
      "Missed Call Text Back Service",
      "Built to dominate your competition",
    ],
    highlight: false,
  },
];

export function PricingSection() {
  return (
    <section id="pricing" className="scroll-mt-20 bg-gray-50 px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center sm:mb-14">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c7d7fd] bg-[#eff4ff] px-4 py-1.5 text-sm font-semibold text-[#0151fc]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0151fc]" />
            Straightforward Pricing
          </div>
          <h2 className="mb-4 text-3xl font-black tracking-tight text-[#000d2b] sm:text-4xl">
            One Price. Live in 24 Hours.
          </h2>
          <p className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg">
            A one-time build fee, then just <strong className="text-[#000d2b]">$100/month</strong> for hosting,
            maintenance, and support. No contracts, no surprises.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3 lg:items-start">
          {TIERS.map((tier) => {
            const checkoutHref = PAYMENT_LINKS[tier.name] || "#contact";
            const isCheckout = Boolean(PAYMENT_LINKS[tier.name]);
            return (
              <div
                key={tier.name}
                className={
                  tier.highlight
                    ? "relative rounded-2xl border-2 border-[#0151fc] bg-white p-7 shadow-[0_0_0_1px_rgba(1,81,252,0.15),0_20px_48px_rgba(1,81,252,0.10)] lg:-mt-2"
                    : "relative rounded-2xl border border-gray-200 bg-white p-7"
                }
              >
                {tier.badge && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#0151fc] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                    {tier.badge}
                  </div>
                )}

                <p className="text-sm font-bold uppercase tracking-widest text-[#0151fc]">{tier.name}</p>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-5xl font-black tracking-tight text-[#000d2b]">{tier.price}</span>
                  <span className="text-lg font-medium text-gray-400">one-time</span>
                </div>
                <p className="mb-6 mt-3 text-sm leading-relaxed text-gray-500">{tier.blurb}</p>

                <ul className="mb-8 space-y-3">
                  {tier.features.map((feature) => {
                    const special = feature === "Missed Call Text Back Service";
                    return (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#eff4ff]">
                          <svg className="h-3 w-3 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        <span className={special ? "font-semibold text-[#0151fc]" : "text-gray-600"}>{feature}</span>
                      </li>
                    );
                  })}
                </ul>

                <a
                  href={checkoutHref}
                  {...(isCheckout ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className={
                    tier.highlight
                      ? "block w-full rounded-full bg-[#0151fc] px-6 py-3.5 text-center text-sm font-semibold text-white transition hover:bg-[#0040cc]"
                      : "block w-full rounded-full border border-gray-200 px-6 py-3.5 text-center text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
                  }
                >
                  Secure My 24h Launch
                </a>
              </div>
            );
          })}
        </div>

        <p className="mt-8 text-center text-sm text-gray-400">
          Every plan is a one-time build fee, then a flat <strong className="text-gray-600">$100/month</strong> for
          maintenance and support. No long-term contracts.
        </p>
      </div>
    </section>
  );
}
