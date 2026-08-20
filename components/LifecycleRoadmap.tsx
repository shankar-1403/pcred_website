"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { motion, useAnimationFrame } from "motion/react";
import type { Icon } from "@tabler/icons-react";

export const LIFECYCLE_PATH =
  "M10 130 L70 130 C150 35 250 35 330 130 S510 225 590 130 S770 35 850 130 S1030 225 1130 130";

const VIEWBOX = { x: -10, y: -100, w: 1230, h: 460 };
const PATH_MID_Y = 130;
const BEAM_DURATION = 16;
const R = 42;
const SEMI = Math.PI * R; // ≈ 131.9
const ARC_LEAD = R + 55;   // arcs start before beam tip reaches circle edge
const ARC_TAIL = 15;       // px past node center before exit triggers
const NODE_OFFSET = 60;    // length of lead-in line; nodes start after this

const beamTransition = {
  duration: BEAM_DURATION,
  repeat: Infinity,
  ease: "linear" as const,
};

type Stage = {
  title: string;
  description: string;
  icon: Icon;
};

function getPathPoints(pathD: string, count: number) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  const length = path.getTotalLength();
  const usable = length - NODE_OFFSET;
  return Array.from({ length: count }, (_, index) => {
    const distance = NODE_OFFSET + (count === 1 ? 0 : (index / (count - 1)) * usable);
    return path.getPointAtLength(distance);
  });
}

function getPathLength(pathD: string) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  return path.getTotalLength();
}

type ArcPhase = "idle" | "active" | "exiting";

