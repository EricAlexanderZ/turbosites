"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "@/components/logo";

const NAV_LINKS = [
  { label: "Services",      href: "/#services"   },
  { label: "Work",          href: "/projects"    },
  { label: "Run the Numbers", href: "/#calculator" },
  { label: "The Real Cost", href: "/#real-cost"  },
  { label: "Contact",       href: "/#contact"    },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" aria-label="TurboSites.io home">
          <Logo height={34} />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main navigation">
          {NAV_LINKS.map(({ label, href }) => (
            <Link
              key={href}
              href={href}
              className="text-sm font-medium text-gray-600 transition-colors hover:text-[#0151fc]"
            >
              {label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="/#contact"
            className="rounded-full bg-[#0151fc] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0040cc]"
          >
            Get a Free Quote
          </a>
        </div>

        <button
          className="flex flex-col gap-1.5 p-1 md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-gray-700 transition-all ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open && (
        <div className="border-t border-gray-100 bg-white px-6 pb-6 md:hidden">
          <nav className="flex flex-col gap-4 pt-4" aria-label="Mobile navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className="text-base font-medium text-gray-700 transition-colors hover:text-[#0151fc]"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            ))}
            <a
              href="/#contact"
              className="mt-2 w-full rounded-full bg-[#0151fc] px-5 py-3 text-center text-sm font-semibold text-white"
              onClick={() => setOpen(false)}
            >
              Get a Free Quote
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
