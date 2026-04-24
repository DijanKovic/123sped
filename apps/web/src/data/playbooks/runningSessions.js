/** @typedef {import('./types').LessonPlaybook} LessonPlaybook */

/** @type {Record<string, LessonPlaybook>} */
export const runningSessionsPlaybooks = {
  "one-hour-structure": {
    overview: [
      "This lesson gives you a professional 60‑minute session architecture that feels predictable to students, impressive to parents, and sustainable for you.",
    ],
    whyItMatters: [
      "Structure reduces decision fatigue and makes quality consistent—premium tutoring is consistent tutoring.",
    ],
    outcome: [
      "You can run sessions with a timer without feeling rushed, and you always end with homework + next focus.",
    ],
    steps: [
      {
        title: "5 minutes: warm check‑in + review homework",
        body: "Open the notebook: what was hard, what was easy, what was skipped. Pick one item to correct quickly or fold into today’s plan.",
        bullets: [
          "If homework wasn’t done, don’t shame—diagnose blockers fast.",
        ],
      },
      {
        title: "15 minutes: teach one new idea (single thread)",
        body: "One concept, one storyline, one success path. Use a model example, then a near‑transfer example.",
        bullets: [
          "Stop early if they’re saturated—quality over coverage.",
        ],
      },
      {
        title: "25 minutes: practice ladder (guided → independent)",
        body: "Start with partially supported problems, then remove supports. Silence is practice—don’t interrupt thinking.",
        bullets: [
          "Circulate errors: group by mistake type and reteach micro‑fixes.",
        ],
      },
      {
        title: "10 minutes: homework + organization",
        body: "Assign short homework, write it down, have them repeat the plan aloud once.",
        bullets: [
          "Teach “how to start” homework—not only what to do.",
        ],
      },
      {
        title: "5 minutes: parent micro‑update (when applicable)",
        body: "Three sentences: win, homework, next session focus. Keep it steady—parents remember consistency.",
        bullets: [
          "If parent isn’t present, send a text template later the same day.",
        ],
      },
    ],
    scripts: [
      {
        title: "Opening the session",
        lines: [
          "“Today we’re going to fix one main skill: [skill]. We’ll warm up, practice, then you’ll leave with a tiny homework set so it sticks.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate timed agendas for different goals",
        prompt:
          "Create three variations of a 60‑minute tutoring agenda for [grade] [subject] depending on whether the student is (A) behind, (B) on level but careless, (C) advanced and bored. Include timing + instructor notes.",
      },
    ],
    mistakes: [
      {
        title: "Trying to cover everything",
        problem: "Student leaves overwhelmed.",
        fix: "One thread per hour; park extras on a “later list.”",
      },
    ],
    proTips: [
      "Use a visible agenda on paper—students relax when they see the shape of the hour.",
    ],
    checklist: [
      "☐ I printed a session agenda card.",
      "☐ I timed one practice session with a timer.",
      "☐ I wrote my 3‑sentence parent update template.",
      "☐ I created a homework assignment slip.",
    ],
  },
  "keep-engaged": {
    overview: [
      "This lesson is engagement engineering: attention, motivation, and momentum—without turning sessions into entertainment.",
    ],
    whyItMatters: [
      "Engaged students improve faster, behave better, and convince parents your tutoring “works.”",
    ],
    outcome: [
      "You have 8 engagement moves you can rotate so sessions feel fresh.",
    ],
    steps: [
      {
        title: "Chunk time visibly (10‑minute stations)",
        body: "Announce chunks: “10 minutes, 3 problems—go.” Breaks are earned, not random.",
        bullets: [
          "Timers reduce negotiation.",
        ],
      },
      {
        title: "Ask process questions, not only answers",
        body: "“What did you notice?” “Why that step?” “What’s the fastest way to check?”",
        bullets: [
          "Make thinking audible—especially for anxious students.",
        ],
      },
      {
        title: "Use micro‑wins + honest praise",
        body: "Praise effort tied to strategy: “You checked your work without me asking—that’s new.”",
        bullets: [
          "Avoid generic “great job” spam.",
        ],
      },
      {
        title: "Alternate modalities",
        body: "Switch between verbal, written, and quick sketching—even in math/reading—to reset attention.",
        bullets: [
          "Keep switches purposeful, not chaotic.",
        ],
      },
    ],
    scripts: [
      {
        title: "When energy crashes",
        lines: [
          "“Okay—reset mode. One tiny set, two minutes, perfect form. Then we stop and high‑five.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate engagement question banks",
        prompt:
          "Create 30 engagement prompts for tutoring [subject] for grade [X]. Categories: metacognition, self‑check, explaining to a younger kid, speed vs accuracy tradeoffs. Keep each prompt under 18 words.",
      },
    ],
    mistakes: [
      {
        title: "Talking over thinking",
        problem: "Student never wrestles with the problem.",
        fix: "Use strategic silence and a whiteboard marker handoff.",
      },
    ],
    proTips: [
      "Let students choose between two practice modes (speed vs carefulness)—autonomy boosts buy‑in.",
    ],
    checklist: [
      "☐ I wrote 8 engagement moves on a cue card.",
      "☐ I practiced 3 process questions aloud.",
      "☐ I used a timer for one full session.",
    ],
  },
  "track-progress": {
    overview: [
      "This lesson makes progress visible: simple metrics, clean notes, and parent updates that prove value over weeks.",
    ],
    whyItMatters: [
      "Retention is easier when families can see a storyline of improvement—even if gains are incremental.",
    ],
    outcome: [
      "You track one primary metric per student and update it weekly.",
    ],
    steps: [
      {
        title: "Pick one primary metric per student",
        body: "Examples: accuracy on 10 problems, time to complete a routine, reading errors per minute, homework completion rate.",
        bullets: [
          "Secondary metrics go in notes, not on the dashboard.",
        ],
      },
      {
        title: "Log after every session (2 minutes)",
        body: "Date, topic, score/observation, homework assigned, next focus.",
        bullets: [
          "If you skip logging, you’ll improvise parent convos—weakens trust.",
        ],
      },
      {
        title: "Monthly “progress story” (10 minutes)",
        body: "Summarize 3 wins + next month focus. Parents love a narrative with evidence.",
        bullets: [
          "Use student artifacts: photos of worksheets with permission.",
        ],
      },
    ],
    scripts: [
      {
        title: "Parent update (weekly)",
        lines: [
          "“This week we focused on [skill]. The win is [observable change]. Homework is short on purpose: [tasks]. Next week we’ll build on that by [next step].”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Turn raw notes into a monthly progress story",
        prompt:
          "Here are weekly tutor notes for one student across 4 weeks: [paste]. Write a parent‑friendly progress summary: wins, patterns, homework adherence, next focus. 180 words max, warm tone, no jargon.",
      },
    ],
    mistakes: [
      {
        title: "Tracking too many metrics",
        problem: "You track nothing meaningfully.",
        fix: "One primary metric + qualitative notes.",
      },
    ],
    proTips: [
      "Show charts on paper—parents understand simple line plots instantly.",
    ],
    checklist: [
      "☐ I chose one metric per active student.",
      "☐ I logged after my last session (practice).",
      "☐ I wrote a monthly summary template.",
    ],
  },
  "multiple-students": {
    overview: [
      "This lesson helps you add capacity without destroying quality: scheduling, templates, energy management, and boundaries.",
    ],
    whyItMatters: [
      "Scaling poorly creates churn—tired tutors make mistakes, miss updates, and lose the premium feel.",
    ],
    outcome: [
      "You have a weekly batch workflow for planning and communication.",
    ],
    steps: [
      {
        title: "Stack sessions in blocks",
        body: "Back‑to‑back can work if you build reset rituals: wipe board, new agenda card, water, 2‑minute note finalize.",
        bullets: [
          "Avoid triple‑headers early—protect quality.",
        ],
      },
      {
        title: "Template everything repeatable",
        body: "Lesson skeletons, worksheet shells, parent updates—reuse, tweak lightly.",
        bullets: [
          "AI is best here: batch‑generate variants Sunday night.",
        ],
      },
      {
        title: "Set communication boundaries",
        body: "Define when you respond to texts and what emergencies mean. Premium includes boundaries.",
        bullets: [
          "Put it in writing for parents at onboarding.",
        ],
      },
    ],
    scripts: [
      {
        title: "Boundary setting (kind)",
        lines: [
          "“I’m reachable for scheduling between [hours]. For learning questions, bring them to session so we can fix them properly.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Batch weekly prep checklist",
        prompt:
          "Create a Sunday weekly prep checklist for a tutor with [N] students in [subjects]. Include batching prompts for lesson plans, worksheets, parent updates, and materials printing. 25 lines max.",
      },
    ],
    mistakes: [
      {
        title: "Booking without buffers",
        problem: "You run late and look unreliable.",
        fix: "Add 10 minutes between sessions until you’re seasoned.",
      },
    ],
    proTips: [
      "Raise rates as utilization rises—demand is signal.",
    ],
    checklist: [
      "☐ I designed a block schedule with buffers.",
      "☐ I created Sunday batch prep checklist.",
      "☐ I wrote communication boundaries for parents.",
    ],
  },
};
