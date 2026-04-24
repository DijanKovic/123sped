import { useCallback, useEffect, useMemo, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Circle, Sparkles } from "lucide-react";
import {
  setLessonComplete,
  isLessonComplete,
  invalidateCourseProgress,
  subscribeCourseProgress,
  getCourseProgressSnapshotVersion,
  LESSON_CHECKLIST_STORAGE_PREFIX,
} from "@/utils/courseProgress";

function loadChecklistState(key) {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(key);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed;
  } catch {
    return {};
  }
}

function saveChecklistState(key, obj) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(key, JSON.stringify(obj));
  } catch {
    /* ignore */
  }
}

function Callout({ variant, title, children }) {
  const styles = {
    tip: "border-indigo-200/70 bg-indigo-50/60 text-indigo-950",
    example: "border-violet-200/70 bg-violet-50/55 text-violet-950",
    warn: "border-amber-200/80 bg-amber-50/65 text-amber-950",
  }[variant];

  return (
    <div
      className={`rounded-2xl border p-4 shadow-sm backdrop-blur-sm ${styles}`}
    >
      <div className="text-xs font-semibold uppercase tracking-wide opacity-80">
        {title}
      </div>
      <div className="mt-2 text-sm leading-6">{children}</div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div className="my-10 flex items-center gap-3">
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
      <div className="h-1 w-1 rounded-full bg-zinc-300" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-zinc-200 to-transparent" />
    </div>
  );
}

