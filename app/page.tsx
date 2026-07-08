"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {IconArrowRight,IconArrowUpRight,IconBuilding,IconBuildingBank,IconChartBar,IconChartBarPopular,IconChartHistogram,IconCheck,IconChevronLeft,IconChevronRight,IconCircleDashedCheck,IconClock,IconHeartHandshake,IconMail,IconMap2,IconMapPin,IconPhone,IconQuote,IconRefresh,IconRocket,IconSend,IconSparkles,IconStarFilled,IconTargetArrow,IconUsersGroup,} from "@tabler/icons-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import logo from "@/public/logo.png";
import aboutImage from "@/public/aboutpage2.png";
import aboutImageThree from "@/public/aboutpage3.png";
import intro from "@/public/intro_img.png";

const achievements = [
  { id: 1, value: "322cr", label: "Total Disbursement" },
  { id: 2, value: "16+", label: "Years of Experience" },
  { id: 3, value: "1600+", label: "Satisfied Customers" },
];

const reviews = [
  {
    id: 1,
    quote:
      "PCRED helped us streamline our finances and plan growth more confidently.",
    name: "Arvind Mehra",
    role: "Founder",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Their financial guidance was practical, transparent, and truly business-focused.",
    name: "Neha Agarwal",
    role: "Director",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "PCRED understands MSME challenges and delivers solutions that actually work.",
    name: "Amit Kulkarni",
    role: "Managing Partner",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Professional support and smooth execution throughout the entire advisory process.",
    name: "Priya Nair",
    role: "Founder",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "Their strategic insights helped us improve financial stability and planning.",
    name: "Sandeep Mehta",
    role: "CEO",
    rating: 5,
  },
  {
    id: 6,
    quote: "Reliable financial advisory backed by strong business understanding.",
    name: "Rohan Shah",
    role: "Co-Founder",
    rating: 5,
  },
  {
    id: 7,
    quote: "PCRED made our funding and expansion process much more structured.",
    name: "Kunal Arora",
    role: "Director",
    rating: 5,
  },
  {
    id: 8,
    quote:
      "The team provided personalized guidance aligned with our business goals.",
    name: "Aditi Deshmukh",
    role: "Founder",
    rating: 5,
  },
  {
    id: 9,
    quote:
      "Their structured financial approach helped us plan growth more effectively.",
    name: "Vivek Jain",
    role: "Managing Director",
    rating: 5,
  },
  {
    id: 10,
    quote: "Transparent communication and dependable support at every stage.",
    name: "Pooja Malhotra",
    role: "Operations Head",
    rating: 5,
  },
  {
    id: 11,
    quote:
      "PCRED simplified complex financial decisions and made the process seamless.",
    name: "Harsh Vardhan",
    role: "Founder",
    rating: 5,
  },
];

const stages = [
  {
    title: "Start",
    description: "Lay the right foundation",
    icon: IconRocket,
  },
  {
    title: "Build",
    description: "Strengthen your business model",
    icon: IconBuilding,
  },
  {
    title: "Grow",
    description: "Accelerate revenue growth",
    icon: IconChartBar,
  },
  {
    title: "Scale",
    description: "Expand operations and capabilities",
    icon: IconChartHistogram,
  },
  {
    title: "Transform",
    description: "Drive innovation and efficiency",
    icon: IconRefresh,
  },
  {
    title: "IPO",
    description: "Prepare for public markets",
    icon: IconBuildingBank,
  },
];

const pillars = [
  {
    title: "Strategic Thinking",
    description: "Every successful business reaches moments where the right financial decision changes everything.",
    icon: IconTargetArrow,
  },
  {
    title: "Financial Expertise",
    description: "At PCRED, we combine strategic thinking, financial expertise, and execution-driven advisory to help businesses overcome challenges, accelerate growth, and create long-term enterprise value.",
    icon: IconChartBarPopular,
  },
  {
    title: "Execution Driven",
    description: "Whether you're raising capital, strengthening financial operations, expanding into new markets, or preparing for your next milestone, we become an extension of your leadership team.",
    icon: IconCircleDashedCheck,
  },
];

