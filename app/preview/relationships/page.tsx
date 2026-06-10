import { RELATIONSHIPS } from "@/lib/seed";
import { PageHeader, Phase1Footnote, StatusChip } from "@/components/preview-ui";

export default function RelationshipsPage() {
  return (
    <div>
      <PageHeader
        title="Relationships"
        sub="Who needs follow-up, who's drifting, what was committed — so nothing falls through the cracks after the call ends."
      />

      <div className="mt-8 space-y-3">
        {RELATIONSHIPS.map((r) => (
          <div
            key={r.name}
            className="rounded-lg border border-line bg-surface p-5 transition hover:border-line-bright"
          >
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h3 className="font-[family-name:var(--font-display)] text-lg text-paper">
                  {r.name}
                </h3>
                <p className="mt-0.5 text-sm text-ash">{r.role}</p>
              </div>
              <StatusChip status={r.status} />
            </div>
            <p className="mt-3 text-sm leading-relaxed text-fog">{r.context}</p>
            <div className="mt-4 flex items-start gap-2 border-t border-line pt-3">
              <span className="font-mono text-[10px] tracking-widest text-moss uppercase whitespace-nowrap mt-0.5">
                Next move
              </span>
              <p className="text-sm text-paper">{r.nextMove}</p>
            </div>
          </div>
        ))}
      </div>

      <Phase1Footnote>
        every call you record updates this board on its own — last touch,
        commitments made, introductions outstanding. The &ldquo;I was talking
        to someone and then they fell off my map&rdquo; problem stops being a
        problem.
      </Phase1Footnote>
    </div>
  );
}
