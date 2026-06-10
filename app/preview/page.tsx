import Link from "next/link";
import { ACTIVITY, ATTENTION, DAYS_TO_SUMMIT } from "@/lib/seed";
import { PageHeader, Phase1Footnote, StatusChip } from "@/components/preview-ui";

const STATS = [
  { value: String(DAYS_TO_SUMMIT), label: "days to summit" },
  { value: "10", label: "participants" },
  { value: "6", label: "open loops tracked" },
  { value: "5", label: "posts in the queue" },
];

export default function TodayPage() {
  return (
    <div>
      <PageHeader
        title="What deserves your attention this week?"
        sub="Not what's due — what creates the most leverage. One list, every Monday."
      />

      <div className="mt-8 grid grid-cols-2 gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="bg-surface p-4">
            <p className="font-[family-name:var(--font-display)] text-2xl text-moss">
              {s.value}
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-widest text-ash uppercase">
              {s.label}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-8 space-y-3">
        {ATTENTION.map((item) => (
          <div
            key={item.title}
            className="rounded-lg border border-line bg-surface p-5 transition hover:border-line-bright"
          >
            <div className="flex flex-wrap items-center gap-3">
              <StatusChip status={item.urgency} />
              <span className="font-mono text-[10px] tracking-widest text-ash uppercase">
                {item.tag}
              </span>
            </div>
            <h3 className="mt-3 font-[family-name:var(--font-display)] text-lg text-paper">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-fog">
              {item.detail}
            </p>
          </div>
        ))}
      </div>

      <div className="mt-10">
        <div className="flex flex-wrap items-baseline justify-between gap-2">
          <h2 className="font-mono text-xs tracking-[0.25em] text-moss uppercase">
            While you weren&apos;t looking
          </h2>
          <Link
            href="/preview/agents"
            className="font-mono text-xs text-ash hover:text-fog"
          >
            Meet the agents →
          </Link>
        </div>
        <p className="mt-2 text-sm text-ash">
          A simulated week of agent runs — this is what the background work
          looks like once Phase 1 is live.
        </p>
        <div className="mt-4 overflow-hidden rounded-lg border border-line">
          {ACTIVITY.map((e, i) => (
            <div
              key={`${e.time}-${e.agent}-${e.action}`}
              className={`flex items-start gap-4 bg-surface px-4 py-3 ${
                i > 0 ? "border-t border-line" : ""
              }`}
            >
              <span className="w-20 shrink-0 pt-0.5 font-mono text-xs text-ash">
                {e.time}
              </span>
              <span className="w-28 shrink-0 pt-0.5 font-mono text-xs text-moss">
                {e.agent}
              </span>
              <p className="min-w-0 text-sm leading-relaxed text-fog">
                {e.action}
              </p>
            </div>
          ))}
        </div>
      </div>

      <Phase1Footnote>
        this list assembles itself every Monday morning from your call
        transcripts, follow-up commitments and summit timeline — you open one
        page instead of nine apps.{" "}
        <Link href="/#next" className="text-moss hover:underline">
          That&apos;s Phase 1 →
        </Link>
      </Phase1Footnote>
    </div>
  );
}
