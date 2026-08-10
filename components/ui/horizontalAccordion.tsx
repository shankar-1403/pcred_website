"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowRight } from "@tabler/icons-react";
import type { Icon } from "@tabler/icons-react";

export interface AccordionItem {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  icon?: Icon;
}

interface HorizontalAccordionProps {
  accordionItems: AccordionItem[];
}

const PANEL_TRANSITION = {
  duration: 0.55,
  ease: [0.4, 0, 0.2, 1] as const,
};

export default function HorizontalAccordion({
  accordionItems,
}: HorizontalAccordionProps) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* Desktop — horizontal accordion */}
      <div className="hidden h-110 overflow-hidden rounded-3xl border border-white/10 shadow-2xl shadow-black/20 lg:flex mt-8" role="tablist"
        aria-label="Strategic advantages">
        {accordionItems.map((item, index) => {
          const isActive = active === index;
          const ItemIcon = item.icon;

          return (
            <motion.div
              key={item.title}
              role="tab"
              tabIndex={0}
              aria-selected={isActive}
              aria-expanded={isActive}
              onClick={() => setActive(index)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActive(index);
                }
              }}
              initial={false}
              animate={{ flexGrow: isActive ? 5 : 1 }}
              transition={PANEL_TRANSITION}
              className={`group relative h-full min-w-18 shrink-0 basis-0 cursor-pointer overflow-hidden border-r border-white/10 text-left last:border-r-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#DDB162] ${
                isActive ? "z-10" : "z-0"
              }`}
            >
              <img
                src={item.image}
                alt={item.title}
                className={`object-cover transition-transform duration-700 h-full ${
                  isActive ? "scale-130" : "scale-130 group-hover:scale-130"
                }`}
              />

              <div
                className={`absolute inset-0 transition-colors duration-500 ${
                  isActive
                    ? "bg-linear-to-t from-[#084E75]/95 via-[#084E75]/55 to-[#084E75]/20"
                    : "bg-[#084E75]/65 group-hover:bg-[#084E75]/55"
                }`}
              />

              {isActive && (
                <div className="absolute inset-y-0 left-0 w-1 bg-[#DDB162]" />
              )}

              <AnimatePresence mode="wait">
                {!isActive && (
                  <motion.div
                    key="collapsed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="absolute inset-0 flex items-center justify-center px-2"
                  >
                    <span
                      className="max-h-[85%] truncate text-sm font-semibold uppercase tracking-[0.2em] text-white/90 rotate-180  [writing-mode:vertical-lr]"
                      aria-hidden
                    >
                      {item.title}
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    key="expanded"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.35, delay: 0.12 }}
                    className="absolute inset-x-0 bottom-0 z-10 p-8 text-white md:p-10"
                  >
                    <div className="flex gap-3 items-center">
                      {ItemIcon && (
                        <div className="inline-flex rounded-full bg-[#DDB162] p-2 text-[#084E75]">
                          <ItemIcon size={20} stroke={1.8} />
                        </div>
                      )}

                      <span className="text-xs font-semibold uppercase tracking-[0.3em] text-[#DDB162]">
                        {item.subtitle}
                      </span>
                    </div>

                    <p className="mt-2 text-3xl font-semibold leading-tight md:text-3xl">
                      {item.title}
                    </p>

                    <p className="mt-4 max-w-md text-base leading-relaxed text-white md:text-lg">
                      {item.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>

      {/* Mobile / tablet — vertical accordion */}
      <div className="flex flex-col gap-3 lg:hidden" role="tablist">
        {accordionItems.map((item, index) => {
          const isActive = active === index;
          const ItemIcon = item.icon;

          return (
            <div
              key={item.title}
              role="tab"
              aria-selected={isActive}
              aria-expanded={isActive}
              className={`overflow-hidden rounded-2xl border transition-colors ${
                isActive
                  ? "border-[#DDB162]/40 bg-white/10"
                  : "border-white/10 bg-white/5"
              }`}
            >
              <button
                type="button"
                onClick={() => setActive(index)}
                className="relative block h-44 w-full text-left sm:h-52 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#DDB162]"
              >
                <Image
                  src={item.image}
                  fill
                  alt=""
                  sizes="100vw"
                  className="object-cover"
                />
                <div
                  className={`absolute inset-0 ${
                    isActive
                      ? "bg-linear-to-t from-[#084E75]/95 via-[#084E75]/50 to-transparent"
                      : "bg-[#084E75]/60"
                  }`}
                />

                <div className="absolute inset-x-0 bottom-0 p-5 text-white">
                  <span className="text-[length:var(--text-10)] font-semibold uppercase tracking-[0.25em] text-[#DDB162]">
                    {item.subtitle}
                  </span>
                  <h3 className="mt-1 text-xl font-bold">{item.title}</h3>
                </div>
              </button>

              <AnimatePresence initial={false}>
                {isActive && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="flex items-start gap-4 px-5 pb-5 pt-1 text-white">
                      {ItemIcon && (
                        <div className="inline-flex shrink-0 rounded-xl bg-[#DDB162] p-2.5 text-[#084E75]">
                          <ItemIcon size={20} stroke={1.8} />
                        </div>
                      )}
                      <div>
                        <p className="text-sm leading-relaxed text-white/80">
                          {item.description}
                        </p>
                        <Link
                          href="#contact"
                          className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#DDB162]"
                        >
                          Learn More
                          <IconArrowRight size={16} />
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </>
  );
}
