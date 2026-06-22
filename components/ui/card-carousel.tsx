"use client";

import { motion, useTransform, useScroll } from "motion/react";
import { StaticImageData } from "next/image";
import { useRef } from "react";
import Image from "next/image";
import {IconBriefcase,IconBuilding,IconBuildingBank,IconCalculator,IconChartLine,IconCoins,IconCreditCard,IconLeaf,IconReportAnalytics,IconRocket,IconShield,IconTrendingUp,IconUsers,IconWallet,
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
  color:string;
  image:StaticImageData;
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
            <Card key={card.id} card={card} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardType;
}

const Card = ({ card }: CardProps) => {
  
  return (
    <div className="group relative w-100 shrink-0">
      <div className={`relative flex h-120 flex-col overflow-hidden rounded-4xl px-7 py-8 shadow-lg ${card.color}`}>

        <p className="mb-3 line-clamp-3 text-3xl font-medium leading-snug">
          {formatServiceLabel(card.label)}
        </p>

        <p className="line-clamp-4 flex-1 text-lg leading-relaxed">
          {card.description}
        </p>
        <div className="flex justify-center">
          <Image src={card.image} alt={card.label} className="object-contain"/>
        </div>
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;
