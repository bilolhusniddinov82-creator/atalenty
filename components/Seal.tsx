"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface SealProps {
  size?: number;
  className?: string;
}

/** The signature wax-seal mark. Presses onto the page shortly after mount. */
export function Seal({ size = 190, className }: SealProps) {
  const [stamped, setStamped] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setStamped(true), 300);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={cn("drop-shadow-[0_14px_30px_rgba(232,179,76,0.35)]", className)}
      style={{ width: size, height: size }}
    >
      <svg
        viewBox="0 0 200 200"
        width={size}
        height={size}
        className={cn(
          "opacity-0 transition-all duration-[900ms] ease-[cubic-bezier(.2,1.4,.4,1)]",
          stamped && "opacity-100"
        )}
        style={{
          transform: stamped ? "scale(1) rotate(-8deg)" : "scale(0.4) rotate(-28deg)",
        }}
      >
        <defs>
          <radialGradient id="sealGrad" cx="35%" cy="30%" r="75%">
            <stop offset="0%" stopColor="#F6CE7A" />
            <stop offset="55%" stopColor="#E8B34C" />
            <stop offset="100%" stopColor="#B8842E" />
          </radialGradient>
        </defs>
        <circle cx="100" cy="100" r="92" fill="url(#sealGrad)" />
        <circle cx="100" cy="100" r="92" fill="none" stroke="#7A5A20" strokeOpacity="0.35" strokeWidth="1.5" />
        <circle cx="100" cy="100" r="78" fill="none" stroke="#7A5A20" strokeOpacity="0.4" strokeWidth="1" strokeDasharray="2 4" />
        <text x="100" y="72" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace" fontSize="9" letterSpacing="3" fill="#4A3714">
          NOTARIZED &amp; VERIFIED
        </text>
        <g transform="translate(100,108)">
          <path d="M-28 4 L-10 20 L30 -22" fill="none" stroke="#4A3714" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <text x="100" y="152" textAnchor="middle" fontFamily="var(--font-plex-mono), monospace" fontSize="8" letterSpacing="2" fill="#4A3714">
          No. 000-4471
        </text>
      </svg>
    </div>
  );
}
