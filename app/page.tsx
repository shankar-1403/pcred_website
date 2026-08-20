"use client";

import { useCallback, useEffect, useRef, useState, type FormEvent } from "react";
import Image from "next/image";
import { StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowRight, IconArrowsExchange, IconBuilding, IconBuildingBank, IconChartBar, IconChartLine, IconStar, IconStarHalfFilled, IconChartHistogram, IconCheck, IconChevronDown, IconChevronLeft, IconChevronRight, IconCircleDashedCheck, IconHeartHandshake, IconMap2, IconQuote, IconRefresh, IconReportMoney, IconRocket, IconScale, IconSend, IconShieldCheck, IconStarFilled, IconTargetArrow, IconTrendingUp, IconUsers, IconUsersGroup, } from "@tabler/icons-react";
import { HomeHero } from "@/components/HomeHero";
import { WebPatternMotionBackground } from "@/components/WebPatternMotionBackground";
import aboutImage from "@/public/who_we_are.webp";
import positioningImage from "@/public/site/positioning_boardroom.webp";
import corpFinanceServiceImage from "@/public/site/corpfin_hero_cityscape.webp";
import maServiceImage from "@/public/site/ma_hero_skyline.webp";
import valuationServiceImage from "@/public/site/valuation_hero_tablet.webp";
import cfoServiceImage from "@/public/site/cfo_hero_office.webp";
import riskServiceImage from "@/public/site/risk_hero_site_walk.webp";
import { SpinningText } from "@/components/ui/spinning-text";
import { LifecycleRoadmap } from "@/components/LifecycleRoadmap";
import { MobileLifecycleTimeline } from "@/components/MobileLifecycleTimeline";
import { Marquee } from "@/components/ui/marquee";
import {
  formInputClass,
  formInputErrorClass,
  formLabelClass,
  formSelectClass,
  formTextareaClass,
} from "@/lib/form-styles";
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
      className={"relative h-20 w-40 overflow-hidden rounded-2xl border border-navy-900/8 bg-white p-1 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_40px_-24px_rgba(4,81,120,0.35)] md:h-30 md:w-60 md:p-2"}
    >
      <div className="p-1 md:p-4 flex justify-center items-center h-full">
        <div className="h-full">
          <img src={data.src} alt={'Banks Logo'} className="h-14 md:h-16 w-auto object-contain" />
        </div>
      </div>
    </figure>
  )
}

