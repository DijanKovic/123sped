import { motion } from "motion/react";
import {
  ArrowRight,
  BadgeCheck,
  BookOpenCheck,
  Library,
  Sparkles,
} from "lucide-react";
import AppShell from "@/components/AppShell";
import ModuleIcon from "@/components/ModuleIcon";
import {
  courseTitle,
  courseSubtitle,
  modules,
} from "@/data/courseContent";
import { containerVariants, itemVariants } from "@/utils/animations";
import { useCourseProgress, useModuleProgress } from "@/hooks/useCourseProgress";

function ModuleCompleteBadge({ module }) {
  const p = useModuleProgress(module);
  if (p.total === 0 || p.percent !== 100) return null;
  return (
    <div className="absolute right-4 top-4 rounded-full border border-emerald-200/70 bg-emerald-50/70 px-3 py-1 text-xs font-semibold text-emerald-950 shadow-sm backdrop-blur-xl">
      Module complete
    </div>
  );
}

export default function HomePage() {
  const navItems = [
    { href: "/", label: "Home" },
    { href: "/modules", label: "Modules" },
    { href: "/templates", label: "Templates" },
    { href: "/checklist", label: "Checklist" },
  ];

  const progress = useCourseProgress(modules);

  return (
    <AppShell title={courseTitle} navItems={navItems}>
      <motion.div
        className="space-y-10 md:space-y-12"
        variants={containerVariants}
        initial="initial"
        animate="animate"
      >
        <motion.section
          variants={itemVariants}
          className="relative overflow-hidden rounded-[32px] border border-white/60 bg-white/55 p-6 shadow-xl shadow-indigo-500/10 backdrop-blur-xl md:p-10"
        >
          <div className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-indigo-400/25 via-violet-400/20 to-fuchsia-400/15 blur-3xl" />
          <div className="pointer-events-none absolute -left-28 bottom-[-140px] h-72 w-72 rounded-full bg-gradient-to-br from-amber-200/35 via-white/0 to-white/0 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/70 bg-indigo-50/60 px-3 py-1 text-xs font-semibold text-indigo-950 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5" />
                Premium course experience
              </div>

              <motion.h1
                className="mt-5 text-4xl font-semibold tracking-tight text-zinc-950 md:text-5xl"
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
              >
                Build a real library tutoring business—
                <span className="bg-gradient-to-r from-indigo-700 via-violet-700 to-fuchsia-700 bg-clip-text text-transparent">
                  {" "}
                  with AI as your prep engine.
                </span>
              </motion.h1>

              <motion.p
                className="mt-5 max-w-2xl text-base leading-7 text-zinc-700 md:text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.05 }}
              >
                {courseSubtitle}
              </motion.p>

              <motion.div
                className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.1 }}
              >
                <motion.a
                  href="/modules"
                  className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-950 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-indigo-500/20 ring-1 ring-white/10 transition hover:bg-zinc-900"
                  whileHover={{ y: -2, scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Start learning
                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </motion.a>
                <motion.a
                  href="/modules/getting-started"
                  className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/60 px-5 py-3 text-sm font-semibold text-zinc-950 shadow-sm backdrop-blur-xl transition hover:bg-white"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  Enter course
                </motion.a>
              </motion.div>

              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {[
                  {
                    title: "Structured playbooks",
                    desc: "Lessons read like execution guides—not vague notes.",
                    icon: BookOpenCheck,
                  },
                  {
                    title: "Library-native system",
                    desc: "Scripts, trials, and conversion flows built for public spaces.",
                    icon: Library,
                  },
                  {
                    title: "AI with guardrails",
                    desc: "Prompts + verification habits that keep quality high.",
                    icon: Sparkles,
                  },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl border border-white/60 bg-white/55 p-4 shadow-sm backdrop-blur-xl"
                  >
                    <x.icon className="h-5 w-5 text-indigo-700" />
                    <div className="mt-3 text-sm font-semibold text-zinc-950">
                      {x.title}
                    </div>
                    <div className="mt-2 text-sm leading-6 text-zinc-700">
                      {x.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <motion.div
              className="relative rounded-[28px] border border-white/60 bg-gradient-to-br from-white/70 via-indigo-50/40 to-violet-50/35 p-6 shadow-xl backdrop-blur-xl"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.12 }}
            >
              <div className="flex items-start justify-between gap-3">
                <div>
                  <div className="text-sm font-semibold text-zinc-900">
                    Your progress
                  </div>
                  <div className="mt-1 text-sm text-zinc-700">
                    {progress.completed}/{progress.total} lessons complete
                  </div>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-emerald-50/60 px-3 py-1 text-xs font-semibold text-emerald-950">
                  <BadgeCheck className="h-4 w-4" />
                  {progress.percent}%
                </div>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-zinc-200/70">
                <motion.div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500"
                  initial={false}
                  animate={{ width: `${progress.percent}%` }}
                  transition={{ type: "spring", stiffness: 120, damping: 18 }}
                />
              </div>

              <div className="mt-6 space-y-3 text-sm text-zinc-700">
                <div className="rounded-2xl border border-white/60 bg-white/55 p-4 backdrop-blur-xl">
                  <div className="text-sm font-semibold text-zinc-900">
                    Next recommended move
                  </div>
                  <div className="mt-2 leading-6">
                    Open{" "}
                    <a className="font-semibold text-indigo-800 underline-offset-4 hover:underline" href="/modules/getting-started">
                      Module 1
                    </a>{" "}
                    and complete the first playbook lesson end‑to‑end (including the checklist).
                  </div>
                </div>
                <div className="rounded-2xl border border-white/60 bg-white/45 p-4 text-sm leading-6 backdrop-blur-xl">
                  Want fast execution tools? Grab downloads in{" "}
                  <a className="font-semibold text-indigo-800 underline-offset-4 hover:underline" href="/templates">
                    Templates
                  </a>{" "}
                  and track milestones in{" "}
                  <a className="font-semibold text-indigo-800 underline-offset-4 hover:underline" href="/checklist">
                    Checklist
                  </a>
                  .
                </div>
              </div>
            </motion.div>
          </div>
        </motion.section>

        <motion.section variants={itemVariants} className="space-y-4">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold tracking-tight text-zinc-950">
                Module previews
              </h2>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-700">
                Each module is organized as premium playbook lessons—scripts, AI prompts, mistakes to avoid, and checklists you can actually execute.
              </p>
            </div>
            <a
              href="/modules"
              className="hidden text-sm font-semibold text-indigo-800 underline-offset-4 hover:underline sm:inline"
            >
              View all
            </a>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {modules.map((m, idx) => (
              <motion.a
                key={m.id}
                href={`/modules/${m.id}`}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur-xl transition will-change-transform"
                variants={itemVariants}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 260, damping: 22 }}
              >
                <ModuleCompleteBadge module={m} />
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
                  <div className="absolute -bottom-28 -left-28 h-64 w-64 rounded-full bg-violet-500/10 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-md shadow-indigo-500/25 ring-1 ring-white/20">
                      <ModuleIcon name={m.icon} className="h-6 w-6" />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Module {idx + 1}
                      </div>
                      <div className="mt-1 text-base font-semibold text-zinc-950">
                        {m.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-zinc-700">
                        {m.summary}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 flex-none text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-900" />
                </div>

                <div className="relative mt-4 flex flex-wrap gap-2">
                  {m.lessons.slice(0, 3).map((lesson) => (
                    <span
                      key={lesson.id}
                      className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/60 px-3 py-1 text-xs font-semibold text-zinc-700 backdrop-blur-sm"
                    >
                      {lesson.title}
                    </span>
                  ))}
                  {m.lessons.length > 3 ? (
                    <span className="inline-flex items-center rounded-full border border-zinc-200/70 bg-white/40 px-3 py-1 text-xs font-semibold text-zinc-600 backdrop-blur-sm">
                      +{m.lessons.length - 3} more
                    </span>
                  ) : null}
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>
      </motion.div>
    </AppShell>
  );
}
