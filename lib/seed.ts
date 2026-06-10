export const SUMMIT_DATE = "September 13–14, 2026 · Los Angeles";
export const DAYS_TO_SUMMIT = 95;

// TODO(ian): set the real Phase 1 price + duration before sending
export const OFFER = {
  phase: "Phase 1 — Summit & Relationship Intelligence",
  duration: "3–4 weeks",
  price: "$X,XXX",
  email: "info@disruptiv.solutions",
};

export const POSITIONING =
  "A hospitality strategist who sees the guest experience through the lens of accessibility.";

export type Asset = {
  name: string;
  stat: string;
  detail: string;
  phase1: string;
};

export const ASSETS: Asset[] = [
  {
    name: "LinkedIn newsletter",
    stat: "321 subscribers",
    detail:
      "Your strongest channel — the right people are subscribing. But LinkedIn owns the list; you only see profiles, not emails.",
    phase1: "Subscriber capture + migration plan",
  },
  {
    name: "Substack",
    stat: "29 subscribers",
    detail:
      "inclusioneerlab.com points here. This is where the email list should live — owned, exportable, sellable-to later.",
    phase1: "Becomes the owned-list home",
  },
  {
    name: "GHL content archive",
    stat: "~6 months of daily posts",
    detail:
      "Everything you've ever published, in one system. This is your voice corpus — the raw material for a content engine that sounds like you.",
    phase1: "Exported + indexed as your voice model",
  },
  {
    name: "Call recordings & transcripts",
    stat: "Already recording",
    detail:
      "Participant brainstorms, podcast episodes, strategy calls. Today they disappear after the call ends. They should become organizational intelligence.",
    phase1: "Auto-ingested after every call",
  },
  {
    name: "ChatGPT memory",
    stat: "2+ years of context",
    detail:
      "It knows you better than any platform you use. That memory is exportable — and becomes a founding asset of your second brain.",
    phase1: "Exported into the knowledge engine",
  },
  {
    name: "Visual identity",
    stat: "B&W + green",
    detail:
      "The black-and-white images with the green pop stopped people mid-scroll. Dormant since Skyla left — but the style is documented and reproducible.",
    phase1: "Rebuilt as a repeatable image system",
  },
];

export type Phase = {
  label: string;
  window: string;
  title: string;
  status: "next" | "later" | "anchor";
  points: string[];
};

export const PHASES: Phase[] = [
  {
    label: "PHASE 1",
    window: "Now → mid-July",
    title: "Summit & Relationship Intelligence",
    status: "next",
    points: [
      "Every participant call, podcast and strategy conversation auto-captured and distilled",
      "One Monday dashboard: what deserves your attention this week",
      "Relationship tracking — who needs follow-up, who's drifting, what was committed",
      "Summit themes and session structure assembled from the conversations themselves",
    ],
  },
  {
    label: "PHASE 2",
    window: "Mid-July → Summit",
    title: "Content Engine",
    status: "later",
    points: [
      "Voice model built from your GHL archive — drafts that sound like you, not a template",
      "The B&W + green image system, automated",
      "Transcript → LinkedIn post → Substack issue pipeline for the 90-day buildup",
      "You approve and publish. The system drafts.",
    ],
  },
  {
    label: "THE SUMMIT",
    window: "Sept 13–14 · LA",
    title: "Inclusioneer Summit",
    status: "anchor",
    points: [
      "10 participants, multi-camera shoot, day-and-a-half think tank",
      "Every session captured — fuel for the report, the clips, the speaking tour",
    ],
  },
  {
    label: "PHASE 3",
    window: "Post-summit",
    title: "Opportunity & Report Intelligence",
    status: "later",
    points: [
      "Industry report assembled from summit transcripts",
      "Speaking pipeline — agents finding stages that match your positioning",
      "Vendor network CRM for the general-contractor consulting model",
    ],
  },
];

export const CHECKLIST = [
  {
    item: "Google Drive — editor access",
    why: "Docs, notes and summit planning feed the knowledge engine",
  },
  {
    item: "GHL content export",
    why: "Six months of posts = the voice corpus for the content engine",
  },
  {
    item: "ChatGPT memory export",
    why: "Two years of context, carried over instead of rebuilt",
  },
  {
    item: "LinkedIn newsletter subscriber list",
    why: "The 321 — so we can start moving them to an owned list",
  },
  {
    item: "Keep recording every call",
    why: "Transcripts are the system's primary fuel. You're already doing this.",
  },
];

// ---------- PREVIEW SEED DATA (static — Phase 1 makes this live) ----------

export type AttentionItem = {
  title: string;
  detail: string;
  tag: string;
  urgency: "now" | "soon" | "watch";
};

