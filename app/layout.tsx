import Link from "next/link";
import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, ReactNode } from "react";

interface BaseProps {
  variant?: "primary" | "ghost";
  children: ReactNode;
  className?: string;
}

interface LinkButtonProps extends BaseProps {
  href: string;
}

interface ClickButtonProps
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  href?: undefined;
}

type ButtonProps = LinkButtonProps | ClickButtonProps;

const base =
  "inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-seal focus-visible:outline-offset-2";

const variants = {
  primary:
    "bg-gradient-to-br from-ink to-violet text-white shadow-[0_8px_24px_-8px_rgba(124,58,237,0.6)] hover:-translate-y-0.5 hover:shadow-[0_12px_30px_-8px_rgba(124,58,237,0.75)]",
  ghost:
    "bg-surface/5 border border-border/10 text-text hover:bg-surface/10",
};

export function Button(props: ButtonProps) {
  const { variant = "primary", children, className } = props;
  const classes = cn(base, variants[variant], className);

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  const { variant: _v, children: _c, className: _cl, href: _h, ...rest } =
    props as ClickButtonProps;

  return (
    <button className={classes} {...rest}>
      {children}
    </button>
  );
}