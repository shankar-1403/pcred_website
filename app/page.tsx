"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import {IconArrowRight,IconArrowUpRight,IconBuilding,IconBuildingBank,IconChartBar,IconChartBarPopular,IconChartHistogram,IconCheck,IconChevronLeft,IconChevronRight,IconCircleDashedCheck,IconClock,IconHeartHandshake,IconMail,IconMap2,IconMapPin,IconPhone,IconQuote,IconRefresh,IconRocket,IconSend,IconSparkles,IconStarFilled,IconTargetArrow,IconUsersGroup,} from "@tabler/icons-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import logo from "@/public/logo.png";
import aboutImage from "@/public/who_we_are.webp";
import about from "@/public/img2.webp";
import intro from "@/public/intro_img.png";
import { SpinningText } from "@/components/ui/spinning-text";

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

const approachAreas = [
  {
    title: "Funding Strategy",
    description: "Structure capital for sustainable growth",
    icon: IconChartBar,
  },
  {
    title: "Risk Management",
    description: "Identify and mitigate financial exposure",
    icon: IconCircleDashedCheck,
  },
  {
    title: "Growth Planning",
    description: "Scale operations with strategic clarity",
    icon: IconTargetArrow,
  },
  {
    title: "IPO Readiness",
    description: "Prepare confidently for public markets",
    icon: IconBuildingBank,
  },
];

const advisoryFeatures = [
  {
    title: "Funding",
    description: "Strategic capital solutions to fuel your growth.",
    icon: IconChartBar,
  },
  {
    title: "Governance",
    description: "Strong governance today, sustainable tomorrow.",
    icon: IconCircleDashedCheck,
  },
  {
    title: "IPO Readiness",
    description: "Prepare today for a successful tomorrow.",
    icon: IconBuildingBank,
  },
];

