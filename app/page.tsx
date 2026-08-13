"use client";

import { useCallback, useEffect, useState, type FormEvent } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowRight, IconBuilding, IconBuildingBank, IconChartBar, IconStar, IconStarHalfFilled, IconChartHistogram, IconCheck, IconChevronLeft, IconChevronRight, IconCircleDashedCheck, IconHeartHandshake, IconMap2, IconQuote, IconRefresh, IconRocket, IconSend, IconStarFilled, IconTargetArrow, IconUsersGroup, } from "@tabler/icons-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import logo from "@/public/logo.png";
import aboutImage from "@/public/who_we_are.webp";
import { SpinningText } from "@/components/ui/spinning-text";
import { LifecycleRoadmap } from "@/components/LifecycleRoadmap";
import { MobileLifecycleTimeline } from "@/components/MobileLifecycleTimeline";
import HorizontalAccordion from "@/components/ui/horizontalAccordion";
import { Marquee } from "@/components/ui/marquee";
import bank_1 from "@/public/banking_partners/banking_partners-01.webp";
import bank_2 from "@/public/banking_partners/banking_partners-02.webp";
import bank_3 from "@/public/banking_partners/banking_partners-03.webp";
import bank_4 from "@/public/banking_partners/banking_partners-04.webp";
import bank_5 from "@/public/banking_partners/banking_partners-05.webp";
import bank_6 from "@/public/banking_partners/banking_partners-06.webp";
import bank_7 from "@/public/banking_partners/banking_partners-07.webp";
import bank_8 from "@/public/banking_partners/banking_partners-08.webp";
import bank_9 from "@/public/banking_partners/banking_partners-09.webp";
import bank_10 from "@/public/banking_partners/banking_partners-10.webp";
import bank_11 from "@/public/banking_partners/banking_partners-11.webp";
import bank_12 from "@/public/banking_partners/banking_partners-12.webp";
import bank_13 from "@/public/banking_partners/banking_partners-13.webp";
import bank_14 from "@/public/banking_partners/banking_partners-14.webp";
import bank_15 from "@/public/banking_partners/banking_partners-15.webp";
import bank_16 from "@/public/banking_partners/banking_partners-16.webp";
import bank_17 from "@/public/banking_partners/banking_partners-17.webp";
import bank_18 from "@/public/banking_partners/banking_partners-18.webp";
import bank_19 from "@/public/banking_partners/banking_partners-19.webp";
import bank_20 from "@/public/banking_partners/banking_partners-20.webp";
import bank_21 from "@/public/banking_partners/banking_partners-21.webp";
import bank_22 from "@/public/banking_partners/banking_partners-22.webp";
import bank_23 from "@/public/banking_partners/banking_partners-23.webp";
import bank_24 from "@/public/banking_partners/banking_partners-24.webp";
import bank_25 from "@/public/banking_partners/banking_partners-25.webp";
import bank_26 from "@/public/banking_partners/banking_partners-26.webp";
import bank_27 from "@/public/banking_partners/banking_partners-27.webp";
import bank_28 from "@/public/banking_partners/banking_partners-28.webp";
import bank_29 from "@/public/banking_partners/banking_partners-29.webp";
import bank_30 from "@/public/banking_partners/banking_partners-30.webp";
import bank_31 from "@/public/banking_partners/banking_partners-31.webp";
import bank_32 from "@/public/banking_partners/banking_partners-32.webp";
import bank_33 from "@/public/banking_partners/banking_partners-33.webp";
import bank_34 from "@/public/banking_partners/banking_partners-34.webp";
import bank_35 from "@/public/banking_partners/banking_partners-35.webp";
import bank_36 from "@/public/banking_partners/banking_partners-36.webp";
import bank_37 from "@/public/banking_partners/banking_partners-37.webp";
import bank_38 from "@/public/banking_partners/banking_partners-38.webp";
import bank_39 from "@/public/banking_partners/banking_partners-39.webp";
import bank_40 from "@/public/banking_partners/banking_partners-40.webp";
import bank_41 from "@/public/banking_partners/banking_partners-41.webp";

interface CompaniesCardProps {
  data: StaticImageData;
}

