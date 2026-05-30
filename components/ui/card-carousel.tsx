"use client";

import { motion, useTransform, useScroll } from "motion/react";
import Link from "next/link";
import { useRef } from "react";
import {
  IconArrowRight,
  IconBriefcase,
  IconBuilding,
  IconBuildingBank,
  IconCalculator,
  IconChartLine,
  IconCoins,
  IconCreditCard,
  IconLeaf,
  IconReportAnalytics,
  IconRocket,
  IconShield,
  IconTrendingUp,
  IconUsers,
  IconWallet,
  type TablerIcon,
} from "@tabler/icons-react";

const serviceIcons: Record<number, TablerIcon> = {
  1: IconChartLine,
  2: IconCalculator,
  3: IconTrendingUp,
  4: IconShield,
  5: IconBriefcase,
  6: IconShield,
  7: IconWallet,
  8: IconUsers,
  9: IconBuilding,
  10: IconLeaf,
  11: IconReportAnalytics,
  12: IconCoins,
  13: IconBuildingBank,
  14: IconCreditCard,
  15: IconRocket,
  16: IconBriefcase,
};

function formatServiceLabel(label: string) {
  return label
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

type CardType = {
  id: number;
  label: string;
  description: string;
};

interface HorizontalScrollCarouselProps {
  cards: CardType[];
}

const HorizontalScrollCarousel = ({
  cards,
}: HorizontalScrollCarouselProps) => {
  const targetRef = useRef<HTMLElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-2%", "-84%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div
          style={{ x }}
          className="flex gap-6 pl-6 md:pl-[max(1.5rem,calc((100vw-80rem)/2+1.5rem))]"
        >
          {cards.map((card, i) => (
            <Card key={card.id} card={card} fallbackIndex={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardType;
  fallbackIndex: number;
}

const Card = ({ card, fallbackIndex }: CardProps) => {
  const Icon =
    serviceIcons[card.id] ??
    serviceIcons[(fallbackIndex % 16) + 1] ??
    IconChartLine;

  return (
    <div className="group relative w-100 shrink-0">
      <div className="relative flex h-140 flex-col overflow-hidden rounded-2xl bg-white p-7 shadow-[0_12px_40px_rgba(0,0,0,0.22)] ring-1 ring-white/10 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
        <div className="absolute inset-x-0 top-0 h-1.5 bg-[#084E75] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="mb-5 flex items-start justify-between gap-3">
          <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-[#084E75] text-white shadow-md shadow-[#084E75]/25 transition-transform duration-300 group-hover:scale-105">
            <Icon className="size-6" stroke={1.5} />
          </div>
          <span className="rounded-lg bg-[#084E75]/8 px-2.5 py-1 font-mono text-xs font-semibold text-[#084E75]/50">
            {String(card.id).padStart(2, "0")}
          </span>
        </div>

        <h3 className="mb-3 line-clamp-3 text-lg font-bold leading-snug text-[#084E75]">
          {formatServiceLabel(card.label)}
        </h3>

        <p className="line-clamp-4 flex-1 text-sm leading-relaxed text-[#8E8E90]">
          {card.description}
        </p>

        <div className="mt-6 border-t border-[#084E75]/10 pt-5">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#084E75] transition-colors hover:text-[#0a5d8a]"
          >
            Enquire now
            <span className="flex size-8 items-center justify-center rounded-full bg-[#084E75]/10 transition-colors group-hover:bg-[#084E75] group-hover:text-white">
              <IconArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