export function LifecycleRoadmap({ stages }: { stages: Stage[] }) {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [pathLength, setPathLength] = useState(0);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [arcPhases, setArcPhases] = useState<ArcPhase[]>(() => Array(stages.length).fill("idle"));
  const prevActiveRef = useRef<number | null>(null);
  const exitTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const startTimeRef = useRef<number | null>(null);

  useLayoutEffect(() => {
    setPoints(getPathPoints(LIFECYCLE_PATH, stages.length));
    setPathLength(getPathLength(LIFECYCLE_PATH));
  }, [stages.length]);

  // Phase machine: idle → active → exiting → idle
  useEffect(() => {
    const prev = prevActiveRef.current;

    if (activeIndex !== null && activeIndex !== prev) {
      setArcPhases(p => { const n = [...p]; n[activeIndex] = "active"; return n; });
    }

    if (prev !== null && prev !== activeIndex) {
      if (exitTimerRef.current) clearTimeout(exitTimerRef.current);
      setArcPhases(p => { const n = [...p]; n[prev] = "exiting"; return n; });
      exitTimerRef.current = setTimeout(() => {
        setArcPhases(p => { const n = [...p]; n[prev] = "idle"; return n; });
      }, 320);
    }

    prevActiveRef.current = activeIndex;
  }, [activeIndex]);

  const beamSegment = pathLength > 0 ? pathLength * 0.06 : 60;
  const beamGap = pathLength > 0 ? pathLength * 2 : 2000;
  const beamDasharray = pathLength > 0 ? `${beamSegment} ${beamGap}` : undefined;

  useAnimationFrame((t) => {
    if (pathLength === 0) return;
    if (startTimeRef.current === null) startTimeRef.current = t;
    const elapsed = (t - startTimeRef.current) / 1000;
    const progress = (elapsed % BEAM_DURATION) / BEAM_DURATION;
    const beamPos = progress * (pathLength + beamSegment);

    let found: number | null = null;
    for (let i = 0; i < stages.length; i++) {
      const nodePos = NODE_OFFSET + (stages.length === 1 ? 0 : (i / (stages.length - 1)) * (pathLength - NODE_OFFSET));
      if (beamPos >= nodePos - ARC_LEAD && beamPos <= nodePos + ARC_TAIL) {
        found = i;
        break;
      }
    }
    setActiveIndex(found);
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto mt-16 hidden w-full max-w-6xl overflow-x-auto lg:block"
    >
      <svg
        viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.w} ${VIEWBOX.h}`}
        className="h-auto min-w-[700px] w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Business lifecycle roadmap"
      >
        <defs>
          <linearGradient id="lifecycleRoadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#B8892E" />
            <stop offset="100%" stopColor="#045178" />
          </linearGradient>

          <filter id="lifecycleBeamGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          {/* Mask: hides the beam line inside each node circle so it visually
              terminates at the circle edge and the arcs take over */}
          {points.length > 0 && (
            <mask id="beamNodeMask">
              <rect
                x={VIEWBOX.x} y={VIEWBOX.y}
                width={VIEWBOX.w} height={VIEWBOX.h}
                fill="white"
              />
              {points.map((pt, i) => (
                <circle key={i} cx={pt.x} cy={pt.y} r={R + 1} fill="black" />
              ))}
            </mask>
          )}
        </defs>

        {/* Static dashed track — also masked so it gaps at nodes */}
        <path
          d={LIFECYCLE_PATH}
          fill="none"
          stroke="url(#lifecycleRoadmapGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 10"
          opacity={0.45}
          mask={points.length > 0 ? "url(#beamNodeMask)" : undefined}
        />

        {/* Animated beam — masked so it stops at each circle edge */}
        {pathLength > 0 && (
          <motion.path
            d={LIFECYCLE_PATH}
            fill="none"
            stroke="#B8892E"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={beamDasharray}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -(pathLength + beamSegment) }}
            transition={beamTransition}
            filter="url(#lifecycleBeamGlow)"
            mask={points.length > 0 ? "url(#beamNodeMask)" : undefined}
          />
        )}

        {points.map((point, index) => {
          const stage = stages[index];
          if (!stage) return null;

          const StageIcon = stage.icon;
          const labelAbove = point.y < PATH_MID_Y;
          const phase = arcPhases[index] ?? "idle";

          // dashoffset values:
          //  idle    : SEMI  (arc hidden, reset to left-start for next draw)
          //  active  : 0     (arc fully drawn left→right)
          //  exiting : -SEMI (arc erased left→right, "merging" into right exit beam)
          const dashOffset = phase === "active" ? 0 : phase === "exiting" ? -SEMI : SEMI;
          const arcOpacity = phase === "idle" ? 0 : 1;
          const arcDuration = phase === "active" ? 0.55 : phase === "exiting" ? 0.3 : 0;

          return (
            <g key={stage.title} transform={`translate(${point.x}, ${point.y})`}>
              {/* Base circle */}
              <circle r={R} fill="#045178" stroke="none" />

              {/* Upper arc */}
              <motion.path
                d={`M ${-R},0 A ${R},${R} 0 0,0 ${R},0`}
                fill="none"
                stroke="#B8892E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${SEMI} ${SEMI * 10}`}
                animate={{ strokeDashoffset: dashOffset, opacity: arcOpacity }}
                initial={{ strokeDashoffset: SEMI, opacity: 0 }}
                transition={{
                  strokeDashoffset: { duration: arcDuration, ease: "linear" },
                  opacity: { duration: phase === "idle" ? 0 : 0.08 },
                }}
                filter="url(#lifecycleBeamGlow)"
              />

              {/* Lower arc */}
              <motion.path
                d={`M ${-R},0 A ${R},${R} 0 0,1 ${R},0`}
                fill="none"
                stroke="#B8892E"
                strokeWidth="4"
                strokeLinecap="round"
                strokeDasharray={`${SEMI} ${SEMI * 10}`}
                animate={{ strokeDashoffset: dashOffset, opacity: arcOpacity }}
                initial={{ strokeDashoffset: SEMI, opacity: 0 }}
                transition={{
                  strokeDashoffset: { duration: arcDuration, ease: "linear" },
                  opacity: { duration: phase === "idle" ? 0 : 0.08 },
                }}
                filter="url(#lifecycleBeamGlow)"
              />

              <foreignObject x="-16" y="-16" width="32" height="32">
                <div className="flex h-8 w-8 items-center justify-center text-white">
                  <StageIcon size={62} stroke={1.5} />
                </div>
              </foreignObject>

              <foreignObject
                x="-96"
                y={labelAbove ? -165 : 55}
                width="192"
                height="130"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#B8892E]">
                    Step {index + 1}
                  </span>
                  <p className="text-xl font-semibold text-[#045178]">{stage.title}</p>
                  <p className="mt-0.5 text-sm leading-snug text-[#045178]/60">
                    {stage.description}
                  </p>
                </div>
              </foreignObject>
            </g>
          );
        })}
      </svg>
    </motion.div>
  );
}
