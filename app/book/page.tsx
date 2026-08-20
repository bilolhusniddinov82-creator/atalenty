"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { BookingForm } from "@/components/BookingForm";
import { useLanguage } from "@/hooks/useLanguage";

export default function BookPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-2xl px-7 py-16">
          <div className="mb-10">
            <div className="mb-3 font-mono text-xs uppercase tracking-widest text-seal">{t.booking.eyebrow}</div>
            <h1 className="font-display text-3xl sm:text-4xl">{t.booking.title}</h1>
            <p className="mt-3.5 text-[15.5px] leading-relaxed text-muted">{t.booking.subtitle}</p>
          </div>
          <BookingForm />
        </div>
        <Footer />
      </div>
    </div>
  );
}
