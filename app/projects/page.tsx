import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export const metadata: Metadata = {
  title: "Our Work | TurboSites.io",
  description: "Real websites built for real businesses. See how TurboSites.io delivers custom web design that converts.",
};

const PROJECTS = [
  {
    name: "AA Designs",
    category: "E-Commerce",
    description:
      "Full e-commerce store for AA Designs, a custom print and sticker company serving 31,000+ customers nationwide. Built to handle a large product catalog across stickers, labels, magnets, yard signs, and banners, with online proofing and fast checkout.",
    url: "https://aadesigns.co/",
    image: "/projects/aa-designs.png",
    tags: ["E-Commerce", "Print", "Stickers"],
  },
  {
    name: "B2Z Builders",
    category: "Service Business Website",
    description:
      "Lead-generating website for a Texas civil construction and site development company. Built to showcase heavy-civil capabilities, from excavation, grading, and utility trenching to concrete and road work, build trust with contractors and developers, and turn visitors into project inquiries with clear calls to action.",
    url: "https://b2z-builders.com/",
    image: "/projects/b2z-builders.png",
    tags: ["Construction", "Site Development", "Lead Gen"],
  },
  {
    name: "B2Z Engineering",
    category: "Corporate Website",
    description:
      "Full corporate site for a Texas-based engineering and construction management firm. Built to establish credibility, showcase certifications, highlight services, and connect clients across multiple locations.",
    url: "https://b2zeng.com/",
    image: "/projects/b2z-engineering.png",
    tags: ["Corporate", "Multi-Page", "Services"],
  },
];

function BrowserFrame({ image, url, name }: { image: string; url: string; name: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-200 shadow-lg">
      {/* Browser chrome */}
      <div className="flex items-center gap-3 border-b border-gray-200 bg-gray-50 px-4 py-3">
        <div className="flex gap-1.5 shrink-0">
          <span className="h-3 w-3 rounded-full bg-red-400" />
          <span className="h-3 w-3 rounded-full bg-yellow-400" />
          <span className="h-3 w-3 rounded-full bg-green-500" />
        </div>
        <div className="min-w-0 flex-1 rounded-md bg-white border border-gray-200 px-3 py-1 text-xs text-gray-400 truncate">
          {url}
        </div>
      </div>
      {/* Screenshot */}
      <div className="relative aspect-[16/10] w-full bg-gray-100">
        <Image
          src={image}
          alt={`${name} website screenshot`}
          fill
          className="object-cover object-top"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />

      {/* Hero */}
      <section className="bg-white px-6 py-16 sm:py-24 border-b border-gray-100">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#c7d7fd] bg-[#eff4ff] px-4 py-2 text-sm font-medium text-[#0151fc] mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-[#0151fc]" />
            Real Clients, Real Results
          </div>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight text-[#000d2b] mb-5">
            Our Work
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Every site we build is custom, fast, and designed to grow the business behind it.
          </p>
        </div>
      </section>

      {/* Projects */}
      <section className="bg-gray-50 px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-6xl space-y-20 sm:space-y-28">
          {PROJECTS.map((project, i) => (
            <div
              key={project.name}
              className={`grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              {/* Browser preview */}
              <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block">
                <div className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:shadow-2xl">
                  <BrowserFrame image={project.image} url={project.url} name={project.name} />
                </div>
              </a>

              {/* Info */}
              <div>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-semibold text-[#0151fc]">
                    {project.category}
                  </span>
                  {project.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-500">
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="text-3xl sm:text-4xl font-black text-[#000d2b] mb-4">
                  {project.name}
                </h2>
                <p className="text-gray-500 text-base sm:text-lg leading-relaxed mb-8">
                  {project.description}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#0151fc] px-6 py-3 text-sm font-bold text-white transition hover:bg-[#0040cc]"
                >
                  View Live Site
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#000d2b] px-6 py-16 sm:py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4">
            Want a Site Like These?
          </h2>
          <p className="text-[#a5bffe] text-base sm:text-lg mb-8">
            Let&apos;s talk about your business and build something you&apos;re proud to share.
          </p>
          <Link
            href="/#contact"
            className="block w-full rounded-full bg-[#0151fc] px-10 py-4 text-base font-bold text-white transition hover:bg-[#0040cc] sm:inline-block sm:w-auto"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>

      <SiteFooter />
    </>
  );
}
