"use client";

import { motion } from "motion/react";
import Link from "next/link";

const sections = [
  {
    number: "01",
    title: "Information We Collect",
    body: (
      <>
        <p>
          We may collect personal information that you voluntarily provide when you:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Fill out forms (e.g., contact form, newsletter signup)</li>
          <li>Contact us via email or phone</li>
          <li>Register for events or submit inquiries</li>
        </ul>
        <p className="mt-4">Examples of personal information may include:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Name</li>
          <li>Email address</li>
          <li>Phone number</li>
          <li>Organization name</li>
          <li>Job title</li>
        </ul>
      </>
    ),
  },
  {
    number: "02",
    title: "How We Use Your Information",
    body: (
      <>
        <p>
          We use personal information for purposes including, but not limited to:
        </p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Responding to your inquiries</li>
          <li>Providing services or information you request</li>
          <li>Sending newsletters or marketing communications (with your consent)</li>
          <li>Improving the Site&apos;s functionality and user experience</li>
          <li>Complying with legal obligations</li>
        </ul>
      </>
    ),
  },
  {
    number: "03",
    title: "Cookies and Tracking Technologies",
    body: (
      <p>
        We may use cookies, web beacons, and similar technologies to collect
        information about your interaction with the Site and enhance user
        experience. You can manage cookie preferences through your browser
        settings.
      </p>
    ),
  },
  {
    number: "04",
    title: "Sharing Your Information",
    body: (
      <>
        <p>We do not sell your personal data. We may share your information with:</p>
        <ul className="mt-3 list-disc space-y-1.5 pl-5">
          <li>Third-party service providers (e.g., email platforms, analytics providers)</li>
          <li>Legal authorities, if required by law</li>
          <li>Affiliates or partners, with your consent</li>
        </ul>
      </>
    ),
  },
  {
    number: "05",
    title: "Data Security",
    body: (
      <p>
        We implement reasonable technical and organizational measures to protect
        your personal information from unauthorized access, loss, or misuse.
        However, no data transmission over the internet is 100% secure.
      </p>
    ),
  },
  {
    number: "06",
    title: "Third-Party Links",
    body: (
      <p>
        Our Site may contain links to third-party sites. We are not responsible
        for the privacy practices of those sites and encourage you to read their
        privacy policies before use.
      </p>
    ),
  },
  {
    number: "07",
    title: "Your Rights and Choices",
    body: (
      <p>
        Depending on your location and applicable law, you may have rights
        regarding your personal data, including access, correction, deletion, or
        restricting processing. To exercise these rights, contact us at{" "}
        <a
          href="mailto:info@pcred.org"
          className="font-semibold text-[#00b2fc] underline decoration-[#00b2fc]/40 underline-offset-2 hover:decoration-[#00b2fc]"
        >
          info@pcred.org
        </a>
        .
      </p>
    ),
  },
  {
    number: "08",
    title: "Changes to This Policy",
    body: (
      <p>
        We may update this Privacy Policy from time to time. The updated version
        will be effective as of the &quot;Effective Date&quot; shown above.
      </p>
    ),
  },
  {
    number: "09",
    title: "Contact Us",
    body: (
      <p>
        If you have questions or concerns about this Policy, contact us at:
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

export default function PrivacyPolicyPage() {
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
            Privacy <span className="text-[#00b2fc]">Policy</span>
          </h1>
          <p className="mt-3 text-sm text-[#4a5568]/70">Effective Date: 22 September 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="space-y-4 text-sm leading-relaxed text-[#4a5568] md:text-base"
        >
          <p>
            At PCRED Corporate Advisory Services, we are committed to protecting
            your privacy and ensuring the security of your personal information.
            This Privacy Policy outlines how we collect, use, disclose, and
            safeguard your information when you visit our website or use our
            services.
          </p>
          <p>
            Welcome to PCRED (&quot;we,&quot; &quot;our,&quot; &quot;us&quot;). This Privacy Policy
            explains how we collect, use, disclose, and safeguard your personal
            information when you visit{" "}
            <Link
              href="https://www.pcred.org/"
              className="font-semibold text-[#00b2fc] underline decoration-[#00b2fc]/40 underline-offset-2 hover:decoration-[#00b2fc]"
            >
              https://www.pcred.org/
            </Link>{" "}
            (the &quot;Site&quot;). By accessing or using our Site, you agree to the
            terms of this Privacy Policy.
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
