"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { IconArrowUpRight } from "@tabler/icons-react";

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
    tagline: "Credit solutions, made simple.",
    points: [
      "Credit and lending solutions tailored to individual and business needs",
      "Structured support across loan discovery, eligibility and documentation",
      "End-to-end assistance through disbursal and post-loan servicing",
    ],
    href: "https://credarc.in",
    logo: "/credarc-logo.webp",
  },
  {
    number: "03",
    name: "EC Bharat",
    tagline: "Enterprise solutions, at scale.",
    points: [
      "Enterprise and business consulting solutions across sectors",
      "Structured support for organisations navigating growth and compliance",
      "Dedicated advisory across the enterprise lifecycle",
    ],
    href: "https://ec-bharat.com",
    logo: "/ecb-logo.webp",
    logoSize: "h-11 w-28 sm:h-12 sm:w-32",
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#DDB162]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-3xl text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              PCRED Group
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl leading-tight">
              A group built around <br />
              <span className="text-[#DDB162]">financial trust.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] md:text-lg">
              The PCRED Group brings together specialised companies working
              across financial advisory, insurance and credit, each focused
              on a distinct part of the financial journey.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-40 bg-[#DDB162]/30" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#DDB162]/60" />
              <div className="h-px w-40 bg-[#DDB162]/30" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMPANIES */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-3xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Our Companies
            </span>
            <h2 className="text-3xl font-bold text-[#084E75] md:text-4xl">
              Part of the <span className="text-[#DDB162]">PCRED family.</span>
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
                className="group relative overflow-hidden rounded-3xl bg-linear-to-br from-[#DDB162]/15 via-white to-[#084E75]/10 p-8 shadow-[0_2px_8px_-2px_rgba(8,78,117,0.08),0_20px_50px_-20px_rgba(8,78,117,0.18)] ring-1 ring-[#084E75]/8 transition-shadow duration-300 hover:shadow-[0_2px_8px_-2px_rgba(8,78,117,0.08),0_30px_70px_-20px_rgba(8,78,117,0.3)] md:p-10"
              >
                {/* Top accent bar */}
                <div className="absolute inset-x-0 top-0 h-1.5 bg-linear-to-r from-[#084E75] via-[#DDB162] to-[#084E75] bg-[length:200%_100%] transition-[background-position] duration-500 group-hover:bg-[position:100%_0]" />

                {/* Company logo */}
                {company.logo && (
                  <div
                    className={`pointer-events-none absolute right-6 top-6 opacity-90 ${
                      company.logoSize ?? "h-14 w-32 sm:h-16 sm:w-36"
                    }`}
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

                <div className="relative">
                  <h3 className="text-2xl font-semibold text-[#084E75] md:text-3xl">
                    {company.name}
                  </h3>

                  <ul className="mt-6 space-y-3">
                    {company.points.map((point) => (
                      <li
                        key={point}
                        className="flex items-start gap-3 text-sm leading-relaxed text-[#084E75]/70"
                      >
                        <span className="mt-2 size-1.5 shrink-0 rounded-full bg-[#DDB162]" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <Link
                    href={company.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-flex items-center gap-1.5 text-sm font-semibold text-[#084E75] underline decoration-[#DDB162]/40 decoration-2 underline-offset-4 transition-all hover:decoration-[#DDB162] hover:text-[#c99a3f]"
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
