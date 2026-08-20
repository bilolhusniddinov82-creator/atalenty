"use client";

import Link from "next/link";
import { Stamp } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

function FooterColumn({ title, links }: { title: string; links: { label: string; href: string }[] }) {
  return (
    <div>
      <h4 className="mb-3.5 text-[13px] text-text">{title}</h4>
      {links.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          className="mb-2.5 block text-[13.5px] text-muted transition-colors hover:text-text"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}

export function Footer() {
  const { t } = useLanguage();

  const productLinks = [
    { label: t.nav.howItWorks, href: "/#how" },
    { label: t.nav.notaries, href: "/notaries" },
    { label: t.nav.pricing, href: "/pricing" },
  ];
  const companyLinks = [
    { label: t.nav.about, href: "/about" },
    { label: t.nav.contact, href: "/contact" },
    { label: t.footer.becomeNotary, href: "/register" },
  ];
  const legalLinks = [
    { label: t.footer.privacy, href: "/privacy" },
    { label: t.footer.terms, href: "/terms" },
    { label: t.footer.compliance, href: "/compliance" },
  ];

  return (
    <footer className="border-t border-border/10 py-12">
      <div className="mx-auto max-w-6xl px-7">
        <div className="mb-10 grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3.5 flex items-center gap-2.5 font-display text-lg">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-seal-radial">
                <Stamp size={14} color="#241a05" />
              </span>
              Attestly
            </div>
            <p className="max-w-[240px] text-[13.5px] leading-relaxed text-muted">{t.footer.description}</p>
          </div>
          <FooterColumn title={t.footer.product} links={productLinks} />
          <FooterColumn title={t.footer.company} links={companyLinks} />
          <FooterColumn title={t.footer.legal} links={legalLinks} />
        </div>
        <div className="flex flex-wrap items-center justify-between gap-3 text-[12.5px] text-muted">
          <span>© 2026 Attestly. {t.footer.rights}</span>
          <span className="font-mono">SOC 2 Type II · 256-bit AES</span>
        </div>
      </div>
    </footer>
  );
}
