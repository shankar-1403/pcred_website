"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {IconTarget,IconEye,IconFlag,IconChartLine,IconTrendingUp,IconUsers,IconShieldCheck,IconArrowRight,IconChevronRight} from "@tabler/icons-react";
import Image from "next/image";
import AboutUsThree from "../../public/aboutpage3.png"
import AboutUsTwo from "../../public/aboutpage2.png"

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
      <section className="relative bg-white backdrop-blur-2xl h-150 py-30 flex items-end">
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
          >
            <h1 className="text-4xl font-bold leading-[1.15] text-[#084E75] md:text-5xl lg:text-6xl text-shadow-lg">
              Building Businesses
              <br />
              <span className="text-[#8E8E90]">Through Smart Finance</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#084E75]">
              We partner with MSMEs and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#8E8E90]/10 py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-2 gap-6 relative">
          <div className="relative h-150 rounded-4xl overflow-hidden  bg-white border border-gray-200 shadow-lg">

            {/* Content */}
            <div className="z-10 flex flex-col gap-6 p-6 h-full">
              <div>
                <h2 className="text-4xl font-bold text-[#084E75] leading-12">Strategic financial guidance for business growth and clarity</h2>
              </div>
              <div>
                <Image src={AboutUsThree} alt="About Section" className="object-cover h-120"/>
              </div>
            </div>
          </div>
          <div className="relative h-150 rounded-4xl overflow-hidden shadow-lg">
            {/* Background Image */}
            <Image
              src={AboutUsTwo}
              alt="About Section"
              fill
              className="object-cover"
              priority
            />

            {/* Optional Dark Overlay */}
            <div className="absolute inset-0 bg-black/40"></div>

            {/* Content */}
            <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 text-center">
              <h2 className="max-w-4xl text-5xl font-bold leading-tight text-white mb-8">
                Leading the Future of Financial Advisory for Businesses
              </h2>

              <Link href="/contact" className="rounded-full text-white flex gap-1 items-center">Get Started <IconChevronRight size={18}/></Link>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-20">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-20 text-center"
          >
            <h3 className="text-4xl font-semibold text-[#084E75]">
              Mission, Vision & Aim
            </h3>
          </motion.div>

          <div className="mb-20 grid gap-6 md:grid-cols-3">
            {aboutPillars.map((pillar, i) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group relative overflow-hidden rounded-4xl bg-linear-to-br from-[#084E75]/10 from-50% to-[#8D1821]/10 p-8 transition-all duration-300 hover:-translate-y-1 hover:border-[#084E75]/25 hover:shadow-xl hover:shadow-[#084E75]/10"
              >
                <span className="absolute right-6 top-6 font-mono text-4xl font-bold text-[#084E75]/10">
                  {pillar.number}
                </span>
                <div className="relative mb-6 flex size-14 items-center justify-center rounded-2xl bg-[#084E75] text-white shadow-lg shadow-[#084E75]/20 transition-transform duration-300 group-hover:scale-105">
                  <pillar.icon className="size-7" stroke={1.5} />
                </div>
                <h4 className="relative mb-3 text-3xl font-bold text-[#084E75]">{pillar.title}</h4>
                <p className="relative text-lg text-black">{pillar.text}</p>
              </motion.div>
            ))}
          </div>

        </div>
      </section>

      <section className="pb-20 pt-0">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative overflow-hidden rounded-4xl bg-[#084E75] px-8 py-12 md:px-14 md:py-14"
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
              <Link href="/#contact" className="group inline-flex shrink-0 items-center gap-2 rounded-4xl bg-white px-8 py-4 text-base font-semibold text-[#084E75] transition-all shadow-[5px_5px] shadow-white/50">
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
