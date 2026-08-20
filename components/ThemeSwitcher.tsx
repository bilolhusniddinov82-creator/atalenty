"use client";

import { useState, useRef, useEffect } from "react";
import { Sun, Moon, Monitor } from "lucide-react";
import { useTheme } from "@/hooks/useTheme";
import { THEMES, type Theme } from "@/lib/theme/config";
import { cn } from "@/lib/utils";

const THEME_ICONS: Record<Theme, typeof Sun> = {
  light: Sun,
  dark: Moon,
  system: Monitor,
};

const THEME_LABELS: Record<Theme, string> = {
  light: "Light",
  dark: "Dark",
  system: "System",
};

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const ActiveIcon = THEME_ICONS[theme];

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="Change theme"
        className="flex h-[34px] w-[34px] items-center justify-center rounded-full border border-border/10 bg-surface/5 text-muted transition-colors hover:text-text"
      >
        <ActiveIcon size={15} />
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-30 mt-2 w-36 overflow-hidden rounded-xl border border-border/10 bg-bg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          {THEMES.map((t) => {
            const Icon = THEME_ICONS[t];
            return (
              <button
                key={t}
                role="option"
                aria-selected={theme === t}
                onClick={() => {
                  setTheme(t);
                  setOpen(false);
                }}
                className={cn(
                  "flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-surface/10",
                  theme === t ? "text-text" : "text-muted"
                )}
              >
                <Icon size={14} />
                {THEME_LABELS[t]}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
