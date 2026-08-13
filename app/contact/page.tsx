'use client';

import React,{useState,type FormEvent} from 'react';
import {motion} from "motion/react";
import { IconMail, IconPhone, IconClock, IconSend, IconCheck, IconMapPin} from "@tabler/icons-react";
import Image from 'next/image';

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
  
  const inputClass =
    "w-full rounded-4xl border border-[#084E75]/15 bg-white px-4 py-3.5 text-[#084E75] placeholder:text-[#8E8E90]/60 outline-none transition-all duration-200 focus:border-[#084E75] focus:ring-2 focus:ring-[#084E75]/15";
  
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl mx-auto text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Get In Touch
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl">
              Connecting Through
              <br />
              <span className="text-[#DDB162]">Smart Finance</span>
            </h1>
            <p className="mt-4 text-base leading-relaxed text-[#4a5568]">
              We partner with MSMEs and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-40 bg-[#DDB162]/30" />
              <span className="mx-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
              <div className="h-px w-40 bg-[#DDB162]/30" />
            </div>
          </motion.div>

          <div id="contact" className="grid grid-cols-1 gap-10 mt-24 xl:grid-cols-[1fr_1.2fr] xl:grid-rows-[auto_1fr]">
            <div className="order-3 xl:order-none flex items-start justify-center mt-12 xl:-mt-16 xl:self-start xl:col-start-1 xl:row-start-2 min-w-0 w-full max-sm:-mx-6">
              <div className="relative mx-auto w-screen sm:w-[36rem] sm:h-[49.8rem] sm:aspect-auto xl:w-[35rem] xl:h-[48.5rem] aspect-[35/48.5] sm:aspect-auto">
              <div className="absolute left-0 top-0 w-[35rem] h-[48.5rem] origin-top-left scale-[calc(100vw/35rem)] sm:scale-[1.028] xl:scale-[1.0]">
                {/* Decorative background glow behind the phone so it doesn't float on plain empty space */}
                <div className="pointer-events-none absolute -inset-8 -z-10 rounded-[3rem] bg-linear-to-br from-[#084E75]/12 via-white/40 to-[#DDB162]/15 blur-2xl" />
                <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#084E75]/10 blur-3xl" />

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
                        className="group flex items-center gap-3 rounded-2xl border border-[#084E75]/10 bg-white p-3.5 shadow-sm"
                      >
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#084E75]/10 text-[#084E75]">
                          <item.icon className="size-5" />
                        </div>
                        <div className="min-w-0">
                          <p className="text-[length:var(--text-11)] font-semibold uppercase tracking-wider text-[#8E8E90] leading-none">{item.label}</p>
                          {item.href ? (
                            <a href={item.href} className="mt-1 block truncate text-sm font-medium text-[#084E75] hover:underline">
                              {item.value}
                            </a>
                          ) : (
                            <p className="mt-1 truncate text-sm font-medium text-[#084E75]">{item.value}</p>
                          )}
                        </div>
                      </motion.div>
                    ))}
                    <motion.div
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.15 + contactInfo.length * 0.08 }}
                      className="overflow-hidden rounded-2xl border border-[#084E75]/10 bg-white p-2.5 shadow-sm"
                    >
                      <div className="mb-2 flex items-center gap-3">
                        <div className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-[#084E75]/10 text-[#084E75]">
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
                className="rounded-4xl border border-[#084E75]/10 bg-white p-8 shadow-xl shadow-[#084E75]/5 md:p-10 xl:col-start-2 xl:row-start-2 xl:self-start"
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
                      <input id="phone" name="phone" type="tel" value={form.phone} onChange={handleFormChange} placeholder="+91 98765 43210" inputMode="tel" className={`${inputClass} ${formErrors.phone ? "border-red-400" : ""}`} />
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
                  {error && (
                    <p className="rounded-2xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                  )}
                  <button
                    type="submit"
                    disabled={loading}
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-4 text-base font-semibold text-[#DDB162] shadow-lg shadow-[#084E75]/25 transition-all duration-300 hover:bg-[#0a5d8a] hover:shadow-xl hover:shadow-[#084E75]/30 disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {loading ? "Sending…" : "Send Message"}
                    {!loading && <IconSend className="size-5 transition-transform group-hover:translate-x-1" />}
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
          </div>
        </div>
      </section>
    </>
  )
}

export default page