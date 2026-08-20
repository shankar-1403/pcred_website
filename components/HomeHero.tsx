"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { IconArrowRight, IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import { DiaTextReveal } from "@/components/ui/dia-text-reveal";
import { AuroraText } from "./ui/aurora-text";
import homeHeroImage from "@/public/site/home_hero_skyline.webp";
import positioningImage from "@/public/site/positioning_boardroom.webp";
import corpFinanceServiceImage from "@/public/site/corpfin_hero_cityscape.webp";
import maServiceImage from "@/public/site/ma_hero_skyline.webp";

const HERO_SLIDES: {
  image: StaticImageData;
  alt: string;
  subtitle: string;
}[] = [
  {
    image: homeHeroImage,
    alt: "Mumbai skyline at dusk",
    subtitle:
      "Strategic Financial Advisory Solutions Designed to Strengthen and Scale Businesses",
  },
  {
    image: positioningImage,
    alt: "PCRED advisors in a boardroom discussion",
    subtitle:
      "Building Stronger Businesses. Creating Lasting Value for enterprises across India.",
  },
  {
    image: corpFinanceServiceImage,
    alt: "City skyline representing corporate finance",
    subtitle:
      "Capital strategy, debt structuring and financial advisory across every stage of growth.",
  },
  {
    image: maServiceImage,
    alt: "Skyline representing M&A advisory",
    subtitle:
      "M&A, valuation and transaction support for promoters, investors and leadership teams.",
  },
];

const HERO_WORDS = ["ERSISTANCE", "LANNING", "ERFORMANCE"] as const;

const AUTOPLAY_MS = 6000;
const SLIDE_TRANSITION = { duration: 0.85, ease: [0.4, 0, 0.2, 1] as const };

const heroContainerClass = "mx-auto w-full max-w-7xl px-6";

export function HomeHero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const logoVideoRef = useRef<HTMLVideoElement>(null);

  const slideCount = HERO_SLIDES.length;
  const currentSlide = HERO_SLIDES[activeSlide];
  const activeWordIndex = activeSlide % HERO_WORDS.length;

  const goToSlide = useCallback(
    (index: number) => {
      setActiveSlide((index + slideCount) % slideCount);
    },
    [slideCount]
  );

  const goNext = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % slideCount);
  }, [slideCount]);

  const goPrev = useCallback(() => {
    setActiveSlide((prev) => (prev - 1 + slideCount) % slideCount);
  }, [slideCount]);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const syncReducedMotion = () => setIsPaused(media.matches);
    syncReducedMotion();
    media.addEventListener("change", syncReducedMotion);
    return () => media.removeEventListener("change", syncReducedMotion);
  }, []);

  useEffect(() => {
    const onVisibilityChange = () => {
      if (document.hidden) {
        setIsPaused(true);
        return;
      }
      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      setIsPaused(reducedMotion);
    };

    document.addEventListener("visibilitychange", onVisibilityChange);
    return () => document.removeEventListener("visibilitychange", onVisibilityChange);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const timer = window.setInterval(goNext, AUTOPLAY_MS);
    return () => window.clearInterval(timer);
  }, [goNext, isPaused]);

  useEffect(() => {
    const video = logoVideoRef.current;
    if (!video) return;

    video.play().catch(() => {});
  }, []);

  return (
    <section className="relative flex min-h-screen flex-col justify-end">
      {/* Background carousel */}
      <div className="absolute inset-0 overflow-hidden">
        <AnimatePresence mode="sync" initial={false}>
          <motion.div
            key={activeSlide}
            initial={{ opacity: 0, scale: 1.04 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={SLIDE_TRANSITION}
            className="absolute inset-0"
          >
            <Image
              src={currentSlide.image}
              alt={currentSlide.alt}
              fill
              priority={activeSlide === 0}
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>

        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(4,81,120,0.38)_0%,rgba(4,81,120,0.28)_42%,rgba(4,81,120,0.12)_70%,rgba(4,81,120,0.04)_100%),linear-gradient(to_top,rgba(4,81,120,0.16)_0%,transparent_40%)]" />
      </div>

      {/* Hero content — aligned with header (max-w-7xl px-6) */}
      <div className={`relative z-10 ${heroContainerClass} flex flex-1 flex-col justify-end pb-8 pt-32 md:pb-10`}>
        <div className="flex max-w-4xl flex-col gap-4 md:gap-6">
          <h1 className="font-serif text-white">
            <span className="inline-flex flex-nowrap items-end gap-x-1 text-4xl font-bold uppercase leading-none tracking-tight sm:text-[80px] md:text-6xl lg:text-7xl">
              <AuroraText className="shrink-0 leading-none text-[60px] md:text-[110px] lg:text-[140px] -mb-1 md:-mb-2">P</AuroraText>
              <span className="min-w-0 leading-none">
                <DiaTextReveal
                  key={activeSlide}
                  fixedWidth
                  duration={1.8}
                  startOnView={false}
                  textColor="#ffffff"
                  text={[...HERO_WORDS]}
                  textIndex={activeWordIndex}
                  className="self-end leading-none tracking-tight"
                />
              </span>
            </span>
          </h1>

          <motion.p
            key={`subtitle-${activeSlide}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={SLIDE_TRANSITION}
            className="max-w-2xl text-sm leading-relaxed text-white/85 sm:text-base md:text-xl lg:text-2xl"
          >
            {currentSlide.subtitle}
          </motion.p>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
          <Link
            href="/schemes"
            className="group flex w-full md:w-44 items-center justify-between rounded-4xl bg-[#045178] py-2 pl-4 pr-2 text-sm text-white shadow-md shadow-[#045178]/25 transition-all hover:-translate-y-0.5 hover:shadow-lg"
          >
            Our Schemes
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
              <IconArrowRight className="size-4" color="#045178" />
            </span>
          </Link>
          <Link
            href="#contact"
            className="group flex w-full md:w-56 items-center justify-between rounded-4xl border border-white/40 bg-white/5 py-2 pl-4 pr-2 text-sm text-white backdrop-blur-sm transition-all hover:-translate-y-0.5 hover:bg-white/10"
          >
            Talk to an Advisor
            <span className="flex size-8 shrink-0 items-center justify-center rounded-full bg-white/90 shadow-sm">
              <IconArrowRight className="size-4" color="#045178" />
            </span>
          </Link>
        </div>
      </div>

      {/* Carousel controls — bottom, dots between arrows */}
      <div className={`relative z-10 ${heroContainerClass} pb-5 pt-2 md:pb-6`}>
        <div className="flex items-center justify-center gap-5">
          <button
            type="button"
            aria-label="Previous slide"
            onClick={goPrev}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <IconChevronLeft className="size-4" />
          </button>

          <div className="flex items-center gap-2">
            {HERO_SLIDES.map((slide, index) => (
              <button
                key={slide.alt}
                type="button"
                aria-label={`Go to slide ${index + 1}`}
                aria-current={index === activeSlide ? "true" : undefined}
                onClick={() => goToSlide(index)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  index === activeSlide
                    ? "w-7 bg-[#D9B872]"
                    : "w-1.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Next slide"
            onClick={goNext}
            className="flex size-10 cursor-pointer items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          >
            <IconChevronRight className="size-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
