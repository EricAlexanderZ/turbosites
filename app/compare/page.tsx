import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Shopify vs Turbosites.io — Real Cost Comparison",
  description:
    "See exactly how much a serious Shopify store costs vs a custom site from Turbosites.io. Real numbers, side-by-side comparison, and 3-year savings breakdown.",
};

const SHOPIFY_ITEMS = [
  { label: "Shopify Advanced Plan",                cost: "$299" },
  { label: "Email + SMS Marketing (Klaviyo)",      cost: "$150" },
  { label: "Customer Reviews + UGC (Yotpo)",       cost: "$79"  },
  { label: "Live Chat + Help Desk (Gorgias)",      cost: "$60"  },
  { label: "Adobe Creative Cloud (fonts, design)", cost: "$55"  },
  { label: "Loyalty Program (Smile.io)",           cost: "$49"  },
  { label: "SEO Suite Pro",                        cost: "$49"  },
  { label: "Instagram Feed + Social Proof",        cost: "$29"  },
  { label: "Error + Uptime Monitoring",            cost: "$26"  },
  { label: "Premium Theme (amortized)",            cost: "$29"  },
];

const TURBO_ITEMS = [
  { label: "Custom Website Build",           cost: "$2,500 one-time", highlight: true  },
  { label: "Hosting (Vercel)",               cost: "Included",        highlight: false },
  { label: "Monthly Maintenance + Updates",  cost: "$150/mo",         highlight: true  },
  { label: "SEO Setup + Optimization",       cost: "Included",        highlight: false },
  { label: "Custom Design + Branding",       cost: "Included",        highlight: false },
  { label: "Contact + Order Forms",          cost: "Included",        highlight: false },
  { label: "Performance Optimization",       cost: "Included",        highlight: false },
  { label: "Dedicated Expert Support",       cost: "Included",        highlight: false },
  { label: "Plugin Conflicts",               cost: "Zero, none needed", highlight: false },
  { label: "Transaction Fees",               cost: "$0 always",       highlight: false },
];

const CONS = [
  {
    icon: "⏱️",
    title: "Months of Your Life, Gone",
    body: "Between learning the platform, wiring up apps, and configuring shipping and payments, most people spend 60 to 100+ hours before their store is even ready to launch.",
  },
  {
    icon: "🔌",
    title: "Apps Break Each Other Constantly",
    body: "Every app you add is a new risk. One update can silently break another, and without a developer, you're left debugging a broken store during your busiest season.",
  },
  {
    icon: "💸",
    title: "The Bill Never Stops Growing",
    body: "Every feature you need costs another $30 to $150/month on top of your plan. Most business owners don't realize how quickly that adds up until they're locked in.",
  },
  {
    icon: "🎨",
    title: "You Look Like Every Other Shopify Store",
    body: "Shopify themes are used by tens of thousands of businesses. There is no template that makes your brand look unique, because it was designed for everyone.",
  },
  {
    icon: "🔍",
    title: "Google Won't Find You",
    body: "SEO requires technical setup that most non-developers get wrong from day one, incorrect meta tags, missing schema, slow speeds, all of which cost you traffic and revenue.",
  },
  {
    icon: "🐌",
    title: "Your Site Gets Slower with Every App",
    body: "Each plugin loads its own scripts. Bloated Shopify stores routinely fail Google's Core Web Vitals, which tanks your search rankings and kills your conversion rate.",
  },
  {
    icon: "🔒",
    title: "Security and Maintenance Is on You",
    body: "App updates, SSL renewals, vulnerability patches, all your responsibility. Skip one and you're either exposed to attacks or paying a developer $150/hour to fix it.",
  },
  {
    icon: "📞",
    title: "Support Disappears When You Need It Most",
    body: "Shopify support handles their platform, not your custom setup. When something breaks during a launch or a sale, you are completely on your own.",
  },
  {
    icon: "📈",
    title: "The More You Grow, The More You Pay",
    body: "As your email list, traffic, and order volume increases, so do your plan tier, transaction fees, and app costs. Growth should reduce your overhead, not increase it.",
  },
];