const features = [
  {
    title: "Strategic Perspective",
    description:
      "Financial advice aligned with long-term business objectives.",
    icon: IconTargetArrow,
  },
  {
    title: "Execution Excellence",
    description: "Turning strategies into measurable business outcomes.",
    icon: IconChartBar,
  },
  {
    title: "Pan-India Reach",
    description: "Supporting businesses across industries throughout India.",
    icon: IconMap2,
  },
  {
    title: "Industry Expertise",
    description:
      "Deep understanding of finance, governance, capital, and business growth.",
    icon: IconUsersGroup,
  },
  {
    title: "Relationship-Driven",
    description:
      "Long-term partnerships built on trust, transparency, and performance.",
    icon: IconHeartHandshake,
  },
];

const contactServices = [
  "Capital Market Advisory",
  "Debt Advisory",
  "Virtual CFO Services",
  "IPO Advisory",
  "Investment Strategy Consulting",
  "Other",
];

const contactInfo = [
  {
    icon: IconPhone,
    label: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: IconMail,
    label: "Email",
    value: "contact@pcred.org",
    href: "mailto:contact@pcred.org",
  },
  {
    icon: IconMapPin,
    label: "Office",
    value: "Mumbai, Maharashtra, India",
    href: undefined as string | undefined,
  },
  {
    icon: IconClock,
    label: "Hours",
    value: "Mon – Sat, 9:00 AM – 6:00 PM",
    href: undefined as string | undefined,
  },
];

const inputClass =
  "w-full rounded-2xl border border-[#084E75]/15 bg-white px-4 py-3.5 text-[#084E75] placeholder:text-[#084E75]/50 outline-none transition-all duration-200 focus:border-[#084E75] focus:ring-2 focus:ring-[#084E75]/15";

