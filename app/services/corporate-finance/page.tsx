"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import heroImage from "@/public/site/corpfin_hero_cityscape.webp";
import approachImage from "@/public/site/corpfin_finance_desk.webp";
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
    title: "Debt Advisory",
    description:
      "Evaluation and structuring of debt solutions across acquisition finance, growth capital, refinancing and other corporate requirements.",
    icon: IconBuildingBank,
  },
  {
    number: "02",
    title: "Capital Raising",
    description:
      "Advisory on raising capital from appropriate financial and strategic sources based on funding requirements and transaction objectives.",
    icon: IconCoins,
  },
  {
    number: "03",
    title: "Debt Structuring",
    description:
      "Design and optimisation of debt structures considering tenor, pricing, security, repayment capacity and overall capital structure.",
    icon: IconChartHistogram,
  },
  {
    number: "04",
    title: "Working Capital & Structured Finance",
    description:
      "Advisory on liquidity requirements and financing structures supporting operating and expansion needs.",
    icon: IconReportMoney,
  },
  {
    number: "05",
    title: "Refinancing & Restructuring",
    description:
      "Assessment of existing obligations and development of refinancing or restructuring strategies.",
    icon: IconRefresh,
  },
  {
    number: "06",
    title: "Lender Advisory & Engagement",
    description:
      "Financial analysis, transaction preparation and support through lender discussions and financing processes.",
    icon: IconUsersGroup,
  },
];

