export function PageHeader({
  title,
  sub,
}: {
  title: string;
  sub: string;
}) {
  return (
    <div className="border-b border-line pb-6">
      <h1 className="font-[family-name:var(--font-display)] text-2xl text-paper sm:text-3xl">
        {title}
      </h1>
      <p className="mt-2 text-sm text-fog">{sub}</p>
    </div>
  );
}

export function Phase1Footnote({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-10 flex items-start gap-3 rounded-lg border border-dashed border-line-bright bg-surface p-4">
      <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-moss pulse-dot" />
      <p className="text-sm leading-relaxed text-fog">
        <span className="font-mono text-xs tracking-widest text-moss uppercase">
          In Phase 1:{" "}
        </span>
        {children}
      </p>
    </div>
  );
}

export function StatusChip({ status }: { status: string }) {
  const styles: Record<string, string> = {
    warming: "border-moss/40 text-moss",
    committed: "border-paper/30 text-paper",
    drifting: "border-amber-500/40 text-amber-400",
    "open-loop": "border-line-bright text-fog",
    now: "border-moss/40 bg-moss-ink text-moss",
    soon: "border-line-bright text-paper",
    watch: "border-line text-ash",
  };
  return (
    <span
      className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase ${
        styles[status] ?? "border-line text-fog"
      }`}
    >
      {status.replace("-", " ")}
    </span>
  );
}
