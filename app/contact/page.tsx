'use client';

import React,{useState,type FormEvent} from 'react';
import {motion} from "motion/react";
import { IconMail, IconMapPin, IconPhone, IconClock, IconSend, IconCheck} from "@tabler/icons-react";
import contact from "../../public/contact.png"
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
  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const contactServices = [
    "Capital Market Advisory",
    "Debt Advisory",
    "Virtual CFO Services",
    "IPO Advisory",
    "Investment Strategy Consulting",
    "Other",
  ];
  
  const contactInfo = [
    { icon: IconPhone, label: "Phone", value: "+91 98765 43210", href: "tel:+919876543210" },
    { icon: IconMail, label: "Email", value: "contact@pcred.org", href: "mailto:contact@pcred.org" },
    { icon: IconMapPin, label: "Office", value: "Mumbai, Maharashtra, India", href: undefined as string | undefined },
    { icon: IconClock, label: "Hours", value: "Mon – Sat, 9:00 AM – 6:00 PM", href: undefined as string | undefined },
  ];
  
  const inputClass =
    "w-full rounded-4xl border border-[#084E75]/15 bg-white px-4 py-3.5 text-[#084E75] placeholder:text-[#8E8E90]/60 outline-none transition-all duration-200 focus:border-[#084E75] focus:ring-2 focus:ring-[#084E75]/15";
  
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/20 from-40% to-[#8D1821]/20 backdrop-blur-2xl h-150 py-30 flex items-end">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div className="relative mx-auto max-w-7xl w-full grid grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold leading-[1.15] text-[#084E75] md:text-5xl lg:text-6xl text-shadow-lg">
              Connecting Through
              <br />
              <span className="text-white">Smart Finance</span>
            </h1>
            <p className="mt-6 max-w-xl text-xl leading-relaxed text-[#084E75]">
              We partner with MSMEs and growing enterprises to deliver strategic
              financial advisory, funding solutions, and long-term growth support.
            </p>
          </motion.div>
          <div className='relative'>
            <Image src={contact} alt='Phone Image' className="object-contain absolute h-250 -top-20"/>
          </div>
        </div>
      </section>
      <section id="contact" className="relative overflow-hidden py-24">
        <div className="relative mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-14 text-center"
          >
            <h2 className="text-4xl font-semibold text-[#084E75] md:text-5xl">
              Let&apos;s Start a Conversation
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-[#8E8E90]">
              Tell us about your business goals. Our advisory team will respond within one business day.
            </p>
          </motion.div>

          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex flex-col gap-6"
            >
              <div className="rounded-4xl bg-[#084E75] p-8 text-white shadow-md shadow-[#084E75]/8">
                <h5 className="mb-2 text-2xl font-semibold">Ready to Move Your Business Forward?</h5>
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
                {contactInfo.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.15 + i * 0.08 }}
                    className="group flex items-start gap-4 rounded-4xl border border-[#084E75]/10 bg-white p-5 transition-all duration-300 hover:border-[#084E75]/25 shadow-md shadow-[#084E75]/8"
                  >
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-4xl bg-[#084E75]/10 text-[#084E75] transition-colors group-hover:bg-[#084E75] group-hover:text-white">
                      <item.icon className="size-5" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-[#8E8E90]">{item.label}</p>
                      {item.href ? (
                        <a href={item.href} className="mt-0.5 block font-medium text-[#084E75] hover:underline">
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 font-medium text-[#084E75]">{item.value}</p>
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
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-4xl border border-[#084E75]/10 bg-white p-8 shadow-xl shadow-[#084E75]/5 md:p-10"
            >
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex min-h-105 flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex size-16 items-center justify-center rounded-full bg-[#084E75]/10 text-[#084E75]">
                    <IconCheck className="size-8" />
                  </div>
                  <h5 className="text-2xl font-bold text-[#084E75]">Message Sent!</h5>
                  <p className="mt-3 max-w-sm text-[#8E8E90]">
                    Thank you for reaching out. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", phone: "", company: "", service: "", message: "" });
                    }}
                    className="mt-8 cursor-pointer rounded-xl border-2 border-[#084E75] px-6 py-3 text-sm font-semibold text-[#084E75] transition-colors hover:bg-[#084E75] hover:text-white"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input id="name" name="name" type="text" required value={form.name} onChange={handleFormChange} placeholder="John Doe" className={inputClass} />
                    </div>
                    <div>
                      <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Email <span className="text-red-500">*</span>
                      </label>
                      <input id="email" name="email" type="email" required value={form.email} onChange={handleFormChange} placeholder="you@company.com" className={inputClass} />
                    </div>
                  </div>
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#084E75]">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input id="phone" name="phone" type="tel" required value={form.phone} onChange={handleFormChange} placeholder="+91 98765 43210" className={inputClass} />
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
                    <textarea id="message" name="message" required rows={5} value={form.message} onChange={handleFormChange} placeholder="Tell us about your business needs and goals..." className={`${inputClass} resize-none`} />
                  </div>
                  <button
                    type="submit"
                    className="group flex w-full cursor-pointer items-center justify-center gap-2 rounded-4xl bg-[#084E75] px-6 py-4 text-base font-semibold text-white shadow-lg shadow-[#084E75]/25 transition-all duration-300 hover:bg-[#0a5d8a] hover:shadow-xl hover:shadow-[#084E75]/30"
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
  )
}

export default page