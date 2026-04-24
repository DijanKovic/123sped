import { useCallback, useMemo, useState } from "react";
import { motion } from "motion/react";
import AppShell from "@/components/AppShell";
import { courseTitle, templates } from "@/data/courseContent";

function downloadTextFile(filename, content) {
  if (typeof window === "undefined") {
    return;
  }
  if (!window?.document) {
    return;
  }

  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);

  const a = window.document.createElement("a");
  a.href = url;
  a.download = filename;
  a.click();

  setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 0);
}

export default function TemplatesPage() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/modules", label: "Modules" },
    { href: "/templates", label: "Templates" },
    { href: "/checklist", label: "Checklist" },
  ];

  const [activeId, setActiveId] = useState(templates[0]?.id || null);

  const activeTemplate = useMemo(() => {
    return templates.find((t) => t.id === activeId) || null;
  }, [activeId]);

  const onDownload = useCallback(() => {
    if (typeof window === "undefined") {
      return;
    }
    if (!activeTemplate) {
      return;
    }
    downloadTextFile(activeTemplate.filename, activeTemplate.content);
  }, [activeTemplate]);

  return (
    <AppShell title={courseTitle} navItems={navItems}>
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur-xl md:p-8">
          <div className="pointer-events-none absolute -left-28 -top-28 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Templates
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 md:text-base">
              Downloadable copy/paste assets you’ll reuse weekly: scripts, AI
              prompts, and printable shells.
            </p>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-[280px_1fr]">
          <div className="rounded-[28px] border border-white/60 bg-white/55 p-2 shadow-lg shadow-indigo-500/10 backdrop-blur-xl">
            {templates.map((t) => {
              const isActive = t.id === activeId;
              const activeClass = isActive
                ? "bg-zinc-950 text-white shadow-md"
                : "text-zinc-700 hover:bg-white/70";
              return (
                <button
                  key={t.id}
                  type="button"
                  className={`w-full rounded-2xl px-3 py-2 text-left text-sm font-semibold transition-colors duration-150 ${activeClass}`}
                  onClick={() => setActiveId(t.id)}
                >
                  {t.title}
                </button>
              );
            })}
          </div>

          <div className="rounded-[28px] border border-white/60 bg-white/55 shadow-lg shadow-indigo-500/10 backdrop-blur-xl">
            {activeTemplate ? (
              <div className="p-5 md:p-7">
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="text-lg font-semibold text-zinc-950">
                      {activeTemplate.title}
                    </div>
                    <div className="mt-1 text-xs font-semibold text-zinc-500">
                      {activeTemplate.filename}
                    </div>
                  </div>
                  <motion.button
                    type="button"
                    onClick={onDownload}
                    className="inline-flex items-center justify-center rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 ring-1 ring-white/10 transition hover:bg-zinc-900"
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    Download
                  </motion.button>
                </div>

                <div className="mt-5">
                  <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                    Preview
                  </div>
                  <pre className="mt-2 max-h-[460px] overflow-auto rounded-2xl border border-white/60 bg-zinc-950/90 p-4 text-xs leading-5 text-zinc-50 shadow-inner">
                    {activeTemplate.content}
                  </pre>
                </div>
              </div>
            ) : (
              <div className="p-6 text-sm text-zinc-700">No template selected.</div>
            )}
          </div>
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/45 p-5 text-sm leading-6 text-zinc-700 shadow-md backdrop-blur-xl">
          <div className="text-sm font-semibold text-zinc-950">Tip</div>
          <div className="mt-2">
            Keep a “personalized” folder on your computer where you save edited
            versions per student—templates are the starting point, not the
            finish line.
          </div>
        </div>
      </div>
    </AppShell>
  );
}
