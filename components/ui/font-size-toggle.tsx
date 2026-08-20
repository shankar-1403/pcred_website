"use client";

import { useEffect, useRef, useState } from "react";
import { useFontSize, type FontSize } from "@/src/context/FontSizeContext";

const OPTIONS: { value: FontSize; label: string; title: string; px: string }[] = [
  { value: "small", label: "A-", title: "Small text", px: "14px" },
  { value: "medium", label: "A", title: "Medium text (default)", px: "16px" },
  { value: "large", label: "A+", title: "Large text", px: "18px" },
];

export function FontSizeToggle({ className = "" }: { className?: string }) {
  const { fontSize, setFontSize } = useFontSize();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const current = OPTIONS.find((o) => o.value === fontSize) ?? OPTIONS[1];

  return (
    <div ref={rootRef} className={`relative inline-block ${className}`}>
      <button
        type="button"
        aria-haspopup="true"
        aria-expanded={isOpen}
        aria-label="Text size settings"
        onClick={() => setIsOpen((prev) => !prev)}
        className={`flex size-9 shrink-0 cursor-pointer items-center justify-center rounded-full border text-[0.8125rem] font-bold leading-none transition-colors ${
          isOpen
            ? "border-[#045178] bg-[#045178] text-white"
            : "border-[#045178]/15 bg-white/80 text-[#045178] hover:bg-[#045178]/10"
        }`}
      >
        Aa
      </button>

      {isOpen && (
        <div
          role="menu"
          aria-label="Text size"
          className="absolute right-0 top-full z-50 mt-2 w-max rounded-2xl border border-[#045178]/10 bg-white p-3 shadow-xl shadow-[#045178]/10"
        >
          <div className="flex items-center gap-2">
            {OPTIONS.map((option) => {
              const isActive = fontSize === option.value;

              return (
                <button
                  key={option.value}
                  type="button"
                  title={option.title}
                  aria-pressed={isActive}
                  onClick={() => setFontSize(option.value)}
                  className={`flex size-11 shrink-0 cursor-pointer items-center justify-center rounded-xl border text-[0.8125rem] font-semibold leading-none transition-colors ${
                    isActive
                      ? "border-[#045178] bg-[#045178] text-white"
                      : "border-[#045178]/15 text-[#045178] hover:bg-[#045178]/10"
                  }`}
                >
                  {option.label}
                </button>
              );
            })}
          </div>
          <p className="mt-2 text-center text-[0.75rem] text-[#8E8E90]">
            Font Size: {current.px}
          </p>
        </div>
      )}
    </div>
  );
}
