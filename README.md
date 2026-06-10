# Mike OS — Demo & Audit

A working preview of Phase 1 of the Mike OS system, built by [Ian McDonald / Disruptiv Solutions](mailto:info@disruptiv.solutions) as part of an AI & automation audit for Mike Clapper, Inclusioneer Lab.

Live: [mike-os-ten.vercel.app](https://mike-os-ten.vercel.app)

---

## What this is

A Next.js app with two parts:

- **`/`** — The audit. Diagnosis of where Mike's knowledge, relationships, and content stand today, and what Phase 1 would fix.
- **`/preview`** — A static demo of what Mike OS looks like as a live operating system: Today dashboard, Summit tracker, Relationships board, Content queue, and an AI Operator chat panel that's context-aware by page.

Everything in the preview is hand-seeded from two real calls (March 23 and June 5, 2026). The Operator chat is scripted. **This is not a live system** — it is a proof of concept built to show the design and interaction model before any real data is wired up.

---

## What Phase 1 would actually build

The demo shows the interface. Phase 1 builds the engine underneath it:

| Demo (this repo) | Phase 1 (live build) |
|---|---|
| Static attention items, hand-written | Chief of Staff agent reads every call, ranks by leverage, Monday delivery |
| Hardcoded relationships + drift alerts | The Keeper watches transcripts + time-since-touch, fires real alerts |
| Seeded summit themes and agenda skeleton | The Analyst extracts themes from each participant brainstorm call as it happens |
| Scripted Operator chat | Operator answers from real calls, contacts, and archive |
| Sample content hooks | Content feed surfaces actual hooks from transcripts |

**The real data sources Phase 1 connects:**
- Call recordings → auto-transcribed → ingested after every call
- Google Drive (docs, notes, summit planning)
- GHL content archive (voice corpus for the content engine)
- ChatGPT memory export (founding context layer)

---

## Tech stack

- **Framework:** Next.js 15 App Router + Turbopack
- **Language:** TypeScript (strict)
- **Styling:** Tailwind CSS v4 (`@import "tailwindcss"` — no `tailwind.config.js`)
- **Fonts:** Space Grotesk (display), Inter (body), JetBrains Mono (mono) via Google Fonts
- **Deployment:** Vercel (static, no backend)

All content lives in [`lib/seed.ts`](lib/seed.ts). All Operator scripts live in [`lib/operator.ts`](lib/operator.ts). Both are the only files you need to edit to change what the demo says.

---

## Running locally

```bash
npm install
npm run dev
```

Opens at `http://localhost:3000`.

---

## If you're building from here

The demo is yours. A few things to know before a developer quotes you:

1. **The hard part isn't the UI.** The UI is in `app/preview/` and `components/`. A developer can extend the pages in a day or two. The real engineering is the agent layer — transcript ingestion, relationship tracking, the Monday brief pipeline. That's what Phase 1 is.

2. **The Operator chat is fully scripted.** Wiring it to real data requires an AI backend, a data store for transcripts and contacts, and auth. That's not in this repo.

3. **There's no database, no auth, no API routes.** This is a static site. Everything live in Phase 1 requires a backend (Firebase or equivalent), an AI provider, and a transcript pipeline.

4. **`lib/seed.ts` is the source of truth for all content.** Every card, stat, relationship, and theme in the preview comes from that file. It's well-structured and easy to read — a good starting point for understanding the data model.

---

## Contact

Built by Ian McDonald — [info@disruptiv.solutions](mailto:info@disruptiv.solutions)
