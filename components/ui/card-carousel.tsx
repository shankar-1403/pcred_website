"use client";

import { motion, useTransform, useScroll } from "motion/react";
import { useRef } from "react";

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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-81%"]);

  return (
    <section ref={targetRef} className="relative h-[200vh]">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card, i) => (
            <Card key={card.id} card={card} i={i} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

interface CardProps {
  card: CardType;
  i: number;
}

const Card = ({ card, i }: CardProps) => {
  return (
    <div className="group relative p-4 bg-[#0a5d8a] transition-all duration-500 cursor-pointer rounded-lg w-100 h-140">
      {/* index */}
      <div className="flex items-start justify-between mb-8">
        <span className="text-cyan-300/60 text-xs font-mono tracking-wider">
          {i + 1}
        </span>
      </div>

      <p className="text-white text-lg font-medium capitalize mb-3 h-14">
        {card.label}
      </p>

      <p className="text-white/60 text-base leading-relaxed mb-8 h-20">
        {card.description}
      </p>

      <div className="h-px w-full bg-white/10 relative overflow-hidden">
        <div className="absolute inset-y-0 left-0 w-0 group-hover:w-full bg-linear-to-r from-cyan-300 to-transparent transition-all duration-700" />
      </div>
    </div>
  );
};

export default HorizontalScrollCarousel;