"use client";

import { motion } from "motion/react";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Use of the Site",
    body: (
      <p>
        The Site and its content are intended for general informational purposes
        only. You agree to use the Site in a lawful manner and not for any
        purpose that is prohibited by these Terms or applicable laws and
        regulations.
      </p>
    ),
  },
  {
    number: "02",
    title: "Intellectual Property",
    body: (
      <>
        <p>
          All content available on the Site, including but not limited to:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>text</li>
          <li>graphics</li>
          <li>logos</li>
          <li>images</li>
          <li>designs</li>
          <li>layout</li>
        </ul>
        <p className="mt-4">
          is the property of PCRED or its content suppliers and is protected by
          applicable intellectual property laws. Unauthorized use, reproduction,
          or distribution of any content from this Site is strictly prohibited.
        </p>
      </>
    ),
  },
  {
    number: "03",
    title: "User Submissions",
    body: (
      <>
        <p>If you submit any:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>information</li>
          <li>inquiries</li>
          <li>documents</li>
          <li>other material</li>
        </ul>
        <p className="mt-4">
          through the Site, you confirm that the information provided is accurate
          and lawful. By submitting such content, you grant PCRED the right to
          use the information for responding to inquiries, providing services,
          and improving offerings, in accordance with our{" "}
          <Link
            href="/privacy-policy"
            className="font-semibold text-[#00b2fc] underline decoration-[#00b2fc]/40 underline-offset-2 hover:decoration-[#00b2fc]"
          >
            Privacy Policy
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    number: "04",
    title: "No Professional or Financial Advice",
    body: (
      <p>
        The information provided on this Site is for general informational
        purposes only and should not be construed as financial, legal, or
        professional advice. Users are advised to consult with qualified
        professionals before making any financial or business decisions.
      </p>
    ),
  },
  {
    number: "05",
    title: "Indemnification",
    body: (
      <>
        <p>You agree to indemnify and hold harmless:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>PCRED</li>
          <li>its directors</li>
          <li>employees</li>
          <li>partners</li>
          <li>affiliates</li>
        </ul>
        <p className="mt-4">
          from and against any claims, losses, liabilities, damages, or expenses
          arising out of your use of the Site or violation of these Terms.
        </p>
      </>
    ),
  },
  {
    number: "06",
    title: "Governing Law",
    body: (
      <p>
        These Terms shall be governed by and interpreted in accordance with the
        laws of India. Any disputes arising in connection with the use of this
        Site shall be subject to the exclusive jurisdiction of the courts located
        in India.
      </p>
    ),
  },
  {
    number: "07",
    title: "Changes to Terms",
    body: (
      <p>
        PCRED reserves the right to update or modify these Terms at any time
        without prior notice. Any changes will be effective immediately upon
        posting on the Site. Continued use of the Site after changes are posted
        constitutes acceptance of the revised Terms.
      </p>
    ),
  },
  {
    number: "08",
    title: "Contact Information",
    body: (
      <p>
        If you have any questions regarding these Terms &amp; Conditions, please
        contact us at:
        <br />
        <span className="mt-2 inline-block">
          Email:{" "}
          <a
            href="mailto:info@pcred.org"
            className="font-semibold text-[#00b2fc] underline decoration-[#00b2fc]/40 underline-offset-2 hover:decoration-[#00b2fc]"
          >
            info@pcred.org
          </a>
        </span>
      </p>
    ),
  },
];

export default function TermsOfServicePage() {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-[#EEF6FB] via-white to-[#FAFAF9] pt-32 pb-16 md:pt-40 md:pb-24">
      <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#00b2fc]/5 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
          className="mb-10"
        >
          <span className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-[#00b2fc]">
            <span className="size-2 rounded-full bg-[#00b2fc]" />
            Legal
          </span>
          <h1 className="font-serif text-3xl font-bold leading-tight text-[#00255a] md:text-4xl">
            Terms &amp; <span className="text-[#00b2fc]">Conditions</span>
          </h1>
          <p className="mt-3 text-sm text-[#4a5568]/70">
            Effective Date: December 27, 2025
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-4 text-sm leading-relaxed text-[#4a5568] md:text-base"
        >
          <p>
            These Terms &amp; Conditions govern your use of PCRED Corporate
            Advisory Services website. Please read them carefully to understand
            your rights and obligations.
          </p>
          <p>
            Please read these Terms &amp; Conditions (&quot;Terms&quot;) carefully before
            using{" "}
            <Link
              href="https://www.pcred.org/"
              className="font-semibold text-[#00b2fc] underline decoration-[#00b2fc]/40 underline-offset-2 hover:decoration-[#00b2fc]"
            >
              https://www.pcred.org/
            </Link>{" "}
            (&quot;Site&quot;). By accessing or using the Site, you agree to be bound by
            these Terms.
          </p>
        </motion.div>

        <div className="mt-12 space-y-10">
          {sections.map((section, index) => (
            <motion.article
              key={section.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
              className="rounded-3xl border border-[#00255a]/8 bg-white/80 p-6 shadow-[0_16px_40px_-28px_rgba(0,37,90,0.25)] md:p-8"
            >
              <div className="mb-4 flex items-center gap-3">
                <span className="text-xs font-bold tracking-[0.2em] text-[#00b2fc]">
                  {section.number}
                </span>
                <h2 className="font-serif text-xl font-bold text-[#00255a] md:text-2xl">
                  {section.title}
                </h2>
              </div>
              <div className="text-sm leading-relaxed text-[#4a5568] md:text-base">
                {section.body}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
