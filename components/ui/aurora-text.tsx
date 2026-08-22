"use client"

import React, { memo, useMemo } from "react"

interface AuroraTextProps {
  children: React.ReactNode
  className?: string
  colors?: string[]
  speed?: number
}

export const AuroraText = memo(
  ({
    children,
    className = "",
    colors = ["#ffffff", "#ffffff", "#ffffff", "#ffffff", "#4692b9", "#ffffff", "#ffffff", "#ffffff"],
    speed = 1,
  }: AuroraTextProps) => {
    // Memoised so the inline style object keeps a stable identity across
    // parent re-renders (e.g. the hero carousel advancing). Re-applying an
    // inline style that carries animation properties restarts the running
    // CSS animation, which reads as a visible jump in the gradient.
    const colorKey = colors.join(",")
    const gradientStyle = useMemo(
      () => ({
        backgroundImage: `linear-gradient(135deg, ${colorKey}, ${colorKey.split(",")[0]})`,
        backgroundSize: "200% 200%",
        WebkitBackgroundClip: "text" as const,
        WebkitTextFillColor: "transparent" as const,
        animationDuration: `${10 / speed}s`,
        // Promote to its own compositing layer so the per-frame repaint of the
        // gradient stays confined to this glyph instead of being rasterised as
        // part of the full-bleed hero layer during a slide crossfade.
        willChange: "background-position" as const,
        transform: "translateZ(0)",
      }),
      [colorKey, speed]
    )

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative bg-clip-text text-transparent font-incompleeta"
          style={gradientStyle}
          aria-hidden="true"
        >
          {children}
        </span>
      </span>
    )
  }
)

AuroraText.displayName = "AuroraText"