const TABLE_ROWS = [
  { feature: "Custom design for your brand",      shopify: "Template, used by thousands",    turbo: "100% built for you"                  },
  { feature: "Time from start to launch",         shopify: "Weeks to months of your time",   turbo: "Live in 1 to 2 weeks"                },
  { feature: "Ongoing monthly cost",              shopify: "$825+/month, every month",       turbo: "$150/month, flat"                    },
  { feature: "Transaction fees per sale",         shopify: "0.5 to 2% of every sale",        turbo: "$0, none ever"                       },
  { feature: "Page speed + Core Web Vitals",      shopify: "Dragged down by plugins",        turbo: "Built fast from day one"             },
  { feature: "SEO setup",                         shopify: "Manual, easy to get wrong",      turbo: "Done for you, correctly"             },
  { feature: "Technical support",                 shopify: "Shopify chat, not your site",    turbo: "Direct access to your developer"     },
  { feature: "Risk of something breaking",        shopify: "Every app update is a gamble",   turbo: "Zero, no third-party plugins"        },
  { feature: "Cost as your business grows",       shopify: "Increases with every milestone", turbo: "Stays at $150/month, always"         },
  { feature: "You own your code and data",        shopify: "Locked in, no way out",          turbo: "Yours forever"                       },
];

const CTA_ITEMS = [
  "Custom design, no templates ever",
  "Live in 2 weeks or less",
  "$150/month flat, no surprises",
  "No long-term contracts",
];

