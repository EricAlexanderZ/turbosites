import Link from "next/link";
import { Logo } from "@/components/logo";

export function SiteFooter() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          <Link href="/" aria-label="TurboSites.io home">
            <Logo height={28} />
          </Link>

          <nav className="flex gap-6 text-sm text-gray-500" aria-label="Footer navigation">
            <a href="#services" className="hover:text-[#000d2b] transition-colors">Services</a>
            <a href="#calculator" className="hover:text-[#000d2b] transition-colors">Calculator</a>
            <a href="#contact" className="hover:text-[#000d2b] transition-colors">Contact</a>
          </nav>

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} TurboSites.io. All rights reserved.
          </p>
        </div>

        <p className="mt-8 border-t border-gray-200 pt-6 text-center text-sm text-gray-400">
          Web design proudly serving McAllen, Mission, Edinburg, Pharr, Brownsville
          and small businesses across the Rio Grande Valley.
        </p>
      </div>
    </footer>
  );
}
