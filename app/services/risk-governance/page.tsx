"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import heroImage from "@/public/site/risk_hero_site_walk.webp";
import monitoringImage from "@/public/site/risk_monitoring_dashboard.webp";
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
    title: "Enterprise Risk Management",
    description:
      "Identification, assessment and management of strategic, financial and operational risks.",
    icon: IconBuildingBank,
  },
  {
    number: "02",
    title: "Corporate Governance",
    description:
      "Development and strengthening of governance structures, responsibilities and decision-making frameworks.",
    icon: IconCoins,
  },
  {
    number: "03",
    title: "Internal Controls",
    description:
      "Assessment and enhancement of financial and operational control environments.",
    icon: IconChartHistogram,
  },
  {
    number: "04",
    title: "Compliance Frameworks",
    description:
      "Design of structured compliance processes aligned with applicable requirements and organisational policies.",
    icon: IconReportMoney,
  },
  {
    number: "05",
    title: "Risk Assessment",
    description:
      "Evaluation of material risks and their potential impact on business objectives.",
    icon: IconRefresh,
  },
  {
    number: "06",
    title: "Business Continuity",
    description:
      "Development of frameworks supporting organisational preparedness and continuity during operational disruption.",
    icon: IconUsersGroup,
  },
];

const outcomes = [
  "Institutional governance",
  "Risk visibility",
  "Internal controls",
  "Regulatory preparedness",
  "Business resilience",
  "Management accountability",
];

export default function Page() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24">
        <Image
          src={heroImage}
          alt="Site personnel conducting operational risk oversight"
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
              Risk &amp; Governance
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Governance Frameworks for <br/>
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Resilient Enterprises.</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              As organisations become larger and more complex, governance and
              risk management become integral to protecting enterprise value.
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
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />
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
              <h2 className="font-serif text-3xl font-bold leading-snug text-[#084E75] md:text-4xl">
                Should Protect Value,
                <br />
                <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Not Satisfy Compliance.</span>
              </h2>
              <p className="mt-6 text-base leading-relaxed text-[#4a5568] md:text-lg">
                Designed to support institutional resilience.
              </p>
              <p className="mt-4 text-base leading-relaxed text-[#4a5568] md:text-lg">
                PCRED advises companies and management teams on:
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {[
                  "Risk frameworks",
                  "Governance structures",
                  "Internal controls",
                  "Compliance architecture",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-2xl border border-[#084E75]/10 bg-[#084E75]/5 px-4 py-3"
                  >
                    <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#8D8C8F]/20 text-[#084E75]">
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
              <div className="absolute -inset-1 rounded-3xl border border-[#8D8C8F]/25" />
              <div className="relative aspect-4/3 overflow-hidden rounded-3xl shadow-xl shadow-[#084E75]/10">
                <Image
                  src="/who_we_are.webp"
                  alt="Risk and governance advisory"
                  fill
                  className="object-cover grayscale"
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                <div className="absolute inset-0 bg-[#084E75] mix-blend-color" />
                <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/50 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="relative overflow-hidden bg-linear-to-br from-[#0F2140] to-[#071428] py-20 md:py-28"
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
              Governance &amp; Risk <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/70 md:text-lg">
              Structured advisory across enterprise risk, governance,
              controls and compliance.
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
                      <div className="inline-flex rounded-2xl bg-[#D9B872] p-3 text-[#084E75]">
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
      <section className="relative isolate overflow-hidden bg-linear-to-br from-[#EEF6FB] via-white to-[#FAFAF9] py-20 md:py-28">
        <div className="pointer-events-none absolute -left-20 top-0 size-72 rounded-full bg-[#B8892E]/8 blur-[90px]" />
        <div className="pointer-events-none absolute -right-16 bottom-0 size-80 rounded-full bg-[#084E75]/6 blur-[90px]" />

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

            <h2 className="font-serif mt-4 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl leading-tight">
              Governance First.<br/>
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Compliance Second.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-[#084E75]/70 md:text-lg">
              Effective governance is not simply a compliance requirement.
              It provides the framework through which an organisation{" "}
              <span className="font-semibold text-[#084E75]">
                makes decisions, manages risk, allocates accountability and
                protects stakeholder interests.
              </span>
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#084E75]/70 md:text-lg">
              Our advisory approach aligns governance and risk management
              with the organisation&apos;s operating model and strategic
              priorities.
            </p>

            <div className="relative mt-10 flex aspect-21/9 w-full items-center justify-center overflow-hidden rounded-3xl">
              <Image
                src={monitoringImage}
                alt="Analysts monitoring risk and governance dashboards"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 60vw, 90vw"
              />
              <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(7,20,40,0.58)_0%,rgba(7,20,40,0.46)_42%,rgba(7,20,40,0.18)_70%,rgba(7,20,40,0.08)_100%),linear-gradient(to_top,rgba(7,20,40,0.28)_0%,transparent_40%)]" />
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
              Our Focus
            </span>
            <h2 className="font-serif text-3xl font-bold text-white md:text-4xl">
              What Effective Advisory{" "}
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Delivers.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-white/70">
              Institutional governance, risk visibility and internal
              controls that support long-term organisational resilience.
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
            <div className="absolute inset-0 bg-[#0F2140]/78" />
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#0a5d8a]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute bottom-0 right-32 size-40 rounded-full bg-[#D9B872]/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
                  <span className="size-2 rounded-full bg-[#D9B872]" />
                  Risk &amp; Governance
                </span>
                <h2 className="font-serif text-3xl font-semibold text-white md:text-4xl md:leading-tight">
                  Strengthening
                  <br />
                  <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Governance?</span>
                </h2>
                <p className="mt-3 text-white/70">
                  Speak with our advisors about risk frameworks, governance
                  structures and compliance architecture for your
                  organisation.
                </p>
              </div>

              <Link
                href="/contact"
                className="group flex items-center justify-between rounded-full bg-[#084E75] hover:bg-[#0a5d8a] py-2 pl-5 pr-2 text-sm font-semibold text-white shadow-md shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                Discuss Your Governance & Risk Requirements
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