const pillars = [
  {
    title: "Strategic Thinking",
    description:
      "Every successful business reaches moments where the right financial decision changes everything.",
    icon: IconTargetArrow,
  },
  {
    title: "Financial Expertise",
    description:
      "Deep capital markets, governance, and growth knowledge that turns complexity into clear decisions.",
    icon: IconChartBarPopular,
  },
  {
    title: "Execution Driven",
    description:
      "From capital raise to IPO readiness, we stay embedded with your leadership until results land.",
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

            <p className="max-w-2xl text-lg leading-relaxed text-white/85 md:text-2xl">Strategic Financial Advisory Solutions Designed to Strengthen and Scale Businesses</p>
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

      {/* Intro Section — Corporate Advisory */}
      <section className="bg-white py-16 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl bg-white"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative flex min-h-72 items-center justify-center overflow-hidden lg:min-h-full lg:p-10">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30"
                />
                <Image
                  src={about}
                  alt="PCRED corporate advisory"
                  className="relative z-10 w-full object-contain"
                  priority
                />

                <motion.div initial={{ x: -15 }}
                  animate={{ x: [0, 15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }} className="absolute bottom-20 left-100 z-20 flex max-w-56 items-start gap-3 rounded-2xl border border-white/15 bg-white/70 p-3 backdrop-blur-lg">
                  <IconUsersGroup className="mt-0.5 size-5 shrink-0 text-[#084E75]" stroke={1.5} />
                  <p className="text-xs leading-relaxed text-[#084E75]">
                    Partnering with founders and leadership teams across India.
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center p-8 md:p-10 lg:p-12">
                <h2 className="mt-5 text-3xl font-bold leading-12 text-[#084E75] md:text-4xl">
                  Building Stronger Businesses.
                  <span className="mt-1 block bg-linear-to-r from-[#DDB162] to-[#b8892e] bg-clip-text font-bold text-transparent">
                    Creating Lasting Value.
                  </span>
                </h2>

                <p className="mt-5 text-sm leading-relaxed text-[#084E75] md:text-base">
                  PCRED is a leading Corporate Advisory firm helping businesses across India
                  make smarter financial decisions, unlock growth opportunities, and build
                  sustainable enterprises.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  {advisoryFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex flex-col gap-3 p-4"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-full border border-[#084E75] text-[#084E75]">
                          <Icon size={18} stroke={1.5} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-[#084E75]">{feature.title}</p>
                          <p className="mt-0.5 text-xs leading-relaxed text-[#084E75]/55">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                <div className="mt-8 flex gap-3">
                  <Link href="/contact" className="group flex items-center justify-between rounded-4xl bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-4 pr-2 py-2 text-white shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-50 text-sm">Talk to an Advisor
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <IconArrowRight className="size-4" color="#DDB162" />
                    </span>
                  </Link>

                  <Link href="/contact" className="group flex items-center justify-between rounded-4xl border border-[#084E75]/15 bg-white pl-4 pr-2 py-2 text-[#084E75] shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-50 text-sm">Our Services
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <IconArrowRight className="size-4" color="#DDB162" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative h-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: "url('/bg_webpattern.webp')" }}>
        <div className="relative mx-auto max-w-7xl py-24">
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0, x: -28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162] mb-4">
                <span className="size-2 rounded-full bg-[#DDB162]" />
                Who We Are
              </span>

              <h3 className="text-4xl font-semibold leading-12 text-white md:text-4xl lg:text-4xl">
                Strategic Advisors for Businesses
                <br />
                <span className="text-[#DDB162]">That Think Long-Term</span>
              </h3>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">Every successful business reaches moments where the right financial decision changes everything.</p>

              <Link href="/contact" className="group flex items-center justify-between rounded-4xl bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-4 pr-2 py-2 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg w-50 text-sm mt-14">Discover Our Story
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <IconArrowRight className="size-4" color="#DDB162" />
                </span>
              </Link>
              <div className="absolute right-8">
                <SpinningText>Years of Experience • Years of Experience •</SpinningText>
                <div className="absolute -top-11 -right-11 bg-[#DDB162] w-22 h-22 flex justify-center items-center rounded-full">
                  <span className="text-white text-4xl font-bold">16+</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 28 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-4 rounded-4xl border border-[#DDB162]/30" />
              <div className="relative overflow-hidden rounded-3xl shadow-2xl shadow-black/30">
                <Image
                  src={aboutImage}
                  alt="PCRED advisory team"
                  className="aspect-7/5 w-full object-cover"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#084E75] via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Business Lifecycle */}
      <section className="bg-white py-24 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex justify-center items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
                <span className="size-2 rounded-full bg-[#DDB162]" />
                Business Lifecycle
              </span>
              <h5 className="text-4xl font-semibold leading-14 text-[#084E75]">
                One Advisory Partner.
                <br />
                <span className="text-[#DDB162]">Every stage of growth.</span>
              </h5>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-base leading-relaxed text-[#084E75]/70 md:text-lg mt-6"
            >From ambitious startups to established enterprises, we support businesses throughout their journey with strategic financial guidance and corporate advisory.</motion.p>
          </div>
          
          {/* Desktop Curved Roadmap */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative mt-24 hidden lg:block"
          >
            {/* Curved SVG */}
            <svg
              className="absolute left-0 top-0 h-[260px] w-full"
              viewBox="0 0 1200 260"
              preserveAspectRatio="none"
            >
              <defs>
                <linearGradient id="roadmapGradient" x1="0%" y1="0%" x2="100%">
                  <stop offset="0%" stopColor="#DDB162" />
                  <stop offset="100%" stopColor="#084E75" />
                </linearGradient>
              </defs>

              <path
                d="
                  M70 130
                  C150 35 250 35 330 130
                  S510 225 590 130
                  S770 35 850 130
                  S1030 225 1130 130
                "
                fill="none"
                stroke="url(#roadmapGradient)"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray="8 8"
              />
            </svg>

            {/* Cards */}
            <div className="relative flex justify-between">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <motion.div
                    key={stage.title}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: index * 0.08,
                      duration: 0.45,
                    }}
                    className={`flex w-48 flex-col items-center ${
                      index % 2 === 0 ? "translate-y-16" : "-translate-y-16"
                    }`}
                  >
                    {/* Icon */}
                    <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#084E75] text-white shadow-xl ring-4 ring-white">
                      <Icon size={24} stroke={1.6} />
                    </div>

                    {/* Step */}
                    <span className="mt-3 text-[11px] font-bold uppercase tracking-[0.25em] text-[#DDB162]">
                      Step {index + 1}
                    </span>

                    {/* Title */}
                    <h5 className="mt-2 text-center text-lg font-semibold text-[#084E75]">
                      {stage.title}
                    </h5>

                    {/* Description */}
                    <p className="mt-2 text-center text-sm leading-relaxed text-[#084E75]/65">
                      {stage.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
          {/* Desktop roadmap */}
          {/* <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="relative mt-16 hidden lg:block"
          >
            <div className="absolute left-[8.333%] right-[8.333%] top-6 h-0.5 overflow-hidden rounded-full bg-[#084E75]/12">
              <div className="lifecycle-roadmap-beam-x absolute top-0 h-full w-[12.5%] min-w-16 rounded-full bg-linear-to-r from-transparent via-[#DDB162] to-transparent shadow-[0_0_16px_rgba(221,177,98,0.85)]" />
            </div>

            <div className="relative flex">
              {stages.map((stage, index) => {
                const Icon = stage.icon;

                return (
                  <div
                    key={stage.title}
                    className="flex flex-1 flex-col items-center px-3"
                  >
                    <div
                      className={`relative z-10 flex size-12 items-center justify-center rounded-full shadow-md ring-4 ring-white bg-[#084E75] text-white`}
                    >
                      <Icon size={22} stroke={1.5} />
                    </div>

                    <span className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[#DDB162]">
                      Step {index + 1}
                    </span>
                    <h5 className="mt-2 text-center text-base font-semibold text-[#084E75]">
                      {stage.title}
                    </h5>
                    <p className="mt-1.5 max-w-36 text-center text-sm leading-relaxed text-[#084E75]/60">
                      {stage.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.div> */}

          {/* Tablet — 2×3 grid */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="mt-12 hidden gap-5 sm:grid-cols-2 md:grid lg:hidden"
          >
            {stages.map((stage, index) => {
              const Icon = stage.icon;
              const isLast = index === stages.length - 1;

              return (
                <div
                  key={stage.title}
                  className={`flex gap-4 rounded-2xl border p-5 ${
                    isLast
                      ? "border-[#DDB162]/30 bg-[#DDB162]/5 sm:col-span-2"
                      : "border-[#084E75]/10 bg-[#f8fafb]"
                  }`}
                >
                  <div
                    className={`flex size-11 shrink-0 items-center justify-center rounded-xl ${
                      isLast ? "bg-[#DDB162] text-[#084E75]" : "bg-[#084E75] text-white"
                    }`}
                  >
                    <Icon size={22} stroke={1.5} />
                  </div>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#DDB162]">
                      Step {index + 1}
                    </span>
                    <h5 className="mt-0.5 font-semibold text-[#084E75]">{stage.title}</h5>
                    <p className="mt-1 text-sm text-[#084E75]/65">{stage.description}</p>
                  </div>
                </div>
              );
            })}
          </motion.div> */}

          {/* Mobile — vertical timeline */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative mt-12 md:hidden"
          >
            <div className="absolute bottom-4 left-6 top-4 w-0.5 overflow-hidden rounded-full bg-[#084E75]/15">
              <div className="lifecycle-roadmap-beam-y absolute left-0 h-[12.5%] min-h-16 w-full rounded-full bg-linear-to-b from-transparent via-[#DDB162] to-transparent shadow-[0_0_16px_rgba(221,177,98,0.85)]" />
            </div>

            <div className="space-y-8">
              {stages.map((stage, index) => {
                const Icon = stage.icon;
                const isLast = index === stages.length - 1;

                return (
                  <div key={stage.title} className="relative flex gap-5 pl-1">
                    <div
                      className={`relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full ring-4 ring-white ${
                        isLast
                          ? "bg-[#DDB162] text-[#084E75] shadow-md shadow-[#DDB162]/30"
                          : "bg-[#084E75] text-white shadow-md"
                      }`}
                    >
                      <Icon size={22} stroke={1.5} />
                    </div>
                    <div className="pt-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-[#DDB162]">
                        Step {index + 1}
                      </span>
                      <h5 className="mt-1 font-semibold text-[#084E75]">{stage.title}</h5>
                      <p className="mt-1 text-sm leading-relaxed text-[#084E75]/65">
                        {stage.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div> */}
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

            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162] mb-4">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Strategic Advantage
            </span>

            <h5 className="text-4xl font-semibold leading-14 text-white">
              Trusted by Businesses.
              <br />
              <span className="text-[#DDB162]">Driven by Results.</span>
            </h5>
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
                    <h5 className="text-xl font-semibold text-white md:text-xl">
                      {item.title}
                    </h5>
                    <p className="mt-3 text-base leading-relaxed text-white/70">
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
      <section className="relative bg-[#084E75]/5 py-20 md:py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden rounded-3xl border border-[#084E75]/10 bg-white shadow-xl shadow-[#084E75]/8"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#DDB162]/10 blur-2xl" />

            <div className="grid items-center lg:grid-cols-2">
              <div className="p-8 md:p-10 lg:p-12">
                <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162]">
                  <span className="size-1.5 rounded-full bg-[#DDB162]" />
                  Our Approach
                </span>

                <h5 className="mt-4 text-3xl font-bold text-[#084E75] md:text-4xl">
                  Proactive Financial{" "}
                  <span className="text-[#DDB162]">Expertise</span>
                </h5>

                <p className="mt-5 text-base leading-relaxed text-[#084E75]/70">
                  Tailored financial solutions designed to help MSMEs and businesses
                  improve stability, optimize performance, and achieve sustainable
                  growth.
                </p>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {approachAreas.map((area) => (
                    <div
                      key={area.title}
                      className="rounded-xl border border-[#084E75]/10 bg-[#084E75]/5 px-3.5 py-2.5 text-sm font-medium text-[#084E75] transition-colors hover:border-[#DDB162]/35 hover:bg-[#DDB162]/10"
                    >
                      {area.title}
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative h-56 sm:h-64 lg:h-full lg:min-h-105">
                <Image
                  src={intro}
                  alt="Financial expertise"
                  className="h-full w-full object-cover lg:absolute lg:inset-0"
                />
                <div className="absolute inset-0 bg-linear-to-r from-white via-white/40 to-transparent lg:from-white lg:via-white/20" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-cover bg-fixed bg-center bg-no-repeat py-14 md:py-14"
        style={{ backgroundImage: "url('/cta-background.png')" }}
      >
        <div className="absolute inset-0 bg-[#084E75]/88" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(221,177,98,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h5 className="text-3xl font-semibold leading-14 text-white md:text-4xl">
              Ready to strengthen your business finances?
            </h5>
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
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#DDB162] bg-[#DDB162] px-8 py-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
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
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162] mb-4">
                <span className="size-1.5 rounded-full bg-[#DDB162]" />
                Client Stories
              </span>

              <h5 className="text-3xl font-semibold leading-14 text-[#084E75] md:text-4xl">
                Trusted by Businesses
                <br />
                <span className="text-[#DDB162]">Across India</span>
              </h5>
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
            <h5 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-4xl text-[#084E75]">
              {"Let's Start a Conversation"}
            </h5>
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
                <h5 className="text-2xl font-semibold">Ready to Move Your Business Forward?</h5>
                <p className="mt-3 text-white/70">Our advisors are here to help you navigate your next financial milestone.</p>
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
                  <h5 className="text-2xl font-bold text-[#084E75]">
                    Message Sent!
                  </h5>
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
