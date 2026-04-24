export const courseTitle = "AI Tutoring Blueprint";

export const courseSubtitle =
  "A premium, step‑by‑step playbook for building a real library‑based tutoring business—powered by AI for prep, personalization, and speed.";

export const modules = [
  {
    id: "getting-started",
    title: "Getting Started",
    summary:
      "What AI tutoring is, how the library system works, and what you need to get set up.",
    icon: "book-open",
    lessons: [
      {
        id: "what-ai-tutoring-is",
        title: "What AI tutoring is (and what it is NOT)",
        blurb: "Define the offer, boundaries, and quality rules parents trust.",
      },
      {
        id: "library-system",
        title: "How the library tutoring system works",
        blurb: "Turn consistency + micro‑trials into a repeatable acquisition loop.",
      },
      {
        id: "materials-and-setup",
        title: "Materials and setup you need",
        blurb: "Build a field kit, note system, and prompt library that feels pro.",
      },
      {
        id: "choose-subjects",
        title: "How to choose subjects to tutor (math, reading, etc.)",
        blurb: "Pick a narrow lane so marketing, practice, and conversations align.",
      },
    ],
  },
  {
    id: "getting-clients",
    title: "Getting Clients",
    summary:
      "How to approach parents and students in libraries, use simple scripts, and book free trials.",
    icon: "users",
    lessons: [
      {
        id: "approach-parents",
        title: "How to approach parents and students in libraries",
        blurb: "Respectful proximity, optics‑safe openers, and fast qualification.",
      },
      {
        id: "conversation-scripts",
        title: "Simple scripts to start conversations",
        blurb: "Train wheels you can repeat until your tone becomes natural.",
      },
      {
        id: "offer-free-trial",
        title: "How to offer a free trial class",
        blurb: "Make trials small, structured, and easy to say yes to.",
      },
      {
        id: "placement-test",
        title: "How to set up a placement test to show value",
        blurb: "A mini test that sells a clear “first skill to fix” story.",
      },
    ],
  },
  {
    id: "conversion-system",
    title: "Conversion System (Free → Paid)",
    summary:
      "How to run a free trial session, show improvement quickly, and convert parents into paid clients.",
    icon: "trending-up",
    lessons: [
      {
        id: "run-trial-session",
        title: "How to run a free trial session",
        blurb: "A minute‑by‑minute flow that feels premium, calm, and decisive.",
      },
      {
        id: "show-improvement",
        title: "How to show improvement quickly",
        blurb: "Engineer visible wins with before/after evidence parents notice.",
      },
      {
        id: "pricing",
        title: "Pricing strategies for tutoring",
        blurb: "Weekly anchors, 4‑week blocks, and policies you can say confidently.",
      },
      {
        id: "convert-to-paid",
        title: "How to convert parents into paying clients",
        blurb: "Soft closes, two‑choice scheduling, and momentum that doesn’t slip.",
      },
    ],
  },
  {
    id: "using-ai",
    title: "Using AI for Tutoring",
    summary:
      "How to use AI to create lesson plans, worksheets, schedules, and personalized learning fast.",
    icon: "sparkles",
    lessons: [
      {
        id: "lesson-plans-fast",
        title: "How to use AI to create lesson plans in minutes",
        blurb: "Master prompts, bullet agendas, and verification habits that scale.",
      },
      {
        id: "worksheets",
        title: "How to generate homework worksheets",
        blurb: "Difficulty ladders, answer keys, and ambiguity checks before print.",
      },
      {
        id: "weekly-schedules",
        title: "How to create weekly learning schedules",
        blurb: "Short daily reps + parent clarity between sessions.",
      },
      {
        id: "personalize",
        title: "How to personalize learning for each student",
        blurb: "Profiles, sequencing, and alternate explanations that feel “seen.”",
      },
    ],
  },
  {
    id: "running-sessions",
    title: "Running Sessions",
    summary:
      "How to structure tutoring sessions, keep students engaged, and track progress.",
    icon: "calendar-clock",
    lessons: [
      {
        id: "one-hour-structure",
        title: "How to structure a 1-hour tutoring session",
        blurb: "A repeatable 60‑minute architecture with a clean parent recap.",
      },
      {
        id: "keep-engaged",
        title: "How to keep students engaged",
        blurb: "Timers, process questions, and micro‑wins without turning into a game show.",
      },
      {
        id: "track-progress",
        title: "How to track progress",
        blurb: "One metric, clean notes, and monthly stories that retain families.",
      },
      {
        id: "multiple-students",
        title: "How to manage multiple students",
        blurb: "Batching, templates, buffers, and boundaries as you add capacity.",
      },
    ],
  },
  {
    id: "scaling",
    title: "Scaling the Business",
    summary:
      "How to get more students, expand to more libraries, and increase income step-by-step.",
    icon: "rocket",
    lessons: [
      {
        id: "more-students-more-libraries",
        title: "How to get more students in different libraries",
        blurb: "Expansion criteria, cloned systems, and per‑site lead tracking.",
      },
      {
        id: "train-helpers",
        title: "How to train others to help you",
        blurb: "SOPs, shadowing, co‑teaching, and audits that protect your brand.",
      },
      {
        id: "increase-income",
        title: "How to increase income step-by-step",
        blurb: "Utilization first, raises second, upsells last—without feeling gross.",
      },
    ],
  },
];