const CompaniesCard = ({ data }: CompaniesCardProps) => {
  return (
    <figure
      className={"relative w-28 h-16 md:w-60 md:h-30 overflow-hidden rounded-4xl border p-2 border-blue-950 hover:shadow-lg hover:scale-105 transition-transform duration-300"}
    >
      <div className="p-2 md:p-4 flex justify-center items-center h-full">
        <div className="h-full">
          <img src={data.src} alt={'Banks Logo'} className="h-8 md:h-16 w-auto object-contain" />
        </div>
      </div>
    </figure>
  )
}

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
    rating: 4.5,
  },
  {
    id: 3,
    quote:
      "PCRED understands MSME challenges and delivers solutions that actually work.",
    name: "Amit Kulkarni",
    role: "Managing Partner",
    rating: 4.5,
  },
  {
    id: 4,
    quote:
      "Professional support and smooth execution throughout the entire advisory process.",
    name: "Priya Nair",
    role: "Founder",
    rating: 4.5,
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
    rating: 4.5,
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
    rating: 4.5,
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
    rating: 4.5,
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

const features = [
  {
    title: "Strategic Perspective",
    subtitle: "Long-term Vision",
    description:
      "Financial advice aligned with long-term business objectives.",
    icon: IconTargetArrow,
    image: "/strategic_perspective.webp",
  },
  {
    title: "Execution Excellence",
    subtitle: "Results That Matter",
    description: "Turning strategies into measurable business outcomes.",
    icon: IconChartBar,
    image: "/execution_excellence.webp",
  },
  {
    title: "Pan-India Reach",
    subtitle: "Nationwide Support",
    description: "Supporting businesses across industries throughout India.",
    icon: IconMap2,
    image: "/pan_india_reach.webp",
  },
  {
    title: "Industry Expertise",
    subtitle: "Deep Sector Knowledge",
    description:
      "Deep understanding of finance, governance, capital, and business growth.",
    icon: IconUsersGroup,
    image: "/industry_expertise.webp",
  },
  {
    title: "Relationship-Driven",
    subtitle: "Built on Trust",
    description:
      "Long-term partnerships built on trust, transparency, and performance.",
    icon: IconHeartHandshake,
    image: "/relationship_driven.webp",
  },
];

const contactServices = [
  "Corporate Finance",
  "M&A Advisory",
  "Valuation & Transaction",
  "CFO Advisory",
  "Risk & Governance",
  "Other",
];

const companies_one = [{ image: bank_1 }, { image: bank_2 }, { image: bank_3 }, { image: bank_4 }, { image: bank_5 }, { image: bank_6 }, { image: bank_7 }, { image: bank_8 }, { image: bank_9 }, { image: bank_10 }, { image: bank_11 }, { image: bank_12 }, { image: bank_13 }, { image: bank_14 }, { image: bank_15 }, { image: bank_16 }, { image: bank_17 }, { image: bank_18 }, { image: bank_19 }, { image: bank_20 }];

const companies_two = [{ image: bank_21 }, { image: bank_22 }, { image: bank_23 }, { image: bank_24 }, { image: bank_25 }, { image: bank_26 }, { image: bank_27 }, { image: bank_28 }, { image: bank_29 }, { image: bank_30 }, { image: bank_31 }, { image: bank_32 }, { image: bank_33 }, { image: bank_34 }, { image: bank_35 }, { image: bank_36 }, { image: bank_37 }, { image: bank_38 }, { image: bank_39 }, { image: bank_40 }, { image: bank_41 }];


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
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    if (name === "name" && /\d/.test(value)) return;
    if (name === "phone") {
      if (/[a-zA-Z]/.test(value)) return;
      if (value.replace(/\D/g, "").length > 12) return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
    setFormErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    if (!form.name.trim()) errors.name = "Full name is required.";
    else if (form.name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
    else if (/\d/.test(form.name)) errors.name = "Name must not contain numbers.";
    else if (!/^[a-zA-Z\s'.'-]+$/.test(form.name.trim())) errors.name = "Name contains invalid characters.";
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim()) errors.email = "Email is required.";
    else if (!emailRegex.test(form.email.trim())) errors.email = "Enter a valid email address (e.g. name@domain.com).";
    if (!form.phone.trim()) errors.phone = "Phone number is required.";
    else {
      const digits = form.phone.replace(/\D/g, "");
      if (digits.length !== 10 && digits.length !== 12) errors.phone = "Enter a 10-digit mobile number or 12-digit number with country code.";
    }
    if (!form.message.trim()) errors.message = "Message is required.";
    else if (form.message.trim().length < 10) errors.message = "Message must be at least 10 characters.";
    if (Object.keys(errors).length > 0) { setFormErrors(errors); return; }
    setFormErrors({});
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative flex min-h-screen items-end overflow-hidden">

        <video
          src="/banner.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Optional dark overlay */}
        <div className="absolute inset-0 bg-black/10" />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-col gap-6 px-6 pb-24 pt-32 md:gap-8 md:pb-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-end gap-3 md:gap-4">

              <h1 className="flex flex-nowrap items-end gap-x-1 sm:gap-x-2 text-2xl font-bold uppercase tracking-tight text-white sm:text-4xl md:text-6xl lg:text-7xl">
                <div className="mb-0.5 shrink-0 md:mb-2">
                  <Image src={logo} alt="PCRED" className="h-7 w-auto object-contain sm:h-11 md:h-16 lg:h-20" width={80} height={80} />
                </div>
                <DiaTextReveal
                  repeat
                  duration={1.8}
                  repeatDelay={1}
                  text={["ERSISTANCE", "LANNING", "ERFORMANCE"]}
                />
              </h1>
            </div>

            <p className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-xl lg:text-2xl">Strategic Financial Advisory Solutions Designed to Strengthen and Scale Businesses</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex flex-wrap gap-4"
          >
            <Link href="/schemes" className="group flex items-center justify-between rounded-4xl bg-[#084E75] pl-4 pr-2 py-2 text-white shadow-md shadow-[#084E75]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-44 text-sm">Our Schemes
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                <IconArrowRight className="size-4" color="#084E75" />
              </span>
            </Link>
          </motion.div>

        </div>
      </section>

      {/* Intro Section — Corporate Advisory */}
      <section className="bg-white py-16 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="overflow-hidden rounded-3xl bg-white"
          >
            <div className="grid lg:grid-cols-2">
              <div className="relative flex min-h-72 items-center justify-center overflow-hidden lg:min-h-full lg:p-6">
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-30"
                />
                <img
                  src={'/img_about_sec.webp'}
                  alt="PCRED corporate advisory"
                  className="relative z-10 w-full scale-[1.0] object-contain lg:scale-[1.0]"
                />

                <motion.div initial={{ x: -15 }}
                  animate={{ x: [0, 15, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut",
                  }} className="absolute bottom-6 left-4 z-20 flex max-w-56 items-start gap-3 rounded-2xl border border-white/15 bg-white/70 p-3 backdrop-blur-lg lg:bottom-20 lg:left-100">
                  <IconUsersGroup className="mt-0.5 size-5 shrink-0 text-[#084E75]" stroke={1.5} />
                  <p className="text-xs leading-relaxed text-[#084E75]">
                    Empowering MSMEs with Strategic Financial Advisory Solutions.
                  </p>
                </motion.div>
              </div>

              <div className="flex flex-col justify-center px-5 py-6 text-center sm:p-8 md:p-10 md:text-left lg:p-12">
                <h2 className="text-2xl font-semibold leading-tight text-[#084E75] sm:text-3xl md:mt-5 md:text-4xl md:leading-12 md:whitespace-nowrap">
                  Building Stronger Businesses.
                  <span className="mt-1 block bg-linear-to-r from-[#DDB162] to-[#b8892e] bg-clip-text font-bold text-transparent">
                    Creating Lasting Value.
                  </span>
                </h2>

                <p className="mt-3 text-sm leading-relaxed text-[#084E75] md:mt-5 md:text-base">
                  PCRED is a leading Corporate Advisory firm helping businesses across India
                  make smarter financial decisions, unlock growth opportunities, and build
                  sustainable enterprises.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-2 sm:gap-3 sm:grid-cols-3 md:mt-7">
                  {advisoryFeatures.map((feature) => {
                    const Icon = feature.icon;

                    return (
                      <div
                        key={feature.title}
                        className="flex flex-col items-center gap-2 p-3 text-center sm:gap-3 sm:p-4 md:items-start md:text-left"
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

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="#contact" className="group flex items-center justify-between rounded-4xl bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-4 pr-2 py-2 text-white shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-50 text-sm">Talk to an Advisor
                    <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                      <IconArrowRight className="size-4" color="#DDB162" />
                    </span>
                  </Link>

                  <Link href="/services" className="group flex items-center justify-between rounded-4xl border border-[#084E75]/15 bg-white pl-4 pr-2 py-2 text-[#084E75] shadow-md shadow-[#DDB162]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-50 text-sm">Our Services
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
        <div className="relative mx-auto max-w-7xl px-6 py-12 md:py-18">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162] mb-4">
                <span className="size-2 rounded-full bg-[#DDB162]" />
                Who We Are
              </span>

              <h3 className="text-3xl font-semibold leading-12 text-white md:text-4xl">
                Strategic Advisors for Businesses
                <br />
                <span className="text-[#DDB162]">That Think Long-Term</span>
              </h3>

              <p className="mt-6 max-w-lg text-base leading-relaxed text-white/75 md:text-lg">Every successful business reaches moments where the right financial decision changes everything.</p>

              <Link href="/about-us" className="group flex items-center justify-between rounded-4xl bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-4 pr-2 py-2 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-50 text-sm mt-8 sm:mt-14">Discover Our Story
                <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                  <IconArrowRight className="size-4" color="#DDB162" />
                </span>
              </Link>
              <div className="absolute right-2 hidden sm:block sm:right-8 md:right-16 md:-translate-y-20 lg:right-8 lg:translate-y-0">
                <SpinningText>Years of Experience • Years of Experience •</SpinningText>
                <div className="absolute -top-11 -right-11 bg-[#DDB162] w-22 h-22 flex justify-center items-center rounded-full">
                  <span className="text-white text-4xl font-bold">16+</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative"
            >
              <div className="absolute -inset-2 rounded-4xl border border-[#DDB162]/30 sm:-inset-4" />
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
      <section className="bg-white py-20 md:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
                <span className="size-2 rounded-full bg-[#DDB162]" />
                Business Lifecycle
              </span>
              <h2 className="text-3xl font-semibold text-[#084E75] leading-12 md:text-4xl">
                One Advisory Partner.
                <br />
                <span className="text-[#DDB162]">Every stage of growth.</span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-5 text-base leading-relaxed text-[#084E75]/70 md:text-lg"
            >
              From ambitious startups to established enterprises, we support businesses
              throughout their journey with strategic financial guidance and corporate
              advisory.
            </motion.p>
          </div>

          <LifecycleRoadmap stages={stages} />

          <MobileLifecycleTimeline stages={stages} />
        </div>
      </section>

      {/* Features Section */}
      <section className="relative overflow-hidden bg-[#084E75] py-18">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-52 -top-52 size-150 rounded-full border border-[#DDB162]" />
          <div className="absolute -bottom-52 -left-52 size-125 rounded-full border border-[#DDB162]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(221,177,98,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >

            <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162] mb-4">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Strategic Advantage
            </span>

            <h5 className="text-3xl font-semibold leading-12 text-white text-center md:text-4xl">
              Trusted by Businesses.
              <br />
              <span className="text-[#DDB162]">Driven by Results.</span>
            </h5>
          </motion.div>

          <div className="w-full">
            <HorizontalAccordion accordionItems={features} />
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-20 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center"
          >

            <span className="inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162] mb-4">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Our Partners
            </span>

            <h5 className="text-3xl font-semibold leading-14 text-[#084E75] text-center md:text-4xl">
              Trusted <span className="text-[#DDB162]">Banking Partners</span>
            </h5>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="relative overflow-hidden mt-4"
          >
            <Marquee pauseOnHover className="[--duration:100s]">
              {companies_one.map((logo, index) => (
                <CompaniesCard key={index} data={logo.image} />
              ))}
            </Marquee>
            <Marquee reverse pauseOnHover className="[--duration:100s]">
              {companies_two.map((logo, index) => (
                <CompaniesCard key={index} data={logo.image} />
              ))}
            </Marquee>
            <div className="from-white pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r"></div>
            <div className="from-white pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l"></div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-cover bg-scroll bg-center bg-no-repeat py-14 md:bg-fixed md:py-14"
        style={{ backgroundImage: "url('/right_financial_partner.webp')" }}
      >
        <div className="absolute inset-0 bg-[#084E75]/60" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(221,177,98,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h5 className="text-3xl font-semibold leading-tight md:leading-14 text-white md:text-4xl">
              Looking for the Right
              <br />
              <span className="text-[#DDB162]">Financial Partner?</span>
            </h5>
            <p className="mt-3 text-sm text-white/70 md:text-lg">
              Our MSME advisory experts help businesses secure funding, optimize
              finances, and achieve sustainable growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full sm:w-auto"
          >
            <Link href="/about-us" className="group flex items-center justify-between rounded-4xl bg-linear-to-r from-[#DDB162] to-[#c99a3f] pl-4 pr-2 py-2 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg w-full sm:w-50 text-sm">Discover Our Story
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                <IconArrowRight className="size-4" color="#DDB162" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative overflow-hidden bg-white py-24 md:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -left-32 size-96 rounded-full bg-[#5BBCEB]/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-10 flex flex-col items-start justify-between gap-6 md:mb-14 md:flex-row md:items-end"
          >
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#DDB162] mb-4">
                <span className="size-1.5 rounded-full bg-[#DDB162]" />
                Client Stories
              </span>

              <h5 className="text-3xl font-semibold leading-tight md:leading-14 text-[#084E75] md:text-4xl">
                Trusted by Businesses
                <br />
                <span className="text-[#DDB162]">Across India</span>
              </h5>
            </div>

            <div className="flex items-center gap-6 rounded-3xl border border-[#084E75]/10 bg-[#084E75]/5 px-6 py-4 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#084E75]">4.7</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="size-4 text-[#DDB162]" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-[#084E75]/15" />
              <div>
                <p className="text-2xl font-bold text-[#084E75]">2500+</p>
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
                            <p className="text-base font-semibold text-white">
                              {activeReviewData.name}
                            </p>
                            <p className="text-sm text-white/60">
                              {activeReviewData.role}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-0.5 md:flex-col">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const rating = activeReviewData.rating;

                          if (i < Math.floor(rating)) {
                            return (
                              <IconStarFilled
                                key={i}
                                className="size-5 text-[#DDB162]"
                              />
                            );
                          }

                          if (i < rating) {
                            return (
                              <IconStarHalfFilled
                                key={i}
                                className="size-5 text-[#DDB162]"
                              />
                            );
                          }

                          return (
                            <IconStar
                              key={i}
                              className="size-5 text-[#DDB162]"
                            />
                          );
                        })}
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
                    className={`h-2 rounded-full transition-all duration-300 ${i === activeReview
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

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto text-center mb-14"
          >
            <h5 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl lg:text-4xl text-[#084E75]">
              {"Let's Start a "}
              <span className="text-[#DDB162]">Conversation</span>
            </h5>
            <p className="mt-5 text-base leading-relaxed md:text-lg text-[#084E75]/80 md:whitespace-nowrap">
              Tell us about your business goals. Our advisory team will respond within one business day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="rounded-3xl border border-[#084E75]/10 bg-linear-to-br from-[#DDB162]/15 via-white to-[#084E75]/25 p-8 shadow-[0_1px_3px_rgba(8,78,117,0.06),0_25px_50px_-15px_rgba(8,78,117,0.3)] transition-shadow duration-300 hover:shadow-[0_1px_3px_rgba(8,78,117,0.06),0_35px_60px_-15px_rgba(8,78,117,0.4)] md:p-10"
            >
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#084E75]">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleFormChange} placeholder="John Doe" className={`${inputClass} ${formErrors.name ? "border-red-400" : ""}`} />
                    {formErrors.name && <p className="mt-1 text-xs text-red-500">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#084E75]">
                      Email <span className="text-red-500">*</span>
                    </label>
                    <input id="email" name="email" type="text" value={form.email} onChange={handleFormChange} placeholder="you@company.com" className={`${inputClass} ${formErrors.email ? "border-red-400" : ""}`} />
                    {formErrors.email && <p className="mt-1 text-xs text-red-500">{formErrors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#084E75]">
                      Phone <span className="text-red-500">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleFormChange} placeholder="+91 98765 43210" className={`${inputClass} ${formErrors.phone ? "border-red-400" : ""}`} />
                    {formErrors.phone && <p className="mt-1 text-xs text-red-500">{formErrors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className="mb-2 block text-sm font-medium text-[#084E75]">
                      Company
                    </label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleFormChange} placeholder="Your company name" className={inputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className="mb-2 block text-sm font-medium text-[#084E75]">
                    Service of Interest
                  </label>
                  <select id="service" name="service" value={form.service} onChange={handleFormChange} className={`${inputClass} cursor-pointer appearance-none`}>
                    <option value="">Select a service</option>
                    {contactServices.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-2 block text-sm font-medium text-[#084E75]">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleFormChange} placeholder="Tell us about your business needs and goals..." className={`${inputClass} resize-none ${formErrors.message ? "border-red-400" : ""}`} />
                  {formErrors.message && <p className="mt-1 text-xs text-red-500">{formErrors.message}</p>}
                </div>
                <button
                  type="submit"
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#084E75] px-6 py-3.5 text-sm font-semibold text-[#DDB162] shadow-lg shadow-[#084E75]/25 transition-all duration-300 hover:bg-[#0a5d8a] hover:shadow-xl"
                >
                  Send Message
                  <IconSend className="size-5 transition-transform group-hover:translate-x-1" />
                </button>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl bg-[#084E75]/8 px-4 py-3 text-sm text-[#084E75]"
                  >
                    <IconCheck className="size-5 shrink-0" />
                    <span>Message sent! Our team will get back to you shortly.</span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl shadow-[0_1px_3px_rgba(8,78,117,0.06),0_25px_50px_-15px_rgba(8,78,117,0.3)] transition-shadow duration-300 hover:shadow-[0_1px_3px_rgba(8,78,117,0.06),0_35px_60px_-15px_rgba(8,78,117,0.4)]">
                <img
                  src="/about_image.webp"
                  alt="Contact"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[#084E75]/40" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
