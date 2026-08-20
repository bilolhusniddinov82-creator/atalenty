"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { LayoutDashboard, LogOut } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { useLanguage } from "@/hooks/useLanguage";

export function UserMenu() {
  const { user, logout } = useAuth();
  const { t } = useLanguage();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  if (!user) return null;

  function handleLogout() {
    logout();
    setOpen(false);
    router.push("/");
  }

  return (
    <div className="relative" ref={ref}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className="flex items-center gap-2 rounded-full border border-border/10 bg-surface/5 py-1.5 pl-1.5 pr-3 text-sm text-text transition-colors hover:bg-surface/10"
      >
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br from-ink to-violet text-[11px] font-semibold text-white">
          {user.fullName.charAt(0).toUpperCase()}
        </span>
        {user.fullName.split(" ")[0]}
      </button>

      {open && (
        <div
          role="listbox"
          className="absolute right-0 top-full z-30 mt-2 w-52 overflow-hidden rounded-xl border border-border/10 bg-bg shadow-[0_20px_50px_-12px_rgba(0,0,0,0.5)]"
        >
          <div className="border-b border-border/10 px-3.5 py-3">
            <p className="truncate text-sm text-text">{user.fullName}</p>
            <p className="truncate text-xs text-muted">{user.email}</p>
          </div>
          <Link
            href="/dashboard"
            onClick={() => setOpen(false)}
            className="flex items-center gap-2.5 px-3.5 py-2.5 text-sm text-muted transition-colors hover:bg-surface/10 hover:text-text"
          >
            <LayoutDashboard size={14} />
            {t.dashboard.title}
          </Link>
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full items-center gap-2.5 px-3.5 py-2.5 text-left text-sm text-muted transition-colors hover:bg-surface/10 hover:text-text"
          >
            <LogOut size={14} />
            {t.auth.logout}
          </button>
        </div>
      )}
    </div>
  );
}
