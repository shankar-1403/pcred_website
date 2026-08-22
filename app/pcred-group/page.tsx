"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";
import heroImage from "@/public/site/pcredgroup_hero_library.webp";

const companies = [
  {
    number: "01",
    name: "Insurath",
    tagline: "Insurance advisory, reimagined.",
    points: [
      "Insurance advisory and risk-cover solutions for individuals and businesses",
      "Guided comparison and selection across leading insurance providers",
      "Ongoing policy support, claims assistance and renewal management",
    ],
    href: "https://insurath.com",
    logo: "/insurath-logo.webp",
  },
  {
    number: "02",
    name: "CredArc",
    tagline: "AI-driven ESG intelligence for businesses and institutions",
    points: [
      "AI-driven ESG intelligence for businesses and institutions",
      "Automated ESG data capture, reporting and compliance across BRSR, GRI & CSRD",
      "Actionable insights that connect sustainability, risk, capital and business growth",
    ],
    href: "https://credarc.in",
    logo: "/credarc-logo.webp",
  },
  {
    number: "03",
    name: "ECB",
    tagline: "Empowering MSMEs with practical business guidance and growth solutions",
    points: [
      "Empowering MSMEs with practical business guidance and growth solutions",
      "Connecting entrepreneurs with finance, experts, technology and government opportunities",
      "End-to-end handholding for business growth, expansion and strategic decision-making",
    ],
    href: "https://ec-bharat.com",
    logo: "/ecb-logo.webp",
    logoSize: "h-11 w-28 sm:h-12 sm:w-32",
  },
  {
    number: "04",
    name: "PRIMACRED",
    tagline: "Strategic advisory, finance & risk consulting for businesses that think ahead",
    points: [
      "Integrated financial advisory, risk consulting and underwriting support for growing businesses",
      "Structured risk assessment across financial, operational and insurance dimensions",
      "Practical, implementation-ready advisory grounded in operating reality, not abstraction",
    ],
    href: "https://primacred.in",
    logo: "/primacred-logo.webp",
    logoSize: "h-16 w-36 sm:h-20 sm:w-44",
    logoOffset: "-right-3",
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24 min-h-[560px]">
        <Image
          src={heroImage}
          alt="Executive office library representing the PCRED group of companies"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.58)_0%,rgba(4,81,120,0.46)_42%,rgba(4,81,120,0.18)_70%,rgba(4,81,120,0.08)_100%),linear-gradient(to_top,rgba(4,81,120,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#D9B872]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#045178]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
                <span className="size-2 rounded-full bg-[#D9B872]" />
                PCRED Group
              </span>
              <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
                A Group Built Around <br />
                <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Financial Trust.</span>
              </h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
                The PCRED Group brings together specialised companies working
                across financial advisory, insurance and credit, each focused
                on a distinct part of the financial journey.
              </p>
              <div className="mt-10 flex items-center">
                <div className="h-px w-40 bg-white/15" />
                <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#D9B872]/60" />
                <div className="h-px w-24 bg-white/15" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative hidden h-96 lg:block"
            >
              {companies.map((company, index) => (
                <div
                  key={company.number}
                  className={`absolute flex h-32 w-56 items-center rounded-3xl border border-white/10 bg-white p-6 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.5)] ${
                    company.name === "PRIMACRED" ? "justify-end" : "justify-center"
                  }`}
                  style={{
                    top: `${index * 76}px`,
                    left: `${index * 56}px`,
                    zIndex: 10 - index,
                    transform: `rotate(${(index - 1) * 3}deg)`,
                  }}
                >
                  <div
                    className={`relative h-10 ${
                      company.name === "PRIMACRED" ? "w-4/5" : "w-full"
                    }`}
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className={`object-contain ${
                        company.name === "PRIMACRED" ? "object-right" : "object-center"
                      }`}
                      sizes="200px"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="relative bg-white py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-3xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8D8C8F]">
              <span className="size-2 rounded-full bg-[#8D8C8F]" />
              Our Companies
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#045178] md:text-4xl">
              Part of the <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">PCRED Family.</span>
            </h2>
          </motion.div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company, index) => (
              <motion.div
                key={company.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group relative flex flex-col overflow-hidden rounded-3xl bg-linear-to-br from-[#8D8C8F]/15 via-white to-[#045178]/10 p-8 shadow-[0_2px_8px_-2px_rgba(4,81,120,0.08),0_20px_50px_-20px_rgba(4,81,120,0.18)] ring-1 ring-[#045178]/8 transition-shadow duration-300 hover:shadow-[0_2px_8px_-2px_rgba(4,81,120,0.08),0_30px_70px_-20px_rgba(4,81,120,0.3)] md:p-10"
              >
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#045178] via-[#8D8C8F] to-[#045178] bg-[length:200%_100%] transition-[background-position] duration-500 group-hover:bg-[position:100%_0]" />

                {/* Company logo */}
                {company.logo && (
                  <div
                    className={`pointer-events-none absolute top-6 opacity-90 ${
                      company.logoOffset ?? "right-6"
                    } ${company.logoSize ?? "h-14 w-32 sm:h-16 sm:w-36"}`}
                  >
                    <Image
                      src={company.logo}
                      alt={`${company.name} logo`}
                      fill
                      className="object-contain object-right"
                      sizes="150px"
                    />
                  </div>
                )}

                <div className="relative flex flex-1 flex-col">
                  <h3 className="pr-28 pt-7 text-lg font-semibold text-[#045178] sm:pr-32 md:text-xl">
                    {company.name}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {company.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#045178]/70"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#8D8C8F]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 pt-8 text-sm font-semibold text-[#045178] underline decoration-[#b8892e]/40 decoration-2 underline-offset-4 transition-all hover:decoration-[#b8892e] hover:text-[#045178]"
                  >
                    Visit {company.href.replace("https://", "")}
                    <IconArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
