"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowRight, IconBuildingBank } from "@tabler/icons-react";
import * as TablerIcons from "@tabler/icons-react";
import type { IconProps } from "@tabler/icons-react";
import { useSchemes } from "@/src/hooks/useSchemes";

export default function SchemesPage() {
  const { schemes, loading } = useSchemes();

  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-20 md:pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="text-center">
              <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
                <span className="size-2 rounded-full bg-[#DDB162]" />
                Our Schemes
              </span>
              <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl">
                Funding Schemes For
                <br />
                <span className="text-[#DDB162]">Every Stage Of Growth</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568] max-w-2xl mx-auto">
                Explore government-backed and institutional funding schemes designed
                to support MSMEs and enterprises at every stage of their journey.
              </p>
              <div className="mt-10 flex items-center justify-center gap-0">
                <div className="h-px w-40 bg-[#DDB162]/30" />
                <span className="mx-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
                <div className="h-px w-40 bg-[#DDB162]/30" />
              </div>
              <h2 className="mt-24 text-3xl font-semibold text-[#084E75] md:text-4xl leading-tight">
                Explore Our Schemes
              </h2>
            </div>
          </motion.div>

          {loading ? (
            <div className="flex min-h-[30vh] items-center justify-center text-[#084E75]">
              Loading schemes…
            </div>
          ) : schemes.length === 0 ? (
            <div className="flex min-h-[30vh] items-center justify-center text-center text-[#084E75]">
              No schemes available right now. Please check back soon.
            </div>
          ) : (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {schemes.map((scheme, i) => {
                const firstIcon = scheme.section_1_points?.find((p) => p.icon.trim())?.icon;
                const Icon =
                  (firstIcon &&
                    (TablerIcons[firstIcon as keyof typeof TablerIcons] as React.ComponentType<IconProps>)) ||
                  IconBuildingBank;

                return (
                  <motion.div
                    key={scheme.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                    className="group relative flex flex-col bg-linear-to-br from-[#084E75]/8 via-white to-[#DDB162]/12 p-4 rounded-2xl border border-[#084E75]/12 transition-all duration-300 hover:shadow-xl hover:from-[#084E75]/15 hover:via-white hover:to-[#DDB162]/20 hover:border-[#DDB162]/40"
                  >
                    <div className="mb-4 flex items-start justify-between">
                      <div className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-[#084E75] to-[#0a6494]">
                        <Icon className="size-4 text-white" stroke={1.5} />
                      </div>
                      <span className="font-mono text-5xl font-black text-[#084E75]/10 leading-none select-none">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-1.5 text-base font-semibold leading-snug text-[#084E75]">
                      {scheme.dropdown_label ?? scheme.section_1_header ?? "Scheme"}
                    </h3>

                    <p className="flex-1 text-xs leading-relaxed text-[#4a5568]">
                      {scheme.section_1_subheader ?? "Learn more about eligibility and benefits."}
                    </p>

                    <div className="mt-4">
                      <Link
                        href={`/scheme/${scheme.id}`}
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#084E75]/70 transition-colors duration-300 group-hover:text-[#084E75]"
                      >
                        View Scheme
                        <IconArrowRight className="size-3.5 text-[#DDB162] transition-transform duration-300 group-hover:translate-x-0.5" />
                      </Link>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-4xl bg-cover bg-[80%_center] bg-no-repeat px-8 py-12 md:bg-center md:px-14 md:py-14"
            style={{ backgroundImage: "url('/right_advisor.webp')" }}
          >
            <div className="absolute inset-0 bg-[#084E75]/75" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#084E75]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h4 className="text-3xl font-semibold text-white md:text-4xl">
                  Not sure which scheme fits your needs?
                </h4>
                <p className="mt-3 text-white/70">
                  Speak with our advisory team, we&apos;ll recommend the right scheme for your business goals.
                </p>
              </div>
              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-5 pr-2 py-2 text-white shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-44 text-sm font-semibold"
              >
                Get In Touch
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <IconArrowRight className="size-4" color="#DDB162" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
