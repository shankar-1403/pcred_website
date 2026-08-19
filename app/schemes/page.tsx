"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IconArrowRight, IconBuildingBank } from "@tabler/icons-react";
import * as TablerIcons from "@tabler/icons-react";
import type { IconProps } from "@tabler/icons-react";
import { useSchemes } from "@/src/hooks/useSchemes";
import Image from "next/image";
import heroImage from "@/public/site/schemes_hero_highway.webp";

export default function SchemesPage() {
  const { schemes, loading } = useSchemes();

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24">
        <Image
          src={heroImage}
          alt="Highway infrastructure symbolizing growth funded by government schemes"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,20,40,0.58)_0%,rgba(7,20,40,0.46)_42%,rgba(7,20,40,0.18)_70%,rgba(7,20,40,0.08)_100%),linear-gradient(to_top,rgba(7,20,40,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#D9B872]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#084E75]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              Our Schemes
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Funding Schemes For
              <br />
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Every Stage Of Growth</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Explore government-backed and institutional funding schemes designed
              to support MSMEs and enterprises at every stage of their journey.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-linear-to-tr from-[#FAFAF9] via-white to-white py-20 md:py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14"
          >
            <div className="flex items-end justify-between gap-6">
              <h2 className="font-serif text-3xl font-semibold text-[#084E75] md:text-4xl leading-tight">
                Explore Our Schemes
              </h2>
              <span className="hidden shrink-0 rounded-full border border-[#084E75]/15 bg-[#084E75]/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-[#084E75]/70 sm:block">
                {String(schemes.length).padStart(2, "0")} Available
              </span>
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
                    className="group relative flex flex-col bg-linear-to-br from-[#084E75]/8 via-white to-[#8D8C8F]/12 p-4 rounded-2xl border border-[#084E75]/12 transition-all duration-300 hover:shadow-xl hover:from-[#084E75]/15 hover:via-white hover:to-[#8D8C8F]/20 hover:border-[#8D8C8F]/40"
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
                        <IconArrowRight className="size-3.5 text-[#8D8C8F] transition-transform duration-300 group-hover:translate-x-0.5" />
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
            <div className="absolute inset-0 bg-[#0F2140]/78" />
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
                className="group flex items-center justify-between rounded-full bg-[#084E75] hover:bg-[#0a5d8a] pl-5 pr-2 py-2 text-white shadow-md shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-lg w-44 text-sm font-semibold"
              >
                Get In Touch
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <IconArrowRight className="size-4" color="#8D8C8F" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
