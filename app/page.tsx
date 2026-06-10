import Link from "next/link";
import {
  ASSETS,
  CHECKLIST,
  DAYS_TO_SUMMIT,
  OFFER,
  PHASES,
  POSITIONING,
} from "@/lib/seed";

function Kicker({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-xs tracking-[0.3em] text-moss uppercase">
      {children}
    </p>
  );
}

function SectionNumber({ n }: { n: string }) {
  return (
    <span className="font-mono text-sm text-ash tracking-widest">{n}</span>
  );
}

export default function AuditPage() {
  return (
    <main className="min-h-screen bg-ink">
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-line bg-ink/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span className="font-mono text-xs tracking-[0.25em] text-fog uppercase">
            Disruptiv Solutions
          </span>
          <span className="hidden font-mono text-xs tracking-widest text-ash sm:block">
            AI &amp; AUTOMATION AUDIT · JUNE 2026
          </span>
          <a
            href="#next"
            className="font-mono text-xs tracking-widest text-moss uppercase hover:underline"
          >
            The offer ↓
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="grid-bg relative border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-24 sm:py-32">
          <Kicker>Prepared for Mike Clapper · Inclusioneer Lab</Kicker>
          <h1 className="mt-6 font-[family-name:var(--font-display)] text-4xl font-medium leading-[1.05] tracking-tight sm:text-6xl">
            You don&apos;t have a content problem.
            <br />
            <span className="text-moss glow">
              You have a fragmentation problem.
            </span>
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-fog">
            The relationships, the conversations, the ideas, the summit, the
            archive — it all exists. It just lives in nine different places,
            and your brain is the only thing connecting them. That works at ten
            active relationships. It breaks at a hundred. This audit is the
            plan for the system that takes over the connecting.
          </p>
          <div className="mt-12 flex flex-wrap items-center gap-8 font-mono text-sm">
            <div>
              <p className="text-3xl text-paper">{DAYS_TO_SUMMIT}</p>
              <p className="mt-1 text-xs tracking-widest text-ash uppercase">
                days to the summit
              </p>
            </div>
            <div className="h-10 w-px bg-line-bright" />
            <div>
              <p className="text-3xl text-paper">10</p>
              <p className="mt-1 text-xs tracking-widest text-ash uppercase">
                participants confirmed
              </p>
            </div>
            <div className="h-10 w-px bg-line-bright" />
            <div>
              <p className="text-3xl text-paper">321</p>
              <p className="mt-1 text-xs tracking-widest text-ash uppercase">
                subscribers you don&apos;t own — yet
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* The position */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="01" />
            <Kicker>The position worth building everything around</Kicker>
          </div>
          <blockquote className="mt-10 border-l-2 border-moss pl-8">
            <p className="font-[family-name:var(--font-display)] text-2xl leading-snug text-paper sm:text-4xl">
              &ldquo;{POSITIONING}&rdquo;
            </p>
            <cite className="mt-4 block font-mono text-xs tracking-widest text-ash uppercase not-italic">
              — You, June 5. Your words.
            </cite>
          </blockquote>
          <p className="mt-10 max-w-2xl leading-relaxed text-fog">
            Most accessibility consultants lead with compliance. Most
            hospitality consultants barely think about accessibility. You sit
            in the middle of those two worlds — and almost nobody else does.
            Every conversation, piece of content, summit session, report and
            speaking slot should compound toward that one position. The system
            we build is judged by a single question:{" "}
            <span className="text-paper">does it strengthen the position?</span>
          </p>
          <div className="mt-10 rounded-lg border border-line bg-surface p-6">
            <p className="font-mono text-xs tracking-widest text-moss uppercase">
              Second opinion, same diagnosis
            </p>
            <p className="mt-3 leading-relaxed text-fog">
              You ran our conversation through your own AI. Its conclusion:{" "}
              <span className="text-paper">
                &ldquo;Mike&apos;s brain has become the database&rdquo;
              </span>{" "}
              — and what you need isn&apos;t a content agent, it&apos;s a
              knowledge engine where content is just one output. I agree with
              the diagnosis. The rest of this page is the part an AI chat
              can&apos;t give you: the build.
            </p>
          </div>
        </div>
      </section>

      {/* Current state */}
      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="02" />
            <Kicker>What you&apos;re already sitting on</Kicker>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">
            This is the part nobody has shown you: an inventory. You are not
            starting from zero — you&apos;re starting from six under-leveraged
            assets.
          </p>
          <div className="mt-12 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-2">
            {ASSETS.map((a) => (
              <div key={a.name} className="bg-surface p-6">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="font-[family-name:var(--font-display)] text-lg text-paper">
                    {a.name}
                  </h3>
                  <span className="font-mono text-sm whitespace-nowrap text-moss">
                    {a.stat}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-fog">
                  {a.detail}
                </p>
                <p className="mt-4 font-mono text-xs tracking-wide text-ash uppercase">
                  Phase 1 → <span className="text-moss-dim">{a.phase1}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The plan */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="03" />
            <Kicker>The plan — everything backward from September 13</Kicker>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">
            The summit is not one project among several. It&apos;s the
            organizing principle — a content platform, a credibility platform,
            a relationship platform and a future report, all with a hard date.
            So the build order follows the countdown.
          </p>

          <div className="mt-14 space-y-0">
            {PHASES.map((phase, i) => (
              <div
                key={phase.label}
                className="relative grid gap-6 border-l border-line-bright pb-14 pl-8 sm:grid-cols-[200px_1fr] sm:gap-10"
              >
                <span
                  className={`absolute top-1 -left-[5px] h-[9px] w-[9px] rounded-full ${
                    phase.status === "next"
                      ? "bg-moss pulse-dot"
                      : phase.status === "anchor"
                        ? "bg-paper"
                        : "bg-ash"
                  }`}
                />
                <div>
                  <p
                    className={`font-mono text-xs tracking-[0.25em] uppercase ${
                      phase.status === "next" ? "text-moss" : "text-ash"
                    }`}
                  >
                    {phase.label}
                  </p>
                  <p className="mt-2 font-mono text-sm text-fog">
                    {phase.window}
                  </p>
                  {phase.status === "next" && (
                    <span className="mt-3 inline-block rounded-full border border-moss/40 bg-moss-ink px-3 py-1 font-mono text-[10px] tracking-widest text-moss uppercase">
                      We start here
                    </span>
                  )}
                </div>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-paper sm:text-2xl">
                    {phase.title}
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {phase.points.map((p) => (
                      <li key={p} className="flex gap-3 text-sm leading-relaxed text-fog">
                        <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-moss-dim" />
                        {p}
                      </li>
                    ))}
                  </ul>
                  {i === 0 && (
                    /* Preview hook */
                    <div className="mt-8 rounded-lg border border-moss/30 bg-moss-ink/60 p-6">
                      <p className="font-mono text-xs tracking-widest text-moss uppercase">
                        I didn&apos;t stop at the document
                      </p>
                      <p className="mt-3 leading-relaxed text-paper">
                        I went ahead and scaffolded Phase 1. What you&apos;re
                        about to click into is a working preview of Mike OS —
                        seeded with real intelligence pulled from our two
                        calls. Static data today. Live system in Phase 1.
                      </p>
                      <Link
                        href="/preview"
                        className="mt-5 inline-flex items-center gap-2 rounded-md bg-moss px-5 py-2.5 font-mono text-sm font-medium tracking-wide text-ink transition hover:bg-moss-dim"
                      >
                        Preview Mike OS →
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Checklist */}
      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="04" />
            <Kicker>What I need from you</Kicker>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">
            Five things. None of them take more than fifteen minutes, and they
            are the entire critical path to kickoff.
          </p>
          <div className="mt-10 overflow-hidden rounded-lg border border-line">
            {CHECKLIST.map((c, i) => (
              <div
                key={c.item}
                className={`flex items-start gap-5 bg-surface p-5 ${
                  i > 0 ? "border-t border-line" : ""
                }`}
              >
                <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-line-bright font-mono text-xs text-moss">
                  {i + 1}
                </span>
                <div>
                  <p className="text-paper">{c.item}</p>
                  <p className="mt-1 text-sm text-ash">{c.why}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offer */}
      <section id="next" className="grid-bg border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-24">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="05" />
            <Kicker>The next move</Kicker>
          </div>
          <div className="mt-10 rounded-xl border border-line bg-surface p-8 sm:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-paper sm:text-4xl">
              {OFFER.phase}
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-fog">
              The knowledge engine, the relationship tracking, and the Monday
              dashboard — live and fed by your real calls, Drive and GHL,
              before your participant brainstorms wrap. Built on what you just
              previewed, not started from scratch.
            </p>
            <div className="mt-10 flex flex-wrap gap-10 font-mono text-sm">
              <div>
                <p className="text-xs tracking-widest text-ash uppercase">
                  Timeline
                </p>
                <p className="mt-2 text-xl text-paper">{OFFER.duration}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-ash uppercase">
                  Investment
                </p>
                <p className="mt-2 text-xl text-moss">{OFFER.price}</p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-ash uppercase">
                  Starts
                </p>
                <p className="mt-2 text-xl text-paper">
                  When the checklist lands
                </p>
              </div>
            </div>
            <div className="mt-10 border-t border-line pt-8">
              <p className="text-fog">
                Reply <span className="font-mono text-moss">yes</span>, send
                the Drive access, and I start Monday.
              </p>
              <a
                href={`mailto:${OFFER.email}?subject=Mike OS — yes, let's build Phase 1`}
                className="mt-5 inline-flex items-center gap-2 rounded-md bg-moss px-6 py-3 font-mono text-sm font-medium tracking-wide text-ink transition hover:bg-moss-dim"
              >
                Reply yes →
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-10">
        <p className="font-mono text-xs tracking-widest text-ash uppercase">
          Ian McDonald · Disruptiv Solutions
        </p>
        <p className="font-mono text-xs text-ash">
          Prepared June 2026 · Confidential
        </p>
      </footer>
    </main>
  );
}