export default function LessonReader({ moduleId, lessonId, modTitle, playbook }) {
  const [reading, setReading] = useState(0);
  const [activeId, setActiveId] = useState("overview");
  const checklistKey = `${LESSON_CHECKLIST_STORAGE_PREFIX}${moduleId}:${lessonId}`;
  const [checks, setChecks] = useState({});

  const progressVersion = useSyncExternalStore(
    subscribeCourseProgress,
    getCourseProgressSnapshotVersion,
    () => 0,
  );

  useEffect(() => {
    setChecks(loadChecklistState(checklistKey));
  }, [moduleId, lessonId, checklistKey]);

  const explicitComplete = useMemo(
    () => isLessonComplete(moduleId, lessonId),
    [moduleId, lessonId, progressVersion],
  );

  const checklistAllDone = useMemo(() => {
    const items = playbook.checklist || [];
    if (!items.length) return false;
    return items.every((_, idx) => !!checks[String(idx)]);
  }, [checks, playbook.checklist]);

  const lessonFinished = explicitComplete || checklistAllDone;

  const toc = useMemo(
    () => [
      { id: "overview", label: "Overview" },
      { id: "steps", label: "Step-by-step" },
      { id: "scripts", label: "Scripts & examples" },
      { id: "ai", label: "AI usage" },
      { id: "mistakes", label: "Mistakes to avoid" },
      { id: "tips", label: "Pro tips" },
      { id: "checklist", label: "Action checklist" },
    ],
    [],
  );

  const onScroll = useCallback(() => {
    const doc = document.documentElement;
    const height = doc.scrollHeight - doc.clientHeight;
    const scrolled = height > 0 ? doc.scrollTop / height : 0;
    setReading(Math.min(Math.max(scrolled, 0), 1));

    const sections = toc
      .map((t) => document.getElementById(t.id))
      .filter(Boolean);
    let current = toc[0].id;
    for (const s of sections) {
      const top = s.getBoundingClientRect().top;
      if (top < 140) current = s.id;
    }
    setActiveId(current);
  }, [toc]);

  useEffect(() => {
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [onScroll]);

  const toggleCheck = (idx, total) => {
    setChecks((prev) => {
      const key = String(idx);
      const next = { ...prev, [key]: !prev[key] };
      saveChecklistState(checklistKey, next);
      queueMicrotask(() => invalidateCourseProgress());
      return next;
    });
    void total;
  };

  const checklistDone = useMemo(() => {
    const items = playbook.checklist || [];
    let done = 0;
    items.forEach((_, idx) => {
      if (checks[String(idx)]) done += 1;
    });
    return { done, total: items.length };
  }, [checks, playbook.checklist]);

  const markLessonDone = () => {
    setLessonComplete(moduleId, lessonId, !isLessonComplete(moduleId, lessonId));
  };

  return (
    <div className="relative">
      <div className="pointer-events-none fixed left-0 right-0 top-0 z-40 h-1 bg-zinc-200/60">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-500 via-violet-500 to-fuchsia-500"
          style={{ width: `${Math.round(reading * 100)}%` }}
        />
      </div>

      <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="hidden lg:block">
          <div className="sticky top-24 space-y-4">
            <div className="rounded-2xl border border-white/60 bg-white/55 p-4 shadow-lg shadow-indigo-500/5 backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                On this page
              </div>
              <nav className="mt-3 space-y-1">
                {toc.map((t) => {
                  const active = activeId === t.id;
                  return (
                    <a
                      key={t.id}
                      href={`#${t.id}`}
                      className={`block rounded-xl px-3 py-2 text-sm font-medium transition-colors ${
                        active
                          ? "bg-zinc-900 text-white shadow-sm"
                          : "text-zinc-700 hover:bg-white/70"
                      }`}
                    >
                      {t.label}
                    </a>
                  );
                })}
              </nav>
            </div>

            <div className="rounded-2xl border border-white/60 bg-white/45 p-4 shadow-md backdrop-blur-xl">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Lesson progress
              </div>
              <div className="mt-2 text-sm text-zinc-700">
                Checklist:{" "}
                <span className="font-semibold text-zinc-900">
                  {checklistDone.done}/{checklistDone.total}
                </span>
              </div>
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-zinc-200/80">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 transition-all duration-300"
                  style={{
                    width: `${
                      checklistDone.total
                        ? Math.round(
                            (checklistDone.done / checklistDone.total) * 100,
                          )
                        : 0
                    }%`,
                  }}
                />
              </div>
              <button
                type="button"
                onClick={markLessonDone}
                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-zinc-900 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-zinc-800"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  {lessonFinished ? (
                    <motion.span
                      key="on"
                      initial={{ scale: 0.6, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      exit={{ scale: 0.6, opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Check className="h-4 w-4" />
                      Completed
                    </motion.span>
                  ) : (
                    <motion.span
                      key="off"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="inline-flex items-center gap-2"
                    >
                      <Circle className="h-4 w-4" />
                      Mark lesson complete
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
              <div className="mt-2 text-xs text-zinc-500">
                Completing lessons unlocks module badges on your dashboard.
              </div>
            </div>
          </div>
        </aside>

        <article className="relative rounded-3xl border border-white/60 bg-white/70 p-5 shadow-xl shadow-indigo-500/10 backdrop-blur-xl md:p-8">
          <header className="space-y-3">
            <div className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-indigo-50/50 px-3 py-1 text-xs font-semibold text-indigo-900 backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5" />
              Playbook lesson
            </div>
            <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
              {modTitle}
            </div>
          </header>

          <div id="overview" className="scroll-mt-28 space-y-6 pt-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Overview
            </h2>
            <Callout variant="tip" title="What you’ll learn">
              <ul className="list-disc space-y-2 pl-5">
                {(playbook.overview || []).map((p, idx) => (
                  <li key={idx}>{p}</li>
                ))}
              </ul>
            </Callout>

            <div className="grid gap-4 md:grid-cols-2">
              <Callout variant="example" title="Why it matters">
                <ul className="list-disc space-y-2 pl-5">
                  {(playbook.whyItMatters || []).map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </Callout>
              <Callout variant="tip" title="Expected outcome">
                <ul className="list-disc space-y-2 pl-5">
                  {(playbook.outcome || []).map((p, idx) => (
                    <li key={idx}>{p}</li>
                  ))}
                </ul>
              </Callout>
            </div>
          </div>

          <SectionDivider />

          <section id="steps" className="scroll-mt-28 space-y-5">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Step-by-step breakdown
            </h2>
            <div className="space-y-4">
              {(playbook.steps || []).map((s, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 8 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.35 }}
                  className="rounded-2xl border border-zinc-200/70 bg-white/70 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="flex items-start gap-3">
                    <div className="mt-0.5 flex h-7 w-7 flex-none items-center justify-center rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 text-xs font-bold text-white shadow-sm">
                      {idx + 1}
                    </div>
                    <div className="min-w-0">
                      <div className="text-sm font-semibold text-zinc-900">
                        {s.title}
                      </div>
                      <p className="mt-2 text-sm leading-6 text-zinc-700">
                        {s.body}
                      </p>
                      {s.bullets?.length ? (
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-zinc-700">
                          {s.bullets.map((b, j) => (
                            <li key={j}>{b}</li>
                          ))}
                        </ul>
                      ) : null}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          <SectionDivider />

          <section id="scripts" className="scroll-mt-28 space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Scripts & examples
            </h2>
            <Callout variant="warn" title="Use scripts as training wheels">
              Say them aloud until they feel natural—then keep the structure and
              loosen the wording.
            </Callout>
            <div className="space-y-3">
              {(playbook.scripts || []).map((sc, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-zinc-200/70 bg-zinc-50/60 p-4 backdrop-blur-sm"
                >
                  <div className="text-sm font-semibold text-zinc-900">
                    {sc.title}
                  </div>
                  <div className="mt-3 space-y-2">
                    {sc.lines.map((line, j) => (
                      <div
                        key={j}
                        className="rounded-xl border border-zinc-200 bg-white/80 p-3 text-sm leading-6 text-zinc-800"
                      >
                        {line}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <SectionDivider />

          <section id="ai" className="scroll-mt-28 space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              AI usage (copy/paste prompts)
            </h2>
            <div className="space-y-3">
              {(playbook.aiUsage || []).map((a, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-indigo-200/60 bg-gradient-to-br from-white/80 via-indigo-50/40 to-violet-50/35 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-sm font-semibold text-zinc-900">
                    {a.title}
                  </div>
                  {a.body ? (
                    <p className="mt-2 text-sm leading-6 text-zinc-700">
                      {a.body}
                    </p>
                  ) : null}
                  {a.prompt ? (
                    <pre className="mt-3 whitespace-pre-wrap rounded-xl border border-zinc-200/70 bg-zinc-950/90 p-3 text-xs leading-5 text-zinc-50 shadow-inner">
                      {a.prompt}
                    </pre>
                  ) : null}
                </div>
              ))}
            </div>
          </section>

          <SectionDivider />

          <section id="mistakes" className="scroll-mt-28 space-y-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Mistakes to avoid
            </h2>
            <div className="grid gap-3 md:grid-cols-2">
              {(playbook.mistakes || []).map((m, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-amber-200/70 bg-amber-50/45 p-4 shadow-sm backdrop-blur-sm"
                >
                  <div className="text-sm font-semibold text-amber-950">
                    {m.title}
                  </div>
                  <div className="mt-2 text-xs font-semibold uppercase tracking-wide text-amber-900/70">
                    Why it fails
                  </div>
                  <p className="mt-1 text-sm leading-6 text-amber-950/90">
                    {m.problem}
                  </p>
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wide text-emerald-900/70">
                    How to avoid
                  </div>
                  <p className="mt-1 text-sm leading-6 text-emerald-950/90">
                    {m.fix}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <SectionDivider />

          <section id="tips" className="scroll-mt-28 space-y-3">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Pro tips
            </h2>
            <ul className="space-y-2">
              {(playbook.proTips || []).map((t, idx) => (
                <li
                  key={idx}
                  className="rounded-2xl border border-zinc-200/70 bg-white/70 px-4 py-3 text-sm leading-6 text-zinc-800 shadow-sm backdrop-blur-sm"
                >
                  <span className="mr-2 font-semibold text-indigo-700">
                    Tip {idx + 1}.
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </section>

          <SectionDivider />

          <section id="checklist" className="scroll-mt-28 space-y-4 pb-4">
            <h2 className="text-lg font-semibold tracking-tight text-zinc-900">
              Action checklist
            </h2>
            <div className="rounded-2xl border border-zinc-200/70 bg-white/70 p-3 shadow-sm backdrop-blur-sm">
              <div className="space-y-2">
                {(playbook.checklist || []).map((item, idx) => {
                  const done = !!checks[String(idx)];
                  return (
                    <motion.button
                      key={idx}
                      type="button"
                      onClick={() =>
                        toggleCheck(idx, playbook.checklist.length)
                      }
                      className={`flex w-full items-start gap-3 rounded-2xl border px-3 py-3 text-left text-sm transition ${
                        done
                          ? "border-emerald-200/80 bg-emerald-50/50"
                          : "border-zinc-200/70 bg-white/70 hover:bg-white"
                      }`}
                      whileTap={{ scale: 0.99 }}
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 flex-none items-center justify-center">
                        <AnimatePresence mode="popLayout" initial={false}>
                          {done ? (
                            <motion.span
                              key="d"
                              initial={{ scale: 0.4, opacity: 0, rotate: -40 }}
                              animate={{ scale: 1, opacity: 1, rotate: 0 }}
                              exit={{ scale: 0.4, opacity: 0 }}
                              transition={{
                                type: "spring",
                                stiffness: 500,
                                damping: 28,
                              }}
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-emerald-600 text-white shadow-sm"
                            >
                              <Check className="h-3.5 w-3.5" />
                            </motion.span>
                          ) : (
                            <motion.span
                              key="n"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              exit={{ opacity: 0 }}
                              className="inline-flex h-5 w-5 items-center justify-center rounded-full border border-zinc-300 bg-white"
                            />
                          )}
                        </AnimatePresence>
                      </span>
                      <span
                        className={`min-w-0 leading-6 ${
                          done ? "text-zinc-700 line-through decoration-zinc-400" : "text-zinc-900"
                        }`}
                      >
                        {item}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>
          </section>
        </article>
      </div>
    </div>
  );
}
