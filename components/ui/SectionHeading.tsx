import { Reveal } from "@/components/ui/Reveal";

interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  sub?: string;
}

export function SectionHeading({ eyebrow, title, sub }: SectionHeadingProps) {
  return (
    <Reveal>
      <div className="mb-12 max-w-xl">
        <div className="mb-3 font-mono text-xs uppercase tracking-widest text-seal">
          {eyebrow}
        </div>
        <h2 className="font-display text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        {sub && <p className="mt-3.5 text-[15.5px] leading-relaxed text-muted">{sub}</p>}
      </div>
    </Reveal>
  );
}
