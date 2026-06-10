import Link from "next/link";
import { PreviewNav } from "@/components/preview-nav";
import { Operator, OperatorLauncher } from "@/components/operator";

export default function PreviewLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-ink">
      {/* Sidebar */}
      <aside className="sticky top-0 hidden h-screen w-60 shrink-0 flex-col overflow-y-auto border-r border-line bg-surface/60 p-5 sm:flex">
        <div className="flex items-center gap-2.5 px-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-md bg-moss font-[family-name:var(--font-display)] text-sm font-bold text-ink">
            M
          </span>
          <div>
            <p className="font-[family-name:var(--font-display)] leading-none text-paper">
              Mike OS
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-widest text-ash uppercase">
              v0 · preview
            </p>
          </div>
        </div>
        <div className="mt-8">
          <OperatorLauncher variant="sidebar" />
        </div>
        <div className="mt-4">
          <PreviewNav />
        </div>
        <div className="mt-auto space-y-3">
          <div className="rounded-lg border border-moss/30 bg-moss-ink/60 p-4">
            <p className="font-mono text-[10px] tracking-widest text-moss uppercase">
              This is a preview
            </p>
            <p className="mt-2 text-xs leading-relaxed text-fog">
              Everything here is static, hand-seeded from our two calls. Phase
              1 wires it to your real calls, Drive and GHL.
            </p>
            <Link
              href="/#next"
              className="mt-3 inline-block font-mono text-xs text-moss hover:underline"
            >
              Make it live →
            </Link>
          </div>
          <Link
            href="/"
            className="block px-2 font-mono text-xs text-ash hover:text-fog"
          >
            ← Back to the audit
          </Link>
        </div>
      </aside>

      {/* Main */}
      <div className="flex min-w-0 flex-1 flex-col">
        <header className="sticky top-0 z-40 flex items-center justify-between border-b border-line bg-ink/85 px-5 py-3 backdrop-blur">
          <Link
            href="/"
            className="font-mono text-xs tracking-widest text-ash uppercase hover:text-fog sm:hidden"
          >
            ← Audit
          </Link>
          <span className="hidden font-mono text-xs tracking-widest text-ash uppercase sm:block">
            Week of June 8, 2026
          </span>
          <div className="flex items-center gap-2">
            <OperatorLauncher variant="topbar" />
            <span className="flex items-center gap-2 rounded-full border border-moss/40 bg-moss-ink px-3 py-1 font-mono text-[10px] tracking-widest text-moss uppercase">
              <span className="h-1.5 w-1.5 rounded-full bg-moss pulse-dot" />
              Preview · static data
            </span>
          </div>
        </header>
        <main className="mx-auto w-full max-w-4xl flex-1 px-5 py-8 sm:px-8">
          {children}
        </main>

        {/* Mobile nav */}
        <div className="sticky bottom-0 border-t border-line bg-surface p-3 sm:hidden">
          <PreviewNav />
        </div>
      </div>

      <Operator />
    </div>
  );
}
