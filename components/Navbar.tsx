"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Stamp, X } from "lucide-react";
import { NAV_LINKS } from "@/constants/nav";
import { Button } from "@/components/ui/Button";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { ThemeSwitcher } from "@/components/ThemeSwitcher";
import { UserMenu } from "@/components/UserMenu";
import { useLanguage } from "@/hooks/useLanguage";
import { useAuth } from "@/hooks/useAuth";

const NAV_LABEL_KEYS = ["howItWorks", "notaries", "pricing", "about", "contact"] as const;

export function Navbar() {
  const { t } = useLanguage();
  const { user, ready, logout } = useAuth();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-20 border-b border-border/10 bg-bg/55 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-7 py-4">
        <Link href="/" className="flex items-center gap-2.5 font-display text-lg">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-seal-radial">
            <Stamp size={14} color="#241a05" />
          </span>
          Attestly
        </Link>

        <div className="hidden gap-8 text-sm text-muted md:flex">
          {NAV_LINKS.map((link, i) => (
            <Link key={link.href} href={link.href} className="transition-colors hover:text-text">
              {t.nav[NAV_LABEL_KEYS[i]]}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 md:flex">
          <ThemeSwitcher />
          <LanguageSwitcher />
          {ready && user ? (
            <UserMenu />
          ) : (
            <Button href="/login" variant="ghost">
              {t.nav.login}
            </Button>
          )}
          <Button href="/book" variant="primary">
            {t.nav.bookNotary}
          </Button>
        </div>

        <button
          type="button"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-border/10 text-text md:hidden"
          onClick={() => setMobileOpen((o) => !o)}
          aria-label="Toggle menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {mobileOpen && (
        <div className="border-t border-border/10 px-7 py-5 md:hidden">
          <div className="mb-5 flex flex-col gap-4 text-sm text-muted">
            {NAV_LINKS.map((link, i) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="transition-colors hover:text-text"
              >
                {t.nav[NAV_LABEL_KEYS[i]]}
              </Link>
            ))}
          </div>
          <div className="mb-5 flex items-center gap-2.5">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
          <div className="flex flex-col gap-2.5">
            {ready && user ? (
              <>
                <div className="rounded-xl border border-border/10 bg-surface/5 px-4 py-3">
                  <p className="truncate text-sm text-text">{user.fullName}</p>
                  <p className="truncate text-xs text-muted">{user.email}</p>
                </div>
                <Button href="/dashboard" variant="ghost" className="w-full justify-center">
                  {t.dashboard.title}
                </Button>
                <button
                  type="button"
                  onClick={() => {
                    logout();
                    setMobileOpen(false);
                  }}
                  className="w-full rounded-full border border-border/10 py-3 text-sm text-muted transition-colors hover:text-text"
                >
                  {t.auth.logout}
                </button>
              </>
            ) : (
              <Button href="/login" variant="ghost" className="w-full justify-center">
                {t.nav.login}
              </Button>
            )}
            <Button href="/book" variant="primary" className="w-full justify-center">
              {t.nav.bookNotary}
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