export const ATTENTION: AttentionItem[] = [
  {
    title: "Schedule the remaining participant brainstorm calls",
    detail:
      "10 participants, 1:1 brainstorms over the next two weeks. Each call locks a session format — and becomes podcast + content raw material.",
    tag: "Summit",
    urgency: "now",
  },
  {
    title: "UK partner conversation — AI concierge platform",
    detail:
      "Decide: latch onto what he's built, or build your own. This decision shapes the incubator's product direction.",
    tag: "Partnership",
    urgency: "now",
  },
  {
    title: "Lock the summit session structure",
    detail:
      "Day 1: 2–3pm start, two hours. Day 2: 8am–4pm. Number of sessions, formats, and owners still open.",
    tag: "Summit",
    urgency: "soon",
  },
  {
    title: "Door-opener vendor — first vendor-network candidate",
    detail:
      "Redesigned interior/exterior openers, cost-effective, stylish. Exactly the kind of provider the general-contractor model is built on. Don't let this one cool off.",
    tag: "Opportunity",
    urgency: "soon",
  },
  {
    title: "Royal Caribbean — summer re-engage",
    detail:
      "Six months of on-and-off talks. They said 'let's talk this summer.' It is now summer.",
    tag: "Consulting",
    urgency: "watch",
  },
  {
    title: "Move the newsletter to an owned list",
    detail:
      "321 subscribers live on LinkedIn's servers. 'I'm moving my newsletter to Substack' is the honest, simple ask that gets their emails.",
    tag: "Audience",
    urgency: "watch",
  },
];

export type Relationship = {
  name: string;
  role: string;
  context: string;
  nextMove: string;
  status: "warming" | "drifting" | "committed" | "open-loop";
};

export const RELATIONSHIPS: Relationship[] = [
  {
    name: "Summit participants (10)",
    role: "Hotel owners · designers · architect · podcaster · insurance · ADA lawyer",
    context: "Confirmed for Sept 13–14. Brainstorm calls in progress.",
    nextMove: "1:1 calls → session formats locked by end of June",
    status: "committed",
  },
  {
    name: "UK co-founder candidate",
    role: "AI concierge platform",
    context: "Exploring co-founding the incubator + concierge collaboration.",
    nextMove: "Partner-or-build decision call",
    status: "warming",
  },
  {
    name: "Royal Caribbean",
    role: "Cruise line — consulting prospect",
    context: "Six months of talks. Kicked to 'this summer.'",
    nextMove: "Summer re-engage with summit as the new hook",
    status: "open-loop",
  },
  {
    name: "Door-opener company",
    role: "Accessibility vendor",
    context: "Talked last week. Redesigned openers — cheaper, better looking, interior + exterior.",
    nextMove: "Frame the vendor-network pitch",
    status: "warming",
  },
  {
    name: "Skyla",
    role: "Former content designer",
    context: "Created the B&W + green system that worked. Left after having a baby — still connected via the team.",
    nextMove: "Document her system so the engine can reproduce it",
    status: "open-loop",
  },
  {
    name: "Marketing team",
    role: "Content execution",
    context: "Friction on direction — video-first push vs. what's actually working (long-form LinkedIn).",
    nextMove: "Hand them a content structure instead of waiting for one",
    status: "drifting",
  },
];

export type Theme = {
  title: string;
  source: string;
  becomes: string;
};

export const THEMES: Theme[] = [
  {
    title: "Direct bookings as the accessibility ROI story",
    source:
      "Disabled travelers book direct at 72% vs 35% — loyalty hotels are paying 20–25% OTA commission to lose",
    becomes: "Summit keynote thread + the report's central argument",
  },
  {
    title: "The $100B market nobody is claiming",
    source: "Accessibility as untapped revenue, not compliance cost",
    becomes: "Opening session framing · recurring content pillar",
  },
  {
    title: "How not to get sued",
    source: "ADA lawyer + insurance/risk participant overlap",
    becomes: "Joint technical session — legal + risk mitigation",
  },
  {
    title: "Design charrettes",
    source: "Two interior designers + architect in the room",
    becomes: "Hands-on session: 'what would this room look like?'",
  },
  {
    title: "General contractor for accessibility",
    source:
      "Vendors, trainers, consultants exist as one-offs — nobody bundles them under one umbrella",
    becomes: "Mike's consulting positioning + vendor network pitch",
  },
];

export type ContentIdea = {
  hook: string;
  format: string;
  channel: string;
  source: string;
};

