"use client";

import { useLayoutEffect } from "react";
import { usePathname } from "next/navigation";

/*
 * TextReveal — word-by-word blur-fade, scroll-triggered, zero flash.
 *
 * useLayoutEffect runs after React commits the DOM but BEFORE the browser
 * paints a single pixel. splitWords hides all words (opacity:0) inside that
 * window, so the user never sees a flash of visible text.
 *
 * Animation is driven entirely by CSS (animation-delay via --wa-d), so there
 * are no JS timer storms. IntersectionObserver fires each element's reveal
 * when it enters the viewport; already-visible elements play immediately.
 */

const SEL =
  "main h1:not([data-no-reveal]), main h2:not([data-no-reveal]), main h3:not([data-no-reveal]), main h4:not([data-no-reveal]), main p:not([data-no-reveal])";
const WORD_MS = 70; // ms stagger between words
const MAX_MS = 1100; // cap so last words don't wait forever

function splitWords(el: HTMLElement) {
  if (el.dataset.wa) return;
  el.dataset.wa = "1";
  let idx = 0;

  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      if (!node.textContent?.trim()) return;
      const parts = node.textContent.split(/(\s+)/);
      const frag = document.createDocumentFragment();
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) {
          frag.appendChild(document.createTextNode(part));
          return;
        }
        const s = document.createElement("span");
        s.textContent = part;
        s.dataset.waI = String(idx);
        s.style.cssText = "display:inline;opacity:0;will-change:opacity,filter";
        s.style.setProperty("--wa-d", `${Math.min(idx * WORD_MS, MAX_MS)}ms`);
        idx++;
        frag.appendChild(s);
      });
      el.replaceChild(frag, node);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as HTMLElement;
      element.dataset.waI = String(idx);
      element.style.opacity = "0";
      element.style.willChange = "opacity,filter";
      element.style.setProperty("--wa-d", `${Math.min(idx * WORD_MS, MAX_MS)}ms`);
      idx++;
    }
  });
}

function playEl(el: HTMLElement) {
  if (el.dataset.waPlayed) return;
  el.dataset.waPlayed = "1";
  el.classList.add("wa-go");

  // Safety net: forces the end state once the animation should be done,
  // independent of whether the CSS animation actually finished (some
  // browsers can pause/drop in-flight animations during view transitions).
  const words = el.querySelectorAll<HTMLElement>("[data-wa-i]");
  const settleAfter = Math.min(words.length * WORD_MS, MAX_MS) + 700;
  setTimeout(() => {
    words.forEach((w) => {
      w.style.animation = "none";
      w.style.opacity = "1";
      w.style.filter = "none";
    });
  }, settleAfter);
}

export default function TextReveal() {
  const pathname = usePathname();

  useLayoutEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach(({ target, isIntersecting }) => {
          if (isIntersecting) {
            playEl(target as HTMLElement);
            obs.unobserve(target);
          }
        }),
      { threshold: 0.12 }
    );

    const process = (el: HTMLElement) => {
      if (el.dataset.wa) return;
      splitWords(el);
      const r = el.getBoundingClientRect();
      // Already in the viewport (e.g. hero on first load) — play now
      if (r.top < window.innerHeight && r.bottom > 0) {
        playEl(el);
      } else {
        obs.observe(el);
      }
    };

    const scan = () => {
      Array.from(document.querySelectorAll<HTMLElement>(SEL))
        .filter((el) => !el.dataset.wa && (!el.style.opacity || el.style.opacity === "1"))
        .forEach(process);
    };

    // Hide words before the browser paints — eliminates the flash
    scan();

    // CMS/Firebase-driven pages (scheme detail, blog detail, schemes/blogs
    // lists) render their real heading/paragraph content asynchronously,
    // after this effect's initial scan already ran. A MutationObserver
    // catches that content the moment it lands in the DOM and reveals it
    // too, instead of it sitting permanently unrevealed.
    const mo = new MutationObserver(() => scan());
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      obs.disconnect();
      mo.disconnect();
      document.querySelectorAll("[data-wa]").forEach((el) => {
        el.removeAttribute("data-wa");
        el.removeAttribute("data-wa-played");
        el.classList.remove("wa-go");
      });
      document.querySelectorAll("[data-wa-i]").forEach((el) => {
        el.removeAttribute("data-wa-i");
      });
    };
  }, [pathname]);

  return null;
}
