"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/hooks/useLanguage";

export default function ContactPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto max-w-4xl px-7 py-16">
          <div className="mb-3 font-mono text-xs uppercase tracking-widest text-seal">{t.contact.eyebrow}</div>
          <h1 className="mb-3 font-display text-3xl sm:text-4xl">{t.contact.title}</h1>
          <p className="mb-12 max-w-xl text-[15.5px] text-muted">{t.contact.subtitle}</p>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-[1fr_1.2fr]">
            <div className="flex flex-col gap-5">
              <GlassCard className="flex items-center gap-3.5 p-5">
                <Mail size={18} className="text-seal" />
                <span className="text-sm">{t.contact.email}</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3.5 p-5">
                <Phone size={18} className="text-seal" />
                <span className="text-sm">{t.contact.phone}</span>
              </GlassCard>
              <GlassCard className="flex items-center gap-3.5 p-5">
                <MapPin size={18} className="text-seal" />
                <span className="text-sm">{t.contact.address}</span>
              </GlassCard>
            </div>

            <GlassCard className="p-7 sm:p-8">
              <ContactForm />
            </GlassCard>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
