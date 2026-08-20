"use client"

import React, { type ComponentPropsWithoutRef } from "react"

import { cn } from "@/lib/utils"

interface SpinningTextProps extends ComponentPropsWithoutRef<"div"> {
  children: string | string[]
  duration?: number
  reverse?: boolean
  /** Ring radius in SVG units (viewBox is 144×144; ~52 fits a 128–144px badge). */
  radius?: number
}

export function SpinningText({
  children,
  duration = 20,
  reverse = false,
  radius = 52,
  className,
  style,
}: SpinningTextProps) {
  if (typeof children !== "string" && !Array.isArray(children)) {
    throw new Error("children must be a string or an array of strings")
  }

  if (Array.isArray(children)) {
    if (!children.every((child) => typeof child === "string")) {
      throw new Error("all elements in children array must be strings")
    }
    children = children.join("")
  }

  const pathId = React.useId().replace(/:/g, "")
  const center = 72
  const text = children.toUpperCase()

  return (
    <div
      className={cn("relative size-full", className)}
      style={
        {
          ...style,
          "--spin-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <svg
        viewBox="0 0 144 144"
        className={cn(
          "absolute inset-0 size-full origin-center",
          reverse
            ? "animate-[text-ring-spin-reverse_var(--spin-duration)_linear_infinite]"
            : "animate-[text-ring-spin_var(--spin-duration)_linear_infinite]",
          "motion-reduce:animate-none",
        )}
        aria-hidden
      >
        <defs>
          <path
            id={pathId}
            d={`M ${center},${center} m -${radius},0 a ${radius},${radius} 0 1,1 ${radius * 2},0 a ${radius},${radius} 0 1,1 -${radius * 2},0`}
          />
        </defs>
        <text
          fill="currentColor"
          fontSize="8.5"
          fontWeight="600"
          letterSpacing="2.5"
        >
          <textPath href={`#${pathId}`} startOffset="0%">
            {text}
          </textPath>
        </text>
      </svg>
      <span className="sr-only">{text}</span>
    </div>
  )
}
