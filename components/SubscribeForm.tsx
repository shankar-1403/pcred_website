"use client";

import { useState, type FormEvent } from "react";
import { IconCheck, IconLoader2 } from "@tabler/icons-react";

type Status = "idle" | "loading" | "success" | "error";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        setStatus("error");
        setMessage(data.error ?? "Could not subscribe. Please try again.");
        return;
      }

      setStatus("success");
      setMessage("You're subscribed. Check your inbox for a confirmation.");
      setEmail("");
    } catch {
      setStatus("error");
      setMessage("Could not subscribe. Please try again.");
    }
  };

  return (
    // h-0: no layout space of its own. -translate-y-1/2 is relative to the
    // card's OWN rendered height, so it always sits exactly half above the
    // seam and half below it. The card is kept deliberately compact (small
    // padding, one row at every breakpoint, no wrapping heading) so that
    // half its height stays inside the smallest bottom padding any page's
    // last section already carries — no padding is added anywhere to make
    // room, so this can never read as a separate section.
    <div className="relative z-20 h-0">
      <div className="mx-auto max-w-2xl -translate-y-1/2 px-6">
        <div className="relative overflow-hidden rounded-2xl bg-brand-gradient-r px-5 py-5 text-center shadow-[0_20px_50px_-15px_rgba(0,0,0,0.45)] ring-1 ring-white/10 sm:px-8 sm:py-6">
          <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-gold-300/70 to-transparent" />
          <div className="pointer-events-none absolute -left-16 -top-12 size-40 rounded-full bg-navy-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -right-16 -bottom-12 size-40 rounded-full bg-gold-500/8 blur-3xl" />

          <h2 className="relative font-sans text-[11px] font-semibold uppercase tracking-widest text-gold-300 whitespace-nowrap sm:text-xs">
            Subscribe To Our Newsletter
          </h2>

          <form onSubmit={handleSubmit} noValidate className="relative mx-auto mt-3 max-w-sm">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <label htmlFor="subscribe-email" className="sr-only">
                Email address
              </label>
              <input
                id="subscribe-email"
                type="email"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  if (status !== "idle") {
                    setStatus("idle");
                    setMessage("");
                  }
                }}
                required
                autoComplete="email"
                placeholder="Your email"
                aria-invalid={status === "error"}
                aria-describedby={message ? "subscribe-status" : undefined}
                className="min-w-0 flex-1 rounded-4xl border border-white/20 bg-white/5 px-3 py-1.5 text-xs text-white placeholder:text-white/40 outline-none transition-colors focus-visible:border-gold-500 focus-visible:ring-2 focus-visible:ring-gold-500/40 sm:px-4 sm:py-2 sm:text-sm"
              />
              <button
                type="submit"
                disabled={status === "loading"}
                className="flex shrink-0 items-center justify-center gap-1.5 rounded-4xl bg-gold-500 px-3 py-1.5 text-xs font-semibold text-[#045178] shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0 sm:px-5 sm:py-2 sm:text-sm"
              >
                {status === "loading" ? (
                  <>
                    <IconLoader2 className="size-3.5 animate-spin sm:size-4" />
                    <span className="hidden sm:inline">Subscribing</span>
                  </>
                ) : status === "success" ? (
                  <>
                    <IconCheck className="size-3.5 sm:size-4" />
                    <span className="hidden sm:inline">Subscribed</span>
                  </>
                ) : (
                  "Subscribe"
                )}
              </button>
            </div>

            {message && (
              <p
                id="subscribe-status"
                role="status"
                aria-live="polite"
                className={`mt-2 text-[11px] leading-relaxed ${
                  status === "error" ? "text-[#ff9b9b]" : "text-gold-300"
                }`}
              >
                {message}
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