export default function ComparePage() {
  return (
    <>
      <SiteHeader />

      {/* ── Hero ── */}
      <section className="bg-white px-6 py-16 sm:py-24 text-center">
        <div className="mx-auto max-w-3xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#c7d7fd] bg-[#eff4ff] px-4 py-1.5 text-sm font-semibold text-[#0151fc]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0151fc]" />
            Shopify vs. Turbosites.io, Real Numbers
          </div>

          <h1 className="mb-5 text-4xl font-black leading-tight tracking-tight text-[#000d2b] sm:text-5xl lg:text-6xl">
            Shopify is bleeding you dry
            <br />
            <span className="text-[#0151fc]">before you make a single sale.</span>
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-base text-gray-500 sm:text-xl">
            A real Shopify store built to compete costs over $800 a month before you ever open your doors. See what you actually get when an expert builds it right, for a fraction of the cost.
          </p>

          <div className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="/#contact"
              className="w-full rounded-full bg-[#0151fc] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0040cc] sm:w-auto"
            >
              Get My Site Built
            </Link>
            <a
              href="#chart"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              See the 3-Year Savings
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-gray-400 sm:mt-14 sm:gap-8">
            {["Custom design, no templates", "Live in 2 weeks", "Flat $150/mo after build", "No long-term contracts"].map((b) => (
              <span key={b} className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {b}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Monthly cost breakdown ── */}
      <section className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="mb-4 text-3xl font-black text-[#000d2b]">What You're Actually Paying Every Month</h2>
            <p className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg">
              A competitive Shopify store with the plugins it needs to function costs{" "}
              <strong className="text-[#000d2b]">over $800/month</strong>, before you ship a single order.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">

            {/* Shopify card */}
            <div className="rounded-2xl border border-gray-200 bg-white p-7">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">Shopify DIY</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight text-[#000d2b]">$825</span>
                <span className="text-lg text-gray-400 font-medium">/mo</span>
              </div>
              <p className="mb-6 mt-1.5 text-sm text-gray-400">What a serious store actually costs, every single month</p>
              <ul className="divide-y divide-gray-50">
                {SHOPIFY_ITEMS.map(({ label, cost }) => (
                  <li key={label} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-gray-500">{label}</span>
                    <strong className="font-semibold text-gray-900">{cost}</strong>
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 font-bold text-gray-900">
                <span>Monthly total</span>
                <span className="text-xl text-red-600">$825/mo</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-sm text-gray-400">
                <span>That&apos;s every year, forever</span>
                <span className="font-semibold text-red-500">$9,900/yr</span>
              </div>
            </div>

            {/* Turbosites card */}
            <div className="relative rounded-2xl border border-[#0151fc] bg-white p-7 shadow-[0_0_0_1px_rgba(1,81,252,0.15),0_20px_48px_rgba(1,81,252,0.08)]">
              <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full bg-[#0151fc] px-4 py-1 text-xs font-bold uppercase tracking-widest text-white">
                The Smart Choice
              </div>
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-gray-400">Turbosites.io</p>
              <div className="flex items-baseline gap-1">
                <span className="text-5xl font-black tracking-tight text-[#000d2b]">$150</span>
                <span className="text-lg text-gray-400 font-medium">/mo</span>
              </div>
              <p className="mb-6 mt-1.5 text-sm text-gray-400">After your one-time build fee, everything is included</p>
              <ul className="divide-y divide-gray-50">
                {TURBO_ITEMS.map(({ label, cost, highlight }) => (
                  <li key={label} className="flex items-center justify-between py-2.5 text-sm">
                    <span className="text-gray-500">{label}</span>
                    {highlight ? (
                      <strong className="font-semibold text-gray-900">{cost}</strong>
                    ) : (
                      <span className="font-semibold text-[#0151fc]">{cost}</span>
                    )}
                  </li>
                ))}
              </ul>
              <div className="mt-5 flex items-center justify-between border-t border-gray-200 pt-4 font-bold text-gray-900">
                <span>Monthly total (after build)</span>
                <span className="text-xl text-[#0151fc]">$150/mo</span>
              </div>
              <div className="mt-1.5 flex items-center justify-between text-sm text-gray-400">
                <span>Year 1 total including build</span>
                <span className="font-semibold text-emerald-600">$4,300</span>
              </div>
              <p className="mt-4 rounded-xl bg-[#eff4ff] px-4 py-3 text-xs leading-relaxed text-[#0151fc]">
                Build pricing ranges from <strong>$500 to $6,000</strong> depending on the size and complexity of your project.{" "}
                <Link href="/#contact" className="underline underline-offset-2 font-semibold hover:text-[#0040cc]">
                  Get in touch for a free custom quote.
                </Link>
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ── 3-year chart ── */}
      <section id="chart" className="bg-[#000d2b] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="mb-4 text-3xl font-black text-white">3-Year Cost Comparison</h2>
            <p className="mx-auto max-w-xl text-base text-[#a5bffe] sm:text-lg">
              Shopify invoices you the same $825 every single month, forever. The Turbosites.io build is paid once, then just $150/month.
            </p>
          </div>

          <div className="rounded-2xl border border-[#132050] bg-[#060d24] p-6 sm:p-9">
            <h3 className="mb-1.5 text-xl font-bold text-white">See where your money actually goes</h3>
            <p className="mb-9 text-sm text-[#a5bffe]">After year one, the gap only gets wider.</p>

            {[
              { year: "Year 1", shopify: "$9,900", turbo: "$4,300", turboW: "clamp(100px,30%,240px)" },
              { year: "Year 2", shopify: "$9,900", turbo: "$1,800", turboW: "clamp(50px,13%,104px)"  },
              { year: "Year 3", shopify: "$9,900", turbo: "$1,800", turboW: "clamp(50px,13%,104px)"  },
            ].map(({ year, shopify, turbo, turboW }) => (
              <div key={year} className="mb-7 last:mb-0">
                <p className="mb-2.5 text-xs font-bold uppercase tracking-widest text-white/30">{year}</p>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3">
                    <span className="w-[74px] shrink-0 text-right text-xs font-semibold text-white/35">Shopify</span>
                    <div
                      className="flex h-9 items-center rounded-lg bg-gradient-to-r from-red-600 to-red-800 px-3.5 text-sm font-bold text-white"
                      style={{ width: "clamp(180px,70%,560px)" }}
                    >
                      {shopify}
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-[74px] shrink-0 text-right text-xs font-semibold text-white/35">Turbosites</span>
                    <div
                      className="flex h-9 items-center rounded-lg bg-gradient-to-r from-[#0151fc] to-[#0040cc] px-3.5 text-sm font-bold text-white"
                      style={{ width: turboW }}
                    >
                      {turbo}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            <div className="mt-8 flex flex-wrap items-center gap-5 rounded-xl border border-[#0151fc]/25 bg-[#0151fc]/10 p-5 sm:p-6">
              <span className="text-4xl font-black tracking-tight text-emerald-400 sm:text-5xl">$21,800</span>
              <div>
                <p className="mb-1 text-sm text-white">
                  <strong>saved over 3 years</strong> by choosing Turbosites.io over a full Shopify stack
                </p>
                <p className="text-sm text-[#a5bffe]">
                  Shopify 3-year total:{" "}
                  <strong className="text-red-400">$29,700</strong>
                  &nbsp;·&nbsp;
                  Turbosites.io 3-year total:{" "}
                  <strong className="text-emerald-400">$7,900</strong>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIY cons ── */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="mb-4 text-3xl font-black text-[#000d2b]">
              What Nobody Warns You About<br className="hidden sm:block" /> When You Go the DIY Route
            </h2>
            <p className="mx-auto max-w-xl text-base text-gray-500 sm:text-lg">
              Shopify makes setup look easy. The reality is weeks of frustration, a growing monthly bill, and a store that still doesn&apos;t look or perform the way you imagined.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {CONS.map(({ icon, title, body }) => (
              <div key={title} className="flex gap-4 rounded-2xl border border-gray-200 bg-white p-5 transition hover:shadow-md">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-red-100 bg-red-50 text-xl">
                  {icon}
                </div>
                <div>
                  <h4 className="mb-1 font-bold text-[#000d2b]">{title}</h4>
                  <p className="text-sm leading-relaxed text-gray-500">{body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Comparison table ── */}
      <section className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="mb-4 text-3xl font-black text-[#000d2b]">Side-by-Side Comparison</h2>
            <p className="text-base text-gray-500 sm:text-lg">What you get with each option, and what you give up.</p>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-50">
                  <th className="w-2/5 border-b border-gray-200 px-5 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-400">
                    What you need
                  </th>
                  <th className="border-b border-gray-200 px-5 py-4 text-left text-xs font-bold uppercase tracking-widest text-gray-400">
                    Shopify DIY
                  </th>
                  <th className="border-b border-gray-200 px-5 py-4 text-left text-xs font-bold uppercase tracking-widest text-[#0151fc]">
                    Turbosites.io
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS.map(({ feature, shopify, turbo }) => (
                  <tr key={feature} className="border-b border-gray-100 last:border-0 hover:bg-gray-50">
                    <td className="px-5 py-3.5 text-sm font-medium text-gray-600">{feature}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-red-600">❌ {shopify}</td>
                    <td className="px-5 py-3.5 text-sm font-semibold text-[#0151fc]">✅ {turbo}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="bg-[#000d2b] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0d1f50] bg-[#050d28] px-4 py-2 text-sm font-medium text-[#0151fc]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0151fc]" />
            Free Consultation
          </div>

          <h2 className="mb-5 text-3xl font-black leading-tight text-white sm:text-4xl lg:text-5xl">
            Stop Feeding Shopify.<br />
            <span className="text-[#0151fc]">Start Owning Your Online Presence.</span>
          </h2>

          <p className="mb-8 text-base text-[#a5bffe] sm:text-lg">
            One payment. A site built right, on time, the way you envisioned it. Monthly support that costs less than a single Shopify plugin.
          </p>

          <ul className="mx-auto mb-10 flex max-w-xs flex-col gap-3 text-left">
            {CTA_ITEMS.map((item) => (
              <li key={item} className="flex items-center gap-3 text-sm text-gray-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#0151fc]/20">
                  <svg className="h-3.5 w-3.5 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <Link
            href="/#contact"
            className="inline-block rounded-full bg-[#0151fc] px-10 py-4 text-base font-semibold text-white transition hover:bg-[#0040cc]"
          >
            Get a Free Quote →
          </Link>

          <p className="mt-5 text-xs text-white/20">
            Build pricing from $500 to $6,000 depending on the project &nbsp;·&nbsp; $150/month maintenance &nbsp;·&nbsp; Response within a few hours
          </p>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
