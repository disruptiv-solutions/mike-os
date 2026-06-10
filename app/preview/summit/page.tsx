import { SUMMIT_DATE, DAYS_TO_SUMMIT, THEMES } from "@/lib/seed";
import { PageHeader, Phase1Footnote } from "@/components/preview-ui";

const ROSTER = [
  { role: "Hotel company owners", count: 2, angle: "Operator reality — what actually gets funded" },
  { role: "Interior designers", count: 2, angle: "Design charrettes — beautiful AND accessible" },
  { role: "Architect", count: 1, angle: "Built environment beyond code minimums" },
  { role: "Travel podcast personality", count: 1, angle: "Reach — carries the story out of the room" },
  { role: "Insurance / risk expert", count: 1, angle: "Risk mitigation as the budget unlock" },
  { role: "ADA lawyer", count: 1, angle: "The 'how not to get sued' session" },
  { role: "+ 2 more confirmed", count: 2, angle: "Brainstorm calls scheduling now" },
];

const AGENDA = [
  {
    day: "Day 1 — Sept 13",
    blocks: [
      "Arrivals by noon · check-in",
      "2–3pm kickoff · ~2 hours",
      "Opening frame: the $100B market nobody is claiming",
    ],
  },
  {
    day: "Day 2 — Sept 14",
    blocks: [
      "8am–4pm · full production day",
      "Roundtables, panels, design charrettes — formats locked from the 1:1 brainstorms",
      "Multi-camera shoot → 3–4 hr master cut → micro clips + the industry report",
    ],
  },
];

export default function SummitPage() {
  return (
    <div>
      <PageHeader
        title="Inclusioneer Summit"
        sub={`${SUMMIT_DATE} · T-minus ${DAYS_TO_SUMMIT} days · This is your book launch.`}
      />

      <h2 className="mt-8 font-mono text-xs tracking-[0.25em] text-moss uppercase">
        The room
      </h2>
      <div className="mt-4 overflow-hidden rounded-lg border border-line">
        {ROSTER.map((r, i) => (
          <div
            key={r.role}
            className={`flex items-center gap-4 bg-surface p-4 ${i > 0 ? "border-t border-line" : ""}`}
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-line-bright font-mono text-sm text-moss">
              {r.count}
            </span>
            <div className="min-w-0">
              <p className="text-paper">{r.role}</p>
              <p className="truncate text-sm text-ash">{r.angle}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="mt-10 font-mono text-xs tracking-[0.25em] text-moss uppercase">
        Emerging themes → sessions
      </h2>
      <div className="mt-4 space-y-3">
        {THEMES.map((t) => (
          <div key={t.title} className="rounded-lg border border-line bg-surface p-5">
            <h3 className="font-[family-name:var(--font-display)] text-lg text-paper">
              {t.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">{t.source}</p>
            <p className="mt-3 font-mono text-xs tracking-wide text-ash uppercase">
              Becomes → <span className="text-moss-dim normal-case tracking-normal">{t.becomes}</span>
            </p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 font-mono text-xs tracking-[0.25em] text-moss uppercase">
        Agenda skeleton
      </h2>
      <div className="mt-4 grid gap-4 sm:grid-cols-2">
        {AGENDA.map((d) => (
          <div key={d.day} className="rounded-lg border border-line bg-surface p-5">
            <p className="font-[family-name:var(--font-display)] text-paper">{d.day}</p>
            <ul className="mt-3 space-y-2">
              {d.blocks.map((b) => (
                <li key={b} className="flex gap-3 text-sm leading-relaxed text-fog">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-moss-dim" />
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Phase1Footnote>
        every participant brainstorm call you record gets distilled here
        automatically — themes sharpen, sessions lock, and the report outline
        writes itself as the conversations happen.
      </Phase1Footnote>
    </div>
  );
}
