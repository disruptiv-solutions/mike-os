import { AGENTS } from "@/lib/seed";
import { PageHeader, Phase1Footnote } from "@/components/preview-ui";

const PHASE_STYLES: Record<string, string> = {
  "Phase 1": "border-moss/40 bg-moss-ink text-moss",
  "Phase 2": "border-line-bright text-paper",
  "Phase 3": "border-line text-ash",
};

export default function AgentsPage() {
  return (
    <div>
      <PageHeader
        title="Your team"
        sub="Eight agents, one operating system. They work the background so the foreground is yours — and nothing ships or sends without your yes."
      />

      <div className="mt-8 space-y-3">
        {AGENTS.map((a) => (
          <div
            key={a.codename}
            className="rounded-lg border border-line bg-surface p-5 transition hover:border-line-bright"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div className="flex items-center gap-3">
                <span
                  className={`flex h-9 w-9 items-center justify-center rounded-md font-[family-name:var(--font-display)] text-sm font-bold ${
                    a.phase === "Phase 1"
                      ? "bg-moss text-ink"
                      : "border border-line-bright bg-elevated text-fog"
                  }`}
                >
                  {a.name.replace("The ", "").charAt(0)}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-lg leading-tight text-paper">
                    {a.name}
                  </h3>
                  <p className="font-mono text-[10px] tracking-widest text-ash">
                    {a.codename}
                  </p>
                </div>
              </div>
              <span
                className={`inline-block rounded-full border px-2.5 py-0.5 font-mono text-[10px] tracking-widest uppercase ${PHASE_STYLES[a.phase]}`}
              >
                {a.phase}
              </span>
            </div>

            <p className="mt-3 text-sm text-paper">{a.job}</p>

            <div className="mt-4 grid gap-3 border-t border-line pt-4 sm:grid-cols-3">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-ash uppercase">
                  Watches
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fog">
                  {a.watches}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-ash uppercase">
                  Produces
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fog">
                  {a.produces}
                </p>
              </div>
              <div>
                <p className="font-mono text-[10px] tracking-widest text-ash uppercase">
                  Runs
                </p>
                <p className="mt-1 text-sm leading-relaxed text-fog">
                  {a.cadence}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Phase1Footnote>
        the five Phase 1 agents go live first — they&apos;re the knowledge
        engine. The Ghostwriter and Art Department arrive in Phase 2 once the
        engine has your voice. The Scout joins after the summit. Hiring this
        team the human way costs more per month than the whole system does
        once.
      </Phase1Footnote>
    </div>
  );
}
