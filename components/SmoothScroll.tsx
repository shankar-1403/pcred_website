"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

function prefersReducedMotion() {
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

function smoothScrollTo(top: number) {
  if (prefersReducedMotion()) {
    window.scrollTo(0, top);
    return;
  }
  window.scrollTo({ top, left: 0, behavior: "smooth" });
}

function getHeaderOffset() {
  const header = document.querySelector("header");
  return header instanceof HTMLElement ? header.offsetHeight + 12 : 80;
}

export default function SmoothScroll() {
  const pathname = usePathname();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  // Smooth scroll for same-page hash links and incoming hash URLs
  useEffect(() => {
    const scrollToHash = (hash: string) => {
      if (!hash || hash === "#") return;
      const id = decodeURIComponent(hash.replace(/^#/, ""));
      const el = document.getElementById(id);
      if (!el) return;

      const top = el.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
      smoothScrollTo(Math.max(0, top));
    };

    let hashTimer: number | undefined;
    if (window.location.hash) {
      hashTimer = window.setTimeout(() => scrollToHash(window.location.hash), 100);
    }

    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const anchor = target.closest("a[href]");
      if (!(anchor instanceof HTMLAnchorElement)) return;
      if (anchor.target === "_blank" || anchor.hasAttribute("download")) return;

      const href = anchor.getAttribute("href");
      if (!href || !href.includes("#")) return;

      const url = new URL(href, window.location.href);
      const isSamePage =
        url.pathname === window.location.pathname &&
        url.origin === window.location.origin;

      if (!isSamePage || !url.hash) return;

      const el = document.getElementById(decodeURIComponent(url.hash.slice(1)));
      if (!el) return;

      event.preventDefault();
      history.pushState(null, "", url.hash);
      scrollToHash(url.hash);
    };

    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("click", onClick);
      if (hashTimer) window.clearTimeout(hashTimer);
    };
  }, [pathname]);

  return null;
}
