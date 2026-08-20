export function AuroraBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -left-32 -top-40 h-[520px] w-[520px] animate-drift1 rounded-full bg-ink opacity-40 blur-[90px]" />
      <div className="absolute -right-36 top-16 h-[460px] w-[460px] animate-drift2 rounded-full bg-violet opacity-40 blur-[90px]" />
      <div className="absolute -bottom-44 left-1/3 h-[420px] w-[420px] rounded-full bg-teal opacity-20 blur-[90px]" />
    </div>
  );
}
