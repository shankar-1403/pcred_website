"use client";

import { useState, useRef, type ChangeEvent, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { IconMapPin, IconBriefcase, IconClock, IconUsers, IconX, IconPaperclip } from "@tabler/icons-react";
import { useCareers, type Career } from "@/src/hooks/useCareers";
import Image from "next/image";
import heroImage from "@/public/site/careers_hero_team.webp";

const initialApply = { name: "", email: "", phone: "", experience: "", message: "" };

function ApplyModal({ career, onClose }: { career: Career; onClose: () => void }) {
  const [form, setForm] = useState(initialApply);
  const [resume, setResume] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [done, setDone] = useState(false);
  const fileRef = useRef<HTMLInputElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    if (name === "name" && /\d/.test(value)) return;
    if (name === "phone") {
      if (/[a-zA-Z]/.test(value)) return;
      if (value.replace(/\D/g, "").length > 12) return;
    }
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    if (file && file.size > 5 * 1024 * 1024) {
      setError("Resume must be under 5 MB.");
      return;
    }
    setError("");
    setResume(file);
  };

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError("");
    if (!form.name.trim()) { setError("Full name is required."); return; }
    if (form.name.trim().length < 2) { setError("Name must be at least 2 characters."); return; }
    if (/\d/.test(form.name)) { setError("Name must not contain numbers."); return; }
    if (!/^[a-zA-Z\s'.'-]+$/.test(form.name.trim())) { setError("Name contains invalid characters."); return; }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!form.email.trim()) { setError("Email is required."); return; }
    if (!emailRegex.test(form.email.trim())) { setError("Enter a valid email address (e.g. name@domain.com)."); return; }
    if (!form.phone.trim()) { setError("Phone number is required."); return; }
    const digitsOnly = form.phone.replace(/\D/g, "");
    if (digitsOnly.length !== 10 && digitsOnly.length !== 12) { setError("Enter a 10-digit mobile number or 12-digit number with country code."); return; }
    if (!resume) { setError("Please attach your resume (PDF or DOC)."); return; }
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append("jobTitle", career.title ?? "");
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone);
      fd.append("experience", form.experience);
      fd.append("message", form.message);
      fd.append("resume", resume);

      const res = await fetch("/api/careers/apply", { method: "POST", body: fd });
      const json = await res.json();
      if (!res.ok) throw new Error(json.error ?? "Submission failed.");
      setDone(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 cursor-pointer bg-[#045178]/40 backdrop-blur-sm"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 16 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 16 }}
        transition={{ duration: 0.25 }}
        className="relative z-10 w-full max-w-lg overflow-hidden rounded-4xl bg-white shadow-2xl"
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#045178]/10 px-6 py-5">
          <div>
            <h2 className="font-serif text-xl font-bold text-[#045178]">Apply Now</h2>
            <p className="mt-0.5 text-xs text-[#8E8E90]">{career.title}</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="flex size-9 cursor-pointer items-center justify-center rounded-full border border-[#045178]/15 text-[#045178] transition-colors hover:bg-[#045178]/10"
          >
            <IconX className="size-5" />
          </button>
        </div>

        <div className="p-6">
          {done ? (
            <div className="py-8 text-center">
              <div className="mx-auto mb-4 flex size-14 items-center justify-center rounded-full bg-green-50">
                <svg className="size-7 text-green-500" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-[#045178]">Application Submitted!</h3>
              <p className="mt-2 text-sm text-[#8E8E90]">We will review your application and get back to you shortly.</p>
              <button
                onClick={onClose}
                className="mt-6 rounded-full bg-[#045178] px-6 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#045178]"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <p className="rounded-4xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
              )}

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#045178]">Full Name *</label>
                <input
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className="border border-[#045178] rounded-4xl w-full py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-[#045178]/20"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#045178]">Email *</label>
                  <input
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@email.com"
                    inputMode="email"
                    className="border border-[#045178] rounded-4xl w-full py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-[#045178]/20"
                  />
                </div>
                <div>
                  <label className="mb-1.5 block text-sm font-medium text-[#045178]">Phone *</label>
                  <input
                    name="phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 98765 43210"
                    inputMode="tel"
                    className="border border-[#045178] rounded-4xl w-full py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-[#045178]/20"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#045178]">Years of Experience</label>
                <div className="flex items-center overflow-hidden rounded-4xl border border-[#045178] focus-within:ring-2 focus-within:ring-[#045178]/20">
                  <input
                    name="experience"
                    type="number"
                    min="0"
                    max="50"
                    value={form.experience}
                    onChange={handleChange}
                    placeholder="0"
                    className="w-full py-2 pl-4 text-sm text-[#045178]"
                  />
                </div>
              </div>

              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#045178]">Cover Message</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Tell us why you're a great fit…"
                  className="border border-[#045178] rounded-2xl w-full py-2 px-3 text-sm outline-none focus:ring-2 focus:ring-[#045178]/20 resize-none"
                />
              </div>

              {/* Resume upload */}
              <div>
                <label className="mb-1.5 block text-sm font-medium text-[#045178]">Resume *  <span className="font-normal text-[#8E8E90]">(PDF, DOC, max 5 MB)</span></label>
                <input
                  ref={fileRef}
                  type="file"
                  accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                  onChange={handleFileChange}
                  className="hidden"
                />
                <button
                  type="button"
                  onClick={() => fileRef.current?.click()}
                  className="flex w-full cursor-pointer items-center gap-2 rounded-4xl border border-dashed border-[#045178] px-4 py-3 text-sm text-[#045178] transition-colors hover:bg-[#045178]/5"
                >
                  <IconPaperclip className="size-4 shrink-0" />
                  {resume ? resume.name : "Attach resume"}
                </button>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full cursor-pointer rounded-4xl bg-[#045178] py-3 text-sm font-semibold text-[#D9B872] shadow-lg shadow-[#045178]/20 transition-colors hover:bg-[#045178] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {loading ? "Submitting…" : "Submit Application"}
              </button>
            </form>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

function JobCard({ career, index, onApply }: { career: Career; index: number; onApply: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.08 }}
      className="group flex flex-col gap-4 rounded-2xl border border-navy-900/8 bg-white p-6 shadow-[0_16px_40px_-28px_rgba(4,81,120,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_28px_56px_-28px_rgba(4,81,120,0.4)]"
    >
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-lg font-bold leading-snug text-[#045178] transition-colors group-hover:text-[#045178]">
          {career.title}
        </h3>
        {career.type && (
          <span className="shrink-0 rounded-full border border-[#045178]/15 px-3 py-0.5 text-xs font-semibold uppercase tracking-wider text-[#045178]">
            {career.type}
          </span>
        )}
      </div>

      <div className="flex flex-wrap gap-4 text-xs text-[#8E8E90]">
        {career.department && (
          <span className="inline-flex items-center gap-1.5">
            <IconBriefcase className="size-3.5" />
            {career.department}
          </span>
        )}
        {career.location && (
          <span className="inline-flex items-center gap-1.5">
            <IconMapPin className="size-3.5" />
            {career.location}
          </span>
        )}
        {career.experience && (
          <span className="inline-flex items-center gap-1.5">
            <IconClock className="size-3.5" />
            {career.experience}
          </span>
        )}
        {career.openings != null && career.openings > 0 && (
          <span className="inline-flex items-center gap-1.5">
            <IconUsers className="size-3.5" />
            {career.openings} opening{career.openings > 1 ? "s" : ""}
          </span>
        )}
      </div>

      {career.description && (
        <div
          className="prose prose-sm max-w-none line-clamp-3 text-sm leading-relaxed text-[#8E8E90]"
          dangerouslySetInnerHTML={{ __html: career.description }}
        />
      )}

      <button
        type="button"
        onClick={onApply}
        className="mt-2 inline-flex w-fit cursor-pointer items-center gap-2 rounded-full bg-[#045178] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#045178]"
      >
        Apply Now
      </button>
    </motion.div>
  );
}

export default function CareersPage() {
  const { careers, loading } = useCareers();
  const [selectedJob, setSelectedJob] = useState<Career | null>(null);
  const activeJobs = careers.filter((c) => c.active !== false);

  return (
    <>
      <section className="relative overflow-hidden pt-36 pb-20 md:pb-24 min-h-[560px]">
        <Image
          src={heroImage}
          alt="Colleagues collaborating on a project"
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
              Careers
            </span>
            <h1 className="font-serif mt-1 text-3xl font-bold text-white md:text-4xl lg:text-5xl leading-tight">
              Build Your Career
              <br />
              <span className="bg-linear-to-r from-[#D9B872] to-[#96701F] bg-clip-text text-transparent">With Pcred</span>
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/70 md:text-lg">
              Join our team of financial experts and help businesses and enterprises achieve their funding goals.
            </p>
            <div className="mt-10 flex items-center">
              <div className="h-px w-40 bg-white/15" />
              <span className="mx-3 size-2.5 shrink-0 rotate-45 bg-[#D9B872]/60" />
              <div className="h-px w-24 bg-white/15" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_100%_60%_at_50%_100%,rgba(141,140,143,0.12),transparent)] bg-white py-20 md:py-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#045178]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          {!loading && activeJobs.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4 }}
              className="mt-14 grid grid-cols-3 gap-x-6 gap-y-6 border-t border-[#045178]/8 pt-10"
            >
              {[
                { value: activeJobs.length, label: "Open positions" },
                { value: new Set(activeJobs.map((c) => c.department).filter(Boolean)).size, label: "Departments hiring" },
                { value: new Set(activeJobs.map((c) => c.location).filter(Boolean)).size, label: "Office locations" },
              ].map((stat, i) => (
                <div key={stat.label} className="relative border-l border-[#045178]/10 pl-5 first:border-l-0 first:pl-0">
                  <span className="font-serif block text-3xl font-bold leading-none text-[#045178] md:text-4xl">
                    {stat.value}
                  </span>
                  <span className="mt-2 block text-xs leading-snug text-[#4a5568] md:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          )}

          <div className="mt-14">
            {loading ? (
              <div className="py-20 text-center text-[#8E8E90]">Loading openings…</div>
            ) : activeJobs.length === 0 ? (
              <div className="py-20 text-center text-[#8E8E90]">No open positions at the moment. Check back soon.</div>
            ) : (
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {activeJobs.map((career, i) => (
                  <JobCard key={career.id} career={career} index={i} onApply={() => setSelectedJob(career)} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedJob && (
          <ApplyModal career={selectedJob} onClose={() => setSelectedJob(null)} />
        )}
      </AnimatePresence>
    </>
  );
}
