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
      <section className="relative bg-linear-to-b from-[#084E75] via-[#084E75]/50 to-white backdrop-blur-2xl h-150 py-30 flex items-end">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl w-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
              Expert Solutions For
              <br />
              <span className="text-[#084E75]">Every Stage Of Growth</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#084E75]">
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
                className="group relative flex flex-col overflow-hidden rounded-4xl bg-linear-to-br from-[#084E75] from-50% via-[#084E75]/80 via-80% to-[#084E75]/60 to-100% p-6 shadow-[5px_5px] shadow-[#084E75]/40"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#084E75]/0 transition-colors duration-300 group-hover:bg-[#084E75]" />
                <span className="absolute right-5 top-5 font-mono text-sm font-semibold text-[#084E75]/20">
                  {String(service.id).padStart(2, "0")}
                </span>

                <div className="mb-5 flex size-12 items-center justify-center rounded-4xl bg-white text-[#084E75] shadow-md shadow-[#084E75]/20 transition-transform duration-300 group-hover:scale-105">
                  <service.icon className="size-6" stroke={1.5} />
                </div>

                <h3 className="mb-3 pr-8 text-lg font-bold leading-snug text-white">
                  {service.label}
                </h3>
                <p className="mb-6 flex-1 text-sm leading-relaxed text-white">
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

      <section className="py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-4xl bg-[#084E75] px-8 py-12 md:px-14 md:py-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#084E75]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h4 className="text-2xl font-bold text-white md:text-3xl">
                  Not sure which service fits your needs?
                </h4>
                <p className="mt-3 text-white/70">
                  Speak with our advisory team — we&apos;ll recommend the right approach for your business goals.
                </p>
              </div>
              <Link href="/#contact" className="group inline-flex shrink-0 items-center gap-2 rounded-4xl bg-white px-8 py-4 text-base font-semibold text-[#084E75] transition-all shadow-[5px_5px] shadow-white/50"
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
