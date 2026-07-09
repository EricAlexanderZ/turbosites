import type { Metadata } from "next";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your build is booked. Here is what happens next.",
  robots: { index: false, follow: false },
};

const STEPS = [
  {
    number: "01",
    title: "We Reach Out",
    description:
      "Within a few hours we will contact you to learn about your business and gather what we need to start.",
  },
  {
    number: "02",
    title: "We Build It",
    description:
      "We design and build your custom site from scratch, usually live within 24 hours.",
  },
  {
    number: "03",
    title: "We Launch",
    description:
      "Your site goes live and your $100 monthly plan begins. You are all set.",
  },
];

export default function ThankYouPage() {
  return (
    <>
      <SiteHeader />

      <section className="bg-white px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#eff4ff]">
            <svg className="h-8 w-8 text-[#0151fc]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          </span>

          <h1 className="mb-4 text-3xl font-black leading-tight tracking-tight text-[#000d2b] sm:text-4xl lg:text-5xl">
            Payment Received.<br />
            <span className="text-[#0151fc]">Your Build Is Booked.</span>
          </h1>

          <p className="mx-auto mb-4 max-w-xl text-base text-gray-500 sm:text-lg">
            Thank you for choosing TurboSites.io. Your 24 hour build is officially
            in the queue and we are excited to get started.
          </p>
          <p className="mx-auto max-w-xl text-sm text-gray-400">
            A receipt for your payment is on its way to your email from Square.
          </p>
        </div>
      </section>

      <section className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center sm:mb-14">
            <h2 className="mb-4 text-2xl font-black text-[#000d2b] sm:text-3xl">What Happens Next</h2>
            <p className="text-base text-gray-500 sm:text-lg">Three simple steps, and you are live.</p>
          </div>

          <div className="grid gap-10 sm:grid-cols-3">
            {STEPS.map(({ number, title, description }) => (
              <div key={number} className="text-center">
                <div className="mx-auto mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-[#0151fc] text-sm font-black text-white">
                  {number}
                </div>
                <h3 className="mb-2 font-bold text-[#000d2b]">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-500">{description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Link
              href="/"
              className="w-full rounded-full bg-[#0151fc] px-8 py-4 text-center text-base font-semibold text-white transition hover:bg-[#0040cc] sm:w-auto"
            >
              Back to Home
            </Link>
            <Link
              href="/#contact"
              className="w-full rounded-full border border-gray-200 px-8 py-4 text-center text-base font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-white sm:w-auto"
            >
              Have a Question?
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
