/** @typedef {import('./types').LessonPlaybook} LessonPlaybook */

/** @type {Record<string, LessonPlaybook>} */
export const usingAiPlaybooks = {
  "lesson-plans-fast": {
    overview: [
      "This lesson builds an AI workflow that produces reliable 60‑minute lesson plans: fast to generate, easy to verify, and reusable week after week.",
    ],
    whyItMatters: [
      "Your time is the bottleneck. Lesson plans are the highest‑leverage prep artifact because they organize teaching, practice, homework, and parent communication.",
    ],
    outcome: [
      "You have a master prompt, a verification habit, and a filing system for “plans that worked.”",
    ],
    steps: [
      {
        title: "Create a master prompt with non‑negotiable fields",
        body: "Fields: grade, subject, topic, prerequisite skills, typical mistakes, goal for the session, time constraints, materials available, parent priority.",
        bullets: [
          "Ask AI to output: agenda by minutes, materials list, checks for understanding, exit ticket.",
        ],
      },
      {
        title: "Demand structure, not essays",
        body: "You want bullet agendas, not paragraphs. Structure reduces errors and speeds scanning before class.",
        bullets: [
          "Ask for headings exactly: Warm‑up / Teach / Guided Practice / Independent / Exit / Homework.",
        ],
      },
      {
        title: "Verify by doing the hardest problem yourself",
        body: "Pick the hardest practice item from the plan and solve it. If it’s shaky, fix the prompt or edit manually—don’t hope.",
        bullets: [
          "Keep a “bad output” note: what went wrong informs prompt v2.",
        ],
      },
      {
        title: "Save winners as templates",
        body: "Name files: `LP_grade7_fractions_v3`. Versioning matters when you improve prompts.",
        bullets: [
          "Once a month, merge improvements into one master prompt.",
        ],
      },
    ],
    scripts: [
      {
        title: "If a parent asks how you plan so fast",
        lines: [
          "“I use a structured planning template—sometimes I draft parts with AI—but I always review everything before your student sees it.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Master lesson plan prompt (copy/paste)",
        prompt:
          "You are an expert tutor. Build a 60‑minute in‑person lesson plan.\n\nContext:\n- Grade: [grade]\n- Subject: [subject]\n- Topic: [topic]\n- Student level: [what they can/can’t do]\n- Goal today: [measurable]\n- Common mistakes: [bullets]\n- Session length: [60] minutes\n\nOutput:\n1) Minute‑by‑minute agenda\n2) Warm‑up (3 items)\n3) Teaching script (simple language + 1 analogy)\n4) Guided practice (4 items)\n5) Independent practice (6 items)\n6) Exit ticket (2 items)\n7) Homework (10–15 min/day for 4 days)\n8) Parent recap paragraph (120 words)\n\nAlso include an answer key and note likely misconceptions.",
      },
    ],
    mistakes: [
      {
        title: "Accepting long paragraphs you won’t read",
        problem: "You skip verification.",
        fix: "Force bullet structure and shorter outputs.",
      },
    ],
    proTips: [
      "Ask AI for “two backup explanations” for the hardest concept—use the second when the first flops live.",
    ],
    checklist: [
      "☐ I wrote my master prompt with required fields.",
      "☐ I generated 2 plans and verified hardest items by hand.",
      "☐ I saved a “winner” plan as a template.",
      "☐ I wrote parent‑friendly explanation of my planning workflow.",
    ],
  },
  worksheets: {
    overview: [
      "This lesson builds a worksheet factory: repeatable prompts, difficulty ladders, and answer keys—so homework feels professional and on‑target.",
    ],
    whyItMatters: [
      "Homework is your between‑session product. Sloppy homework erodes trust; tight homework reinforces wins.",
    ],
    outcome: [
      "You can generate, verify, and assign a worksheet in under 15 minutes.",
    ],
    steps: [
      {
        title: "Define worksheet types you’ll reuse",
        body: "Types: skills drill, word problem set, reading response, error‑spot set, timed sprint, reflection. Pick 2 for your lane.",
        bullets: [
          "Each type gets its own prompt template.",
        ],
      },
      {
        title: "Always request 3 difficulty bands",
        body: "Easy/medium/stretch lets you adjust live without regenerating.",
        bullets: [
          "Keep stretch genuinely optional—confidence matters.",
        ],
      },
      {
        title: "Verification: answer key + edge cases",
        body: "Do problems yourself, then ask AI: “Find ambiguous wording” and fix before printing.",
        bullets: [
          "Ambiguous prompts create fake “bad at math” signals.",
        ],
      },
    ],
    scripts: [
      {
        title: "Assigning homework without overwhelm",
        lines: [
          "“This is short on purpose—10 minutes. If it’s easy, do it neatly; if it’s hard, circle the exact step where your brain stops.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Worksheet generation prompt",
        prompt:
          "Generate a printable worksheet for [grade] [topic]. Include: 6 core problems (increasing difficulty), 2 challenge problems, and 1 reflection question. Provide a complete answer key and notes on common mistakes. Avoid ambiguous wording. Format for black‑and‑white printing.",
      },
    ],
    mistakes: [
      {
        title: "Too many problems",
        problem: "Students skip or hate tutoring.",
        fix: "Short, daily‑style homework beats huge weekly packets.",
      },
    ],
    proTips: [
      "Add a “show your steps” line even in reading/math—executive function training sells retention.",
    ],
    checklist: [
      "☐ I chose 2 worksheet types for my lane.",
      "☐ I wrote a 3‑band difficulty prompt template.",
      "☐ I verified one full worksheet manually.",
      "☐ I printed 5 blank headers for speed branding.",
    ],
  },
  "weekly-schedules": {
    overview: [
      "This lesson turns tutoring into a week‑long system: students know what to do between sessions; parents see structure; you reduce chaos.",
    ],
    whyItMatters: [
      "Weekly plans reduce parent anxiety and make your service feel like a program, not a chat.",
    ],
    outcome: [
      "You have a weekly schedule template and an AI prompt that adapts it from session notes.",
    ],
    steps: [
      {
        title: "Define the weekly shape: 4–5 short practice days",
        body: "Short daily practice beats one marathon. Aim 10–15 minutes unless you have a strong reason.",
        bullets: [
          "Each day should have one primary skill target.",
        ],
      },
      {
        title: "Translate session notes into next week priorities",
        body: "Your notes should end with: “Next week focus,” “homework,” “watch‑outs.” Feed that into AI for scheduling language.",
        bullets: [
          "If notes are messy, fix the note template—not the AI prompt.",
        ],
      },
      {
        title: "Add a parent line: what success looks like",
        body: "Parents want clarity: “If you see X, that’s good progress.”",
        bullets: [
          "Avoid vague encouragement—use observable behaviors.",
        ],
      },
    ],
    scripts: [
      {
        title: "Explaining the weekly plan to a parent",
        lines: [
          "“This week is designed to be small daily reps—about 12 minutes. If anything is confusing, text me before Wednesday so we don’t practice mistakes.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Weekly schedule prompt",
        prompt:
          "Create a 5‑day weekly learning schedule (Mon–Fri) for grade [X] in [subject]. Each day: 10–15 minutes, one focus skill, specific tasks, and what ‘good’ looks like. Base it on these session notes: [paste]. End with a 3‑sentence parent summary.",
      },
    ],
    mistakes: [
      {
        title: "Overpacking the week",
        problem: "Student fails → parent blames tutoring.",
        fix: "Under‑promise workload; over‑deliver clarity.",
      },
    ],
    proTips: [
      "Add “recovery day” language: if a day is missed, do the minimum version instead of doubling—consistency beats intensity.",
    ],
    checklist: [
      "☐ I chose my default weekly shape (4–5 short days).",
      "☐ I updated session notes to include next‑week focus.",
      "☐ I generated one schedule from real notes and reviewed it.",
      "☐ I printed a parent summary template.",
    ],
  },
  personalize: {
    overview: [
      "This lesson shows how personalization really works in tutoring: it’s mostly correct sequencing, clear explanations, and matching practice—not magical tech.",
    ],
    whyItMatters: [
      "Parents say “personalized” but mean “my kid is understood.” Your systems create that feeling.",
    ],
    outcome: [
      "You can turn observations into a personalized plan using AI drafts you verify.",
    ],
    steps: [
      {
        title: "Build a student profile sheet (1 page)",
        body: "Strengths, motivators, fatigue triggers, best modality (visual/verbal), parent goals, school constraints.",
        bullets: [
          "Update weekly—profiles decay if stale.",
        ],
      },
      {
        title: "Personalize the sequence, not the universe",
        body: "Pick the next skill based on gaps, not novelty. AI can propose sequences; you validate against what you saw.",
        bullets: [
          "If unsure, choose the skill that unlocks the most homework pain.",
        ],
      },
      {
        title: "Generate alternate explanations + analogies",
        body: "Ask AI for 3 explanations at different levels; pick the one that matches the student’s language.",
        bullets: [
          "Keep a log of which explanation worked—gold for retention.",
        ],
      },
    ],
    scripts: [
      {
        title: "Student feels “bad at subject”",
        lines: [
          "“You’re not bad at this—you’re missing one habit in the middle. We’re going to train that habit until it’s automatic.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Alternate explanations prompt",
        prompt:
          "Student struggles with [concept] in [subject], grade [X]. Give 3 explanations: concrete (objects/money), visual (diagram description), abstract (formal). Include 2 common misconceptions and quick checks for understanding.",
      },
    ],
    mistakes: [
      {
        title: "Too many new tools/changes each week",
        problem: "Student feels chaotic.",
        fix: "Stability + one new variable at a time.",
      },
    ],
    proTips: [
      "Personalization showmanship: use their interests in word problems—verify appropriateness first.",
    ],
    checklist: [
      "☐ I created a 1‑page student profile template.",
      "☐ I logged one successful explanation variant.",
      "☐ I generated 3 explanations for my hardest topic and reviewed them.",
    ],
  },
};
