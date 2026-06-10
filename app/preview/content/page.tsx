import { CHANNEL_STATS, CONTENT_QUEUE } from "@/lib/seed";
import { PageHeader, Phase1Footnote } from "@/components/preview-ui";

export default function ContentPage() {
  return (
    <div>
      <PageHeader
        title="Content"
        sub="Drafts in your voice, from your conversations. You approve and publish — the system does the blank page."
      />

      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
        {CHANNEL_STATS.map((c) => (
          <div key={c.channel} className="bg-surface p-4">
            <p className="font-[family-name:var(--font-display)] text-xl text-moss">
              {c.value}
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-widest text-paper uppercase">
              {c.channel}
            </p>
            <p className="mt-1 text-xs text-ash">{c.note}</p>
          </div>
        ))}
      </div>

      <h2 className="mt-10 font-mono text-xs tracking-[0.25em] text-moss uppercase">
        Drafting queue — pulled from your calls
      </h2>
      <div className="mt-4 space-y-3">
        {CONTENT_QUEUE.map((c) => (
          <div key={c.hook} className="rounded-lg border border-line bg-surface p-5">
            <p className="font-[family-name:var(--font-display)] text-lg leading-snug text-paper">
              &ldquo;{c.hook}&rdquo;
            </p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2 font-mono text-xs text-ash">
              <span>
                <span className="tracking-widest uppercase">Format · </span>
                <span className="text-fog">{c.format}</span>
              </span>
              <span>
                <span className="tracking-widest uppercase">Channel · </span>
                <span className="text-fog">{c.channel}</span>
              </span>
              <span>
                <span className="tracking-widest uppercase">Source · </span>
                <span className="text-moss-dim">{c.source}</span>
              </span>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-lg border border-line bg-surface p-5">
        <p className="font-mono text-xs tracking-[0.25em] text-moss uppercase">
          The image system
        </p>
        <p className="mt-3 text-sm leading-relaxed text-fog">
          The black-and-white photography with the green pop made people stop
          scrolling — and it went dormant when Skyla left. Phase 2 rebuilds it
          as a repeatable system: every approved post ships with an on-brand
          image, generated in that exact style, without waiting on anyone.
        </p>
        <div className="mt-4 flex gap-2">
          <span className="h-10 flex-1 rounded bg-ink border border-line" />
          <span className="h-10 flex-1 rounded bg-elevated border border-line" />
          <span className="h-10 flex-1 rounded bg-paper/90" />
          <span className="h-10 flex-1 rounded bg-moss" />
        </div>
        <div className="mt-1.5 flex gap-2 font-mono text-[9px] tracking-widest text-ash uppercase">
          <span className="flex-1">Black</span>
          <span className="flex-1">Grey</span>
          <span className="flex-1">White</span>
          <span className="flex-1 text-moss">The pop</span>
        </div>
      </div>

      <Phase1Footnote>
        the GHL archive — six months of daily posts — becomes the voice model,
        so drafts read like you wrote them. The 90-day summit buildup arc
        drafts itself from the participant calls as they happen.
      </Phase1Footnote>
    </div>
  );
}
