"use client";

import React from "react";

interface BorderBeamProps {
  className?: string;
  size?: number;
  duration?: number;
  borderWidth?: number;
  anchor?: number;
  colorFrom?: string;
  colorTo?: string;
  delay?: number;
}

export default function BorderBeam({
  className = "",
  size = 200,
  duration = 12,
  borderWidth = 1.5,
  anchor = 90,
  colorFrom = "#14b8a6",
  colorTo = "#3b82f6",
  delay = 0,
}: BorderBeamProps) {
  return (
    <div
      style={
        {
          "--size": size,
          "--duration": duration,
          "--anchor": anchor,
          "--border-width": borderWidth,
          "--color-from": colorFrom,
          "--color-to": colorTo,
          "--delay": `-${delay}s`,
        } as React.CSSProperties
      }
      className={`dora-border-beam pointer-events-none absolute inset-0 rounded-[inherit] [border:calc(var(--border-width)*1px)_solid_transparent] ![mask-clip:padding-box,border-box] ![mask-composite:intersect] [mask:linear-gradient(transparent,transparent),linear-gradient(white,white)] ${className}`}
    >
      <div className="dora-border-beam-glow absolute aspect-square w-[calc(var(--size)*1px)] animate-border-beam [animation-delay:var(--delay)] [background:radial-gradient(ellipse_at_center,var(--color-from),var(--color-to),transparent_70%)] [offset-anchor:calc(var(--anchor)*1%)_50%] [offset-path:rect(0_auto_auto_0_round_calc(var(--size)*1px))]" />
    </div>
  );
}
