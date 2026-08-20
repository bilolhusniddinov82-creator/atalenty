import { cn } from "@/lib/utils";
import { HTMLAttributes, ReactNode } from "react";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  highlight?: boolean;
}

export function GlassCard({ children, className, highlight, ...rest }: GlassCardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-border/10 bg-surface/[0.055] backdrop-blur-md",
        highlight && "border-seal bg-gradient-to-b from-seal/10 to-surface/[0.04]",
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