export const templates = [
  {
    id: "trial-invite-script",
    title: "Trial invite script (in-library)",
    filename: "trial-invite-script.txt",
    content:
      "Hi! I’m a tutor and I run short, free 20-minute study plan checks right here in the library.\n\nWhat subject is your student working on right now?\n\nIf you’d like, we can do a quick check today and I’ll leave you with a simple plan for the week. It’s free — just helpful.\n\nIf it goes well, we can set a weekly time that fits your schedule.",
  },
  {
    id: "parent-update",
    title: "Parent update template (after session)",
    filename: "parent-update-template.txt",
    content:
      "Today we worked on: [topic]\n\nWin today: [what improved]\n\nWhat to practice this week (10–15 min/day):\n1) [task]\n2) [task]\n\nNext session we’ll focus on: [next step]\n\nQuick note: [encouraging sentence]",
  },
  {
    id: "lesson-plan",
    title: "AI lesson plan prompt (copy/paste)",
    filename: "ai-lesson-plan-prompt.txt",
    content:
      "You are a patient tutor. Create a 60-minute lesson plan.\n\nStudent:\n- Grade: [grade]\n- Subject: [subject]\n- Topic: [topic]\n- Current level: [what they can/can’t do]\n- Goal: [goal]\n\nLesson plan must include:\n- 5-min warm-up\n- 15-min teaching with a simple explanation and example\n- 25-min guided + independent practice\n- 10-min homework plan\n- 5-min exit ticket\n\nAlso provide: 10 practice problems at 3 difficulty levels + answer key.",
  },
  {
    id: "worksheet",
    title: "Worksheet template (generic)",
    filename: "worksheet-template.txt",
    content:
      "Name: ____________   Date: ____________\nTopic: ______________________________\n\n1) Warm-up (2 problems)\n- ____\n- ____\n\n2) Main practice (6 problems)\n- ____\n- ____\n- ____\n- ____\n- ____\n- ____\n\n3) Challenge (2 problems)\n- ____\n- ____\n\nReflection: What part was hardest and why? ____________________________",
  },
  {
    id: "placement-test-mini",
    title: "Mini placement test template (5–10 questions)",
    filename: "placement-test-template.txt",
    content:
      "Student: ____________   Date: ____________\nSubject: ____________\n\nGoal: Identify gaps fast and show a clear next step.\n\nInstructions:\n1) Start with 2 easy questions\n2) Add 3–5 medium questions\n3) Add 1–2 challenge questions\n\nQuestions:\n1) ______________________________\n2) ______________________________\n3) ______________________________\n4) ______________________________\n5) ______________________________\n6) ______________________________\n7) ______________________________\n8) ______________________________\n9) ______________________________\n10) ______________________________\n\nNotes (gaps / patterns):\n- ______________________________\n- ______________________________\n\nNext skill to fix first: ______________________________",
  },
  {
    id: "weekly-learning-schedule",
    title: "Weekly learning schedule template",
    filename: "weekly-learning-schedule-template.txt",
    content:
      "Student: ____________   Week of: ____________\n\nMain goal this week: ______________________________\n\nMon (10–15 min): ______________________________\nTue (10–15 min): ______________________________\nWed (10–15 min): ______________________________\nThu (10–15 min): ______________________________\nFri (10–15 min): ______________________________\n\nParent note (1 sentence): ______________________________",
  },
];

export const defaultChecklistItems = [
  {
    id: "understand-system",
    label:
      "Understand the library tutoring system (show up consistently + run trials)",
  },
  {
    id: "choose-subject",
    label: "Choose your subject and age range (start narrow)",
  },
  {
    id: "materials",
    label: "Get your materials ready (notes, timer, worksheets)",
  },
  { id: "pick-libraries", label: "Pick 1–2 target libraries" },
  { id: "scripts", label: "Practice your conversation + trial invite scripts" },
  {
    id: "placement-test",
    label: "Create a simple placement test (5–10 questions)",
  },
  { id: "run-trials", label: "Run 3 free trial sessions" },
  {
    id: "convert-paid",
    label: "Convert at least 1 student to a paid weekly plan",
  },
  {
    id: "prompt-library",
    label: "Create your AI prompts (lesson plan, worksheet, weekly schedule)",
  },
  {
    id: "weekly-routine",
    label: "Set your weekly routine (set days + times at the library)",
  },
];
