"use client";

import { useLayoutEffect, useState } from "react";
import { motion } from "motion/react";
import type { Icon } from "@tabler/icons-react";

export const LIFECYCLE_PATH =
  "M70 130 C150 35 250 35 330 130 S510 225 590 130 S770 35 850 130 S1030 225 1130 130";

const VIEWBOX = { x: 0, y: -70, w: 1200, h: 400 };
const PATH_MID_Y = 130;
const BEAM_DURATION = 11;

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

  return Array.from({ length: count }, (_, index) => {
    const distance = count === 1 ? 0 : (index / (count - 1)) * length;
    return path.getPointAtLength(distance);
  });
}

function getPathLength(pathD: string) {
  const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
  path.setAttribute("d", pathD);
  return path.getTotalLength();
}

export function LifecycleRoadmap({ stages }: { stages: Stage[] }) {
  const [points, setPoints] = useState<{ x: number; y: number }[]>([]);
  const [pathLength, setPathLength] = useState(0);

  useLayoutEffect(() => {
    setPoints(getPathPoints(LIFECYCLE_PATH, stages.length));
    setPathLength(getPathLength(LIFECYCLE_PATH));
  }, [stages.length]);

  const beamSegment = pathLength > 0 ? pathLength * 0.06 : 60;
  const beamGap = pathLength > 0 ? pathLength * 2 : 2000;
  const beamDasharray =
    pathLength > 0 ? `${beamSegment} ${beamGap}` : undefined;

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="relative mx-auto mt-16 hidden w-full max-w-6xl lg:block"
    >
      <svg
        viewBox={`${VIEWBOX.x} ${VIEWBOX.y} ${VIEWBOX.w} ${VIEWBOX.h}`}
        className="h-auto w-full overflow-visible"
        preserveAspectRatio="xMidYMid meet"
        aria-label="Business lifecycle roadmap"
      >
        <defs>
          <linearGradient id="lifecycleRoadmapGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#DDB162" />
            <stop offset="100%" stopColor="#084E75" />
          </linearGradient>

          <filter id="lifecycleBeamGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Static dashed track */}
        <path
          d={LIFECYCLE_PATH}
          fill="none"
          stroke="url(#lifecycleRoadmapGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="10 10"
          opacity={0.45}
        />

        {/* Single solid beam — separate from dashed track */}
        {pathLength > 0 && (
          <motion.path
            d={LIFECYCLE_PATH}
            fill="none"
            stroke="#DDB162"
            strokeWidth="3"
            strokeLinecap="round"
            strokeDasharray={beamDasharray}
            initial={{ strokeDashoffset: 0 }}
            animate={{ strokeDashoffset: -(pathLength + beamSegment) }}
            transition={beamTransition}
            filter="url(#lifecycleBeamGlow)"
          />
        )}

        {points.map((point, index) => {
          const stage = stages[index];
          if (!stage) return null;

          const StageIcon = stage.icon;
          const isLast = index === stages.length - 1;
          const labelAbove = point.y < PATH_MID_Y;

          return (
            <g key={stage.title} transform={`translate(${point.x}, ${point.y})`}>
              <circle
                r="35"
                fill={"#084E75"}
                stroke="#ffffff"
                strokeWidth="4"
              />

              <foreignObject x="-12" y="-12" width="24" height="24">
                <div className="flex h-6 w-6 items-center justify-center text-white">
                  <StageIcon size={50} stroke={1.5} />
                </div>
              </foreignObject>

              <foreignObject
                x="-84"
                y={labelAbove ? -120 : 40}
                width="168"
                height="96"
              >
                <div className="flex flex-col items-center text-center">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-[#DDB162]">
                    Step {index + 1}
                  </span>
                  <p className="text-xl font-semibold text-[#084E75]">{stage.title}</p>
                  <p className="mt-0.5 text-sm leading-snug text-[#084E75]/60">
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
