"use client";

import { motion } from "motion/react";

export default function CareersPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-linear-to-br from-[#084E75]/10 via-white to-[#DDB162]/10 pt-36 pb-24">
        <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-6">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="mb-3 flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
              <span className="size-2 rounded-full bg-[#DDB162]" />
              Careers
            </span>
            <h1 className="mt-1 text-3xl font-bold text-[#084E75] md:text-4xl lg:text-5xl">
              Build Your Career
              <br />
              <span className="text-[#DDB162]">With Pcred</span>
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-base leading-relaxed text-[#4a5568]">
              Content for this page is coming soon.
            </p>
            <div className="mt-10 flex items-center justify-center">
              <div className="h-px w-40 bg-[#DDB162]/30" />
              <span className="mx-3 size-2.5 rotate-45 bg-[#DDB162]/60 shrink-0 block" />
              <div className="h-px w-40 bg-[#DDB162]/30" />
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