export const CONTENT_QUEUE: ContentIdea[] = [
  {
    hook: "I'm not an accessibility guy who works with hotels. I'm a hospitality guy who sees the guest experience through the lens of accessibility.",
    format: "Positioning post — B&W portrait + green",
    channel: "LinkedIn",
    source: "Jun 5 call",
  },
  {
    hook: "Hotels pay 25% commission to lose their most loyal guests. Disabled travelers book direct at 2x the rate — and almost nobody is building for them.",
    format: "Stat-led carousel",
    channel: "LinkedIn",
    source: "Mar 23 call",
  },
  {
    hook: "Why I'm spending 90 days building up to a room of 10 people instead of an audience of 10,000.",
    format: "Summit buildup — 'book launch' arc, part 1",
    channel: "LinkedIn + Substack",
    source: "Jun 5 call",
  },
  {
    hook: "Everyone wants the visionary keynote. The session my participants ask for? 'How not to get sued.'",
    format: "Contrarian teaser for the legal/risk session",
    channel: "LinkedIn",
    source: "Participant calls",
  },
  {
    hook: "What a $40 door opener taught me about the future of hotel design.",
    format: "Story post — vendor spotlight",
    channel: "LinkedIn + YouTube short",
    source: "Vendor call",
  },
];

export type Agent = {
  name: string;
  codename: string;
  job: string;
  watches: string;
  produces: string;
  cadence: string;
  phase: "Phase 1" | "Phase 2" | "Phase 3";
};

export const AGENTS: Agent[] = [
  {
    name: "The Scribe",
    codename: "call-ingest",
    job: "Turns every conversation into organizational intelligence",
    watches: "Every recorded call — participant brainstorms, podcast episodes, strategy conversations",
    produces: "Distilled summaries, commitments made, themes detected — routed to Summit, Relationships and Content",
    cadence: "After every call, automatically",
    phase: "Phase 1",
  },
  {
    name: "The Keeper",
    codename: "relationship-tracker",
    job: "Makes sure nobody falls off your map",
    watches: "Transcripts, follow-up commitments, time since last touch",
    produces: "Status changes, drift alerts, 'you said you'd intro these two people' reminders",
    cadence: "Continuous",
    phase: "Phase 1",
  },
  {
    name: "The Analyst",
    codename: "summit-intel",
    job: "Builds the summit out of the conversations themselves",
    watches: "The 10 participant brainstorm calls as they happen",
    produces: "Emerging themes, session formats, agenda recommendations, the report outline",
    cadence: "After each participant call",
    phase: "Phase 1",
  },
  {
    name: "The Chief of Staff",
    codename: "monday-brief",
    job: "Answers one question: what deserves Mike's attention this week?",
    watches: "Everything the other agents produce",
    produces: "The Today dashboard — leverage-ranked, not task-ranked",
    cadence: "Every Monday, 6:00am",
    phase: "Phase 1",
  },
  {
    name: "The Ghostwriter",
    codename: "content-drafter",
    job: "Kills the blank page",
    watches: "Call themes + your GHL archive (the voice model)",
    produces: "LinkedIn post and Substack drafts that sound like you — you approve, it never publishes alone",
    cadence: "3–5 drafts per week",
    phase: "Phase 2",
  },
  {
    name: "The Art Department",
    codename: "image-system",
    job: "Brings the B&W + green back",
    watches: "Every approved draft",
    produces: "On-brand images in the style that stopped people scrolling",
    cadence: "With every approved post",
    phase: "Phase 2",
  },
  {
    name: "The Scout",
    codename: "opportunity-scout",
    job: "Finds the stages and the vendors",
    watches: "Speaking opportunities matching your positioning · accessibility service providers for the GC network",
    produces: "Qualified opportunities with context, ready for outreach",
    cadence: "Weekly sweep",
    phase: "Phase 3",
  },
];

export type ActivityEntry = {
  time: string;
  agent: string;
  action: string;
};

export const ACTIVITY: ActivityEntry[] = [
  {
    time: "Mon 6:00a",
    agent: "Chief of Staff",
    action: "Assembled this dashboard — 6 open loops ranked by leverage, 2 flagged urgent",
  },
  {
    time: "Mon 6:00a",
    agent: "The Keeper",
    action: "Flagged Royal Caribbean: 'let's talk this summer' — it is now summer",
  },
  {
    time: "Sun 9:14p",
    agent: "The Scribe",
    action: "Distilled participant call #3 → 2 new themes, 1 commitment, 4 content hooks",
  },
  {
    time: "Sun 9:14p",
    agent: "The Analyst",
    action: "Updated session map: 'how not to get sued' now has a co-owner (lawyer + insurance)",
  },
  {
    time: "Fri 4:30p",
    agent: "The Keeper",
    action: "Drift alert: door-opener vendor — 9 days since last touch, no next step on file",
  },
  {
    time: "Thu 7:00a",
    agent: "The Ghostwriter",
    action: "Queued 5 drafts from this week's calls — awaiting your approval",
  },
];

export const CHANNEL_STATS = [
  { channel: "LinkedIn newsletter", value: "321", note: "primary — long-form works" },
  { channel: "Substack", value: "29", note: "owned list — growth target" },
  { channel: "YouTube", value: "Long-form", note: "secondary — summit footage engine" },
  { channel: "Podcast", value: "Active", note: "participant episodes pre-summit" },
];
