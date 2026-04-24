/**
 * @typedef {{ title: string, body: string, bullets?: string[] }} PlaybookStep
 * @typedef {{ title: string, lines: string[] }} PlaybookScript
 * @typedef {{ title: string, body: string, prompt?: string }} PlaybookAiUsage
 * @typedef {{ title: string, problem: string, fix: string }} PlaybookMistake
 * @typedef {{
 *   overview: string[],
 *   whyItMatters: string[],
 *   outcome: string[],
 *   steps: PlaybookStep[],
 *   scripts: PlaybookScript[],
 *   aiUsage: PlaybookAiUsage[],
 *   mistakes: PlaybookMistake[],
 *   proTips: string[],
 *   checklist: string[],
 * }} LessonPlaybook
 */

export {};
