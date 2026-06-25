"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import {IconArrowRight,IconCheck,IconChevronDown,IconChartBar,IconCertificate,IconClock,IconCoinRupee,IconShieldCheck,IconX,IconSend,IconShield,IconPercentage,IconFileDescription,IconBuildingBank,IconPlayerPlay,IconTrendingUp,IconHeartHandshake,IconUsers,IconBuilding,IconMap,
} from "@tabler/icons-react";
import cgtmseBannerBg from "../../../public/cgtmsepage_img.webp";
import cgtmseFaq from "@/public/products/cgtmse-faq.webp";
import cgtmselogo from "../../../public/cgtmse_logo.webp"
import eligible from "../../../public/eligible.webp"

const heroFeatures = [
  {
    icon: IconShield,
    title: "Loan Amount Up to ₹10 Crore",
    accent: "green" as const,
  },
  {
    icon: IconShieldCheck,
    title: "No Collateral Security Required*",
    accent: "orange" as const,
  },
  {
    icon: IconPercentage,
    title: "ROI Starting from 8.90% p.a.*",
    accent: "green" as const,
  },
  {
    icon: IconFileDescription,
    title: "End-to-End Advisory",
    accent: "orange" as const,
  },
];


const eligibilityCriteria = [
  {
    icon: IconClock,
    label: "Business Vintage",
    description:"Minimum operational history",
    value: "3 +",
    desc_value: "Years",
  },
  {
    icon: IconChartBar,
    label: "Annual Turnover",
    description:"Maximum annual turnover",
    value: "₹100 Cr",
    desc_value: "Per Annum",
  },
  {
    icon: IconCertificate,
    label: "CIBIL Score",
    description:"Credit score requirement",
    value: "700 +",
    desc_value: "Generally Preferred",
  },
  {
    icon: IconShieldCheck,
    label: "CMR Rating",
    description:"Credit Monitoring Arrangement",
    value: "1 - 5",
    desc_value: "Generally Preferred",
  },
  {
    icon: IconCoinRupee,
    label: "Loan Amount",
    description:"Maximum funding eligible",
    value:"₹10 Crore",
    desc_value: "Per Borrower",
  },
];

const inputClass =
  "w-full rounded-4xl border border-[#084E75]/15 bg-white px-4 py-3.5 text-[#084E75] placeholder:text-[#8E8E90]/60 outline-none transition-all duration-200 focus:border-[#084E75] focus:ring-2 focus:ring-[#084E75]/15";

const initialForm = {
  name: "",
  email: "",
  phone: "",
  company: "",
  businessType: "",
  turnover: "",
  loanAmount: "",
  message: "",
};

function ApplyModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onClose();
    setTimeout(() => {
      setSubmitted(false);
      setForm(initialForm);
    }, 300);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
        >
          <button
            type="button"
            aria-label="Close modal"
            onClick={handleClose}
            className="absolute inset-0 cursor-pointer bg-[#084E75]/40 backdrop-blur-sm"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-4xl bg-white shadow-2xl"
          >
            <div className="sticky top-0 flex items-center justify-between border-b border-[#084E75]/10 bg-white px-6 py-5">
              <div>
                <h2 className="text-xl font-bold text-[#084E75]">Apply for CGTMSE Funding</h2>
                <p className="mt-1 text-sm text-[#8E8E90]">
                  Fill in your details and our team will contact you.
                </p>
              </div>
              <button
                type="button"
                onClick={handleClose}
                className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#084E75]/15 text-[#084E75] transition-colors hover:bg-[#084E75]/10"
              >
                <IconX className="size-5" />
              </button>
            </div>

            <div className="p-6">
              {submitted ? (
                <div className="flex flex-col items-center py-8 text-center">
                  <div className="mb-4 flex size-14 items-center justify-center rounded-full bg-[#084E75]/10 text-[#084E75]">
                    <IconCheck className="size-7" />
                  </div>
                  <h3 className="text-xl font-bold text-[#084E75]">Application Submitted!</h3>
                  <p className="mt-2 max-w-sm text-sm text-[#8E8E90]">
                    Thank you for applying. Our funding experts will review your profile and get
                    back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={handleClose}
                    className="mt-6 cursor-pointer rounded-4xl bg-[#084E75] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-[#0a5d8a]"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="sm:col-span-2">
                      <label htmlFor="cgtmse-name" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cgtmse-name"
                        name="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cgtmse-email" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cgtmse-email"
                        name="email"
                        type="email"
                        required
                        value={form.email}
                        onChange={handleChange}
                        placeholder="you@company.com"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cgtmse-phone" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cgtmse-phone"
                        name="phone"
                        type="tel"
                        required
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className={inputClass}
                      />
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cgtmse-company" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Company Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="cgtmse-company"
                        name="company"
                        type="text"
                        required
                        value={form.company}
                        onChange={handleChange}
                        placeholder="Your company name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label htmlFor="cgtmse-businessType" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Business Type <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="cgtmse-businessType"
                        name="businessType"
                        required
                        value={form.businessType}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer appearance-none`}
                      >
                        <option value="">Select type</option>
                        <option value="Manufacturer">Manufacturer</option>
                        <option value="Trader">Trader</option>
                        <option value="Service Provider">Service Provider</option>
                        <option value="Other SME">Other SME</option>
                      </select>
                    </div>
                    <div>
                      <label htmlFor="cgtmse-turnover" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Annual Turnover <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="cgtmse-turnover"
                        name="turnover"
                        required
                        value={form.turnover}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer appearance-none`}
                      >
                        <option value="">Select range</option>
                        <option value="Below ₹1 Cr">Below ₹1 Cr</option>
                        <option value="₹1 Cr – ₹10 Cr">₹1 Cr – ₹10 Cr</option>
                        <option value="₹10 Cr – ₹50 Cr">₹10 Cr – ₹50 Cr</option>
                        <option value="₹50 Cr – ₹100 Cr">₹50 Cr – ₹100 Cr</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cgtmse-loanAmount" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Loan Amount Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="cgtmse-loanAmount"
                        name="loanAmount"
                        required
                        value={form.loanAmount}
                        onChange={handleChange}
                        className={`${inputClass} cursor-pointer appearance-none`}
                      >
                        <option value="">Select amount</option>
                        <option value="Below ₹25 Lakh">Below ₹25 Lakh</option>
                        <option value="₹25 Lakh – ₹1 Cr">₹25 Lakh – ₹1 Cr</option>
                        <option value="₹1 Cr – ₹5 Cr">₹1 Cr – ₹5 Cr</option>
                        <option value="₹5 Cr – ₹10 Cr">₹5 Cr – ₹10 Cr</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="cgtmse-message" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Additional Details
                      </label>
                      <textarea
                        id="cgtmse-message"
                        name="message"
                        rows={3}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Tell us about your funding requirement..."
                        className={`${inputClass} resize-none`}
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#084E75]/20 transition-colors hover:bg-[#0a5d8a]"
                  >
                    Submit Application
                    <IconSend className="size-5 transition-transform group-hover:translate-x-0.5" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

const faqs = [
  {
    question: "What is CGTMSE?",
    answer:
      "CGTMSE is a Government-backed credit guarantee scheme that helps eligible SMEs access business funding without traditional collateral security.",
  },
  {
    question: "What is the maximum loan amount available?",
    answer:
      "Eligible businesses may avail funding of up to ₹10 Crore, subject to lender assessment and applicable guidelines.",
  },
  {
    question: "Is collateral required?",
    answer:
      "CGTMSE is designed to facilitate collateral-free business funding. However, the final loan structure and approval are subject to lender discretion, credit assessment, and applicable scheme guidelines.",
  },
  {
    question: "What is the minimum CIBIL score required?",
    answer: "A CIBIL score of 700 or above is generally preferred by lenders.",
  },
  {
    question: "What should be the business vintage?",
    answer: "The business should have a minimum operational history of 3 years.",
  },
  {
    question: "What is the turnover eligibility?",
    answer:
      "Businesses with an annual turnover of up to ₹100 Crore may be eligible to apply.",
  },
  {
    question: "What is the required CMR rating?",
    answer: "A CMR rating between 1 and 5 is generally preferred.",
  },
  {
    question: "What is the starting ROI?",
    answer:
      "Interest rates may start from 8.90% p.a., subject to lender policies, borrower profile, and credit assessment.",
  },
  {
    question: "How do I check my eligibility?",
    answer:
      "Simply submit your details, and our funding experts will review your profile and guide you through the next steps.",
  },
];

function FaqItem({
  question,
  answer,
  isOpen,
  onToggle,
}: {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="overflow-hidden rounded-4xl shadow-sm border border-[#084E75]">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full cursor-pointer items-center justify-between gap-4 px-6 py-5 text-left bg-[#084E75]"
      >
        <span className="font-semibold text-white text-lg">{question}</span>
        <IconChevronDown
          className={`size-5 shrink-0 text-[#DDB162] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 bg-white"}`}>
        <div className="overflow-hidden">
          <p className=" px-6 py-4 leading-relaxed text-[#084E75] text-lg">{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function CgtmsePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <ApplyModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <section className="relative overflow-hidden h-screen">
        <div className="pointer-events-none absolute inset-0">
          <Image
            src={cgtmseBannerBg}
            alt="CGTMSE Banner"
            className="object-cover w-full h-full relative"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-white from-30% via-white/90 via-60% to-transparent to-80%" />
        </div>

        <div className="relative z-10 pb-0 h-full">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-xl lg:max-w-3xl h-full flex flex-col justify-center pl-30 relative"
          > 
            <div className="mb-6">
              <img src={cgtmselogo.src} alt="CGTMSE Logo" className="h-18"/>
            </div>

            <h1 className="text-3xl font-bold leading-tight text-[#084E75] md:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              CGTMSE Loan Up to ₹10 Crore
              <br />
              <span className="text-[#DDB162]">Without Collateral</span>
            </h1>
            <p className="text-base text-[#084E75] mt-4">Access collateral-free business funding through the Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) Scheme. Whether you are a manufacturer, trader, service provider, or growing SME, PCRED helps you secure the right funding solution through expert advisory, documentation support, and lender coordination.</p>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {heroFeatures.map((item) => (
                <div key={item.title} className="flex items-center gap-3">
                  <div
                    className={`flex size-10 shrink-0 items-center justify-center rounded-4xl ${
                      item.accent === "green"
                        ? "bg-[#DDB162]/10 text-[#DDB162]"
                        : "bg-[#DDB162]/10 text-[#DDB162]"
                    }`}
                  >
                    <item.icon className="size-6" stroke={1.75} />
                  </div>
                  <div>
                    <p className="text-sm text-center font-semibold text-[#084E75]">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4 pb-10 md:pb-14">
              <button
                type="button"
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-4xl border-2 border-[#084E75] bg-[#084E75] text-white text-base font-semibold cursor-pointer text-center shadow-[5px_5px] shadow-[#084E75]/40 flex items-center gap-2"
              >
                Apply for CGTMSE Funding
                <IconArrowRight className="size-4" />
              </button>
              <a href="#what-is-cgtmse" target="_blank" className="px-6 py-3 rounded-4xl border-2 border-[#DDB162] bg-white text-[#DDB162] text-base font-semibold cursor-pointer text-center shadow-[5px_5px] shadow-[#DDB162]/40 flex items-center gap-2"
              >
                <span className="flex size-6 items-center justify-center rounded-full border border-[#DDB162]/20 bg-white/80 backdrop-blur-sm">
                  <IconPlayerPlay className="size-3 fill-[#DDB162] text-[#DDB162]" />
                </span>
                How CGTMSE Works
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <section id="what-is-cgtmse" className="bg-white py-24">
        <div className="mx-auto max-w-7xl grid grid-cols-3 gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="border-r border-[#DDB162] flex items-center"
          >
            <h2 className="text-4xl font-semibold text-[#084E75]">What is <span className="text-[#DDB162]">CGTMSE</span>?</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base leading-relaxed md:text-lg col-span-2"
          >
            <p className="text-[#084E75] text-lg mb-4">The Credit Guarantee Fund Trust for Micro and Small Enterprises (CGTMSE) is a Government-backed initiative that enables eligible SMEs to access business funding without the need for traditional collateral security.</p>
            <p className="text-[#084E75] text-lg">The scheme helps businesses secure funding for working capital requirements, business expansion, machinery purchase, technology upgradation, and other growth-related initiatives.</p>
          </motion.div>
        </div>
      </section>

      <section className="bg-linear-to-b from-gray-50 to-white py-24">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-7 lg:gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3"
            >
              <h3 className="text-3xl font-semibold text-[#084E75] md:text-4xl">
                Eligibility Criteria
              </h3>
              <p className="mt-4 text-base leading-relaxed text-[#084E75] md:text-lg">
                SMEs must meet key business and credit benchmarks to qualify under the CGTMSE
                Scheme. Review the requirements below.
              </p>

              <div className="mt-15">
                <Image src={eligible} alt="Eligible" className="h-80 w-full"/>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-4"
            >
              <div className="overflow-hidden rounded-4xl border-l border-r border-gray-100 bg-white shadow-lg">
                <div className="border-b border-gray-100 bg-[#084E75] px-4 py-4 flex justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wide text-white w-[80%] pl-17.5">
                    Particulars
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wide text-white w-[20%]">
                    Criteria
                  </span>
                </div>

                <ul className="divide-y divide-[#084E75]/20 px-4">
                  {eligibilityCriteria.map((item, i) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 12 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: i * 0.06 }}
                      className="flex py-4 items-center justify-between bg-white"
                    >
                      <div className="flex items-center gap-3 w-[80%]">
                        <div className="flex size-14 shrink-0 items-center justify-center rounded-4xl bg-[#DDB162]/20 border border-[#DDB162] text-[#DDB162]">
                          <item.icon className="size-7" stroke={1.5} />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-[#084E75] text-lg">{item.label}</span>
                          <span className="text-[#084E75] text-xs">{item.description}</span>
                        </div>
                      </div>
                      <div className="w-[20%] flex flex-col">
                        <p className="text-xl font-semibold leading-relaxed text-[#084E75]">{item.value}</p>
                        <span className="text-xs text-[#084E75]">{item.desc_value}</span>
                      </div>
                    </motion.li>
                  ))}
                </ul>
                <div className="border-t border-gray-100 bg-[#084E75]/10 px-6 py-4">
                  <p className="text-base font-bold tracking-wide text-[#084E75]">Collateral-freee loans. Government-backed security.</p>
                  <p className="text-xs font-semibold tracking-wide text-[#084E75]">Fuel your growth with confidence.</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-10">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative overflow-hidden rounded-4xl bg-[#084E75] px-8 py-12 md:px-14 md:py-14"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-white/10 blur-2xl" />

            <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
              <div className="max-w-2xl">
                <h4 className="text-2xl font-semibold text-white md:text-4xl">
                  Not Sure If You Qualify?
                </h4>
                <p className="mt-3 text-white/80 text-lg">
                  Our funding specialists can evaluate your business profile and help you assess
                  your eligibility under the CGTMSE Scheme.
                </p>
                <p className="mt-3 font-semibold text-[#DDB162] text-lg">
                  Get a Free Eligibility Assessment Today.
                </p>
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="cursor-pointer group inline-flex shrink-0 items-center gap-2 rounded-4xl bg-[#DDB162] px-8 py-4 text-base font-semibold text-white transition-all shadow-[5px_5px] shadow-[#DDB162]/50"
              >
                Check Eligibility
                <IconArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-12"
          >
            <h5 className="text-3xl font-semibold text-[#084E75] md:text-4xl">
              Frequently Asked Questions
            </h5>
            <p className="mt-3 max-w-2xl text-lg text-[#084E75]">
              Find answers to common questions about CGTMSE funding, eligibility, and the
              application process.
            </p>
          </motion.div>

          <div className="flex gap-10 lg:flex-row lg:gap-14 lg:items-start">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative mx-auto w-full max-w-md lg:max-w-none lg:sticky lg:top-30"
            >
              <div className="relative aspect-5/5 overflow-hidden rounded-4xl shadow-lg">
                <Image src={cgtmseFaq} alt="Business advisory consultation for CGTMSE funding questions" fill className="object-cover"/>
              </div>
            </motion.div>

            <div className="space-y-3">
              {faqs.map((faq, i) => (
                <FaqItem
                  key={faq.question}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openFaq === i}
                  onToggle={() => setOpenFaq(openFaq === i ? null : i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pb-5">
        <div className="mx-auto max-w-4xl px-6">
          <p className="text-center text-xs leading-relaxed text-[#084E75]">
            <span className="font-semibold text-[#084E75]">Disclaimer:</span> Loan approval,
            interest rates, loan amount, collateral requirements, and eligibility are subject to
            lender policies, credit assessment, business profile, and applicable CGTMSE guidelines.
          </p>
        </div>
      </section>
    </>
  );
}
