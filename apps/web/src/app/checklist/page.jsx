import { useEffect, useMemo, useState } from "react";
import { motion } from "motion/react";
import AppShell from "@/components/AppShell";
import { courseTitle, defaultChecklistItems } from "@/data/courseContent";

const STORAGE_KEY = "ai-tutoring-business-course-checklist-v1";

function loadChecklist() {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return null;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) {
      return null;
    }
    return parsed;
  } catch (e) {
    console.error(e);
    return null;
  }
}

function saveChecklist(items) {
  if (typeof window === "undefined") {
    return;
  }
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  } catch (e) {
    console.error(e);
  }
}

export default function ChecklistPage() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/modules", label: "Modules" },
    { href: "/templates", label: "Templates" },
    { href: "/checklist", label: "Checklist" },
  ];

  const initial = useMemo(() => {
    return defaultChecklistItems.map((i) => ({ ...i, done: false }));
  }, []);

  const [items, setItems] = useState(initial);

  useEffect(() => {
    const saved = loadChecklist();
    if (saved && saved.length) {
      setItems(saved);
    }
  }, []);

  useEffect(() => {
    saveChecklist(items);
  }, [items]);

  const completedCount = items.filter((i) => i.done).length;
  const totalCount = items.length;
  const progressText = `${completedCount} / ${totalCount} completed`;

  const percent = totalCount ? (completedCount / totalCount) * 100 : 0;
  const percentText = `${Math.round(percent)}%`;

  return (
    <AppShell title={courseTitle} navItems={navItems}>
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur-xl md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
          <div className="relative">
            <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Checklist
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 md:text-base">
              Track milestones as you build the business. Pair this with the
              module playbooks for fastest execution.
            </p>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur-xl md:p-6">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <div className="text-sm font-semibold text-zinc-900">Progress</div>
              <div className="mt-2 text-sm text-zinc-700">{progressText}</div>
            </div>
            <div className="text-sm font-semibold text-zinc-900">{percentText}</div>
          </div>
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-zinc-200/70">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500"
              initial={false}
              animate={{ width: `${Math.round(percent)}%` }}
              transition={{ type: "spring", stiffness: 140, damping: 18 }}
            />
          </div>
        </div>

        <div className="grid gap-3">
          {items.map((item) => (
            <motion.label
              key={item.id}
              className="flex cursor-pointer items-start gap-3 rounded-[24px] border border-white/60 bg-white/55 p-4 shadow-md backdrop-blur-xl transition hover:bg-white/70"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.995 }}
            >
              <input
                type="checkbox"
                className="mt-1 h-4 w-4 accent-zinc-900"
                checked={!!item.done}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setItems((prev) =>
                    prev.map((p) =>
                      p.id === item.id ? { ...p, done: checked } : p,
                    ),
                  );
                }}
              />
              <div className="min-w-0">
                <div className="text-sm font-semibold text-zinc-900">
                  {item.label}
                </div>
                <div className="mt-2 text-xs text-zinc-600">
                  Tip: finish this, then jump back into the modules.
                </div>
              </div>
            </motion.label>
          ))}
        </div>

        <div className="flex flex-col gap-2 sm:flex-row">
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm backdrop-blur-xl transition hover:bg-white"
            onClick={() => setItems(initial)}
          >
            Reset checklist
          </button>
          <a
            href="/modules"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 ring-1 ring-white/10 transition hover:bg-zinc-900"
          >
            Continue learning
          </a>
        </div>
      </div>
    </AppShell>
  );
}
