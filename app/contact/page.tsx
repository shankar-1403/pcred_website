'use client';

import React,{useState,type FormEvent} from 'react';
import {motion} from "motion/react";
import { IconMail, IconPhone, IconClock, IconSend, IconCheck, IconMapPin, IconChevronDown} from "@tabler/icons-react";
import Image from 'next/image';
import heroImage from '@/public/site/contact_hero_bridge.webp';
import {
  formInputClass,
  formInputErrorClass,
  formLabelClass,
  formSelectClass,
  formTextareaClass,
} from "@/lib/form-styles";

function page() {
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

  const contactServices = [
    "Corporate Finance",
    "M&A Advisory",
    "Valuation & Transaction",
    "CFO Advisory",
    "Risk & Governance",
    "Other",
  ];
  
  const contactInfo = [
    { icon: IconPhone, label: "Phone", value: "+91 22 3512 0060", href: "tel:+912235120060" },
    { icon: IconMail, label: "Email", value: "info@pcred.org", href: "mailto:info@pcred.org" },
    { icon: IconClock, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM", href: undefined as string | undefined },
  ];
  
  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24 min-h-[560px]">
        <Image
          src={heroImage}
          alt="Infrastructure connecting businesses and opportunities"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.58)_0%,rgba(4,81,120,0.46)_42%,rgba(4,81,120,0.18)_70%,rgba(4,81,120,0.08)_100%),linear-gradient(to_top,rgba(4,81,120,0.28)_0%,transparent_40%)]" />
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#D9B872]/8 blur-3xl" />
        <div className="pointer-events-none absolute -left-24 bottom-10 size-72 rounded-full bg-[#045178]/25 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#D9B872]">
              <span className="size-2 rounded-full bg-[#D9B872]" />
              Get In Touch
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Connecting Through
              <br />
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">Smart Finance</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              We partner with businesses and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
            </p>
            <div className="mt-10 flex items-center">
              <div className="h-px w-40 bg-white/15" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#D9B872]/60" />
              <div className="h-px w-24 bg-white/15" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_bottom_right,rgba(141,140,143,0.15),transparent_60%)] bg-white py-20 md:py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#045178]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <div id="contact" className="grid grid-cols-1 gap-10 xl:grid-cols-[1fr_1.2fr] xl:grid-rows-[auto_1fr]">
            <div className="order-3 xl:order-none flex items-start justify-center mt-12 xl:-mt-16 xl:self-start xl:col-start-1 xl:row-start-2 min-w-0 w-full max-sm:-mx-6">
              <div className="relative mx-auto w-screen sm:w-[36rem] sm:h-[49.8rem] sm:aspect-auto xl:w-[35rem] xl:h-[48.5rem] aspect-[35/48.5] sm:aspect-auto">
              <div className="absolute left-0 top-0 w-[35rem] h-[48.5rem] origin-top-left scale-[calc(100vw/35rem)] sm:scale-[1.028] xl:scale-[1.0]">
                {/* Decorative background glow behind the phone so it doesn't float on plain empty space */}
                <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-linear-to-br from-[#045178]/12 via-white/40 to-[#8D8C8F]/15 blur-2xl" />
                <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#045178]/10 blur-3xl" />

                {/* Cards displayed inside the phone screen — positioned via percentages matching the frame's screen cutout */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="absolute z-0 flex flex-col justify-start gap-1.5 overflow-hidden"
                  style={{ left: "23.4%", top: "15.8%", width: "53.2%", height: "73.1%" }}
                >
                  <div className="relative overflow-hidden rounded-2xl p-4 flex justify-center">
                    <img src="/logo.webp" alt="PCRED Logo" className='h-12'/>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    {contactInfo.map((item, i) => (
                      <motion.div
                        key={item.label}
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                        className="group flex items-center gap-3 rounded-2xl border border-[#045178]/10 bg-white p-3.5 shadow-sm"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#045178]/10 text-[#045178]">
                          <item.icon className="size-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[length:var(--text-11)] font-semibold uppercase tracking-wider text-[#8E8E90] leading-none">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="mt-1 block truncate text-sm font-medium text-[#045178] hover:underline">
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 truncate text-sm font-medium text-[#045178]">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + contactInfo.length * 0.08 }}
                      className="overflow-hidden rounded-2xl border border-[#045178]/10 bg-white p-2.5 shadow-sm"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#045178]/10 text-[#045178]">
                          <IconMapPin className="size-5" />
                        </div>
                        <span className="text-[length:var(--text-11)] font-semibold uppercase tracking-wider text-[#8E8E90]">Location</span>
                      </div>
                      <div className="overflow-hidden rounded-lg">
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7539.342371665663!2d72.86381847497857!3d19.122075682091978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c96714ce57ed%3A0x1b179a27f41db6f0!2sPCRED!5e0!3m2!1sen!2sin!4v1783146736429!5m2!1sen!2sin"
                          width="100%"
                          height="150"
                          loading="lazy"
                          referrerPolicy="strict-origin-when-cross-origin"
                          className="block w-full"
                        />
                      </div>
                    </motion.div>
                  </div>
                </motion.div>

                {/* Phone frame — layered on top so it visually contains the cards inside the screen */}
                <div className="pointer-events-none absolute inset-0 z-10 bg-transparent">
                  <Image src="/phone-frame-overlay.png" alt="Phone Frame" fill className="object-fill bg-transparent" quality={100} unoptimized />
                </div>
              </div>
              </div>
            </div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative overflow-hidden rounded-2xl border border-navy-900/8 bg-white p-8 shadow-[0_24px_60px_-32px_rgba(4,81,120,0.35)] md:p-10 xl:col-start-2 xl:row-start-2 xl:self-start"
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
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleFormChange} placeholder="Your phone" inputMode="tel" className={`${formInputClass} ${formErrors.phone ? formInputErrorClass : ""}`} />
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
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#045178] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#045178]/25 transition-all duration-300 hover:bg-[#045178] hover:shadow-xl hover:shadow-[#045178]/30 disabled:opacity-60 disabled:cursor-not-allowed"
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
          </div>
        </div>
      </section>
    </>
  )
}

export default page