import Link from "next/link";

const BENEFITS = [
  "Replies in 5 seconds, day or night",
  "Keeps the customer from calling someone else",
  "Works with your current phone number",
];

export function MissedCallSection() {
  return (
    <section id="missed-call" className="bg-[#000d2b] px-6 py-16 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">

          {/* Left: copy */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#0d1f50] bg-[#050d28] px-4 py-2 text-sm font-medium text-[#0151fc] mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0151fc]" />
              Missed Call Text Back Service
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5">
              Never Miss a<br />
              <span className="text-[#0151fc]">Customer Again</span>
            </h2>
            <p className="text-[#a5bffe] text-base sm:text-lg leading-relaxed mb-8">
              When you are busy on a job, missed calls turn into lost jobs. Our
              Missed Call Text Back service sends an instant text to every call
              you miss, so the customer waits for you instead of calling the
              next guy.
            </p>
            <ul className="space-y-4 mb-8">
              {BENEFITS.map((item) => (
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
              href="#contact"
              className="inline-flex rounded-full bg-[#0151fc] px-8 py-4 text-base font-semibold text-white transition hover:bg-[#0040cc]"
            >
              Get a Free Quote
            </Link>
          </div>

          {/* Right: phone / text mockup */}
          <div className="flex justify-center lg:justify-end">
            <div className="w-full max-w-xs rounded-3xl border border-[#0d1f50] bg-[#050d28] p-5 shadow-xl">
              <div className="mb-4 flex items-center gap-2 border-b border-[#0d1f50] pb-3 text-xs text-gray-400">
                <span className="h-2 w-2 rounded-full bg-[#0151fc]" />
                Messages
              </div>
              <div className="space-y-3 text-sm">
                {/* System note */}
                <p className="text-center text-xs text-gray-500">Missed call, (956) 555 0123</p>
                {/* Auto reply from business */}
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#0151fc] px-4 py-2 text-white">
                  Hi! Sorry we missed your call. How can we help?
                </div>
                {/* Customer reply */}
                <div className="mr-auto max-w-[85%] rounded-2xl rounded-bl-sm bg-[#0d1f50] px-4 py-2 text-gray-200">
                  Need a quote for a water heater.
                </div>
                {/* Business reply */}
                <div className="ml-auto max-w-[85%] rounded-2xl rounded-br-sm bg-[#0151fc] px-4 py-2 text-white">
                  Great, we can help with that. What is your address?
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
