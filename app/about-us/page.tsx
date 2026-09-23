"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { IconTargetArrow, IconBulb, IconFlag3, IconChartLine, IconTrendingUp, IconUsers, IconShieldCheck, IconArrowRight, IconUser } from "@tabler/icons-react";
import Image from "next/image";
import AboutUsThree from "../../public/aboutpage3.png";
import AboutUsTwo from "../../public/aboutpage2.png";
import WhoWeAre from "../../public/who_we_are.webp";
import MissionVisionBg from "../../public/site/aboutus_reception_interior.webp";
import AboutHeroImage from "../../public/site/generated/aboutus_hero_banner.webp";

const aboutPillars = [
  {
    title: "Mission",
    icon: IconTargetArrow,
    text: "To strengthen businesses through expert financial guidance, business transformation, and sustainable growth strategies.",
    number: "01",
  },
  {
    title: "Vision",
    icon: IconBulb,
    text: "To be a leading force in empowering businesses through strategic financial expertise, innovation, and growth-driven solutions.",
    number: "02",
  }
];

// Name/designation are placeholders pending final copy — photos are live.
const managementTeam: { name: string; designation: string; image: string | null; imageScale?: number }[] = [
  { name: "Vijay Sharma", designation: "Founder and CEO", image: "/team/management-1.png" },
  // Her source photo is framed further back than the others — scale it up
  // slightly within the same fixed card frame so it reads at a similar size.
  { name: "Pooja Dubey", designation: "Co-Founder", image: "/team/management-2.png", imageScale: 1.12 },
  { name: "Ashwini Bhatia", designation: "Co-Founder", image: "/team/management-3.png" },
];

