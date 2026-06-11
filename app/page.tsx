import Link from "next/link";
import {
  ASSETS,
  CHECKLIST,
  DAYS_TO_SUMMIT,
  FINDINGS,
  OFFER,
  PHASE1_NOT,
  PHASE1_SCOPE,
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
              the diagnosis. The rest of this audit turns it into a buildable
              first phase.
            </p>
          </div>
        </div>
      </section>

      {/* Findings */}
      <section className="border-b border-line">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="02" />
            <Kicker>Findings — where it&apos;s leaking</Kicker>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">
            Two calls, your own AI&apos;s memo, and everything you walked me
            through. Six findings — each one named, costed, and mapped to
            whether Phase 1 fixes it.
          </p>
          <div className="mt-12 space-y-px overflow-hidden rounded-lg border border-line bg-line">
            {FINDINGS.map((f, i) => (
              <div
                key={f.title}
                className="grid gap-4 bg-surface p-6 sm:grid-cols-[48px_1fr] sm:gap-6"
              >
                <span className="font-mono text-2xl text-ash">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-[family-name:var(--font-display)] text-xl text-paper">
                    {f.title}
                  </h3>
                  <p className="mt-2 max-w-2xl text-sm leading-relaxed text-fog">
                    {f.detail}
                  </p>
                  <div className="mt-4 space-y-1.5 font-mono text-xs tracking-wide uppercase">
                    <p className="text-ash">
                      Costing you →{" "}
                      <span className="normal-case tracking-normal text-fog">
                        {f.cost}
                      </span>
                    </p>
                    <p className="text-ash">
                      Phase 1 →{" "}
                      <span className="normal-case tracking-normal text-moss-dim">
                        {f.phase1}
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Current state */}
      <section className="border-b border-line bg-surface/40">
        <div className="mx-auto max-w-5xl px-6 py-20">
          <div className="flex items-baseline gap-6">
            <SectionNumber n="03" />
            <Kicker>The inventory — what you&apos;re already sitting on</Kicker>
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
            <SectionNumber n="04" />
            <Kicker>
              The recommendation — everything backward from September 13
            </Kicker>
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
                        I went ahead and built a preview. What you&apos;re
                        about to click into is a mockup of what Mike OS
                        surfaces every week — seeded with real intelligence
                        pulled from our two calls. In Phase 1 this arrives in
                        your inbox; you never have to open an app.
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
            <SectionNumber n="05" />
            <Kicker>What I need from you</Kicker>
          </div>
          <p className="mt-6 max-w-2xl leading-relaxed text-fog">
            Five things. Most should take less than fifteen minutes, and
            together they are the entire critical path to kickoff.
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
            <SectionNumber n="06" />
            <Kicker>The next move</Kicker>
          </div>
          <div className="mt-10 rounded-xl border border-line bg-surface p-8 sm:p-12">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-paper sm:text-4xl">
              {OFFER.phase}
            </h2>
            <p className="mt-6 max-w-2xl leading-relaxed text-fog">
              Mike OS, run as a service. My agents process your real calls,
              Drive and content archive — you get the brief, the alerts and
              the answers. Nothing to install, nothing to babysit: the brief
              comes to you, and you get a private login to ask the Operator
              anything whenever you want. The preview you just clicked
              through is a hand-built mockup of what the service surfaces; in
              Phase 1 it goes live, before your participant brainstorms wrap.
            </p>

            <div className="mt-8 grid gap-2 sm:grid-cols-2">
              {PHASE1_SCOPE.map((s) => (
                <div key={s} className="flex gap-3 text-sm leading-relaxed text-fog">
                  <span className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-moss" />
                  {s}
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-line bg-elevated/60 p-5">
              <p className="font-mono text-xs tracking-widest text-ash uppercase">
                What Phase 1 is not
              </p>
              <p className="mt-2 text-sm leading-relaxed text-fog">
                It is not {PHASE1_NOT.slice(0, -1).join(", ")}, or{" "}
                {PHASE1_NOT[PHASE1_NOT.length - 1]}. Phase 1 is the core
                intelligence layer — once it works, all of those get much
                easier and cheaper to build on top of it.
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-10 font-mono text-sm">
              <div>
                <p className="text-xs tracking-widest text-ash uppercase">
                  Setup
                </p>
                <p className="mt-2 text-xl text-moss">{OFFER.setup}</p>
                <p className="mt-1 text-[11px] tracking-widest text-ash uppercase">
                  One-time · founder rate
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-ash uppercase">
                  Service
                </p>
                <p className="mt-2 text-xl text-moss">{OFFER.monthly}</p>
                <p className="mt-1 text-[11px] tracking-widest text-ash uppercase">
                  Cancel anytime
                </p>
              </div>
              <div>
                <p className="text-xs tracking-widest text-ash uppercase">
                  Through the summit
                </p>
                <p className="mt-2 text-xl text-paper">{OFFER.throughSummit}</p>
                <p className="mt-1 text-[11px] tracking-widest text-ash uppercase">
                  June → September
                </p>
              </div>
            </div>

            <p className="mt-8 max-w-2xl text-sm leading-relaxed text-fog">
              Straight up: a part-time assistant doing half this job runs
              $800+ a month. You&apos;re getting the founder rate because Mike
              OS is the first build of its kind and a use case I want to
              document. The trade — when it works, I get to tell the story.
            </p>

            <div className="mt-10 border-t border-line pt-8">
              <p className="text-fog">
                Send the access checklist and wiring starts this week. Briefs
                flowing by mid-July — two full months before your summit.
              </p>
            </div>
          </div>

          <div className="mt-6 rounded-lg border border-line bg-surface/50 p-6 sm:p-8">
            <p className="font-mono text-xs tracking-[0.25em] text-ash uppercase">
              One more thing — on me
            </p>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fog">
              Three months of{" "}
              <span className="text-paper">LaunchBox Pro</span>, free. Not
              part of the build, no strings. When the Inclusioneer Lab is
              ready to have a home — community, lessons, the cohort that walks
              out of the summit — it has one waiting. The clock doesn&apos;t
              start until you say go.
            </p>
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
