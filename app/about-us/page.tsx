"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IconTargetArrow, IconBulb, IconFlag3, IconChartLine, IconTrendingUp, IconUsers, IconShieldCheck, IconArrowRight } from "@tabler/icons-react";
import Image from "next/image";
import AboutUsThree from "../../public/aboutpage3.png";
import AboutUsTwo from "../../public/aboutpage2.png";
import WhoWeAre from "../../public/who_we_are.webp";

const aboutPillars = [
  {
    title: "Mission",
    icon: IconTargetArrow,
    text: "To strengthen MSMEs through expert financial guidance, business transformation, and sustainable growth strategies.",
    number: "01",
  },
  {
    title: "Vision",
    icon: IconBulb,
    text: "To be a leading force in empowering MSMEs through strategic financial expertise, innovation, and growth-driven solutions.",
    number: "02",
  }
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

        <div className="relative mx-auto max-w-7xl px-6">
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
            <h1 className="mt-1 text-2xl font-bold text-[#084E75] sm:text-3xl md:text-4xl lg:text-5xl">
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

        <div className="relative mx-auto max-w-7xl px-6 mt-24">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px] [&>*]:min-w-0">

            {/* Stat 1 — blue (col 1, row 1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#084E75] via-[#0a5d8a] to-[#063d5c] p-7 h-full flex flex-col justify-between pb-4 md:p-8">
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
                </div>
                <div className="relative z-10 flex flex-1 flex-col items-start justify-center">
                  <span className="block text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">10+</span>
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
              <div className="relative overflow-hidden rounded-3xl border border-[#084E75]/15 bg-linear-to-br from-[#DDB162]/12 via-[#EEF6FB] to-[#084E75]/25 p-7 h-full flex flex-col justify-center md:p-8">
                {/* Blue glow bottom-right */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 size-40 rounded-full bg-[#084E75]/18 blur-2xl" />
                {/* Gold glow top-left */}
                <div className="pointer-events-none absolute -top-6 -left-6 size-24 rounded-full bg-[#DDB162]/15 blur-2xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #084E75 1px, transparent 0)", backgroundSize: "24px 24px" }} />

                <h2 className="relative text-2xl font-semibold leading-snug text-[#084E75] md:text-3xl lg:text-4xl">
                  Strategic financial guidance for business growth and clarity
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-[#4a5568] max-w-full">
                  We work alongside businesses to build strong financial foundations, helping them navigate complexity, unlock capital, and grow with confidence.
                </p>
                <div className="relative mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-2 lg:flex lg:gap-6">
                  <div className="rounded-2xl bg-[#084E75]/6 px-4 py-3">
                    <span className="block text-2xl font-black text-[#084E75]">98%</span>
                    <span className="text-xs text-[#4a5568] leading-tight">Client retention rate</span>
                  </div>
                  <div className="rounded-2xl bg-[#DDB162]/10 px-4 py-3">
                    <span className="block text-2xl font-black text-[#084E75]">₹1500Cr+</span>
                    <span className="text-xs text-[#4a5568] leading-tight">Capital facilitated</span>
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
              className="md:col-span-2 lg:col-span-2 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl border border-[#084E75]/10 bg-linear-to-r from-[#084E75]/8 to-[#DDB162]/10 h-full flex items-center">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-linear-to-b from-[#084E75] to-[#DDB162]" />

                {/* Left text content */}
                <div className="px-7 py-7 flex-1 md:px-9 md:py-8">
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
              <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#DDB162] via-[#c99a3f] to-[#b8852e] p-7 h-full flex flex-col justify-between pb-4 md:p-8">
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
                  <span className="rounded-full border border-white/30 bg-white/10 px-3 py-1 text-[length:var(--text-10)] font-semibold uppercase tracking-widest text-white/80">Pan India</span>
                </div>
                <div className="relative z-10 flex flex-1 flex-col items-start justify-center">
                  <span className="block text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">2500+</span>
                  <div className="mt-4 h-px w-10 bg-white/50" />
                  <span className="mt-3 block text-sm text-white font-medium leading-relaxed">Businesses transformed through strategic advisory</span>

                </div>
              </div>
            </motion.div>


          </div>
        </div>
      </section>

      {/* ── MISSION VISION AIM ── */}
      <section
        className="relative overflow-hidden bg-cover bg-center bg-no-repeat py-20 md:py-24"
        style={{ backgroundImage: "url('/bg_webpattern.webp')" }}
      >
        {/* Gold hairline divider at top */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-[#DDB162]/30 to-transparent" />

        {/* Ambient depth — overhead spotlight + vignette so the section reads as a lit space */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#DDB162]/8 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-[380px] w-[1100px] -translate-x-1/2 rounded-full bg-[#0a6ea8]/20 blur-3xl" />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_55px_rgba(0,20,35,0.55)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 text-center md:mb-20"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Our Foundation
            </span>
            <h4 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
              Mission & <span className="text-[#DDB162]">Vision</span>
            </h4>
          </motion.div>

          {/* Raised glass panels — icon centered on top */}
          <div className="flex flex-col items-stretch gap-5 md:flex-row md:gap-6">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="group relative flex flex-1 flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] px-6 py-9 text-center shadow-[0_40px_80px_-16px_rgba(0,12,24,0.55),0_18px_40px_-10px_rgba(0,12,24,0.38),0_6px_14px_rgba(0,12,24,0.3),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] transition-all duration-300 hover:border-[#DDB162]/30 hover:bg-white/[0.075] hover:shadow-[0_55px_100px_-16px_rgba(0,12,24,0.65),0_24px_50px_-10px_rgba(0,12,24,0.45),0_8px_18px_rgba(0,12,24,0.35),inset_0_1px_0_rgba(255,255,255,0.18)] md:px-8 lg:px-10"
              >
                {/* Top bevel highlight — reads as light catching the panel edge */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                {/* Soft gold pool behind the icon */}
                <div className="pointer-events-none absolute left-1/2 top-4 size-32 -translate-x-1/2 rounded-full bg-[#DDB162]/12 blur-2xl transition-all duration-300 group-hover:bg-[#DDB162]/20" />

                {/* Icon — plain symbol, no container */}
                <pillar.icon
                  className="relative mb-5 size-14 shrink-0 text-[#DDB162] drop-shadow-[0_4px_14px_rgba(221,177,98,0.45)] md:size-16"
                  stroke={1.4}
                />

                {/* Content */}
                <h5 className="relative text-xl font-bold text-white drop-shadow-[0_2px_6px_rgba(0,15,28,0.6)]">
                  {pillar.title}
                </h5>
                <div className="relative my-3 h-px w-10 bg-[#DDB162] shadow-[0_0_10px_rgba(221,177,98,0.7)]" />
                <p className="relative max-w-xs text-sm leading-[1.85] text-white/70">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE BELIEFS ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 py-24 md:py-32">
        {/* Ambient blobs + dot grids */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 size-96 rounded-full bg-[#DDB162]/5 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-[#084E75]/5 blur-3xl" />
          <svg className="absolute right-8 top-8 opacity-[0.055]" width="120" height="120" viewBox="0 0 120 120">
            {[0,1,2,3,4,5].flatMap(row => [0,1,2,3,4,5].map(col => (
              <circle key={`${row}-${col}`} cx={col*20+10} cy={row*20+10} r="1.5" fill="#084E75" />
            )))}
          </svg>
          <svg className="absolute bottom-8 left-8 opacity-[0.04]" width="100" height="100" viewBox="0 0 100 100">
            {[0,1,2,3,4].flatMap(row => [0,1,2,3,4].map(col => (
              <circle key={`${row}-${col}`} cx={col*20+10} cy={row*20+10} r="1.5" fill="#DDB162" />
            )))}
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-16 text-center md:mb-20"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              What Drives Us
            </span>
            <h4 className="mt-3 text-3xl font-semibold text-[#084E75] md:text-4xl">
              Our Core <span className="text-[#DDB162]">Beliefs</span>
            </h4>
          </motion.div>

          {/* 2×2 premium grid */}
          <motion.div
            className="grid gap-10 sm:grid-cols-2 md:gap-14"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.14 } } }}
          >
            {coreBeliefs.map((belief, i) => (
              <motion.div
                key={belief.title}
                variants={{
                  hidden: { opacity: 0, y: 36 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
                }}
                whileHover={{ y: -6, boxShadow: "0 20px 48px -12px rgba(8,78,117,0.10)" }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group flex flex-col items-center gap-5 rounded-2xl p-4 sm:flex-row sm:items-start sm:gap-5 md:gap-7"
              >
                {/* Premium circular icon with decorative SVG arcs */}
                <div className="relative flex size-28 shrink-0 items-center justify-center">
                  <svg className="absolute inset-0 size-full" viewBox="0 0 88 88" fill="none">
                    {/* 270° solid arc — gap at right (2 o'clock to 5 o'clock) */}
                    <path
                      d="M 64 78.64 A 40 40 0 1 1 78.64 24"
                      stroke={i === 0 || i === 3 ? "#DDB162" : "#084E75"}
                      strokeWidth="1.5" strokeLinecap="round"
                      opacity={i === 0 || i === 3 ? "0.9" : "0.35"}
                    />
                    {/* Gold accent dot at 9 o'clock */}
                    <circle cx="4" cy="44" r="3.5" fill="#DDB162" />
                  </svg>
                  <div className="flex size-[5.5rem] items-center justify-center rounded-full bg-linear-to-br from-[#fdf5e0] to-white shadow-[-4px_-4px_12px_rgba(255,255,255,0.95),8px_8px_32px_rgba(8,78,117,0.45)] transition-all duration-300 group-hover:shadow-[-4px_-4px_12px_rgba(255,255,255,0.95),10px_10px_40px_rgba(8,78,117,0.60)]">
                    <belief.icon className="size-7 text-[#084E75]" stroke={1.2} />
                  </div>
                </div>

                {/* Thin vertical gold divider — desktop only, matches icon height */}
                <div className="hidden sm:block h-28 w-px shrink-0 bg-linear-to-b from-[#DDB162]/70 via-[#DDB162]/30 to-transparent" />

                {/* Content */}
                <div className="flex-1 pt-1 text-center sm:text-left">
                  <span className="text-xs font-bold tracking-[0.2em] text-[#DDB162]">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h6 className="mt-1 text-lg font-bold leading-snug text-[#084E75]">
                    {belief.title}
                  </h6>
                  <div className="mb-3 mt-2 mx-auto h-px w-8 bg-[#DDB162] sm:mx-0" />
                  <p className="text-sm leading-relaxed text-[#4a5568]">
                    {belief.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
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
            <div className="pointer-events-none absolute right-32 bottom-0 size-40 rounded-full bg-[#DDB162]/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-xl">
                <h5 className="text-3xl font-semibold text-white md:leading-14 md:text-4xl">
                  Looking for the Right
                  <br />
                  <span className="text-[#DDB162]">Financial Partner?</span>
                </h5>
                <p className="mt-3 text-white/70">
                  Our MSME advisory experts help businesses secure funding, optimize finances, and achieve sustainable growth.
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
