"use client";

import { motion } from "motion/react";
import Link from "next/link";
import {IconArrowRight,type TablerIcon,} from "@tabler/icons-react";
import { useSchemes } from "@/src/hooks/useSchemes";

export default function ServicesPage() {
    const {schemes} = useSchemes();
    return (
        <>
        <section className="relative bg-linear-to-br from-[#084E75]/20 from-30% to-[#DDB162]/20 backdrop-blur-2xl h-150 py-30 flex items-end">
            <div
            className="pointer-events-none absolute inset-0 opacity-[0.03]"
            style={{
                backgroundImage:
                "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
                backgroundSize: "32px 32px",
            }}
            />

            <div className="relative mx-auto max-w-7xl w-full">
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
                <h1 className="text-4xl font-bold leading-[1.15] text-[#084E75] md:text-5xl lg:text-6xl">
                Expert Solutions For
                <br />
                <span className="text-[#DDB162]">Every Stage Of Growth</span>
                </h1>
                <p className="mt-6 max-w-2xl text-xl leading-relaxed text-[#084E75]">Comprehensive financial advisory designed to strengthen performance, support expansion, and build long-term stability for MSMEs and enterprises.</p>
            </motion.div>
            </div>
        </section>

        <section className="relative overflow-hidden bg-linear-to-b from-white via-gray-50 to-gray-100 py-24">
            <div className="pointer-events-none absolute -right-32 top-20 size-96 rounded-full bg-[#084E75]/5 blur-3xl" />

            <div className="relative mx-auto max-w-7xl">
            <motion.div
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-14 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
            >
                <div>
                    <h2 className="text-3xl font-semibold text-[#084E75] md:text-4xl">
                        How We Help Your Business Grow
                    </h2>
                </div>
            </motion.div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {schemes.map((scheme, i) => (
                    <motion.div
                        key={scheme.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
                        className="group relative flex flex-col overflow-hidden rounded-4xl bg-white p-6 shadow-lg border border-gray-100"
                    >
                        <h3 className="mb-3 text-2xl font-semibold text-[#084E75]">{scheme?.section_1_header}</h3>
                        <Link href={`/schemes/${scheme?.id}`} className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#084E75]">Explore now
                        <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Link>
                    </motion.div>
                ))}
            </div>
            </div>
        </section>

        <section className="py-16">
            <div className="mx-auto max-w-7xl">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative overflow-hidden rounded-4xl bg-[#084E75] px-8 py-12 md:px-14 md:py-14"
            >
                <div className="pointer-events-none absolute -right-16 -top-16 size-48 rounded-full bg-[#084E75]/50 blur-2xl" />
                <div className="pointer-events-none absolute -bottom-16 -left-16 size-56 rounded-full bg-white/5 blur-2xl" />

                <div className="relative flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
                <div className="max-w-xl">
                    <h4 className="text-2xl font-bold text-white md:text-3xl">
                    Not sure which service fits your needs?
                    </h4>
                    <p className="mt-3 text-white/70">
                    Speak with our advisory team — we&apos;ll recommend the right approach for your business goals.
                    </p>
                </div>
                <Link href="/#contact" className="group inline-flex shrink-0 items-center gap-2 rounded-4xl bg-[#DDB162] px-8 py-4 text-base font-semibold text-white transition-all shadow-[5px_5px] shadow-[#DDB162]/50"
                >
                    Get In Touch
                    <IconArrowRight className="size-5 transition-transform group-hover:translate-x-1" />
                </Link>
                </div>
            </motion.div>
            </div>
        </section>
        </>
    );
}
