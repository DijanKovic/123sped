import { getLessonPlaybook } from "@/data/playbooks";

const COMPLETED_KEY = "ai-tutoring-blueprint-completed-lessons-v1";
const CHECKLIST_KEY = "ai-tutoring-business-course-checklist-v1";

/** Must match `LessonReader` checklist storage prefix. */
export const LESSON_CHECKLIST_STORAGE_PREFIX =
  "ai-tutoring-blueprint-lesson-checklist-v1:";

export function lessonStorageKey(moduleId, lessonId) {
  return `${moduleId}/${lessonId}`;
}

export function loadCompletedLessonKeys() {
  if (typeof window === "undefined") return new Set();
  try {
    const raw = window.localStorage.getItem(COMPLETED_KEY);
    if (!raw) return new Set();
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return new Set();
    return new Set(parsed.filter((x) => typeof x === "string"));
  } catch {
    return new Set();
  }
}

export function saveCompletedLessonKeys(set) {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(COMPLETED_KEY, JSON.stringify([...set]));
  } catch {
    /* ignore */
  }
}

export function isLessonComplete(moduleId, lessonId) {
  return loadCompletedLessonKeys().has(lessonStorageKey(moduleId, lessonId));
}

function loadLessonChecklistMap(moduleId, lessonId) {
  if (typeof window === "undefined") return {};
  try {
    const raw = window.localStorage.getItem(
      `${LESSON_CHECKLIST_STORAGE_PREFIX}${moduleId}:${lessonId}`,
    );
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return {};
    return parsed;
  } catch {
    return {};
  }
}

/**
 * True when every action checklist item for the lesson is checked in localStorage.
 */
export function isLessonChecklistFullyDone(moduleId, lessonId) {
  const playbook = getLessonPlaybook(moduleId, lessonId);
  const items = playbook?.checklist || [];
  const n = items.length;
  if (!n) return false;
  const map = loadLessonChecklistMap(moduleId, lessonId);
  for (let i = 0; i < n; i += 1) {
    if (!map[String(i)]) return false;
  }
  return true;
}

/**
 * Lesson counts toward module/course progress when explicitly marked complete
 * OR the lesson action checklist is fully checked.
 */
export function isLessonFinishedForProgress(moduleId, lessonId) {
  if (isLessonComplete(moduleId, lessonId)) return true;
  return isLessonChecklistFullyDone(moduleId, lessonId);
}

const listeners = new Set();

/** Bumped when lesson completion state changes; used for stable `useSyncExternalStore` snapshots. */
let progressSnapshotVersion = 0;

export function getCourseProgressSnapshotVersion() {
  return progressSnapshotVersion;
}

export function subscribeCourseProgress(cb) {
  listeners.add(cb);
  return () => listeners.delete(cb);
}

function notifyCourseProgress() {
  progressSnapshotVersion += 1;
  for (const cb of listeners) {
    try {
      cb();
    } catch {
      /* ignore */
    }
  }
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("course-progress"));
  }
}

/** Call after lesson checklist localStorage changes so dashboards stay in sync. */
export function invalidateCourseProgress() {
  notifyCourseProgress();
}

export function setLessonComplete(moduleId, lessonId, done) {
  const next = loadCompletedLessonKeys();
  const key = lessonStorageKey(moduleId, lessonId);
  if (done) next.add(key);
  else next.delete(key);
  saveCompletedLessonKeys(next);
  notifyCourseProgress();
}

export function computeModuleProgress(module) {
  const total = module?.lessons?.length || 0;
  if (!total) return { completed: 0, total: 0, percent: 0 };
  let completed = 0;
  for (const l of module.lessons) {
    if (isLessonFinishedForProgress(module.id, l.id)) completed += 1;
  }
  return {
    completed,
    total,
    percent: Math.round((completed / total) * 100),
  };
}

export function computeCourseProgress(modules) {
  let total = 0;
  let completed = 0;
  for (const m of modules) {
    for (const l of m.lessons) {
      total += 1;
      if (isLessonFinishedForProgress(m.id, l.id)) completed += 1;
    }
  }
  return {
    completed,
    total,
    percent: total ? Math.round((completed / total) * 100) : 0,
  };
}

export function loadChecklistProgress() {
  if (typeof window === "undefined") {
    return { completed: 0, total: 0, percent: 0 };
  }
  try {
    const raw = window.localStorage.getItem(CHECKLIST_KEY);
    if (!raw) return { completed: 0, total: 0, percent: 0 };
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed)) return { completed: 0, total: 0, percent: 0 };
    const total = parsed.length;
    const completed = parsed.filter((i) => i?.done).length;
    return {
      completed,
      total,
      percent: total ? Math.round((completed / total) * 100) : 0,
    };
  } catch {
    return { completed: 0, total: 0, percent: 0 };
  }
}
