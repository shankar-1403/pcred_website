"use client";

import { useEffect, useState } from "react";
import { IconArrowUp, IconBrandWhatsapp } from "@tabler/icons-react";

const WHATSAPP_URL =
  "https://wa.me/9186556591077?text=" +
  encodeURIComponent("Hi PCRED, I’d like to know more about your advisory services.");

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 320);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <div className="pointer-events-none fixed bottom-5 right-5 z-50 flex flex-col items-center gap-3 md:bottom-8 md:right-8">
      {/* Arrow sits above WhatsApp only while visible — removed from layout when hidden */}
      {showTop ? (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#00255a] text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-[#0037d8] md:size-14"
        >
          <IconArrowUp className="size-5 md:size-6" stroke={2} />
        </button>
      ) : null}

      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="pointer-events-auto flex size-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-transform hover:-translate-y-0.5 hover:bg-[#1ebe57] md:size-14"
      >
        <IconBrandWhatsapp className="size-6 md:size-7" stroke={1.75} />
      </a>
    </div>
  );
}
