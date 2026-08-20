"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQS } from "@/constants/faq";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/hooks/useLanguage";
import type { FaqItem } from "@/types";

function FaqRow({ item, defaultOpen }: { item: FaqItem; defaultOpen: boolean }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="border-b border-border/10 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 text-left font-display text-base"
      >
        <span>{item.q}</span>
        <ChevronDown
          size={18}
          className="shrink-0 transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "none" }}
        />
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-out"
        style={{ maxHeight: open ? 200 : 0 }}
      >
        <p className="max-w-xl pt-3.5 text-[14.5px] leading-relaxed text-muted">{item.a}</p>
      </div>
    </div>
  );
}

export function FAQ() {
  const { t } = useLanguage();
  // FAQ copy is sourced from constants/faq.ts (English) for now — see
  // the note in README about extending i18n coverage to long-form
  // content like this.

  return (
    <section id="faq" className="py-20">
      <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} />
      <Reveal>
        <div>
          {FAQS.map((item, i) => (
            <FaqRow key={item.q} item={item} defaultOpen={i === 0} />
          ))}
        </div>
      </Reveal>
    </section>
  );
}
