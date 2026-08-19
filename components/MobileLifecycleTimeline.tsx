"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import type { Icon } from "@tabler/icons-react";

const M_R        = 22;
const M_SEMI     = Math.PI * M_R;
const M_BEAM_DUR = 14;
const M_ARC_LEAD = M_R + 55;
const M_ARC_TAIL = 15;
const CX         = 22;

type ArcPhase = "idle" | "active" | "exiting";
type Stage    = { title: string; description: string; icon: Icon };

export function MobileLifecycleTimeline({ stages }: { stages: Stage[] }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nodeRefs     = useRef<(HTMLDivElement | null)[]>([]);
  const [nodeYs, setNodeYs] = useState<number[]>([]);
  const [arcPhases,   setArcPhases]   = useState<ArcPhase[]>(() => Array(stages.length).fill("idle"));
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const prevActiveRef  = useRef<number | null>(null);
  const exitTimerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);
  const activeIndexRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    const measure = () => {
      const cTop = container.getBoundingClientRect().top;
      const ys = nodeRefs.current.map((el) => {
        if (!el) return 0;
        const r = el.getBoundingClientRect();
        return Math.round(r.top + r.height / 2 - cTop);
      });
      setNodeYs(ys);
    };
    requestAnimationFrame(measure);
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    if (typeof document !== "undefined") document.fonts?.ready.then(measure);
    return () => ro.disconnect();
  }, []);

  // Phase machine
  useEffect(() => {
    const prev = prevActiveRef.current;
    if (activeIndex !== null && activeIndex !== prev) {
      setArcPhases((p) => { const n = [...p]; n[activeIndex] = "active"; return n; });
    }
    if (prev !== null && prev !== activeIndex) {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      setArcPhases((p) => { const n = [...p]; n[prev] = "exiting"; return n; });
      exitTimerRef.current = setTimeout(() => {
        setArcPhases((p) => { const n = [...p]; n[prev] = "idle"; return n; });
      }, 320);
    }
    prevActiveRef.current = activeIndex;
  }, [activeIndex]);

  // rAF loop only for arc detection — beam is pure CSS animation now
  useEffect(() => {
    let rafId: number;
    let startT: number | null = null;

    const loop = (t: number) => {
      const container = containerRef.current;
      const els = nodeRefs.current;
      if (container && els.length > 0 && els[0]) {
        const cTop = container.getBoundingClientRect().top;
        const ys   = els.map((el) => {
          if (!el) return 0;
          const r = el.getBoundingClientRect();
          return r.top + r.height / 2 - cTop;
        });
        const topY = ys[0];
        const botY = ys[ys.length - 1] ?? topY;
        const svgH = botY - topY;

        if (svgH > 10) {
          if (startT === null) startT = t;
          const elapsed  = (t - startT) / 1000;
          const progress = (elapsed % M_BEAM_DUR) / M_BEAM_DUR;
          const beamSeg  = svgH * 0.1;
          const beamPos  = progress * (svgH + beamSeg);

          const beamMid = beamPos - beamSeg / 2;
          let found: number | null = null;
          for (let i = 0; i < ys.length; i++) {
            const localY = ys[i] - topY;
            if (beamMid >= localY - M_ARC_LEAD && beamMid <= localY + M_ARC_TAIL) {
              found = i; break;
            }
          }
          if (found !== activeIndexRef.current) {
            activeIndexRef.current = found;
            setActiveIndex(found);
          }
        }
      }
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const topY = nodeYs[0] ?? 0;
  const botY = nodeYs[nodeYs.length - 1] ?? 0;
  const svgH = Math.max(2, botY - topY);
  const ready = nodeYs.length === stages.length && svgH > 10;

  const beamSeg      = svgH * 0.1;
  const beamGap      = svgH * 3;
  const beamDasharray = `${beamSeg} ${beamGap}`;

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      className="relative mt-10 lg:hidden"
    >
      {/* Dashed track */}
      {ready && (
        <div aria-hidden className="pointer-events-none absolute"
          style={{ left: CX - 1, top: topY, height: svgH, borderLeft: "2px dashed rgba(8,78,117,0.45)" }}
        />
      )}

      {/* SVG: beam + arcs */}
      {ready && (
        <svg aria-hidden className="pointer-events-none absolute left-0"
          style={{ top: topY, width: 44, height: svgH, overflow: "visible", zIndex: 20 }}
        >
          <defs>
            <filter id="mBeamGlow" x="-500%" y="-500%" width="1100%" height="1100%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <filter id="mBeamLineGlow" filterUnits="userSpaceOnUse" x={-20} y={-20} width={64} height={svgH + 40}>
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
            </filter>
            <mask id="mBeamMask">
              <rect x={-50} y={-M_R} width={150} height={svgH + M_R * 2} fill="white" />
              {nodeYs.map((y, i) => (
                <circle key={i} cx={CX} cy={y - topY} r={M_R + 2} fill="black" />
              ))}
            </mask>
          </defs>

          {/* Beam — same approach as desktop: animate strokeDashoffset */}
          <motion.path
            d={`M ${CX},0 L ${CX},${svgH}`}
            fill="none"
            stroke="#B8892E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={beamDasharray}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -(svgH + beamSeg) }}
            transition={{ duration: M_BEAM_DUR, repeat: Infinity, ease: "linear" }}
            filter="url(#mBeamLineGlow)"
            mask="url(#mBeamMask)"
          />

          {/* Arcs at each node */}
          {nodeYs.map((y, index) => {
            const phase       = arcPhases[index] ?? "idle";
            const dashOffset  = phase === "active" ? 0 : phase === "exiting" ? -M_SEMI : M_SEMI;
            const arcOpacity  = phase === "idle" ? 0 : 1;
            const arcDuration = phase === "active" ? 0.55 : phase === "exiting" ? 0.3 : 0;
            return (
              <g key={index} transform={`translate(${CX}, ${y - topY})`}>
                <motion.path
                  d={`M 0,${-M_R} A ${M_R},${M_R} 0 0,0 0,${M_R}`}
                  fill="none" stroke="#B8892E" strokeWidth="2.5" strokeLinecap="round"
                  strokeDasharray={`${M_SEMI} ${M_SEMI * 10}`}
                  animate={{ strokeDashoffset: dashOffset, opacity: arcOpacity }}
                  initial={{ strokeDashoffset: M_SEMI, opacity: 0 }}
                  transition={{
                    strokeDashoffset: { duration: arcDuration, ease: "linear" },
                    opacity: { duration: phase === "idle" ? 0 : 0.08 },
                  }}
                  filter="url(#mBeamGlow)"
                />
                <motion.path
                  d={`M 0,${-M_R} A ${M_R},${M_R} 0 0,1 0,${M_R}`}
                  fill="none" stroke="#B8892E" strokeWidth="2.5" strokeLinecap="round"
                  strokeDasharray={`${M_SEMI} ${M_SEMI * 10}`}
                  animate={{ strokeDashoffset: dashOffset, opacity: arcOpacity }}
                  initial={{ strokeDashoffset: M_SEMI, opacity: 0 }}
                  transition={{
                    strokeDashoffset: { duration: arcDuration, ease: "linear" },
                    opacity: { duration: phase === "idle" ? 0 : 0.08 },
                  }}
                  filter="url(#mBeamGlow)"
                />
              </g>
            );
          })}
        </svg>
      )}

      {/* HTML rows */}
      {stages.map((stage, index) => {
        const StageIcon = stage.icon;
        const isLast = index === stages.length - 1;
        return (
          <div key={stage.title} className={`flex items-start gap-4${isLast ? "" : " mb-10"}`}>
            <div
              ref={(el) => { nodeRefs.current[index] = el; }}
              className="relative z-10 flex size-11 shrink-0 items-center justify-center rounded-full bg-[#084E75]"
            >
              <StageIcon size={20} stroke={1.5} className="text-white" />
            </div>
            <div className="pt-1">
              <span className="text-xs font-bold uppercase tracking-widest text-[#B8892E]">Step {index + 1}</span>
              <h3 className="mt-0.5 text-base font-semibold text-[#084E75]">{stage.title}</h3>
              <p className="mt-0.5 text-sm leading-relaxed text-[#084E75]/65">{stage.description}</p>
            </div>
          </div>
        );
      })}
    </motion.div>
  );
}
