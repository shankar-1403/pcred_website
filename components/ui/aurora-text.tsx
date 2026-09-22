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
    // Opaque only — every stop fills the glyph (no transparent gaps)
    colors = [
      "#ffffff",
      "#ffffff",
      "#b8e9fe",
      "#00b2fc",
      "#b8e9fe",
      "#ffffff",
      "#ffffff",
      "#b8e9fe",
      "#00b2fc",
      "#b8e9fe",
      "#ffffff",
      "#ffffff",
    ],
    speed = 1,
  }: AuroraTextProps) => {
    const gradientStyle = useMemo(
      () => ({
        backgroundColor: "#ffffff",
        backgroundImage: `linear-gradient(135deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
        backgroundRepeat: "repeat",
        WebkitBackgroundClip: "text" as const,
        backgroundClip: "text" as const,
        WebkitTextFillColor: "transparent" as const,
        color: "transparent",
        animationDuration: `${5.5 / speed}s`,
        willChange: "background-position" as const,
        transform: "translateZ(0)",
      }),
      [colors, speed]
    )

    return (
      <span className={`relative inline-block ${className}`}>
        <span className="sr-only">{children}</span>
        <span
          className="animate-aurora relative font-incompleeta"
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
