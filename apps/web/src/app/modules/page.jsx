import { motion } from "motion/react";
import { ArrowRight, Award } from "lucide-react";
import AppShell from "@/components/AppShell";
import ModuleIcon from "@/components/ModuleIcon";
import { courseTitle, modules } from "@/data/courseContent";
import { useModuleProgress } from "@/hooks/useCourseProgress";

function ModuleProgressBar({ module }) {
  const p = useModuleProgress(module);
  return (
    <div>
      <div className="flex items-center justify-between text-xs font-semibold text-zinc-600">
        <span>
          Progress:{" "}
          <span className="text-zinc-950">
            {p.completed}/{p.total}
          </span>
        </span>
        <span className="text-zinc-900">{p.percent}%</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-zinc-200/70">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500"
          initial={false}
          animate={{ width: `${p.percent}%` }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        />
      </div>
    </div>
  );
}

export default function ModulesPage() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/modules", label: "Modules" },
    { href: "/templates", label: "Templates" },
    { href: "/checklist", label: "Checklist" },
  ];

  return (
    <AppShell title={courseTitle} navItems={navItems}>
      <div className="space-y-8">
        <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur-xl md:p-8">
          <div className="pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="relative">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-indigo-50/60 px-3 py-1 text-xs font-semibold text-indigo-950">
              <Award className="h-3.5 w-3.5" />
              Course dashboard
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
              Modules
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 md:text-base">
              Pick a module and work through lessons like playbooks: detailed steps, scripts, AI prompts, and a completion checklist at the end.
            </p>
          </div>
        </div>

        <div className="grid gap-4">
          {modules.map((m, idx) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.04 }}
              className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur-xl md:p-6"
              whileHover={{ y: -4 }}
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-violet-500/10 blur-3xl" />
              </div>

              <div className="relative flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
                    <ModuleIcon name={m.icon} className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                      Module {idx + 1}
                    </div>
                    <div className="mt-1 text-xl font-semibold tracking-tight text-zinc-950">
                      {m.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-zinc-700">
                      {m.summary}
                    </div>

                    <div className="mt-4 max-w-xl">
                      <ModuleProgressBar module={m} />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:flex-row lg:flex-col">
                  <a
                    href={`/modules/${m.id}`}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/15 ring-1 ring-white/10 transition hover:bg-zinc-900"
                  >
                    Open module
                    <ArrowRight className="h-4 w-4" />
                  </a>
                  <div className="text-center text-xs font-semibold text-zinc-500 lg:text-left">
                    {m.lessons.length} lessons
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AppShell>
  );
}
