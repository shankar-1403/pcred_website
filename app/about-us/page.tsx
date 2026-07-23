"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IconTarget, IconEye, IconFlag, IconChartLine, IconTrendingUp, IconUsers, IconShieldCheck, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import AboutUsThree from "../../public/aboutpage3.png";
import AboutUsTwo from "../../public/aboutpage2.png";
import WhoWeAre from "../../public/who_we_are.webp";

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
      {/* ── HERO + WHO WE ARE ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              About Us
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl">
              Building Businesses
              <br />
              <span className="text-[#DDB162]">Through Smart Finance</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#4a5568] max-w-2xl mx-auto">
              We partner with MSMEs and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-40 bg-[#DDB162]/30" />
              <span className="mx-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
              <div className="h-px w-40 bg-[#DDB162]/30" />
            </div>
          </motion.div>
        </div>

        <div className="relative mx-auto max-w-7xl mt-24">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px]">

            {/* Stat 1 — blue (col 1, row 1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#084E75] via-[#0a5d8a] to-[#063d5c] p-8 h-full flex flex-col justify-between pb-4">
                {/* Diagonal light sweep */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rotate-45 bg-linear-to-br from-white/8 to-transparent" />
                {/* Bottom left deeper blue shadow */}
                <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-[#042d44]/60 blur-2xl" style={{ zIndex: 0 }} />
                {/* Gold accent glow */}
                <div className="pointer-events-none absolute bottom-6 right-6 size-20 rounded-full bg-[#DDB162]/15 blur-xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Years of advisory</span>
                  <span className="rounded-full border border-[#DDB162]/40 bg-[#DDB162]/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-[#DDB162]">Est. 2014</span>
                </div>
                <div className="relative z-10 flex flex-1 flex-col items-start justify-center">
                  <span className="block text-8xl font-black leading-none text-white">10+</span>
                  <div className="mt-4 h-px w-10 bg-[#DDB162]/60" />
                  <span className="mt-3 block text-sm text-white/90 leading-relaxed">Trusted financial expertise across industries</span>
                </div>
              </div>
            </motion.div>

            {/* Strategic guidance (col 2-3, row 1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="lg:col-span-2 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#084E75]/15 bg-linear-to-br from-[#DDB162]/12 via-[#EEF6FB] to-[#084E75]/25 p-7 h-full flex flex-col justify-center">
                {/* Blue glow bottom-right */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 size-40 rounded-full bg-[#084E75]/18 blur-2xl" />
                {/* Gold glow top-left */}
                <div className="pointer-events-none absolute -top-6 -left-6 size-24 rounded-full bg-[#DDB162]/15 blur-2xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #084E75 1px, transparent 0)", backgroundSize: "24px 24px" }} />

                <h2 className="relative text-2xl font-bold leading-snug text-[#084E75] md:text-3xl">
                  Strategic financial guidance for business growth and clarity
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-[#4a5568] max-w-lg">
                  We work alongside businesses to build strong financial foundations — helping them navigate complexity, unlock capital, and grow with confidence.
                </p>
                <div className="relative mt-4 flex items-center gap-4">
                  <div className="rounded-2xl bg-[#084E75]/6 px-4 py-3">
                    <span className="block text-2xl font-black text-[#084E75]">98%</span>
                    <span className="text-xs text-[#4a5568]">Client retention rate</span>
                  </div>
                  <div className="rounded-2xl bg-[#DDB162]/10 px-4 py-3">
                    <span className="block text-2xl font-black text-[#084E75]">₹500Cr+</span>
                    <span className="text-xs text-[#4a5568]">Capital facilitated</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Our Direction (col 1-2, row 2) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.12 }}
              className="lg:col-span-2 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#084E75]/10 bg-linear-to-r from-[#084E75]/8 to-[#DDB162]/10 h-full flex items-center">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-linear-to-b from-[#084E75] to-[#DDB162]" />

                {/* Left text content */}
                <div className="px-9 py-7 flex-1">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162] mb-2">Our direction</p>
                  <h3 className="text-lg font-bold text-[#084E75] leading-snug max-w-sm">
                    Leading the Future of Financial Advisory for Businesses
                  </h3>
                  <Link
                    href="/contact"
                    className="mt-5 shrink-0 group inline-flex items-center justify-between rounded-full bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-5 pr-2 py-2 text-sm font-semibold text-white shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-36"
                  >
                    Get Started
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <IconArrowRight className="size-4" color="#DDB162" />
                    </span>
                  </Link>
                </div>

                {/* Right image flush to border */}
                <div className="relative h-full w-96 shrink-0 hidden lg:block">
                  <Image src={WhoWeAre} alt="Who We Are" fill className="object-cover" />
                  <div className="absolute inset-y-0 left-0 w-32 bg-linear-to-r from-[#faf5ec] via-[#faf5ec]/60 to-transparent" />
                </div>
              </div>
            </motion.div>

            {/* Stat 2 — gold (col 3, row 2) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="lg:col-span-1 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#DDB162] via-[#c99a3f] to-[#b8852e] p-8 h-full flex flex-col justify-between pb-4">
                {/* Diagonal light sweep */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rotate-45 bg-linear-to-br from-white/10 to-transparent" />
                {/* Bottom left shadow */}
                <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-[#8a5e1a]/50 blur-2xl" style={{ zIndex: 0 }} />
                {/* Blue accent glow */}
                <div className="pointer-events-none absolute bottom-6 right-6 size-20 rounded-full bg-[#084E75]/10 blur-xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">MSMEs served</span>
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-white/80">Pan India</span>
                </div>
                <div className="relative z-10 flex flex-1 flex-col items-start justify-center">
                  <span className="block text-8xl font-black leading-none text-white">500+</span>
                  <div className="mt-4 h-px w-10 bg-white/50" />
                  <span className="mt-3 block text-sm text-white font-medium leading-relaxed">Businesses transformed through strategic advisory</span>

                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* ── MISSION VISION AIM ── */}

      <section className="relative overflow-hidden bg-white py-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Our Foundation
            </span>
            <h4 className="mt-3 text-4xl font-semibold text-[#084E75]">
              Mission, Vision & Aim
            </h4>
          </motion.div>

          <div className="flex flex-col items-stretch md:flex-row">
            {aboutPillars.map((pillar, i) => (
              <div key={pillar.title} className="flex flex-1 items-stretch">
                {/* Vertical divider before item (except first) */}
                {i > 0 && (
                  <div className="hidden md:flex flex-col items-center justify-center py-0 shrink-0 self-stretch">
                    <div className="flex-1 w-px bg-[#DDB162]/30" />
                    <span className="my-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
                    <div className="flex-1 w-px bg-[#DDB162]/30" />
                  </div>
                )}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="group flex flex-1 flex-col items-center px-10 py-4 text-center"
                >
                  {/* Icon circle with decorative leaf */}
                  <div className="relative mb-7 flex items-center justify-center">
                    {/* Outer dashed ring with diamond at top, dots at left & right */}
                    <svg className="absolute size-36 text-[#DDB162]" viewBox="-8 -8 160 160" fill="none">
                      <circle cx="72" cy="72" r="70" stroke="currentColor" strokeWidth="1" strokeDasharray="4 6" opacity="0.45" />
                      {/* Diamond left (9 o'clock) */}
                      <polygon points="2,68 6,72 2,76 -2,72" fill="currentColor" opacity="0.75" />
                      {/* Diamond right (3 o'clock) */}
                      <polygon points="142,68 146,72 142,76 138,72" fill="currentColor" opacity="0.75" />
                    </svg>

                    {/* Single gradient circle */}
                    <div className="flex size-24 items-center justify-center rounded-full bg-linear-to-br from-[#084E75]/15 via-[#DDB162]/20 to-[#DDB162]/30 transition-transform duration-300 group-hover:scale-105">
                      <pillar.icon className="size-9 text-[#084E75]" stroke={1.2} />
                    </div>

                  </div>

                  <h5 className="mb-2 text-2xl font-semibold text-[#084E75]">{pillar.title}</h5>
                  {/* Gold underline */}
                  <div className="mb-4 h-px w-10 bg-[#DDB162]" />
                  <p className="text-sm leading-relaxed text-[#4a5568]">{pillar.text}</p>
                </motion.div>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE BELIEFS ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 py-24">
        <div className="pointer-events-none absolute -left-32 top-20 size-96 rounded-full bg-[#DDB162]/8 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              What Drives Us
            </span>
            <h4 className="mt-3 text-4xl font-semibold text-[#084E75]">
              Our Core Beliefs
            </h4>
          </motion.div>

          <div className="grid gap-5 sm:grid-cols-2">
            {coreBeliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: (i % 2) * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-[#084E75]/10 bg-linear-to-br from-[#DDB162]/6 via-[#FAFCFD] to-[#084E75]/8 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-[#084E75]/10 hover:border-[#084E75]/20"
              >
                {/* Blue glow bottom-right — dominant */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 size-40 rounded-full bg-[#084E75]/8 blur-2xl" />
                {/* Faint gold glow top-left */}
                <div className="pointer-events-none absolute -top-6 -left-6 size-24 rounded-full bg-[#DDB162]/6 blur-2xl" />

                <div className="relative flex flex-col gap-3">
                  <div className="flex flex-row items-center gap-3">
                    <div className="shrink-0 flex size-11 items-center justify-center rounded-2xl bg-linear-to-br from-[#084E75] to-[#0a6494] text-white shadow-md shadow-[#084E75]/20 transition-transform duration-300 group-hover:scale-105">
                      <belief.icon className="size-5" stroke={1.5} />
                    </div>
                    <h6 className="text-base font-semibold text-[#084E75]">{belief.title}</h6>
                  </div>
                  <div className="h-px w-10 bg-[#DDB162]/60 transition-all duration-300 group-hover:w-16" />
                  <p className="text-sm leading-relaxed text-[#4a5568]">{belief.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-[#084E75] px-8 py-14 md:px-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#0a5d8a]/50 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />
            <div className="pointer-events-none absolute right-32 bottom-0 size-40 rounded-full bg-[#DDB162]/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h5 className="text-2xl font-bold text-white md:text-3xl">
                  Ready to strengthen your business finances?
                </h5>
                <p className="mt-3 text-white/70">
                  Connect with our advisory team and discover solutions tailored to your growth goals.
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
