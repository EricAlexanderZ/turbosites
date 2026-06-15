import Link from "next/link";
import { RevenueCalculator } from "@/components/revenue-calculator";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { ContactForm } from "@/components/contact-form";
import { CompareSection } from "@/components/compare-section";

const SERVICES = [
  {
    title: "Landing Pages",
    description: "High-converting single pages built to turn clicks into customers, fast.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
  },
  {
    title: "Business Websites",
    description: "Full multi-page sites that build trust, showcase your work, and drive calls.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    ),
  },
  {
    title: "E-Commerce Stores",
    description: "Sell online with a store that looks great and is easy to manage.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1" />
        <circle cx="20" cy="21" r="1" />
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
      </svg>
    ),
  },
  {
    title: "SEO & Performance",
    description: "Built fast from day one, Core Web Vitals, mobile-first, and Google-ready.",
    icon: (
      <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="11" cy="11" r="8" />
        <path d="M21 21l-4.35-4.35" />
      </svg>
    ),
  },
];

const STEPS = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description: "A quick call or form, we learn what you do, who you serve, and what success looks like.",
  },
  {
    number: "02",
    title: "We Design & Build",
    description: "You get a custom design (no templates), reviewed and refined until it's exactly right.",
  },
  {
    number: "03",
    title: "Launch & Grow",
    description: "We go live and hand you the keys. Your business is now findable, credible, and converting.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-white px-6 py-16 sm:py-24 lg:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-black leading-tight tracking-tight text-[#000d2b] sm:text-5xl lg:text-6xl mb-5 sm:mb-6">
            Your Business Deserves
            <br />
            <span className="text-[#0151fc]">To Be Found Online</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base sm:text-xl text-gray-500 mb-8 sm:mb-10">
            We build fast, modern websites that turn visitors into paying customers. Custom design, built from scratch, not a template in sight.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
            <Link
              href="#contact"
              className="w-full rounded-full bg-[#0151fc] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0040cc] sm:w-auto"
            >
              Get a Free Quote
            </Link>
            <a
              href="#calculator"
              className="flex w-full items-center justify-center gap-2 rounded-full border border-gray-200 px-8 py-4 text-base font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50 sm:w-auto"
            >
              See What You&apos;re Losing
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 5v14M5 12l7 7 7-7" />
              </svg>
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-10 sm:mt-16 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-8 text-sm text-gray-400">
            {["Mobile-First Design", "Launched in 2 Weeks", "Built for SEO", "Lifetime Support"].map((badge) => (
              <span key={badge} className="flex items-center gap-2">
                <svg className="h-4 w-4 shrink-0 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Revenue Loss Calculator */}
      <RevenueCalculator />

      {/* Services */}
      <section id="services" className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-5xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl font-black text-[#000d2b] mb-4">What We Build</h2>
            <p className="text-gray-500 text-base sm:text-lg max-w-xl mx-auto">
              Every project is custom, designed for your specific business, customers, and goals.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {SERVICES.map(({ title, description, icon }) => (
              <div key={title} className="rounded-2xl border border-gray-200 bg-white p-6 transition hover:shadow-md">
                <div className="mb-4 inline-flex rounded-xl bg-[#eff4ff] p-3 text-[#0151fc]">{icon}</div>
                <h3 className="font-bold text-[#000d2b] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="text-center mb-10 sm:mb-14">
            <h2 className="text-3xl font-black text-[#000d2b] mb-4">How It Works</h2>
            <p className="text-gray-500 text-base sm:text-lg">Simple, fast, and painless, even if you&apos;ve never had a website before.</p>
          </div>
          <div className="grid gap-10 sm:grid-cols-3">
            {STEPS.map(({ number, title, description }) => (
              <div key={number} className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0151fc] text-sm font-black text-white">
                  {number}
                </div>
                <h3 className="font-bold text-[#000d2b] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Cost — compare section */}
      <CompareSection />

      {/* Contact */}
      <section id="contact" className="bg-[#000d2b] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

            {/* Left: copy */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#0d1f50] bg-[#050d28] px-4 py-2 text-sm font-medium text-[#0151fc] mb-6">
                <span className="h-1.5 w-1.5 rounded-full bg-[#0151fc]" />
                Free Consultation
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
                Ready to Stop<br />
                <span className="text-[#0151fc]">Losing Customers?</span>
              </h2>
              <p className="text-[#a5bffe] text-base sm:text-lg leading-relaxed mb-8">
                Tell us about your business and what you need. We&apos;ll get back to you with a free, no-pressure quote, usually within a few hours.
              </p>
              <ul className="space-y-4">
                {[
                  "Custom design, no templates",
                  "Launched in 2 weeks or less",
                  "Mobile-first and SEO-ready",
                  "Lifetime support included",
                ].map((item) => (
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
            </div>

            {/* Right: form */}
            <div>
              <ContactForm />
            </div>

          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