const reviews = [
  {
    id: 1,
    quote:
      "PCRED brought clarity to our financial decisions and helped us access the right funding at the right time. Their advisory approach has been valuable to our business growth.",
    role: "Managing Director, Manufacturing Company",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "We approached PCRED with a complex funding requirement, and their team understood our business before recommending a solution. Their guidance made the entire financing process smooth and structured.",
    role: "Director, Trading Company",
    rating: 4.5,
  },
  {
    id: 3,
    quote:
      "PCRED has been more than a finance partner for us. Their corporate advisory and financial expertise have helped us make better decisions and plan our growth with greater confidence.",
    role: "Founder, MSME",
    rating: 4.5,
  },
  {
    id: 4,
    quote:
      "What stood out about PCRED was their understanding of our business requirements. They helped us identify the right financial solution and supported us throughout the process.",
    role: "Director, Infrastructure Company",
    rating: 5,
  },
  {
    id: 5,
    quote:
      "PCRED combines financial expertise with practical business advice. Their support has helped us improve our financial planning and approach our growth plans with much greater clarity.",
    role: "Founder & CEO, Growing Enterprise",
    rating: 4.5,
  },
  {
    id: 6,
    quote:
      "From understanding our requirement to structuring the right solution, PCRED handled the process professionally. Their advisory has given us greater confidence in our financial decisions.",
    role: "Managing Partner, Engineering Company",
    rating: 5,
  },
  {
    id: 7,
    quote:
      "PCRED's approach is professional, transparent and business-focused. They helped us navigate our funding requirements while keeping our long-term objectives in focus.",
    role: "Director, SME Enterprise",
    rating: 4.5,
  },
  {
    id: 8,
    quote:
      "As our business volumes increased, managing working capital became a challenge. PCRED helped us secure the right working capital facility, enabling us to maintain smooth operations and support our growing orders.",
    role: "Director, Manufacturing Company",
    rating: 5,
  },
  {
    id: 9,
    quote:
      "We were exploring collateral-free funding for our expansion when PCRED introduced us to the CGTMSE scheme. Their guidance throughout the process helped us secure the required finance and move ahead with our plans.",
    role: "Founder, Engineering Company",
    rating: 4.5,
  },
  {
    id: 10,
    quote:
      "PCRED helped us evaluate multiple financing options before arriving at the right structure for our business. Their advisory-led approach made the decision-making process much clearer.",
    role: "Managing Director, Trading Company",
    rating: 5,
  },
  {
    id: 11,
    quote:
      "PCRED gave us a clear way forward when we were facing challenges with our existing debt. Their structured approach to debt restructuring helped us improve cash-flow management and plan our finances more effectively.",
    role: "Promoter, SME Enterprise",
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

const whyPcred = [
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

const servicesList = [
  {
    number: "01",
    title: "Corporate Finance",
    description:
      "PCRED advises companies, promoters and investors on capital raising, debt structuring and financial strategy across critical stages of the corporate lifecycle.",
    icon: IconBuildingBank,
    href: "/services/corporate-finance",
    image: corpFinanceServiceImage,
  },
  {
    number: "02",
    title: "M&A Advisory",
    description: "M&A decisions have implications far beyond the transaction itself.",
    icon: IconArrowsExchange,
    href: "/services/ma-advisory",
    image: maServiceImage,
  },
  {
    number: "03",
    title: "Valuation & Transaction",
    description:
      "Valuation is fundamental to capital allocation, investment decisions and corporate transactions.",
    icon: IconScale,
    href: "/services/valuation-transaction",
    image: valuationServiceImage,
  },
  {
    number: "04",
    title: "CFO Advisory",
    description: "Sound financial management is fundamental to sustainable enterprise value.",
    icon: IconReportMoney,
    href: "/services/cfo-advisory",
    image: cfoServiceImage,
  },
  {
    number: "05",
    title: "Risk & Governance",
    description:
      "As organisations become larger and more complex, governance and risk management become integral to protecting enterprise value.",
    icon: IconShieldCheck,
    href: "/services/risk-governance",
    image: riskServiceImage,
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

export default function Home() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeReview, setActiveReview] = useState(0);
  const [reviewDirection, setReviewDirection] = useState(0);
  const [serviceImagesReady, setServiceImagesReady] = useState(false);
  const servicesSectionRef = useRef<HTMLElement>(null);

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

  useEffect(() => {
    const section = servicesSectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;
        setServiceImagesReady(true);
        observer.disconnect();
      },
      { rootMargin: "280px 0px" }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const activeReviewData = reviews[activeReview];
  const reviewInitials = activeReviewData.role
    .split(/[\s,]+/)
    .filter((word) => /^[A-Za-z]/.test(word))
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
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

  const handleFormSubmit = async (e: FormEvent) => {
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
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Something went wrong. Please try again.");
      }
      setSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <HomeHero />

      {/* Stats Strip */}
      <section className="relative overflow-hidden bg-brand-gradient py-4 md:py-5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-24 top-1/2 size-56 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
          <div className="absolute -right-24 top-0 size-64 rounded-full bg-[#D9B872]/8 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-6">
          <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/6 backdrop-blur-sm">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D9B872]/60 to-transparent" />
            <div className="grid grid-cols-2 sm:grid-cols-4 sm:divide-x sm:divide-white/10">
              {[
                { value: "16+", label: "Years of advisory experience", accent: "Track Record" },
                { value: "2500+", label: "MSMEs and enterprises served", accent: "Reach" },
                { value: "₹1500Cr+", label: "Capital facilitated", accent: "Capital" },
                { value: `${companies_one.length + companies_two.length}+`, label: "Banking and institutional partners", accent: "Partners" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.05 }}
                  className={`group px-4 py-3.5 sm:px-5 sm:py-4 ${i >= 2 ? "border-t border-white/10 sm:border-t-0" : ""} ${i % 2 === 1 ? "border-l border-white/10 sm:border-l-0" : ""}`}
                >
                  <div className="mb-1.5 flex items-center gap-2">
                    <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-white/45">
                      {stat.accent}
                    </span>
                    <span className="size-1.5 rounded-full bg-[#D9B872]/80" />
                  </div>
                  <span className="font-serif block text-2xl font-bold leading-none text-white md:text-[1.75rem]">
                    {stat.value}
                  </span>
                  <span className="mt-1 block text-[11px] leading-snug text-white/65 md:text-xs">
                    {stat.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Positioning Statement */}
      <section className="relative overflow-hidden bg-[#FAFAF9] py-16 md:py-10">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, #045178 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="pointer-events-none absolute -left-32 top-1/4 size-72 rounded-full bg-[#D9B872]/10 blur-[90px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 size-64 rounded-full bg-[#045178]/8 blur-[80px]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-5 lg:gap-10">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="order-1 flex flex-col justify-center lg:col-span-2"
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#B8892E]">
                <span className="size-2 rounded-full bg-[#D9B872]" />
                Our Purpose
              </span>
              <h2 className="font-serif text-3xl font-semibold leading-tight text-[#045178] md:text-4xl">
                Structure First.<br/>
                <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text font-bold text-transparent">
                  Capital Second.
                </span>
              </h2>

              <p className="mt-5 text-sm leading-relaxed text-[#545355] md:text-base">
                PCRED helps businesses across India make smarter financial decisions,
                unlock growth, and build sustainable enterprises.
              </p>

              <div className="mt-6 flex-col flex md:flex-row gap-3">
                <Link
                  href="#contact"
                  className="group inline-flex items-center justify-between rounded-full bg-[#045178] py-2 pl-4 pr-2 text-sm text-white shadow-md shadow-[#045178]/20 transition-all hover:-translate-y-0.5 hover:shadow-lg w-full md:w-50"
                >
                  Talk to an Advisor
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-white/90">
                    <IconArrowRight className="size-3.5" color="#045178" />
                  </span>
                </Link>
                <Link
                  href="/services/corporate-finance"
                  className="group inline-flex items-center justify-between rounded-full border border-[#045178]/15 bg-white py-2 pl-4 pr-2 text-sm text-[#045178] transition-all hover:-translate-y-0.5 hover:border-[#D9B872]/50 hover:shadow-md w-full md:w-50"
                >
                  Our Services
                  <span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#045178]/6">
                    <IconArrowRight className="size-3.5" color="#045178" />
                  </span>
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="relative order-2 lg:col-span-3"
            >
              <div className="absolute -inset-2 rounded-2xl bg-linear-to-br from-[#D9B872]/20 to-[#045178]/10 blur-sm lg:-inset-3" />
              <div className="relative aspect-[5/3] overflow-hidden rounded-2xl border border-white/60 shadow-[0_20px_48px_-18px_rgba(4,81,120,0.3)] sm:aspect-[16/10] lg:aspect-[16/11] lg:min-h-[380px]">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  poster={positioningImage.src}
                  className="absolute inset-0 size-full object-cover"
                  aria-label="PCRED advisors in a boardroom discussion"
                >
                  <source src="/banner.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 bg-linear-to-tr from-[#022436]/50 via-transparent to-[#045178]/20" />
                <div className="absolute bottom-4 left-4 flex items-center gap-1.5 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/90 backdrop-blur-md">
                  <span className="size-1.5 animate-pulse rounded-full bg-[#D9B872]" />
                  Advisory in action
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="relative overflow-hidden py-12 md:py-16">
        <WebPatternMotionBackground />

        <div className="relative mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative order-2 pb-8 lg:order-1 lg:pb-6"
            >
              <div className="relative">
                <div className="absolute -inset-2 rounded-[1.5rem] border border-[#D9B872]/25 sm:-inset-3" />
                <div className="relative overflow-hidden rounded-2xl">
                  <Image
                    src={aboutImage}
                    alt="PCRED advisory team"
                    className="aspect-[5/3] w-full object-cover sm:aspect-[16/10]"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-[#045178]/55 via-transparent to-[#045178]/10" />
                </div>
              </div>

              <div className="absolute -bottom-5 -right-2 z-10 sm:-bottom-6 sm:right-4">
                <div className="relative size-28 sm:size-32">
                  <SpinningText
                    radius={46}
                    duration={24}
                    className="absolute inset-0 text-white/90"
                  >
                    Years of Experience • Years of Experience • Years of Experience •
                  </SpinningText>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex size-16 items-center justify-center rounded-full bg-[#D9B872] shadow-[0_12px_32px_-8px_rgba(0,0,0,0.45)] sm:size-[4.5rem]">
                      <span className="font-serif text-2xl font-bold text-white sm:text-3xl">16+</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="order-1 lg:order-2"
            >
              <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
                <span className="size-2 rounded-full bg-[#D9B872]" />
                Who We Are
              </span>

              <h2 className="font-serif text-3xl font-semibold leading-tight text-white md:text-4xl">
                Strategic Advisors for Businesses
                <span className="mt-1 block bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">
                  That Think Long-Term
                </span>
              </h2>

              <p className="mt-4 max-w-lg text-sm leading-relaxed text-white/75 md:text-base">
                Every successful business reaches moments where the right financial
                decision changes everything. We stay with leadership through those
                moments — from capital structure to growth.
              </p>

              <div className="mt-5 grid max-w-md grid-cols-3 gap-3 border-t border-white/10 pt-4">
                {[
                  { value: "2500+", label: "Clients" },
                  { value: "₹1500Cr+", label: "Capital" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <p className="font-serif text-lg font-semibold text-white md:text-xl">
                      {stat.value}
                    </p>
                    <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.14em] text-white/50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      {/* Business Lifecycle */}
      <section className="bg-[#FAFAF9] py-20 md:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.4fr_1fr] lg:items-end lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8D8C8F]">
                <span className="size-2 rounded-full bg-[#8D8C8F]" />
                Business Lifecycle
              </span>
              <h2 className="font-serif text-3xl font-semibold text-[#045178] leading-12 md:text-4xl">
                One Advisory Partner.
                <br />
                <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Every stage of growth.</span>
              </h2>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-[#045178]/70 md:text-lg">
                From ambitious startups to established enterprises, we support businesses
                throughout their journey with strategic financial guidance and corporate
                advisory.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="flex items-center gap-6 rounded-3xl border border-[#045178]/10 bg-white p-6 shadow-[0_20px_50px_-25px_rgba(4,81,120,0.25)] lg:justify-self-end"
            >
              <span className="font-serif text-5xl font-bold text-[#045178]">{stages.length}</span>
              <span className="max-w-[10rem] text-sm leading-snug text-[#045178]/70">
                Distinct stages, one advisory partner from start to IPO.
              </span>
            </motion.div>
          </div>

          <LifecycleRoadmap stages={stages} />

          <MobileLifecycleTimeline stages={stages} />
        </div>
      </section>

      {/* Platform / Capabilities Section */}
      <section className="relative overflow-hidden bg-brand-gradient py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0 opacity-10">
          <div className="absolute -right-52 -top-52 size-150 rounded-full border border-[#D9B872]" />
          <div className="absolute -bottom-52 -left-52 size-125 rounded-full border border-[#D9B872]" />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(141,140,143,0.08),transparent_70%)]" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="mb-8 max-w-xl md:mb-10"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              Strategic Advantage
            </span>
            <h2 className="font-serif text-3xl font-semibold leading-tight text-white md:text-4xl">
              Trusted by Businesses.
              <span className="mt-1 block bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">
                Driven by Results.
              </span>
            </h2>
          </motion.div>

          {/* Mobile: vertical accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="flex flex-col gap-2 lg:hidden"
          >
            {features.map((feature, i) => {
              const isActive = i === activeFeature;
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`overflow-hidden rounded-2xl border transition-colors duration-300 ${
                    isActive
                      ? "border-[#D9B872]/40"
                      : "border-white/10"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setActiveFeature(i)}
                    className="relative flex w-full items-center gap-3 overflow-hidden px-4 py-4 text-left"
                    aria-expanded={isActive}
                  >
                    <img
                      src={feature.image}
                      alt=""
                      aria-hidden
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-[#022436]/78" />
                    <span
                      className={`relative z-10 font-serif text-lg font-bold ${
                        isActive ? "text-[#D9B872]" : "text-white/50"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`relative z-10 min-w-0 flex-1 text-base font-semibold ${
                        isActive ? "text-white" : "text-white/70"
                      }`}
                    >
                      {feature.title}
                    </span>
                    <span
                      className={`relative z-10 flex size-9 shrink-0 items-center justify-center rounded-full transition-colors ${
                        isActive
                          ? "bg-[#D9B872] text-[#045178]"
                          : "border border-white/30 bg-white/10 text-white"
                      }`}
                    >
                      <IconChevronDown
                        className={`size-4 transition-transform duration-300 ${
                          isActive ? "rotate-180" : ""
                        }`}
                      />
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="relative space-y-4 border-t border-white/10 bg-[#022436]/90 px-4 pb-4 pt-3">
                          <div className="flex items-start justify-between gap-3">
                            <div>
                              <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#D9B872]">
                                {feature.subtitle}
                              </span>
                              <p className="mt-2 text-sm leading-relaxed text-white/70">
                                {feature.description}
                              </p>
                            </div>
                            <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#D9B872] text-[#045178]">
                              <Icon size={18} stroke={1.8} />
                            </div>
                          </div>
                          <div className="relative aspect-16/10 overflow-hidden rounded-xl">
                            <img
                              src={feature.image}
                              alt={feature.title}
                              className="absolute inset-0 h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-linear-to-t from-[#045178]/70 via-[#045178]/10 to-transparent" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>

          {/* Desktop: horizontal accordion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="hidden h-[440px] gap-2 lg:flex xl:h-[480px]"
          >
            {features.map((feature, i) => {
              const isActive = i === activeFeature;
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className={`relative flex h-full overflow-hidden rounded-2xl border transition-[flex-grow,border-color] duration-500 ease-[cubic-bezier(0.4,0,0.2,1)] ${
                    isActive
                      ? "flex-[3.4] border-[#D9B872]/50"
                      : "flex-[0.58] border-white/15"
                  }`}
                >
                  {/* Panel image — only decode active + keep others lazy */}
                  <img
                    src={feature.image}
                    alt=""
                    aria-hidden
                    loading={isActive || i <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                  <div
                    className={`absolute inset-0 ${
                      isActive
                        ? "bg-linear-to-t from-[#022436]/95 via-[#022436]/45 to-[#022436]/20"
                        : "bg-[#022436]/72"
                    }`}
                  />

                  {/* Collapsed: click to open */}
                  {!isActive && (
                    <button
                      type="button"
                      onClick={() => setActiveFeature(i)}
                      aria-label={`Open ${feature.title}`}
                      className="relative z-10 flex h-full w-full flex-col items-center justify-between px-3 py-6 text-left transition-colors hover:bg-white/5"
                    >
                      <span className="font-serif text-xl font-bold text-[#D9B872]">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span
                        className="origin-center whitespace-nowrap text-sm font-semibold tracking-wide text-white"
                        style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
                      >
                        {feature.title}
                      </span>
                      <span className="flex size-10 items-center justify-center rounded-full border border-[#D9B872]/50 bg-[#D9B872] text-[#045178] shadow-lg shadow-black/20 transition-transform group-hover:scale-105">
                        <IconChevronRight className="size-4" stroke={2} />
                      </span>
                    </button>
                  )}

                  {/* Expanded content */}
                  {isActive && (
                    <div className="relative z-10 flex h-full min-w-0 flex-1 flex-col p-6 xl:p-8">
                      <div className="flex justify-end">
                        <div className="flex size-11 shrink-0 items-center justify-center rounded-2xl bg-[#D9B872] text-[#045178]">
                          <Icon size={20} stroke={1.8} />
                        </div>
                      </div>

                      <div className="mt-auto flex items-end justify-between gap-4">
                        <div className="min-w-0 max-w-lg">
                          <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
                            {feature.subtitle}
                          </span>
                          <h3 className="mt-2 font-serif text-2xl font-bold text-white xl:text-3xl">
                            <span className="mr-2 font-serif text-lg font-bold text-[#D9B872]">
                              {String(i + 1).padStart(2, "0")}
                            </span>
                            {feature.title}
                          </h3>
                          <p className="mt-3 text-sm leading-relaxed text-white/80 xl:text-base">
                            {feature.description}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => setActiveFeature((i + 1) % features.length)}
                          className="mb-1 flex shrink-0 items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.14em] text-white backdrop-blur-sm transition-colors hover:border-[#D9B872]/50 hover:bg-[#D9B872]/15"
                        >
                          Next
                          <IconChevronRight className="size-3.5" />
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="relative py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-10 lg:grid-cols-[1.3fr_1fr] lg:items-end lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
              className="flex flex-col justify-center"
            >
              <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8D8C8F]">
                <span className="size-2 rounded-full bg-[#8D8C8F]" />
                Our Partners
              </span>

              <h2 className="text-3xl font-semibold leading-tight text-[#045178] md:text-4xl">
                Trusted <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Banking Partners</span>
              </h2>
            </motion.div>
          </div>
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
            <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-1/4 bg-linear-to-r from-stone-50 md:block" />
            <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/4 bg-linear-to-l from-stone-50 md:block" />
          </motion.div>
        </div>
      </section>

      {/* Why PCRED */}
      <section className="relative border-t border-[#045178]/8 bg-white py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-14 max-w-2xl"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8D8C8F]">
              <span className="size-2 rounded-full bg-[#8D8C8F]" />
              Why PCRED
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#045178] md:text-4xl">
              Advisory <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">With Perspective.</span>
            </h2>
          </motion.div>

          <div className="grid gap-x-12 gap-y-10 sm:grid-cols-2">
            {whyPcred.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="flex gap-5"
                >
                  <span className="font-serif shrink-0 text-2xl font-bold leading-none text-[#045178]/20">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-2.5">
                      <Icon size={18} className="shrink-0 text-[#045178]" stroke={1.7} />
                      <h3 className="text-lg font-semibold text-[#045178]">{item.title}</h3>
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-[#4a5568]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        className="relative bg-cover bg-fixed bg-[65%_center] bg-no-repeat py-14 md:bg-center md:py-14"
        style={{ backgroundImage: "url('/right_financial_partner.webp')" }}
      >
        <div className="absolute inset-0 bg-linear-to-r from-[#022436]/85 to-[#045178]/65" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_right,rgba(141,140,143,0.15),transparent_60%)]" />

        <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-xl"
          >
            <h2 className="text-3xl font-semibold leading-tight text-white md:text-4xl">
              Looking for the Right
              <br />
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Financial Partner?</span>
            </h2>
            <p className="mt-3 text-sm text-white/70 md:text-lg">
              Our Corporate Advisory advisory experts help businesses secure funding, optimize
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
            <Link href="/about-us" className="group flex items-center justify-between rounded-4xl bg-[#045178] hover:bg-[#045178] pl-4 pr-2 py-2 text-white transition-all hover:-translate-y-0.5 hover:shadow-lg w-52 sm:w-50 text-sm">Discover Our Story
              <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
                <IconArrowRight className="size-4" color="#D9B872" />
              </span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="relative overflow-hidden bg-linear-to-b from-white via-[#FBF9F3] to-white py-20 md:py-28">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full bg-[#045178]/5 blur-3xl" />
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
              <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#8D8C8F] mb-4">
                <span className="size-1.5 rounded-full bg-[#8D8C8F]" />
                Client Stories
              </span>

              <h2 className="text-3xl font-semibold leading-tight text-[#045178] md:text-4xl">
                Trusted by Businesses
                <br />
                <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Across India</span>
              </h2>
            </div>

            <div className="flex items-center gap-6 rounded-3xl border border-[#045178]/10 bg-[#045178]/5 px-6 py-4 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#045178]">4.7</p>
                <div className="mt-1 flex justify-center gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <IconStarFilled key={i} className="size-4 text-[#b8892e]" />
                  ))}
                </div>
              </div>
              <div className="h-10 w-px bg-[#045178]/15" />
              <div>
                <p className="text-2xl font-bold text-[#045178]">2500+</p>
                <p className="text-sm text-[#045178]/70">Satisfied Clients</p>
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
                  <div className="relative overflow-hidden rounded-3xl bg-brand-gradient-br p-8 md:p-12">
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
                          <p className="text-sm font-semibold text-white/80">
                            {activeReviewData.role}
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-0.5 md:flex-col">
                        {Array.from({ length: 5 }).map((_, i) => {
                          const rating = activeReviewData.rating;

                          if (i < Math.floor(rating)) {
                            return (
                              <IconStarFilled
                                key={i}
                                className="size-5 text-[#b8892e]"
                              />
                            );
                          }

                          if (i < rating) {
                            return (
                              <IconStarHalfFilled
                                key={i}
                                className="size-5 text-[#b8892e]"
                              />
                            );
                          }

                          return (
                            <IconStar
                              key={i}
                              className="size-5 text-[#b8892e]"
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
                      ? "w-8 bg-[#045178]"
                      : "w-2 bg-[#045178]/25 hover:bg-[#045178]/50"
                      }`}
                  />
                ))}
              </div>
              <div className="flex gap-3">
                <button
                  type="button"
                  aria-label="Previous review"
                  onClick={goPrevReview}
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#045178]/15 bg-white text-[#045178] transition-all hover:bg-[#045178] hover:text-white"
                >
                  <IconChevronLeft className="size-5" />
                </button>
                <button
                  type="button"
                  aria-label="Next review"
                  onClick={goNextReview}
                  className="flex size-11 cursor-pointer items-center justify-center rounded-full border border-[#045178]/15 bg-white text-[#045178] transition-all hover:bg-[#045178] hover:text-white"
                >
                  <IconChevronRight className="size-5" />
                </button>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-[#045178]/60">
              {String(activeReview + 1).padStart(2, "0")} /{" "}
              {String(reviews.length).padStart(2, "0")}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="relative overflow-hidden bg-linear-to-b from-[#045178]/20 via-white to-[#8D8C8F]/15 py-20 md:py-28"
      >
        <div className="pointer-events-none absolute -left-40 top-20 size-80 rounded-full bg-[#045178]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mb-14"
          >
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#8D8C8F]">
              <span className="size-2 rounded-full bg-[#8D8C8F]" />
              Get In Touch
            </span>
            <h2 className="text-3xl font-semibold leading-tight md:text-4xl text-[#045178]">
              {"Let's Start a "}
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Conversation</span>
            </h2>
            <p className="mt-5 text-base leading-relaxed md:text-lg text-[#045178]/80">
              Tell us about your business goals. Our advisory team will respond within one business day.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.2fr_1fr]">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-[#045178]/10 bg-white p-8 shadow-[0_1px_3px_rgba(4,81,120,0.06),0_25px_50px_-15px_rgba(4,81,120,0.3)] transition-shadow duration-300 hover:shadow-[0_1px_3px_rgba(4,81,120,0.06),0_35px_60px_-15px_rgba(4,81,120,0.4)] md:p-10"
            >
              <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-[#D9B872]/70 to-transparent" />
              <form onSubmit={handleFormSubmit} className="relative space-y-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={formLabelClass}>
                      Full Name <span className="text-[#AC3639]">*</span>
                    </label>
                    <input id="name" name="name" type="text" value={form.name} onChange={handleFormChange} placeholder="Your name" className={`${formInputClass} ${formErrors.name ? formInputErrorClass : ""}`} />
                    {formErrors.name && <p className="mt-1.5 text-xs text-red-500">{formErrors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className={formLabelClass}>
                      Email <span className="text-[#AC3639]">*</span>
                    </label>
                    <input id="email" name="email" type="text" value={form.email} onChange={handleFormChange} placeholder="Your email" className={`${formInputClass} ${formErrors.email ? formInputErrorClass : ""}`} />
                    {formErrors.email && <p className="mt-1.5 text-xs text-red-500">{formErrors.email}</p>}
                  </div>
                </div>
                <div className="grid gap-5 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={formLabelClass}>
                      Phone <span className="text-[#AC3639]">*</span>
                    </label>
                    <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleFormChange} placeholder="Your phone" className={`${formInputClass} ${formErrors.phone ? formInputErrorClass : ""}`} />
                    {formErrors.phone && <p className="mt-1.5 text-xs text-red-500">{formErrors.phone}</p>}
                  </div>
                  <div>
                    <label htmlFor="company" className={formLabelClass}>
                      Company
                    </label>
                    <input id="company" name="company" type="text" value={form.company} onChange={handleFormChange} placeholder="Your company name" className={formInputClass} />
                  </div>
                </div>
                <div>
                  <label htmlFor="service" className={formLabelClass}>
                    Service of Interest
                  </label>
                  <div className="relative">
                    <select id="service" name="service" value={form.service} onChange={handleFormChange} className={formSelectClass}>
                      <option value="">Select a service</option>
                      {contactServices.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                    <IconChevronDown className="pointer-events-none absolute right-4 top-1/2 size-4 -translate-y-1/2 text-[#045178]/45" />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className={formLabelClass}>
                    Message <span className="text-[#AC3639]">*</span>
                  </label>
                  <textarea id="message" name="message" rows={5} value={form.message} onChange={handleFormChange} placeholder="Tell us about your business needs and goals..." className={`${formTextareaClass} ${formErrors.message ? formInputErrorClass : ""}`} />
                  {formErrors.message && <p className="mt-1.5 text-xs text-red-500">{formErrors.message}</p>}
                </div>
                {error && (
                  <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                )}
                <button
                  type="submit"
                  disabled={loading}
                  className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#045178] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-[#045178]/25 transition-all duration-300 hover:bg-[#045178] hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Send Message"}
                  {!loading && <IconSend className="size-5 transition-transform group-hover:translate-x-1" />}
                </button>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex items-center gap-3 rounded-xl bg-[#045178]/8 px-4 py-3 text-sm text-[#045178]"
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
              <div className="relative h-full min-h-[500px] overflow-hidden rounded-3xl shadow-[0_1px_3px_rgba(4,81,120,0.06),0_25px_50px_-15px_rgba(4,81,120,0.3)] transition-shadow duration-300 hover:shadow-[0_1px_3px_rgba(4,81,120,0.06),0_35px_60px_-15px_rgba(4,81,120,0.4)]">
                <img
                  src="/about_image.webp"
                  alt="Contact"
                  className="absolute inset-0 h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.58)_0%,rgba(4,81,120,0.46)_42%,rgba(4,81,120,0.18)_70%,rgba(4,81,120,0.08)_100%),linear-gradient(to_top,rgba(4,81,120,0.28)_0%,transparent_40%)]" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
