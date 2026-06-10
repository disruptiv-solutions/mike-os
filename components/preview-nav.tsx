"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/preview", label: "Today" },
  { href: "/preview/summit", label: "Summit" },
  { href: "/preview/relationships", label: "Relationships" },
  { href: "/preview/content", label: "Content" },
  { href: "/preview/agents", label: "Agents" },
];

export function PreviewNav() {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1">
      {LINKS.map((l) => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={`flex items-center gap-3 rounded-md px-3 py-2 font-mono text-sm tracking-wide transition ${
              active
                ? "bg-moss-ink text-moss"
                : "text-fog hover:bg-elevated hover:text-paper"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                active ? "bg-moss" : "bg-line-bright"
              }`}
            />
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
