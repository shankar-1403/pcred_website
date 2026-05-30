"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  IconArrowRight,
  IconBriefcase,
  IconChartLine,
  IconRocket,
  IconShield,
  IconTrendingUp,
  IconWallet,
  IconBuildingBank,
  IconReportAnalytics,
  IconLeaf,
  IconBuilding,
  IconCoins,
  IconCreditCard,
  IconUsers,
  IconCalculator,
  type TablerIcon,
} from "@tabler/icons-react";

type Service = {
  id: number;
  label: string;
  description: string;
  icon: TablerIcon;
};

const services: Service[] = [
  {
    id: 1,
    label: "Capital Market Advisory",
    icon: IconChartLine,
    description:
      "Helping businesses access the right capital opportunities and navigate financial markets with confidence.",
  },
  {
    id: 2,
    label: "Fiscal Optimization",
    icon: IconCalculator,
    description:
      "Creating efficient financial structures that support profitability, compliance, and long-term business growth.",
  },
  {
    id: 3,
    label: "Investment Strategy Consulting",
    icon: IconTrendingUp,
    description:
      "Designing investment strategies that align financial resources with business objectives and future aspirations.",
  },
  {
    id: 4,
    label: "Credit Rating Optimization",
    icon: IconShield,
    description:
      "Strengthening your credit profile to improve financing opportunities and build greater lender confidence.",
  },
  {
    id: 5,
    label: "Virtual CFO Services",
    icon: IconBriefcase,
    description:
      "Providing strategic financial leadership, insights, and oversight to support informed business decisions.",
  },
  {
    id: 6,
    label: "Risk Management Advisory",
    icon: IconShield,
    description:
      "Identifying potential risks and developing practical strategies to protect business stability and performance.",
  },
  {
    id: 7,
    label: "Treasury Management Services",
    icon: IconWallet,
    description:
      "Enhancing cash flow visibility and liquidity management to support efficient financial operations.",
  },
  {
    id: 8,
    label: "Succession Planning Advisory",
    icon: IconUsers,
    description:
      "Preparing businesses for seamless leadership transitions while preserving long-term continuity and value.",
  },
  {
    id: 9,
    label: "Corporate Governance Advisory",
    icon: IconBuilding,
    description:
      "Establishing strong governance practices that promote accountability, transparency, and sustainable growth.",
  },
  {
    id: 10,
    label: "ESG & Sustainability Advisory",
    icon: IconLeaf,
    description:
      "Helping businesses integrate responsible practices that create lasting value for stakeholders and society.",
  },
  {
    id: 11,
    label: "Business Valuation Services",
    icon: IconReportAnalytics,
    description:
      "Delivering reliable valuation insights to support fundraising, transactions, and strategic business decisions.",
  },
  {
    id: 12,
    label: "Private Fund Advisory",
    icon: IconCoins,
    description:
      "Connecting businesses with suitable capital sources to support expansion and growth initiatives.",
  },
  {
    id: 13,
    label: "Government Scheme Advisory",
    icon: IconBuildingBank,
    description:
      "Guiding businesses in identifying and leveraging government programs, incentives, and support opportunities.",
  },
  {
    id: 14,
    label: "Debt Advisory",
    icon: IconCreditCard,
    description:
      "Structuring debt solutions that strengthen financial stability and support future business objectives.",
  },
  {
    id: 15,
    label: "IPO Advisory",
    icon: IconRocket,
    description:
      "Supporting businesses through every stage of their journey towards capital market readiness.",
  },
  {
    id: 16,
    label: "Wealth Management & Family Office Services",
    icon: IconBriefcase,
    description:
      "Offering personalized wealth strategies focused on preservation, growth, and legacy planning.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#084E75] py-28">
        <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
        <div className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-[#0a5d8a]/40 blur-3xl" />
        <div className="pointer-events-none absolute -left-32 bottom-0 size-80 rounded-full bg-white/5 blur-3xl" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-4 inline-block rounded-full border border-white/15 bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
              Our Services
            </span>
            <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
              Expert Solutions For
              <br />
              <span className="text-white/70">Every Stage Of Growth</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-white/70">
              Comprehensive financial advisory designed to strengthen performance,
              support expansion, and build long-term stability for MSMEs and enterprises.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-white py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div>
              <span className="mb-3 inline-block rounded-full bg-[#084E75]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#084E75]">
                Advisory Services
              </span>
              <h2 className="text-3xl font-bold text-[#084E75] md:text-4xl">
                How We Help Your Business Grow
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-[#084E75]/10 bg-[#084E75]/5 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#084E75]/25 hover:shadow-lg hover:shadow-[#084E75]/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#084E75]/0 transition-colors duration-300 group-hover:bg-[#084E75]" />
                <span className="absolute right-5 top-5 font-mono text-sm font-semibold text-[#084E75]/20">
                  {String(service.id).padStart(2, "0")}
                </span>

                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#084E75] text-white shadow-md shadow-[#084E75]/20 transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="size-6" stroke={1.5} />
                </div>

                <h3 className="mb-3 pr-8 text-lg font-bold leading-snug text-[#084E75]">
                  {service.label}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-[#8E8E90]">
                  {service.description}
                </p>

                <Link
                  href="/#contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#084E75]/60 transition-colors group-hover:text-[#084E75]"
                >
                  Enquire now
                  <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#084E75]/5 py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-2xl bg-[#084E75] px-8 py-12 md:px-14 md:py-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#0a5d8a]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h2 className="text-2xl font-bold text-white md:text-3xl">
                  Not sure which service fits your needs?
                </h2>
                <p className="mt-3 text-white/70">
                  Speak with our advisory team — we&apos;ll recommend the right approach for your business goals.
                </p>
              </div>
              <Link
                href="/#contact"
                className="group inline-flex shrink-0 items-center gap-2 rounded-xl bg-white px-8 py-4 text-base font-semibold text-[#084E75] shadow-lg transition-all hover:bg-white/90"
              >
                Get In Touch
                <IconArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
