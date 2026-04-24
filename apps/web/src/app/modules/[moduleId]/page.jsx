import { motion } from "motion/react";
import { ArrowLeft, ArrowRight, CheckCircle2, Circle } from "lucide-react";
import AppShell from "@/components/AppShell";
import ModuleIcon from "@/components/ModuleIcon";
import { courseTitle, modules } from "@/data/courseContent";
import {
  isLessonFinishedForProgress,
  subscribeCourseProgress,
  getCourseProgressSnapshotVersion,
} from "@/utils/courseProgress";
import { useSyncExternalStore } from "react";
import { useModuleProgress } from "@/hooks/useCourseProgress";

function findModule(moduleId) {
  return modules.find((m) => m.id === moduleId) || null;
}

function LessonDoneIcon({ moduleId, lessonId }) {
  const snap = useSyncExternalStore(
    subscribeCourseProgress,
    () =>
      `${getCourseProgressSnapshotVersion()}:${isLessonFinishedForProgress(moduleId, lessonId) ? "1" : "0"}`,
    () => "0:0",
  );
  const done = snap.endsWith(":1");
  return done ? (
    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-none text-emerald-600" />
  ) : (
    <Circle className="mt-0.5 h-5 w-5 flex-none text-zinc-300" />
  );
}

function ModuleHeaderProgress({ module }) {
  const p = useModuleProgress(module);
  return (
    <div className="mt-4 max-w-xl">
      <div className="flex items-center justify-between text-xs font-semibold text-zinc-600">
        <span>
          Module progress:{" "}
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

export default function ModuleDetailPage({ params }) {
  const moduleId = params?.moduleId;
  const moduleData = findModule(moduleId);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/modules", label: "Modules" },
    { href: "/templates", label: "Templates" },
    { href: "/checklist", label: "Checklist" },
  ];

  const title = moduleData ? moduleData.title : "Module not found";

  return (
    <AppShell title={courseTitle} navItems={navItems}>
      {moduleData ? (
        <div className="space-y-8">
          <div className="relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-lg shadow-indigo-500/10 backdrop-blur-xl md:p-8">
            <div className="pointer-events-none absolute -left-28 -top-28 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
            <div className="relative">
              <a
                href="/modules"
                className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-700 transition hover:text-zinc-950"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to modules
              </a>

              <div className="mt-5 flex flex-col gap-5 md:flex-row md:items-start md:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <div className="inline-flex h-14 w-14 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-indigo-600 to-violet-600 text-white shadow-lg shadow-indigo-500/25 ring-1 ring-white/20">
                    <ModuleIcon name={moduleData.icon} className="h-7 w-7" />
                  </div>
                  <div className="min-w-0">
                    <h1 className="text-3xl font-semibold tracking-tight text-zinc-950 md:text-4xl">
                      {moduleData.title}
                    </h1>
                    <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-700 md:text-base">
                      {moduleData.summary}
                    </p>
                    <ModuleHeaderProgress module={moduleData} />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <a
                    href="/templates"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/60 px-4 py-2 text-sm font-semibold text-zinc-950 shadow-sm backdrop-blur-xl transition hover:bg-white"
                  >
                    Open templates
                  </a>
                  <a
                    href="/checklist"
                    className="inline-flex items-center justify-center rounded-2xl border border-white/70 bg-white/40 px-4 py-2 text-sm font-semibold text-zinc-900 shadow-sm backdrop-blur-xl transition hover:bg-white/70"
                  >
                    Update checklist
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            {moduleData.lessons.map((lesson, idx) => (
              <motion.a
                key={lesson.id}
                href={`/modules/${moduleData.id}/${lesson.id}`}
                className="group relative overflow-hidden rounded-[28px] border border-white/60 bg-white/55 p-5 shadow-lg shadow-indigo-500/10 backdrop-blur-xl transition will-change-transform md:p-6"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition duration-300 group-hover:opacity-100">
                  <div className="absolute -right-28 -top-28 h-72 w-72 rounded-full bg-fuchsia-500/10 blur-3xl" />
                </div>

                <div className="relative flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-start gap-3">
                    <LessonDoneIcon
                      moduleId={moduleData.id}
                      lessonId={lesson.id}
                    />
                    <div className="min-w-0">
                      <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                        Lesson {idx + 1}
                      </div>
                      <div className="mt-1 text-lg font-semibold tracking-tight text-zinc-950">
                        {lesson.title}
                      </div>
                      <div className="mt-2 text-sm leading-6 text-zinc-700">
                        {lesson.blurb}
                      </div>
                    </div>
                  </div>
                  <ArrowRight className="mt-1 h-5 w-5 flex-none text-zinc-400 transition group-hover:translate-x-0.5 group-hover:text-zinc-900" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      ) : (
        <div className="space-y-4 rounded-[28px] border border-white/60 bg-white/55 p-6 shadow-lg backdrop-blur-xl">
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-950">
            {title}
          </h1>
          <p className="text-sm leading-6 text-zinc-700">
            That module doesn’t exist. Go back to the modules list.
          </p>
          <a
            href="/modules"
            className="inline-flex items-center justify-center rounded-2xl bg-zinc-950 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-900"
          >
            Back to modules
          </a>
        </div>
      )}
    </AppShell>
  );
}
