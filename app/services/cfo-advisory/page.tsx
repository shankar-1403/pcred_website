"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import {
  IconArrowRight,
  IconBuildingBank,
  IconChartHistogram,
  IconCoins,
  IconRefresh,
  IconReportMoney,
  IconUsersGroup,
  IconCheck,
} from "@tabler/icons-react";

const services = [
  {
    number: "01",
    title: "CFO Advisory",
    description:
      "Senior-level financial oversight and strategic guidance for businesses requiring experienced financial leadership.",
    icon: IconBuildingBank,
  },
  {
    number: "02",
    title: "Financial Planning & Analysis",
    description:
      "Budgeting, forecasting, financial modelling and scenario analysis to support management decisions.",
    icon: IconCoins,
  },
  {
    number: "03",
    title: "Management Reporting",
    description:
      "Development of structured MIS and management reporting frameworks.",
    icon: IconChartHistogram,
  },
  {
    number: "04",
    title: "Cash Flow & Liquidity Management",
    description:
      "Improving visibility over cash generation, liquidity requirements and working capital.",
    icon: IconReportMoney,
  },
  {
    number: "05",
    title: "Financial Strategy",
    description:
      "Capital allocation, financial planning and alignment of finance with corporate strategy.",
    icon: IconRefresh,
  },
  {
    number: "06",
    title: "Performance Advisory",
    description:
      "Analysis of financial and operating performance with a focus on profitability, efficiency and sustainable growth.",
    icon: IconUsersGroup,
  },
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-20 md:pb-24">
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
              CFO Advisory
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl leading-tight">
              Financial Leadership for <br/>
              <span className="text-[#DDB162]">Businesses at Critical Stages of Growth.</span>
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-[#4a5568] md:text-lg">
              Sound financial management is fundamental to sustainable
              enterprise value.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-40 bg-[#DDB162]/30" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#DDB162]/60" />
              <div className="h-px w-40 bg-[#DDB162]/30" />
            </div>
          </motion.div>
        </div>

        {/* PERSPECTIVE */}
        <div className="relative mx-auto mt-16 max-w-7xl px-6 md:mt-20">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
                <span className="size-2 rounded-full bg-[#DDB162]" />
                Our Perspective
              </span>
              <h2 className="text-3xl font-bold leading-snug text-[#084E75] md:text-4xl">
                Should Build Clarity,
                <br />
                <span className="text-[#DDB162]">Not Simply Reports.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#4a5568] md:text-lg">
                PCRED provides CFO and financial advisory services to
                companies requiring strategic financial leadership, stronger
                financial controls and greater visibility into performance
                and cash flows. Our role extends beyond financial reporting
                to support management in financial planning, capital
                allocation and business performance.
              </p>
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {[
                  "Strategic financial leadership",
                  "Financial controls",
                  "Performance visibility",
                  "Cash flow visibility",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#084E75]/10 bg-[#084E75]/5 px-4 py-3"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#DDB162]/20 text-[#084E75]">
                      <IconCheck size={14} stroke={2.5} />
                    </span>
                    <span className="text-sm font-medium text-[#084E75]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute -inset-1 rounded-3xl border border-[#DDB162]/25" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl shadow-[#084E75]/10">
                <Image
                  src="/who_we_are.webp"
                  alt="CFO advisory"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden bg-[#084E75] py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-52 -top-52 size-150 rounded-full border border-[#DDB162]" />
          <div className="absolute -bottom-52 -left-52 size-125 rounded-full border border-[#DDB162]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(221,177,98,0.08),transparent_70%)]" />

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
              What We Advise On
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Financial Leadership <span className="text-[#DDB162]">Solutions</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              Structured advisory across financial planning, reporting, cash
              flow and performance management.
            </p>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.number}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#DDB162]/50 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#DDB162]/0 to-[#DDB162]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex rounded-2xl bg-[#DDB162] p-3 text-[#084E75]">
                        <Icon size={24} stroke={1.8} />
                      </div>
                      <span className="text-xs font-bold tracking-[0.2em] text-white/35">
                        {service.number}
                      </span>
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {service.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-white/70">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* APPROACH */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#DDB162]/12 via-[#EEF6FB] to-[#084E75]/25 py-12 md:py-16">
        <div className="pointer-events-none absolute -right-24 -top-24 size-96 rounded-full bg-[#DDB162]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 size-80 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45 }}
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
                <span className="size-1.5 rounded-full bg-[#DDB162]" />
                Our Approach
              </span>

              <h2 className="mt-4 text-3xl font-bold text-[#084E75] md:text-4xl leading-tight">
                Clarity First.<br/>
                <span className="text-[#DDB162]">Decisions Second.</span>
              </h2>

              <p className="mt-5 text-base leading-relaxed text-[#084E75]/70">
                We focus on creating a financial function that provides
                management with a clear view of{" "}
                <span className="font-semibold text-[#084E75]">
                  where the business stands, where it is heading, what is
                  driving performance and what financial decisions need to be
                  made.
                </span>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl"
            >
              <div className="absolute -inset-1 rounded-3xl border border-[#DDB162]/25" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl shadow-[#084E75]/10">
                <Image
                  src="/right_financial_partner.webp"
                  alt="Financial advisory approach"
                  fill
                  className="object-cover"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-12 md:py-16"
        style={{ backgroundImage: "url('/bg_webpattern.webp')" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDB162]/8 blur-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_55px_rgba(0,20,35,0.55)]" />
        </div>

        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Our Role
            </span>
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              What Effective Advisory{" "}
              <span className="text-[#DDB162]">Delivers.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed text-white/70 md:text-lg">
              PCRED can operate alongside existing management teams or
              provide an external CFO function, depending on the
              organisation&apos;s requirements.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-[#084E75] px-8 py-10 md:px-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#0a5d8a]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 right-32 size-40 rounded-full bg-[#DDB162]/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
                  <span className="size-2 rounded-full bg-[#DDB162]" />
                  CFO Advisory
                </span>
                <h2 className="text-3xl font-semibold text-white md:text-4xl md:leading-tight">
                  Need Financial
                  <br />
                  <span className="text-[#DDB162]">Leadership?</span>
                </h2>
                <p className="mt-3 text-white/70">
                  Speak with our advisors about CFO support, financial
                  planning and performance management for your business.
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-linear-to-r from-[#DDB162] to-[#c99a3f] py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Discuss Your Financial Advisory Requirements
                <span className="ml-3 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
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
