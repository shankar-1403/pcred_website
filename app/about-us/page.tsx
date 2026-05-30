"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {
  IconTarget,
  IconEye,
  IconFlag,
  IconChartLine,
  IconTrendingUp,
  IconUsers,
  IconShieldCheck,
  IconArrowRight,
} from "@tabler/icons-react";

const aboutPillars = [
  {
    title: "Mission",
    icon: IconTarget,
    text: "To strengthen MSMEs through expert financial guidance, business transformation, and sustainable growth strategies.",
    number: "01",
  },
  {
    title: "Vision",
    icon: IconEye,
    text: "To be a leading force in empowering MSMEs through strategic financial expertise, innovation, and growth-driven solutions.",
    number: "02",
  },
  {
    title: "Aim",
    icon: IconFlag,
    text: "To drive sustainable growth and financial empowerment for MSMEs across industries.",
    number: "03",
  },
];

const coreBeliefs = [
  {
    title: "Proactive Financial Expertise",
    icon: IconChartLine,
    description:
      "Tailored financial solutions designed to help MSMEs and businesses improve stability, optimize performance, and achieve sustainable growth.",
  },
  {
    title: "Progressive Growth Support",
    icon: IconTrendingUp,
    description:
      "From funding solutions to strategic advisory, we help businesses unlock opportunities for expansion and long-term success.",
  },
  {
    title: "Personalized MSME Advisory",
    icon: IconUsers,
    description:
      "We understand the unique challenges faced by MSMEs and deliver customized financial guidance aligned with their business goals.",
  },
  {
    title: "Principled Partnerships & Transparency",
    icon: IconShieldCheck,
    description:
      "Through ethical practices, honest communication, and reliable support, we build long-term relationships founded on trust and accountability.",
  },
];

export default function AboutUsPage() {
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
              About Pcred
            </span>
            <h1 className="text-4xl font-bold leading-[1.15] text-white md:text-5xl lg:text-6xl">
              Building Businesses
              <br />
              <span className="text-white/70">Through Smart Finance</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              We partner with MSMEs and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
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
            className="mb-10 text-center"
          >
            <span className="mb-3 inline-block rounded-full bg-[#084E75]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#084E75]">
              What Drives Us
            </span>
            <h2 className="text-2xl font-bold text-[#084E75] md:text-3xl">
              Mission, Vision & Aim
            </h2>
          </motion.div>

          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-2xl border border-[#084E75]/10 bg-[#084E75]/5 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#084E75]/25 hover:shadow-xl hover:shadow-[#084E75]/10"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-[#084E75]" />
                <span className="absolute right-6 top-6 font-mono text-4xl font-bold text-[#084E75]/10">
                  {pillar.number}
                </span>
                <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#084E75] text-white shadow-lg shadow-[#084E75]/20 transition-transform duration-300 group-hover:scale-105">
                  <pillar.icon className="size-7" stroke={1.5} />
                </div>
                <h3 className="relative mb-3 text-xl font-bold text-[#084E75]">{pillar.title}</h3>
                <p className="relative text-sm leading-relaxed text-[#8E8E90]">{pillar.text}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="mb-3 inline-block rounded-full bg-[#084E75]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#084E75]">
                Our Core Beliefs
              </span>
              <h2 className="text-3xl font-bold text-[#084E75] md:text-4xl">
                Principles That Guide Every Partnership
              </h2>
            </div>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2">
            {coreBeliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-2xl border border-[#084E75]/10 bg-[#084E75]/5 p-8 transition-all duration-300 hover:border-[#084E75]/25 hover:shadow-lg hover:shadow-[#084E75]/8"
              >
                <div className="absolute left-0 top-8 h-16 w-1 rounded-r-full bg-[#084E75]/0 transition-colors duration-300 group-hover:bg-[#084E75]" />
                <div className="mb-5 flex size-12 items-center justify-center rounded-xl bg-[#084E75]/10 text-[#084E75] transition-all duration-300 group-hover:bg-[#084E75] group-hover:text-white">
                  <belief.icon className="size-6" stroke={1.5} />
                </div>
                <h3 className="mb-3 text-lg font-semibold leading-snug text-[#084E75]">
                  {belief.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8E8E90]">{belief.description}</p>
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
                  Ready to strengthen your business finances?
                </h2>
                <p className="mt-3 text-white/70">
                  Connect with our advisory team and discover solutions tailored to your growth goals.
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