const outcomes = [
  "Appropriate capital structures",
  "Improved financing flexibility",
  "Optimised debt profiles",
  "Structured lender engagement",
  "Greater clarity on funding alternatives",
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24">
        <Image
          src={heroImage}
          alt="City skyline representing corporate finance and capital strategy"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.58)_0%,rgba(4,81,120,0.46)_42%,rgba(4,81,120,0.18)_70%,rgba(4,81,120,0.08)_100%),linear-gradient(to_top,rgba(4,81,120,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#D9B872]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#045178]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              Corporate Finance
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Capital Strategy for Complex <br/>
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Financial Requirements.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              PCRED advises companies, promoters and investors on capital
              raising, debt structuring and financial strategy across critical
              stages of the corporate lifecycle.
            </p>
            <div className="mt-10 flex items-center">
              <div className="h-px w-40 bg-white/15" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#D9B872]/60" />
              <div className="h-px w-24 bg-white/15" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERSPECTIVE */}
      <section className="relative overflow-hidden bg-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#045178]/5 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#8D8C8F]/10 blur-3xl" />
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8D8C8F]">
                <span className="size-2 rounded-full bg-[#8D8C8F]" />
                Our Perspective
              </span>
              <h2 className="font-serif text-3xl font-bold leading-snug text-[#045178] md:text-4xl">
                Built Around the Business,
                <br />
                <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Not Simply the Capital.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#4a5568] md:text-lg">
                Our work focuses on developing financing structures aligned
                with the client&apos;s:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Capital requirements",
                  "Cash-flow profile",
                  "Leverage capacity",
                  "Strategic objectives",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#045178]/10 bg-[#045178]/5 px-4 py-3"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8D8C8F]/20 text-[#045178]">
                      <IconCheck size={14} stroke={2.5} />
                    </span>
                    <span className="text-sm font-medium text-[#045178]">
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
              <div className="absolute -inset-1 rounded-3xl border border-[#8D8C8F]/25" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl shadow-[#045178]/10">
                <Image
                  src="/who_we_are.webp"
                  alt="Corporate finance advisory"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-[#045178] mix-blend-color" />
                <div className="absolute inset-0 bg-linear-to-t from-[#045178]/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden bg-brand-gradient-br py-20 md:py-28"
      >
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-52 -top-52 size-150 rounded-full border border-[#D9B872]" />
          <div className="absolute -bottom-52 -left-52 size-125 rounded-full border border-[#D9B872]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(141,140,143,0.10),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-3xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              What We Advise On
            </span>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              Financing <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              Structured advisory across debt, capital raising, liquidity and
              lender engagement.
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
                  className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-sm transition-all duration-300 hover:border-[#D9B872]/50 hover:bg-white/10"
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#D9B872]/0 to-[#D9B872]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="inline-flex rounded-2xl bg-[#D9B872] p-3 text-[#045178]">
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
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#FAFAF9] via-white to-[#FBF6EC] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-[#B8892E]/8 blur-[90px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-[#045178]/6 blur-[90px]" />

        <div className="relative mx-auto max-w-3xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8D8C8F]">
              <span className="size-1.5 rounded-full bg-[#8D8C8F]" />
              Our Approach
            </span>

            <h2 className="font-serif mt-4 text-3xl font-bold text-[#045178] md:text-4xl lg:text-5xl leading-tight">
              Structure First.<br/>
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Capital Second.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#045178]/70 md:text-lg">
              Every financing requirement requires a considered assessment
              of{" "}
              <span className="font-semibold text-[#045178]">
                capital structure, repayment capacity, risk and long-term
                financial sustainability.
              </span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#045178]/70 md:text-lg">
              PCRED works with management and stakeholders to evaluate
              alternatives, establish the appropriate structure and support
              the financing process through execution.
            </p>

            <div className="relative mt-10 flex aspect-21/9 w-full items-center justify-center overflow-hidden rounded-3xl">
              <Image
                src={approachImage}
                alt="Financial reports and analysis on a desk"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 90vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.58)_0%,rgba(4,81,120,0.46)_42%,rgba(4,81,120,0.18)_70%,rgba(4,81,120,0.08)_100%),linear-gradient(to_top,rgba(4,81,120,0.28)_0%,transparent_40%)]" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* OUTCOMES */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-14 md:py-20"
        style={{ backgroundImage: "url('/bg_webpattern.webp')" }}
      >
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#D9B872]/8 blur-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_55px_rgba(0,20,35,0.55)]" />
        </div>

        <div className="relative mx-auto max-w-5xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="mb-4 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              Selected Outcomes
            </span>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              What Effective Advisory{" "}
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Delivers.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Clear structures, stronger lender conversations, and financing
              choices that support the business over time.
            </p>
          </motion.div>

          <div className="mt-10 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:items-center sm:justify-center">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.06 }}
                className="group flex flex-col items-center justify-center gap-1 rounded-2xl border border-white/10 bg-white/[0.045] px-4 py-4 text-center backdrop-blur-[2px] transition-all hover:border-[#D9B872]/30 hover:bg-white/[0.075] sm:flex-row sm:gap-2.5 sm:rounded-full sm:px-5 sm:py-2.5 sm:text-left"
              >
                <span className="text-xs font-bold tracking-[0.2em] text-[#D9B872]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-sm font-semibold text-white md:text-base">
                  {outcome}
                </span>
              </motion.div>
            ))}
          </div>
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
            className="relative overflow-hidden rounded-3xl bg-cover bg-[80%_center] bg-no-repeat px-8 py-10 md:bg-center md:px-14"
            style={{ backgroundImage: "url('/right_advisor.webp')" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#022436]/90 to-[#045178]/75" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#045178]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 right-32 size-40 rounded-full bg-[#D9B872]/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
                  <span className="size-2 rounded-full bg-[#D9B872]" />
                  Corporate Finance
                </span>
                <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl md:leading-tight">
                  Have a Financing
                  <br />
                  <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Requirement?</span>
                </h2>
                <p className="mt-3 text-white/70">
                  Speak with our advisors about capital raising, debt
                  structuring, and financing strategy for your next stage of
                  growth.
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-[#045178] hover:bg-[#045178] py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-md shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Discuss a Financing Requirement
                <span className="ml-3 flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <IconArrowRight className="size-4" color="#D9B872" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
