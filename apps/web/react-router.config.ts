import type { Config } from '@react-router/dev/config';
import { modules } from './src/data/courseContent.js';

/** Explicit paths avoid `/*?` splat prerender filenames that break on Windows (`*?.data`). */
const prerenderPaths = [
	'/',
	'/modules',
	'/checklist',
	'/templates',
	...modules.flatMap((m) => [
		`/modules/${m.id}`,
		...m.lessons.map((l) => `/modules/${m.id}/${l.id}`),
	]),
];

export default {
	appDirectory: './src/app',
	ssr: true,
	prerender: prerenderPaths,
} satisfies Config;
