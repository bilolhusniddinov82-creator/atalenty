"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { LOCALES, LOCALE_LABELS } from "@/lib/i18n/config";
import { cn } from "@/lib/utils";

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        aria-label="Change language"
        className="flex items-center gap-1.5 rounded-full border border-border/10 bg-surface/5 px-3 py-2 text-xs font-medium text-muted transition-colors hover:text-text"
      >
        <Globe size={14} />
        {locale.toUpperCase()}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-30 mt-2 w-44 overflow-hidden rounded-xl border border-border/10 bg-bg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          {LOCALES.map((loc) => (
            <button
              key={loc}
              role="option"
              aria-selected={locale === loc}
              onClick={() => {
                setLocale(loc);
                setOpen(false);
              }}
              className={cn(
                "flex w-full items-center justify-between gap-2 px-3.5 py-2.5 text-left text-sm transition-colors hover:bg-surface/10",
                locale === loc ? "text-text" : "text-muted"
              )}
            >
              <span className="flex items-center gap-2">
                <span aria-hidden="true">{LOCALE_LABELS[loc].flag}</span>
                {LOCALE_LABELS[loc].native}
              </span>
              {locale === loc && <Check size={14} className="text-seal" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