export default function Home() {
  const [activeReview, setActiveReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);

  const goToReview = useCallback(
    (index: number) => {
      setReviewDirection(index > activeReview ? 1 : -1);
      setActiveReview(index);
    },
    [activeReview]
  );

  const goNextReview = useCallback(() => {
    setReviewDirection(1);
    setActiveReview((prev) => (prev + 1) % reviews.length);
  }, []);

  const goPrevReview = useCallback(() => {
    setReviewDirection(-1);
    setActiveReview((prev) => (prev - 1 + reviews.length) % reviews.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(goNextReview, 6000);
    return () => clearInterval(timer);
  }, [goNextReview]);

  const activeReviewData = reviews[activeReview];
  const reviewInitials = activeReviewData.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const FeaturedIcon = pillars[0].icon;

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end overflow-hidden">
        <video
          src="/banner.webm"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#084E75]/90" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(221,177,98,0.15),transparent_50%)]" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 pb-24 pt-32 md:gap-8 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-end gap-3 md:gap-4">
             
              <h1 className="flex flex-wrap items-end gap-x-1 text-3xl font-bold uppercase tracking-tight text-white md:text-6xl lg:text-7xl">
                <div className="mb-2">
                  <Image src={logo} alt="PCRED" width={56} height={56} />
                </div>
                <DiaTextReveal
                  repeat
                  duration={1.8}
                  repeatDelay={1}
                  text={["ERSISTANCE", "LANNING", "ERFORMANCE"]}
                />
              </h1>
            </div>

            <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">
              Strategic Financial Advisory Solutions Designed to Strengthen and
              Scale Businesses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 rounded-full bg-[#084E75] px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#084E75]/40 transition-all hover:-translate-y-0.5 hover:bg-[#0a5d8a] hover:shadow-xl"
            >
              Our Services
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/blogs"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#DDB162] bg-[#DDB162]/90 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-[#DDB162] hover:shadow-lg hover:shadow-[#DDB162]/30"
            >
              Our Blogs
              <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Intro Section */}
      <section className="relative overflow-hidden">
        {/* Right half — full-bleed image */}
        <div className="absolute inset-y-0 right-0 hidden w-[48%] lg:block">
          <div className="relative h-full w-full">
          <Image
            src={aboutImageThree}
            alt="PCRED advisory"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-l from-[#084E75]/80 via-[#084E75]/40 to-transparent" />
          </div>
        </div>

        <div className="relative mx-auto max-w-7xl py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
            {/* Left — headline */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative z-10"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="h-px w-12 bg-[#DDB162]" />
                <span className="text-xs font-semibold uppercase tracking-[0.25em] text-[#084E75]/60">
                  Corporate Advisory
                </span>
              </div>

              <h2 className="text-4xl font-bold leading-14 text-[#084E75]">
                Building Stronger Businesses. <br/>
                <span className="mt-3 text-4xl font-semibold text-[#DDB162] md:text-4xl">
                  Creating Lasting Value.
                </span>
              </h2>
              

              <p className="mt-8 max-w-md text-base leading-relaxed text-[#084E75]/70 md:text-lg">
                Strategic financial guidance for founders, promoters, and leadership
                teams — from startup to scale, expansion to IPO.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  href="/about-us"
                  className="group inline-flex items-center gap-2 rounded-full bg-[#084E75] px-7 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-[#0a5d8a] hover:shadow-lg hover:shadow-[#084E75]/25"
                >
                  Talk to an Advisor
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/about-us"
                  className="group inline-flex items-center gap-2 rounded-full border-2 border-[#084E75]/20 bg-transparent px-7 py-3.5 text-sm font-semibold text-[#084E75] transition-all hover:border-[#084E75] hover:bg-[#084E75]/5"
                >
                  Explore Our Expertise
                  <IconArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            {/* Right — floating glass card (over image on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="relative z-10 lg:-ml-8"
            >
              {/* Mobile image */}
              <div className="relative mb-6 h-52 overflow-hidden rounded-2xl lg:hidden">
                <Image
                  src={aboutImageThree}
                  alt="PCRED advisory"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#084E75]/40" />
              </div>

              <div className="rounded-3xl border border-white/60 bg-white/80 p-8 shadow-2xl shadow-[#084E75]/10 backdrop-blur-xl md:p-10">
                <p className="text-base leading-relaxed text-[#084E75]/85 md:text-lg">
                  PCRED is a leading Corporate Advisory firm helping businesses
                  across India make smarter financial decisions, unlock growth
                  opportunities, and build sustainable enterprises.
                </p>
                <p className="mt-4 text-base leading-relaxed text-[#084E75]/70">
                  We partner with founders, promoters, CFOs, and leadership teams
                  to navigate every stage of business growth.
                </p>

                <div className="mt-8 flex items-center gap-6 border-t border-[#084E75]/10 pt-8">
                  {achievements.map((stat, i) => (
                    <div
                      key={stat.id}
                      className={`flex-1 text-center ${
                        i < achievements.length - 1
                          ? "border-r border-[#084E75]/10"
                          : ""
                      }`}
                    >
                      <p className="text-2xl font-bold text-[#084E75]">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[10px] font-medium uppercase tracking-wider text-[#084E75]/50">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative overflow-hidden bg-[#084E75] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(221,177,98,0.18),transparent)]" />
        <div className="pointer-events-none absolute -left-24 top-1/3 size-72 rounded-full bg-[#5BBCEB]/10 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-96 rounded-full bg-[#DDB162]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="max-w-3xl mx-auto text-center mx-auto"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
                <span className="h-px w-8 bg-[#DDB162]" />
                Who We Are
                <span className="h-px w-8 bg-[#DDB162]" />
              </span>
              <h2 className="mt-4 font-semibold leading-14 text-4xl text-white">
                Strategic Advisors for Businesses That Think
                <span className="text-[#DDB162]"> Long-Term</span>
              </h2>
            </motion.div>
          </motion.div>

          <div className="mt-16 grid gap-4 lg:grid-cols-12 lg:grid-rows-[auto_auto]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="group relative lg:col-span-5 lg:row-span-2"
            >
              <div className="absolute -inset-px rounded-3xl bg-linear-to-br from-[#DDB162]/60 to-[#5BBCEB]/30 opacity-60 blur-sm transition-opacity group-hover:opacity-100" />
              <div className="relative flex h-full min-h-80 flex-col justify-between overflow-hidden rounded-3xl border border-white/10 bg-linear-to-br from-[#084E75] via-[#0a5d8a] to-[#063a57] p-7 md:p-8">
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full border border-white/10" />
                <div className="pointer-events-none absolute -bottom-20 -left-10 size-56 rounded-full bg-[#DDB162]/10 blur-2xl" />

                <div className="relative">
                  <div className="mt-4 inline-flex rounded-2xl bg-[#DDB162] p-4 text-[#084E75] shadow-lg shadow-[#DDB162]/30">
                    <FeaturedIcon size={32} stroke={1.5} />
                  </div>
                </div>

                <div className="relative mt-6">
                  <h3 className="text-2xl font-semibold text-white md:text-3xl">
                    {pillars[0].title}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-white/70 md:text-base">
                    {pillars[0].description}
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="group relative overflow-hidden rounded-3xl lg:col-span-4 lg:row-span-2"
            >
              <Image
                src={aboutImage}
                alt="PCRED advisory team"
                className="h-full min-h-70 w-full object-cover transition-transform duration-700 group-hover:scale-105 lg:min-h-full"
              />
              <div className="absolute inset-0 bg-linear-to-t from-[#084E75]/90 via-[#084E75]/30 to-transparent" />

              <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-7">
                <div className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-md">
                  <p className="text-sm font-medium leading-relaxed text-white/90">
                    &ldquo;We become an extension of your leadership team - from capital raise to IPO readiness.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-4 lg:col-span-3 lg:row-span-2"
            >
              {pillars.slice(1).map((pillar, index) => {
                const Icon = pillar.icon;
                const isGold = index === 2;

                return (
                  <motion.div
                    key={pillar.title}
                    whileHover={{ y: -3, scale: 1.01 }}
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                    className="group relative flex-1"
                  >
                    <div
                      className={`relative flex h-full flex-col overflow-hidden rounded-3xl border p-5 shadow-lg transition-all duration-300 group-hover:shadow-xl sm:p-5 ${
                        isGold
                          ? "border-[#DDB162]/30 bg-linear-to-br from-[#DDB162]/15 to-white hover:border-[#DDB162]/50"
                          : "border-white/20 bg-white/95 hover:border-white/40"
                      }`}
                    >
                      <div className="flex items-start justify-between">
                        <div
                          className={`inline-flex rounded-xl p-2.5 transition-all duration-300 group-hover:scale-110 ${
                            isGold
                              ? "bg-[#DDB162] text-[#084E75]"
                              : "bg-[#084E75]/10 text-[#084E75] group-hover:bg-[#084E75] group-hover:text-white"
                          }`}
                        >
                          <Icon size={20} stroke={1.5} />
                        </div>
                      </div>

                      <h3 className="mt-3 text-sm font-semibold text-[#084E75] sm:text-base">
                        {pillar.title}
                      </h3>
                      <p className="mt-1 text-xs leading-relaxed text-[#084E75]/60 sm:text-sm">
                        {pillar.description}
                      </p>

                      <div
                        className={`mt-3 h-0.5 w-6 rounded-full transition-all duration-300 group-hover:w-12 ${
                          isGold
                            ? "bg-[#DDB162]"
                            : "bg-[#084E75]/20 group-hover:bg-[#084E75]"
                        }`}
                      />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Lifecycle Section */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-center mx-auto"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
              <span className="h-px w-8 bg-[#DDB162]" />
              Business Lifecycle
              <span className="h-px w-8 bg-[#DDB162]" />
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-14 text-[#084E75]">
              One Advisory Partner.
              <br />
              <span className="text-[#DDB162]">Every Stage of Growth.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed md:text-lg text-[#084E75]/80">
              From ambitious startups to established enterprises, we support businesses throughout their journey with strategic financial guidance and corporate advisory.
            </p>
          </motion.div>

          <div className="relative mt-16 md:mt-20">
            <div className="absolute left-0 right-0 top-10 hidden h-px bg-linear-to-r from-transparent via-[#DDB162] to-transparent lg:block" />

            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 lg:gap-6">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="group flex flex-col items-center text-center"
                  >
                    <div className="relative z-10 flex size-20 items-center justify-center rounded-2xl border-2 border-[#DDB162]/30 bg-white shadow-lg transition-all duration-300 group-hover:-translate-y-2 group-hover:border-[#DDB162] group-hover:shadow-xl group-hover:shadow-[#DDB162]/20">
                      <Icon size={32} className="text-[#084E75]" />
                      <span className="absolute -right-1 -top-1 flex size-6 items-center justify-center rounded-full bg-[#DDB162] text-[10px] font-bold text-white">
                        {index + 1}
                      </span>
                    </div>
                    <h3 className="mt-5 text-lg font-semibold text-[#084E75]">
                      {stage.title}
                    </h3>
                    <p className="mt-2 max-w-37.5 text-sm text-[#084E75]/60">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 overflow-hidden rounded-3xl border border-[#084E75]/10 bg-linear-to-r from-[#F8FAFD] to-white p-8 shadow-lg md:flex md:items-center md:gap-8 md:p-10"
          >
            <div className="mb-6 flex size-16 shrink-0 items-center justify-center rounded-2xl bg-[#084E75] md:mb-0">
              <IconTargetArrow className="text-white" size={30} />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#084E75]">
                Strategic Financial Guidance
              </h3>
              <p className="mt-3 leading-relaxed text-[#084E75]/80">
                Because every stage of growth deserves the right financial
                strategy. We help businesses navigate challenges, unlock
                opportunities, and prepare confidently for the next milestone.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-[#084E75] py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-52 -top-52 size-150 rounded-full border border-[#DDB162]" />
          <div className="absolute -bottom-52 -left-52 size-125 rounded-full border border-[#DDB162]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(221,177,98,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mb-14"
          >
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
              <span className="h-px w-8 bg-[#DDB162]" />
              Strategic Advantage
            </span>
            <h2 className="mt-4 text-4xl font-semibold leading-14 text-white">
              Trusted by Businesses.
              <br />
              <span className="text-[#DDB162]">Driven by Results.</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed md:text-lg text-white/70">
              We combine strategic financial insight with deep industry expertise to help businesses achieve sustainable growth, stronger governance, and measurable outcomes.
            </p>
          </motion.div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {features.map((item, index) => {
              const Icon = item.icon;
              const isFeatured = index === 0;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className={`group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#DDB162]/50 hover:bg-white/10 ${
                    isFeatured ? "md:col-span-2 lg:col-span-1" : ""
                  }`}
                >
                  <div className="absolute inset-0 bg-linear-to-br from-[#DDB162]/0 to-[#DDB162]/5 opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="relative">
                    <div className="mb-6 inline-flex rounded-2xl bg-[#DDB162] p-3.5 text-[#084E75]">
                      <Icon size={28} stroke={1.8} />
                    </div>
                    <h3 className="text-xl font-semibold text-white md:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-3 leading-relaxed text-white/70">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative bg-[#084E75]/5 py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-3xl border border-[#084E75]/10 bg-white shadow-xl"
          >
            <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-[#DDB162]/10 blur-2xl" />
            <div className="pointer-events-none absolute -bottom-20 -left-20 size-72 rounded-full bg-[#084E75]/5 blur-2xl" />

            <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
              <div className="p-8 md:p-12 lg:p-14">
                <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
                  Our Approach
                </span>
                <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#084E75] md:text-4xl">
                  Proactive Financial Expertise
                </h2>
                <p className="mt-5 text-base leading-relaxed text-[#084E75]/80 md:text-lg">
                  Tailored financial solutions designed to help MSMEs and
                  businesses improve stability, optimize performance, and achieve
                  sustainable growth.
                </p>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {["Funding Strategy", "Risk Management", "Growth Planning", "IPO Readiness"].map(
                    (tag) => (
                      <div
                        key={tag}
                        className="rounded-2xl border border-[#084E75]/10 bg-[#084E75]/5 px-4 py-3 text-sm font-medium text-[#084E75]"
                      >
                        {tag}
                      </div>
                    )
                  )}
                </div>
              </div>

              <div className="relative h-64 lg:h-full lg:min-h-[420px]">
                <Image
                  src={intro}
                  alt="Financial expertise"
                  className="h-full w-full object-cover lg:absolute lg:inset-0"
                />
                <div className="absolute inset-0 bg-linear-to-r from-white via-transparent to-transparent lg:block" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden bg-[#084E75] py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(221,177,98,0.12),transparent_60%)]" />

        <div className="relative mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              Ready to strengthen your business finances?
            </h2>
            <p className="mt-3 text-lg text-white/70">
              Connect with our advisory team and discover solutions tailored to
              your growth goals.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#DDB162] bg-[#DDB162] px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-xl"
            >
              Get In Touch
              <IconArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[#5BBCEB]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 flex flex-col items-start justify-between gap-8 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
                Client Stories
              </span>
              <h2 className="mt-4 text-3xl font-semibold leading-tight text-[#084E75] md:text-4xl">
                Trusted by Businesses
                <br />
                <span className="text-[#DDB162]">Across India</span>
              </h2>
            </div>

            <div className="flex items-center gap-6 rounded-3xl border border-[#084E75]/10 bg-[#084E75]/5 px-6 py-4 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#084E75]">4.9</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="size-4 text-[#DDB162]" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-[#084E75]/15" />
              <div>
                <p className="text-2xl font-bold text-[#084E75]">1600+</p>
                <p className="text-sm text-[#084E75]/70">Satisfied Clients</p>
              </div>
            </div>
          </motion.div>

          <div className="relative">
            <div className="overflow-hidden">
              <AnimatePresence mode="wait" custom={reviewDirection}>
                <motion.div
                  key={activeReview}
                  custom={reviewDirection}
                  initial={{ opacity: 0, x: reviewDirection >= 0 ? 60 : -60 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: reviewDirection >= 0 ? -60 : 60 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                >
                  <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-[#084E75] to-[#0a5d8a] p-8 md:p-12">
                    <div className="pointer-events-none absolute -right-10 -top-10 size-40 rounded-full bg-white/5" />
                    <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-[#5BBCEB]/10" />

                    <div className="relative grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
                      <div>
                        <IconQuote className="mb-4 size-10 text-white/20" />
                        <p className="mb-6 text-lg leading-relaxed text-white/90 md:text-xl">
                          &ldquo;{activeReviewData.quote}&rdquo;
                        </p>
                        <div className="flex items-center gap-4">
                          <div className="flex size-12 items-center justify-center rounded-full bg-white/15 text-sm font-semibold text-white ring-2 ring-white/20">
                            {reviewInitials}
                          </div>
                          <div>
                            <p className="font-semibold text-white">
                              {activeReviewData.name}
                            </p>
                            <p className="text-sm text-white/60">
                              {activeReviewData.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5 md:flex-col">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <IconStarFilled
                            key={i}
                            className="size-5 text-[#DDB162]"
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="mt-8 flex items-center justify-between gap-4">
              <div className="flex gap-2">
                {reviews.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    aria-label={`Go to review ${i + 1}`}
                    onClick={() => goToReview(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === activeReview
                        ? "w-8 bg-[#084E75]"
                        : "w-2 bg-[#084E75]/25 hover:bg-[#084E75]/50"
                    }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={goPrevReview}
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 bg-white text-[#084E75] transition-all hover:bg-[#084E75] hover:text-white"
                >
                  <IconChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={goNextReview}
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 bg-white text-[#084E75] transition-all hover:bg-[#084E75] hover:text-white"
                >
                  <IconChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-[#084E75]/60">
              {String(activeReview + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 py-24 md:py-32"
      >
        <div className="pointer-events-none absolute -left-40 top-20 size-80 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mx-auto mb-14"
          >
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-5xl text-[#084E75]">
              {"Let&apos;s Start a Conversation"}
            </h2>
            <p className="mt-5 text-base leading-relaxed md:text-lg text-[#084E75]/80">
              Tell us about your business goals. Our advisory team will respond within one business day.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-6"
            >
              <div className="overflow-hidden rounded-3xl bg-linear-to-br from-[#084E75] to-[#0a5d8a] p-8 text-white shadow-xl">
                <h3 className="text-2xl font-semibold">
                  Ready to Move Your Business Forward?
                </h3>
                <p className="mt-3 text-white/70">
                  Our advisors are here to help you navigate your next financial
                  milestone.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 + i * 0.08 }}
                    className="group flex items-start gap-4 rounded-2xl border border-[#084E75]/10 bg-white p-5 shadow-sm transition-all duration-300 hover:border-[#084E75]/25 hover:shadow-md"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#084E75]/10 text-[#084E75] transition-colors group-hover:bg-[#084E75] group-hover:text-white">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#084E75]/60">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block font-medium text-[#084E75] hover:underline"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-medium text-[#084E75]">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-[#084E75]/10 bg-white p-8 shadow-xl md:p-10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-[420px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#084E75]/10 text-[#084E75]">
                    <IconCheck className="size-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#084E75]">
                    Message Sent!
                  </h3>
                  <p className="mt-3 max-w-sm text-[#084E75]/80">
                    Thank you for reaching out. Our team will get back to you
                    shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({
                        name: "",
                        email: "",
                        phone: "",
                        company: "",
                        service: "",
                        message: "",
                      });
                    }}
                    className="mt-8 cursor-pointer rounded-full border-2 border-[#084E75] px-6 py-3 text-sm font-semibold text-[#084E75] transition-colors hover:bg-[#084E75] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="name"
                        className="mb-2 block text-sm font-medium text-[#084E75]"
                      >
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleFormChange}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="mb-2 block text-sm font-medium text-[#084E75]"
                      >
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleFormChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label
                        htmlFor="phone"
                        className="mb-2 block text-sm font-medium text-[#084E75]"
                      >
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleFormChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="company"
                        className="mb-2 block text-sm font-medium text-[#084E75]"
                      >
                        Company
                      </label>
                      <input
                        id="company"
                        name="company"
                        type="text"
                        value={form.company}
                        onChange={handleFormChange}
                        placeholder="Your company name"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="service"
                      className="mb-2 block text-sm font-medium text-[#084E75]"
                    >
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleFormChange}
                      className={`${inputClass} cursor-pointer appearance-none`}
                    >
                      <option value="">Select a service</option>
                      {contactServices.map((s) => (
                        <option key={s} value={s}>
                          {s}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="mb-2 block text-sm font-medium text-[#084E75]"
                    >
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={handleFormChange}
                      placeholder="Tell us about your business needs and goals..."
                      className={`${inputClass} resize-none`}
                    />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#084E75] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#084E75]/25 transition-all duration-300 hover:bg-[#0a5d8a] hover:shadow-xl"
                  >
                    Send Message
                    <IconSend className="size-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
