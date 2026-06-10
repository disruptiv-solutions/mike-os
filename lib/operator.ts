export type OperatorTurn = { q: string; a: string };

export const OPERATOR_SCRIPT: Record<
  string,
  { context: string; turns: OperatorTurn[] }
> = {
  "/preview": {
    context: "Today",
    turns: [
      {
        q: "What should I hit first this week?",
        a: "The participant brainstorm calls. They're the bottleneck for everything else — each call locks a session format, feeds the report outline, and hands the Ghostwriter raw material for the 90-day buildup. Get the rest on the calendar and the summit starts planning itself.",
      },
      {
        q: "Why is Royal Caribbean on my list?",
        a: "Six months of on-and-off talks, and their last word was 'let's talk this summer.' It's June — that clock just came due. You also have a better hook than last time: invite them into the summit narrative instead of re-pitching the consulting.",
      },
      {
        q: "Anything about to slip?",
        a: "The door-opener vendor. Nine days since your last touch and no next step on file — and they're the prototype for the whole general-contractor vendor network. One short message keeps it warm.",
      },
    ],
  },
  "/preview/summit": {
    context: "Summit",
    turns: [
      {
        q: "What's the strongest theme so far?",
        a: "Direct bookings. Disabled travelers book direct at 72% vs 35% — while hotels pay 20–25% OTA commission to lose their most loyal guests. It's the money argument, which makes it the spine of the report and your best keynote thread.",
      },
      {
        q: "What's still open on the agenda?",
        a: "Day 2 structure. You have the bookends — arrivals and a 2–3pm kickoff on day one, 8am–4pm production day on day two — but session count, formats and owners are still unlocked. That's exactly what the remaining brainstorm calls are for.",
      },
      {
        q: "Who should own the legal session?",
        a: "Pair the ADA lawyer with the insurance and risk participant. 'How not to get sued' lands harder when it covers both the legal exposure and the premium math — and it's the session hotel operators will fly in for.",
      },
    ],
  },
  "/preview/relationships": {
    context: "Relationships",
    turns: [
      {
        q: "Who's drifting right now?",
        a: "Two: the marketing team — direction friction, and content output has stalled since Skyla left — and the door-opener vendor at nine days quiet. The team needs you to hand them a structure; the vendor just needs a touch.",
      },
      {
        q: "What did I commit to with the UK contact?",
        a: "A partner-or-build decision on the AI concierge platform. It's been open since March, and it shapes the incubator's product direction — I'd put a decision date on it rather than booking another exploratory call.",
      },
      {
        q: "Who's warming up?",
        a: "The UK co-founder candidate and the door-opener vendor. Both moved toward you in the last two weeks — one toward co-founding the incubator, one as your first vendor-network member. Different plays, same week.",
      },
    ],
  },
  "/preview/content": {
    context: "Content",
    turns: [
      {
        q: "Draft a post about direct bookings",
        a: "Here's a starting cut, in your voice:\n\n“Hotels pay up to 25% commission to lose their most loyal guests. Disabled travelers book direct at 72% — double the rate of everyone else. Accessibility isn't a compliance line item. It's the cheapest direct-booking strategy you're not using.”\n\nIn Phase 2 I draft these from your full GHL voice model, with the B&W + green image attached.",
      },
      {
        q: "What should I post this week?",
        a: "The positioning post — 'I'm not an accessibility guy who works with hotels…' It's the strongest hook in the queue, it reframes you before the summit content starts, and everything else in the queue builds on top of it.",
      },
      {
        q: "What's actually working on my channels?",
        a: "Long-form written LinkedIn. 321 newsletter subscribers, and your best engagement came from written posts with the B&W images — not video. That's your case for handing the marketing team a structure built around what's already working.",
      },
    ],
  },
  "/preview/agents": {
    context: "Agents",
    turns: [
      {
        q: "Who's on duty in Phase 1?",
        a: "Five of us: I'm the front door, the Scribe captures every call, the Keeper watches the relationships, the Analyst builds the summit out of your conversations, and the Chief of Staff assembles your Monday brief. The Ghostwriter and Art Department join in Phase 2; the Scout after the summit.",
      },
      {
        q: "Will you post or send anything without me?",
        a: "Never. Everything ships through your yes — drafts wait for approval, follow-ups are suggestions, and nothing goes out under your name without you. We do the background; the foreground is yours.",
      },
    ],
  },
};

export const OPERATOR_FALLBACK =
  "Good question — in the live build I'd answer that from your real calls, contacts and archive. This preview is scripted, so I can't improvise yet. Phase 1 is where I get real. Try one of the suggested questions below.";

export function operatorGreeting(context: string): string {
  return `Reading ${context}. I'm the Operator — the front door to the rest of the team. Ask me about anything on this page.`;
}
