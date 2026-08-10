"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {IconArrowRight,IconBriefcase,IconChartLine,IconRocket,IconShield,IconTrendingUp,IconWallet,IconBuildingBank,IconReportAnalytics,IconLeaf,IconBuilding,IconCoins,IconCreditCard,IconUsers,IconCalculator,
  type TablerIcon,
} from "@tabler/icons-react";
import Image from "next/image";
import swastikLogo from "../../public/swastik_logo.png"

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
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-24">
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
                Our Services
              </span>
              <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl">
                Expert Solutions For
                <br />
                <span className="text-[#DDB162]">Every Stage Of Growth</span>
              </h1>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568] max-w-2xl mx-auto">
                Comprehensive financial advisory designed to strengthen performance,
                support expansion, and build long-term stability for MSMEs and enterprises.
              </p>
              <div className="mt-10 flex items-center justify-center gap-0">
                <div className="h-px w-40 bg-[#DDB162]/30" />
                <span className="mx-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
                <div className="h-px w-40 bg-[#DDB162]/30" />
              </div>
              <h2 className="mt-24 text-3xl font-semibold text-[#084E75] md:text-4xl leading-tight">
                How We Help Your Business Grow
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                className="overflow-hidden group relative flex flex-col bg-linear-to-br from-[#084E75]/8 via-white to-[#DDB162]/12 p-4 rounded-2xl border border-[#084E75]/12 transition-all duration-300 hover:shadow-xl hover:from-[#084E75]/15 hover:via-white hover:to-[#DDB162]/20 hover:border-[#DDB162]/40"
              >
                {/* Top row: icon left, number right */}
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex size-9 items-center justify-center rounded-xl bg-linear-to-br from-[#084E75] to-[#0a6494]">
                    <service.icon className="size-4 text-white" stroke={1.5} />
                  </div>
                  <div className="absolute -right-2 -top-3">
                    <Image alt="Swastik Logo" height={90} width={90} src={swastikLogo} className="h-20 opacity-8 rotate-45"/>
                  </div>
                </div>

                <h3 className="mb-1.5 text-base font-semibold leading-snug text-[#084E75]">
                  {service.label}
                </h3>

                <p className="flex-1 text-xs leading-relaxed text-[#4a5568]">
                  {service.description}
                </p>

                <div className="mt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#084E75]/70 transition-colors duration-300 group-hover:text-[#084E75]"
                  >
                    Enquire Now
                    <IconArrowRight className="size-3.5 text-[#DDB162] transition-transform duration-300 group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-7xl px-6">
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
                <h4 className="text-3xl font-semibold text-white md:text-4xl">
                  Not sure which service fits your needs?
                </h4>
                <p className="mt-3 text-white/70">
                  Speak with our advisory team, we&apos;ll recommend the right approach for your business goals.
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
