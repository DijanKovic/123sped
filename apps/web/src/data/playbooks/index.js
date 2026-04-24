import { gettingStartedPlaybooks } from "./gettingStarted";
import { gettingClientsPlaybooks } from "./gettingClients";
import { conversionSystemPlaybooks } from "./conversionSystem";
import { usingAiPlaybooks } from "./usingAi";
import { runningSessionsPlaybooks } from "./runningSessions";
import { scalingPlaybooks } from "./scaling";

function prefixKeys(moduleId, record) {
  /** @type {Record<string, import('./types').LessonPlaybook>} */
  const out = {};
  for (const [lessonId, playbook] of Object.entries(record)) {
    out[`${moduleId}:${lessonId}`] = playbook;
  }
  return out;
}

/** @type {Record<string, import('./types').LessonPlaybook>} */
export const LESSON_PLAYBOOK_MAP = {
  ...prefixKeys("getting-started", gettingStartedPlaybooks),
  ...prefixKeys("getting-clients", gettingClientsPlaybooks),
  ...prefixKeys("conversion-system", conversionSystemPlaybooks),
  ...prefixKeys("using-ai", usingAiPlaybooks),
  ...prefixKeys("running-sessions", runningSessionsPlaybooks),
  ...prefixKeys("scaling", scalingPlaybooks),
};

/**
 * @param {string} moduleId
 * @param {string} lessonId
 */
export function getLessonPlaybook(moduleId, lessonId) {
  return LESSON_PLAYBOOK_MAP[`${moduleId}:${lessonId}`] || null;
}
