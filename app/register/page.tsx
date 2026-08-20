"use client";

import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AuroraBackground } from "@/components/AuroraBackground";
import { GlassCard } from "@/components/ui/GlassCard";
import { RegisterForm } from "@/components/RegisterForm";
import { useLanguage } from "@/hooks/useLanguage";

export default function RegisterPage() {
  const { t } = useLanguage();

  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <AuroraBackground />
      <div className="relative z-[2]">
        <Navbar />
        <div className="mx-auto flex max-w-md flex-col px-7 py-20">
          <h1 className="mb-2 font-display text-3xl">{t.auth.createAccount}</h1>
          <p className="mb-8 text-[15px] text-muted">{t.auth.registerSubtitle}</p>
          <GlassCard className="p-7 sm:p-8">
            <RegisterForm />
          </GlassCard>
          <p className="mt-6 text-center text-sm text-muted">
            {t.auth.haveAccount}{" "}
            <Link href="/login" className="text-text underline underline-offset-4">
              {t.auth.signInLink}
            </Link>
          </p>
        </div>
        <Footer />
      </div>
    </div>
  );
}