const coreBeliefs = [
  {
    title: "Proactive Financial Expertise",
    icon: IconChartLine,
    description:
      "Tailored financial solutions designed to help businesses improve stability, optimize performance, and achieve sustainable growth.",
  },
  {
    title: "Progressive Growth Support",
    icon: IconTrendingUp,
    description:
      "From funding solutions to strategic advisory, we help businesses unlock opportunities for expansion and long-term success.",
  },
  {
    title: "Tailored Financial Advisory",
    icon: IconUsers,
    description:
      "We understand the unique challenges faced by businesses and deliver customized financial guidance aligned with their business goals.",
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
      {/* ── HERO ── */}
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24 min-h-[560px]">
        <Image
          src={AboutHeroImage}
          alt="PCRED advisory office — building businesses through smart finance"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,37,90,0.58)_0%,rgba(0,37,90,0.46)_42%,rgba(0,37,90,0.18)_70%,rgba(0,37,90,0.08)_100%),linear-gradient(to_top,rgba(0,37,90,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#00b2fc]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#00b2fc]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#00b2fc]">
              <span className="size-2 rounded-full bg-[#00b2fc]" />
              About Us
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Building Businesses
              <br />
              <span className="text-[#00b2fc]">Through Smart Finance</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              We partner with businesses and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
            </p>
            <div className="mt-10 flex items-center">
              <div className="h-px w-40 bg-white/15" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#00b2fc]/60" />
              <div className="h-px w-24 bg-white/15" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── WHO WE ARE ── */}
      <section className="relative overflow-hidden bg-linear-to-bl from-[#00255a]/8 via-white to-[#8D8C8F]/16 py-20 md:py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#00b2fc]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-2 lg:h-[560px] [&>*]:min-w-0">

            {/* Stat 1 — blue (col 1, row 1) */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-1 lg:row-span-1"
            >
              <div className="relative overflow-hidden rounded-3xl bg-brand-gradient-br p-7 h-full flex flex-col justify-between pb-4 md:p-8">
                {/* Diagonal light sweep */}
                <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rotate-45 bg-linear-to-br from-white/8 to-transparent" />
                {/* Bottom left deeper blue shadow */}
                <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-[#00b2fc]/60 blur-2xl" style={{ zIndex: 0 }} />
                {/* Gold accent glow */}
                <div className="pointer-events-none absolute bottom-6 right-6 size-20 rounded-full bg-[#8D8C8F]/15 blur-xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/40">Years of advisory</span>
                </div>
                <div className="relative z-10 flex flex-1 flex-col items-start justify-center">
                  <span className="block text-5xl font-black leading-none text-white sm:text-6xl lg:text-8xl">16+</span>
                  <div className="mt-4 h-px w-10 bg-[#8D8C8F]/60" />
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
              <div className="relative overflow-hidden rounded-3xl border border-[#00255a]/15 bg-linear-to-br from-[#8D8C8F]/12 via-[#EEF6FB] to-[#00255a]/25 p-7 h-full flex flex-col justify-center md:p-8">
                {/* Blue glow bottom-right */}
                <div className="pointer-events-none absolute -bottom-6 -right-6 size-40 rounded-full bg-[#00b2fc]/18 blur-2xl" />
                {/* Gold glow top-left */}
                <div className="pointer-events-none absolute -top-6 -left-6 size-24 rounded-full bg-[#8D8C8F]/15 blur-2xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.025]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, #00255a 1px, transparent 0)", backgroundSize: "24px 24px" }} />

                <h2 className="font-serif relative text-xl font-bold leading-snug text-[#00255a] md:text-2xl lg:text-3xl">
                  Strategic financial guidance for business growth and clarity
                </h2>
                <p className="relative mt-3 text-sm leading-relaxed text-[#4a5568] max-w-full">
                  We work alongside businesses to build strong financial foundations, helping them navigate complexity, unlock capital, and grow with confidence.
                </p>
                <div className="relative mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:mt-2 lg:flex lg:gap-6">
                  <div className="rounded-2xl bg-[#00b2fc]/6 px-4 py-3">
                    <span className="block text-2xl font-black text-[#00255a]">98%</span>
                    <span className="text-xs text-[#4a5568] leading-tight">Client retention rate</span>
                  </div>
                  <div className="rounded-2xl bg-[#8D8C8F]/10 px-4 py-3">
                    <span className="block text-2xl font-black text-[#00255a]">₹1500Cr+</span>
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
              <div className="relative overflow-hidden rounded-3xl border border-[#00255a]/10 bg-linear-to-r from-[#00255a]/8 to-[#8D8C8F]/10 h-full flex items-center">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-1 rounded-l-3xl bg-linear-to-b from-[#00255a] to-[#8D8C8F]" />

                {/* Left text content */}
                <div className="px-7 py-7 flex-1 md:px-9 md:py-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#00b2fc] mb-2">Our direction</p>
                  <h3 className="text-2xl font-bold text-[#00255a] leading-snug max-w-sm">
                    Leading the Future of Financial Advisory for Businesses
                  </h3>
                  <Link
                    href="/contact"
                    className="mt-5 shrink-0 group inline-flex items-center justify-between gap-2 rounded-full bg-[#00255a] hover:bg-[#0037d8] pl-5 pr-2 py-2 text-sm font-semibold text-white shadow-md shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-lg w-44"
                  >
                    Get Started
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <IconArrowRight className="size-4" color="#8D8C8F" />
                    </span>
                  </Link>
                </div>

                {/* Right image flush to border */}
                <div className="relative h-full w-96 shrink-0 hidden lg:block">
                  <Image src={WhoWeAre} alt="Who We Are" fill className="object-cover" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,37,90,0.35)_0%,rgba(0,37,90,0.15)_35%,transparent_60%),linear-gradient(to_top,rgba(0,37,90,0.28)_0%,transparent_40%)]" />
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
              <div className="relative overflow-hidden rounded-3xl bg-[#00b2fc] p-7 h-full flex flex-col justify-between pb-4 md:p-8">
                {/* Diagonal light sweep */}
                {/* <div className="pointer-events-none absolute -top-20 -right-20 h-64 w-64 rotate-45 bg-linear-to-br from-white/10 to-transparent" /> */}
                {/* Bottom left shadow */}
                {/* <div className="pointer-events-none absolute -bottom-10 -left-10 size-32 rounded-full bg-[#3d2c0d]/50 blur-2xl" style={{ zIndex: 0 }} /> */}
                {/* Blue accent glow */}
                <div className="pointer-events-none absolute bottom-6 right-6 size-20 rounded-full bg-[#00b2fc]/10 blur-xl" />
                {/* Dot grid */}
                <div className="pointer-events-none absolute inset-0 opacity-[0.04]" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)", backgroundSize: "20px 20px" }} />

                <div className="relative z-10 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.25em] text-white/70">Enterprises served</span>
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

      {/* ── MANAGEMENT TEAM ── (temporarily disabled, not deleted — flip to `true` to bring it back) */}
      {false && (
      <section className="relative overflow-hidden bg-linear-to-br from-[#FAFAF9] via-white to-[#FBF6EC] py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 size-96 rounded-full bg-[#00b2fc]/8 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-[#00b2fc]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-8 max-w-xl md:mb-10"
          >
            <span className="mb-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00b2fc]">
              <span className="size-1.5 rounded-full bg-[#00b2fc]" />
              The People Behind PCRED
            </span>
            <h2 className="font-serif text-3xl font-semibold text-[#00255a] md:text-4xl">Management Team</h2>
          </motion.div>

          <motion.div
            className="mx-auto grid max-w-7xl grid-cols-2 place-items-center gap-5 sm:grid-cols-3 sm:gap-8 lg:gap-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.08 } } }}
          >
            {managementTeam.map((member, i) => (
              <motion.article
                key={`${member.name}-${i}`}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative w-full max-w-[400px] overflow-hidden rounded-3xl bg-linear-to-br from-[#8D8C8F]/10 via-white to-[#00255a]/8 shadow-[0_2px_8px_-2px_rgba(0,37,90,0.08),0_20px_50px_-20px_rgba(0,37,90,0.18)] ring-1 ring-[#00255a]/8 transition-shadow duration-300 hover:shadow-[0_2px_8px_-2px_rgba(0,37,90,0.08),0_30px_70px_-20px_rgba(0,37,90,0.32)]"
              >
                <div className="absolute inset-x-0 top-0 z-10 h-1.5 bg-[#00255a]" />

                <div className="relative aspect-[6/6] w-full overflow-hidden bg-white">
                  {member.image ? (
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className={`object-cover transition-transform duration-500 ${
                        member.imageScale
                          ? "scale-[1.12] group-hover:scale-[1.18]"
                          : "group-hover:scale-[1.04]"
                      }`}
                      sizes="(min-width: 1024px) 26vw, (min-width: 768px) 34vw, 45vw"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center">
                      <IconUser className="size-14 text-[#00255a]/20" stroke={1.4} />
                    </div>
                  )}
                </div>

                {/* Navy-gradient info panel — the same brand gradient used for
                    CTAs elsewhere on the site — for real color contrast against
                    the photo instead of a flat white-on-white footer. */}
                <div className="relative overflow-hidden bg-[#00255a] px-6 py-6 text-center">
                  <div className="pointer-events-none absolute -left-10 -top-10 size-28 rounded-full bg-white/5 blur-2xl" />
                  <div className="pointer-events-none absolute -right-8 -bottom-10 size-28 rounded-full bg-gold-500/10 blur-2xl" />
                  <span className="relative mx-auto mb-3 block h-px w-10 bg-linear-to-r from-transparent via-gold-300 to-transparent" />
                  <h4 className="relative font-serif text-lg font-semibold leading-snug text-white md:text-xl">
                    {member.name}
                  </h4>
                  <p className="relative mt-2 inline-block rounded-full bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.16em] text-gold-300 ring-1 ring-white/10 md:text-xs">
                    {member.designation}
                  </p>
                </div>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>
      )}

      {/* ── MISSION VISION AIM ── */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <Image
          src={MissionVisionBg}
          alt="PCRED office interior"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,37,90,0.94)_0%,rgba(0,37,90,0.82)_38%,rgba(0,37,90,0.65)_68%,rgba(0,37,90,0.5)_100%),linear-gradient(to_top,rgba(0,37,90,0.45)_0%,transparent_45%)]" />
        {/* Gold hairline divider at top */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-px w-3/4 -translate-x-1/2 bg-linear-to-r from-transparent via-[#00b2fc]/30 to-transparent" />

        {/* Ambient depth — overhead spotlight + vignette so the section reads as a lit space */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[420px] w-[900px] -translate-x-1/2 rounded-full bg-[#00b2fc]/8 blur-3xl" />
          <div className="absolute left-1/2 top-1/3 h-[380px] w-[1100px] -translate-x-1/2 rounded-full bg-[#00b2fc]/20 blur-3xl" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,37,90,0.94)_0%,rgba(0,37,90,0.82)_38%,rgba(0,37,90,0.65)_68%,rgba(0,37,90,0.5)_100%),linear-gradient(to_top,rgba(0,37,90,0.45)_0%,transparent_45%)]" />
          <div className="absolute inset-0 shadow-[inset_0_0_150px_55px_rgba(0,20,35,0.55)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          {/* Section header */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 max-w-2xl md:mb-10"
          >
            <span className="mb-2 flex items-center gap-2 text-11 font-semibold uppercase tracking-[0.22em] text-[#00b2fc]">
              <span className="size-2 rounded-full bg-[#00b2fc]" />
              Our Foundation
            </span>
            <h5 className="mt-2 text-3xl font-semibold text-white md:text-4xl">
              Mission & <span className="bg-linear-to-r from-[#00b2fc] to-[#0037d8] bg-clip-text text-transparent">Vision</span>
            </h5>
          </motion.div> */}

          {/* Raised glass panels — icon centered on top */}
          <div className="flex flex-col items-stretch gap-4 md:flex-row md:gap-5">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5 }}
                className="group relative flex flex-1 flex-col items-center overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] px-5 py-6 text-center shadow-[0_30px_60px_-18px_rgba(0,12,24,0.5),0_12px_28px_-10px_rgba(0,12,24,0.32),0_6px_14px_rgba(0,12,24,0.24),inset_0_1px_0_rgba(255,255,255,0.12)] backdrop-blur-[2px] transition-all duration-300 hover:border-[#00b2fc]/30 hover:bg-white/[0.075] hover:shadow-[0_40px_72px_-18px_rgba(0,12,24,0.58),0_16px_32px_-10px_rgba(0,12,24,0.4),0_8px_18px_rgba(0,12,24,0.3),inset_0_1px_0_rgba(255,255,255,0.18)] md:px-6 md:py-7 lg:px-8"
              >
                {/* Top bevel highlight — reads as light catching the panel edge */}
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/30 to-transparent" />
                {/* Soft gold pool behind the icon */}
                <div className="pointer-events-none absolute left-1/2 top-2 size-24 -translate-x-1/2 rounded-full bg-[#00b2fc]/12 blur-2xl transition-all duration-300 group-hover:bg-[#0037d8]/20" />

                {/* Icon — plain symbol, no container */}
                <pillar.icon
                  className="relative mb-3 size-11 shrink-0 text-[#00b2fc] drop-shadow-[0_4px_14px_rgba(204,102,105,0.45)] md:size-12"
                  stroke={1.4}
                />

                {/* Content */}
                <h5 className="relative text-lg font-bold text-white drop-shadow-[0_2px_6px_rgba(0,15,28,0.6)]">
                  {pillar.title}
                </h5>
                <div className="relative my-2 h-px w-8 bg-[#00b2fc] shadow-[0_0_10px_rgba(204,102,105,0.7)]" />
                <p className="relative max-w-sm text-sm leading-[1.7] text-white/70">{pillar.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE BELIEFS ── */}
      <section className="relative overflow-hidden bg-linear-to-br from-[#FAFAF9] via-white to-[#FBF6EC] py-12 md:py-16">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -right-24 -top-24 size-96 rounded-full bg-[#00b2fc]/8 blur-3xl" />
          <div className="absolute -bottom-24 -left-24 size-80 rounded-full bg-[#00b2fc]/6 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="mb-8 flex flex-col gap-4 md:mb-10 lg:flex-row lg:items-end lg:justify-between">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-xl"
            >
              <span className="mb-2 inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#00b2fc]">
                <span className="size-1.5 rounded-full bg-[#00b2fc]" />
                What Drives Us
              </span>
              <h5 className="font-serif text-3xl font-semibold text-[#00255a] md:text-4xl">
                Our Core{" "}
                <span className="text-[#00b2fc]">
                  Beliefs
                </span>
              </h5>
            </motion.div>
          </div>

          <motion.div
            className="grid gap-4 sm:grid-cols-2 lg:gap-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
            variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
          >
            {coreBeliefs.map((belief, i) => (
              <motion.article
                key={belief.title}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
                  },
                }}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-[#00255a]/10 bg-white/90 p-5 shadow-[0_8px_30px_-12px_rgba(0,37,90,0.12)] backdrop-blur-sm transition-[border-color,box-shadow] duration-300 hover:border-[#00b2fc]/45 hover:shadow-[0_16px_40px_-14px_rgba(0,37,90,0.16)] md:p-6"
              >
                <div className="pointer-events-none absolute inset-0 bg-linear-to-br from-[#00b2fc]/0 via-transparent to-[#00255a]/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#00b2fc]/70 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                <div className="relative flex items-start justify-between gap-3">
                  <div className="inline-flex size-10 items-center justify-center rounded-xl bg-brand-gradient-br text-[#00b2fc] shadow-md shadow-[#00255a]/18 transition-transform duration-300 group-hover:scale-105">
                    <belief.icon className="size-5" stroke={1.6} />
                  </div>
                  <span className="font-serif text-3xl font-bold leading-none text-[#00255a]/8 transition-colors duration-300 group-hover:text-[#00b2fc]/25">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                <h5 className="relative mt-4 font-serif text-lg font-semibold leading-snug text-[#00255a] md:text-xl">
                  {belief.title}
                </h5>

                <div className="relative mt-2 h-px w-8 bg-linear-to-r from-[#00b2fc] to-transparent transition-all duration-300 group-hover:w-12" />

                <p className="relative mt-3 text-sm leading-[1.65] text-[#545355]">
                  {belief.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 pb-20 md:pb-24">
        <div className="mx-auto max-w-7xl px-6">   
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-3xl bg-cover bg-[80%_center] bg-no-repeat px-8 py-10 md:bg-center md:px-14"
            style={{ backgroundImage: "url('/right_advisor.webp')" }}
          >
            <div className="absolute inset-0 bg-linear-to-br from-[#001538]/90 to-[#00255a]/75" />

            <div className="relative flex flex-col items-center text-center justify-between gap-8 md:flex-row md:items-center md:text-left">
              <div className="max-w-xl">
                <h5 className="text-3xl font-semibold text-white md:leading-snug md:text-4xl">
                  Looking for the Right
                  <br />
                  <span className="text-[#00b2fc]">Financial Partner?</span>
                </h5>
                <p className="mt-3 text-white/70 text-base">
                  Our Corporate advisory experts help businesses secure funding, optimize finances, and achieve sustainable growth.
                </p>
              </div>

              <Link href="/contact" className="group flex items-center justify-between gap-2 rounded-full bg-[#00b2fc] hover:bg-[#0037d8] pl-5 pr-2 py-2 text-white shadow-md shadow-black/15 transition-all hover:-translate-y-0.5 hover:shadow-lg w-44 text-sm font-semibold">
                Get In Touch
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <IconArrowRight className="size-4" color="#00b2fc" />
                </span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
