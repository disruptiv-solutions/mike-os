"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import {
  OPERATOR_FALLBACK,
  OPERATOR_SCRIPT,
  operatorGreeting,
} from "@/lib/operator";

type Msg = { role: "user" | "operator"; text: string };

const OPEN_EVENT = "mikeos:operator";

export function OperatorLauncher({
  variant,
}: {
  variant: "sidebar" | "topbar";
}) {
  const open = () => window.dispatchEvent(new Event(OPEN_EVENT));
  if (variant === "topbar") {
    return (
      <button
        onClick={open}
        className="flex items-center gap-2 rounded-full border border-line-bright px-3 py-1 font-mono text-[10px] tracking-widest text-fog uppercase transition hover:border-moss/50 hover:text-moss"
      >
        ✦ Operator
      </button>
    );
  }
  return (
    <button
      onClick={open}
      className="flex w-full items-center gap-3 rounded-md border border-moss/40 bg-moss-ink px-3 py-2.5 text-left font-mono text-sm tracking-wide text-moss transition hover:bg-moss/10"
    >
      <span className="flex h-5 w-5 items-center justify-center rounded bg-moss text-[11px] font-bold text-ink">
        ✦
      </span>
      Ask the Operator
    </button>
  );
}

export function Operator() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [msgs, setMsgs] = useState<Msg[]>([]);
  const [asked, setAsked] = useState<string[]>([]);
  const [thinking, setThinking] = useState(false);
  const [input, setInput] = useState("");
  const bottomRef = useRef<HTMLDivElement>(null);
  const prevPath = useRef(pathname);

  const script = OPERATOR_SCRIPT[pathname] ?? OPERATOR_SCRIPT["/preview"];

  useEffect(() => {
    const handler = () => {
      setOpen(true);
      setMsgs((m) =>
        m.length === 0
          ? [{ role: "operator", text: operatorGreeting(script.context) }]
          : m,
      );
    };
    window.addEventListener(OPEN_EVENT, handler);
    return () => window.removeEventListener(OPEN_EVENT, handler);
  }, [script.context]);

  useEffect(() => {
    if (open && prevPath.current !== pathname) {
      setMsgs((m) => [
        ...m,
        {
          role: "operator",
          text: `Context switched — now reading ${script.context}. New suggestions below.`,
        },
      ]);
    }
    prevPath.current = pathname;
  }, [pathname, open, script.context]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs, thinking]);

  const reply = (text: string) => {
    setThinking(true);
    setTimeout(
      () => {
        setThinking(false);
        setMsgs((m) => [...m, { role: "operator", text }]);
      },
      900 + Math.random() * 700,
    );
  };

  const ask = (q: string, a: string) => {
    if (thinking) return;
    setMsgs((m) => [...m, { role: "user", text: q }]);
    setAsked((s) => [...s, q]);
    reply(a);
  };

  const askFree = () => {
    const q = input.trim();
    if (!q || thinking) return;
    setInput("");
    setMsgs((m) => [...m, { role: "user", text: q }]);
    reply(OPERATOR_FALLBACK);
  };

  const suggestions = script.turns.filter((t) => !asked.includes(t.q));

  // Shared panel content — rendered in both mobile overlay and desktop sidebar
  const panelInner = (
    <>
      {/* Header */}
      <div className="flex shrink-0 items-center justify-between border-b border-line px-4 py-3">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-moss text-xs font-bold text-ink">
            ✦
          </span>
          <div>
            <p className="font-[family-name:var(--font-display)] text-sm leading-none text-paper">
              The Operator
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-widest text-ash uppercase">
              Reading: {script.context}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="rounded-full border border-moss/40 bg-moss-ink px-2 py-0.5 font-mono text-[9px] tracking-widest text-moss uppercase">
            Preview
          </span>
          <button
            onClick={() => setOpen(false)}
            aria-label="Close"
            className="text-fog transition hover:text-paper"
          >
            ✕
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 space-y-4 overflow-y-auto px-4 py-5">
        {msgs.map((m, i) =>
          m.role === "operator" ? (
            <div key={i} className="flex gap-3">
              <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss" />
              <p className="max-w-[85%] text-sm leading-relaxed whitespace-pre-line text-fog">
                {m.text}
              </p>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <p className="max-w-[85%] rounded-lg bg-elevated px-3.5 py-2 text-sm leading-relaxed text-paper">
                {m.text}
              </p>
            </div>
          ),
        )}
        {thinking && (
          <div className="flex gap-3">
            <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-moss pulse-dot" />
            <p className="font-mono text-xs tracking-widest text-ash uppercase">
              working…
            </p>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Suggestions */}
      {suggestions.length > 0 && (
        <div className="shrink-0 space-y-2 border-t border-line px-4 py-3">
          <p className="font-mono text-[10px] tracking-widest text-ash uppercase">
            Try asking
          </p>
          {suggestions.map((t) => (
            <button
              key={t.q}
              onClick={() => ask(t.q, t.a)}
              className="block w-full rounded-md border border-line bg-elevated/60 px-3 py-2 text-left text-sm text-fog transition hover:border-moss/40 hover:text-paper"
            >
              {t.q}
            </button>
          ))}
        </div>
      )}

      {/* Input */}
      <div className="shrink-0 border-t border-line p-3">
        <div className="flex gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && askFree()}
            placeholder="Ask anything…"
            className="min-w-0 flex-1 rounded-md border border-line bg-ink px-3 py-2 text-sm text-paper placeholder-ash outline-none focus:border-moss/50"
          />
          <button
            onClick={askFree}
            className="rounded-md bg-moss px-4 py-2 font-mono text-sm font-medium text-ink transition hover:bg-moss-dim"
          >
            →
          </button>
        </div>
        <p className="mt-2 font-mono text-[9px] tracking-widest text-ash uppercase">
          Preview — scripted answers · Phase 1 wires me to your real data
        </p>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile: full-screen fixed overlay */}
      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-ink/60 sm:hidden"
            onClick={() => setOpen(false)}
          />
          <div className="fixed inset-y-0 right-0 z-50 flex w-full flex-col border-l border-line bg-surface shadow-[0_0_60px_rgba(0,0,0,0.6)] sm:hidden">
            {panelInner}
          </div>
        </>
      )}

      {/* Desktop: in-flow sticky right sidebar — pushes content, never overlays */}
      <aside
        className={`sticky top-0 hidden h-screen shrink-0 flex-col overflow-hidden border-l border-line bg-surface transition-[width] duration-300 ease-in-out sm:flex ${
          open ? "w-[380px]" : "w-0 border-l-0"
        }`}
      >
        {/* Inner div holds fixed width so content doesn't squish during transition */}
        <div className="flex h-full w-[380px] flex-col">
          {panelInner}
        </div>
      </aside>
    </>
  );
}
