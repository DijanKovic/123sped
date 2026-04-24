/** @typedef {import('./types').LessonPlaybook} LessonPlaybook */

/** @type {Record<string, LessonPlaybook>} */
export const conversionSystemPlaybooks = {
  "run-trial-session": {
    overview: [
      "This lesson is a minute‑by‑minute operating guide for running a trial that feels premium: calm structure, visible progress, and a clean transition to paid weekly tutoring.",
    ],
    whyItMatters: [
      "Trials are where parents decide if you’re “the person” for their child. Structure signals competence; chaos signals hobbyist.",
    ],
    outcome: [
      "You can run a 20–30 minute trial with a repeatable agenda and a confident close.",
    ],
    steps: [
      {
        title: "Open with safety + clarity (60–90 seconds)",
        body: "Introduce yourself to parent and student, set goals for the session, explain what success looks like today. Ask permission to take quick notes.",
        bullets: [
          "Example success: “We’ll identify one stuck step and practice it until it feels easier.”",
        ],
      },
      {
        title: "Diagnose with one artifact",
        body: "Use homework, a textbook page, or 2 warm‑up problems. Watch their process, not only answers—process reveals the true skill gap.",
        bullets: [
          "Narrate neutrally: “Talk me through this step.”",
        ],
      },
      {
        title: "Teach one micro‑skill with modeling → guided → independent",
        body: "Model once slowly. Do one together. Then two solo with you silent unless stuck. This sequence is your conversion engine—it creates a visible win.",
        bullets: [
          "Name the skill repeatedly so the parent can hear the framing.",
        ],
      },
      {
        title: "Parent micro‑brief (30–45 seconds)",
        body: "Invite the parent closer: “Here’s what we found, here’s what improved, here’s the next skill chain.” Keep it plain language.",
        bullets: [
          "Avoid jargon unless you define it in one clause.",
        ],
      },
      {
        title: "Assign tiny homework (10–15 minutes max)",
        body: "Two tasks beats twelve. Homework should feel doable after a win.",
        bullets: [
          "Write it on paper—parents trust paper.",
        ],
      },
      {
        title: "Close with a weekly plan offer (two choices)",
        body: "Assume continuity: same day, same duration, simple policy. If they need time, book a decision call time on your library schedule.",
        bullets: [
          "If they want “to think,” ask what specific question they need answered—often it’s logistics, not doubt.",
        ],
      },
    ],
    scripts: [
      {
        title: "Opening script",
        lines: [
          "“Today is simple: we’re going to find the first step that’s breaking, practice it until it feels smoother, and you’ll leave with a tiny homework plan. If it helps, I’ll explain the plan to you both at the end in plain English.”",
        ],
      },
      {
        title: "Close script (weekly plan)",
        lines: [
          "“If you want to continue, my model is weekly sessions so skills stick—same time each week. Most families start with a 4‑week block. Does Tuesday 4:30 or Thursday 5 work better?”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a trial plan tailored to a topic",
        prompt:
          "Create a 25‑minute trial lesson flow for grade [X] [subject] focused on skill [Y]. Include warm‑up problems, teaching prompts, what to watch for in student work, and a parent summary paragraph template.",
      },
    ],
    mistakes: [
      {
        title: "Teaching too wide",
        problem: "No memorable win.",
        fix: "One skill, repeated until it shows in independent work.",
      },
      {
        title: "Ignoring the parent",
        problem: "Parent doesn’t “feel” the value.",
        fix: "Brief them aloud; make wins observable.",
      },
    ],
    proTips: [
      "Use a visible timer for practice blocks—students rise to structure; parents notice professionalism.",
    ],
    checklist: [
      "☐ I memorized my opening + close.",
      "☐ I ran one practice trial on a friend/volunteer.",
      "☐ I printed homework slips.",
      "☐ I wrote my 4‑week offer in simple terms.",
      "☐ I practiced narrating a win without jargon.",
    ],
  },
  "show-improvement": {
    overview: [
      "This lesson is about engineering visible progress fast: parents should be able to notice improvement without you needing to oversell.",
    ],
    whyItMatters: [
      "Conversion is easier when improvement feels tangible: fewer mistakes, faster steps, cleaner work, better explanations from the student.",
    ],
    outcome: [
      "You can demonstrate a win in the first session using a before/after snapshot.",
    ],
    steps: [
      {
        title: "Pick a metric the student can feel",
        body: "Examples: time to complete 3 problems, number of self‑corrections, steps shown, reading aloud fluency, error type reduction. Pick one for the day.",
        bullets: [
          "Tell the student what you’re measuring—kids like games.",
        ],
      },
      {
        title: "Capture a “before” in 2 minutes",
        body: "Short baseline set: same type as your target skill. Keep it fair—don’t trap.",
        bullets: [
          "Write the baseline on paper dated today.",
        ],
      },
      {
        title: "Teach the fix, then run an “after” set",
        body: "Same structure, slightly tweaked numbers/passages. Compare explicitly: “Notice what changed in your steps.”",
        bullets: [
          "Have the student say the improvement in their own words.",
        ],
      },
      {
        title: "Translate improvement for the parent in one sentence + evidence",
        body: "“Before, they skipped this step; now they’re doing it on their own on 3/3 problems.” Evidence beats adjectives.",
        bullets: [
          "Point to written work while you say it.",
        ],
      },
    ],
    scripts: [
      {
        title: "Student encouragement (accurate, not fake)",
        lines: [
          "“That’s real progress—this step used to be missing, and now you did it without me telling you.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Create a before/after mini worksheet pair",
        prompt:
          "Generate matched before/after practice pairs for skill [X] at grade [Y]. Same structure, different numbers. Include brief instructor notes on what improvement should look like in student work.",
      },
    ],
    mistakes: [
      {
        title: "Praising without evidence",
        problem: "Sounds like cheerleading, not teaching.",
        fix: "Tie praise to a specific observed behavior change.",
      },
    ],
    proTips: [
      "If improvement is small, name it honestly: “small but real” builds huge trust.",
    ],
    checklist: [
      "☐ I chose one measurable feel‑metric for trials.",
      "☐ I created a baseline + after routine.",
      "☐ I practiced one parent evidence sentence.",
      "☐ I printed dated paper for snapshots.",
    ],
  },
  pricing: {
    overview: [
      "This lesson helps you set pricing that is simple to say, easy to defend, and designed to grow as your schedule fills.",
    ],
    whyItMatters: [
      "If you sound uncertain about price, parents negotiate in their heads before they even speak.",
    ],
    outcome: [
      "You have a published simple rate card for weekly tutoring + a policy for cancellations and materials.",
    ],
    steps: [
      {
        title: "Pick a weekly anchor (not per random hour)",
        body: "Weekly plans sell retention. Example: “Once/week, 60 minutes, includes quick parent recap + homework plan.”",
        bullets: [
          "If you must do ad‑hoc, price it higher than weekly to push the better product.",
        ],
      },
      {
        title: "Start in a confidence band, not a desperation band",
        body: "Research local norms, then pick a price you can say without flinching. If you flinch, you’re too high for your own belief—or you need more proof wins.",
        bullets: [
          "It’s okay to start modestly if demand is unproven; it’s not okay to stay there forever.",
        ],
      },
      {
        title: "Bundle time: 4‑week blocks",
        body: "Four weeks is psychologically easier than “ongoing forever.” It also creates a natural upsell/re‑rate point.",
        bullets: [
          "Include what’s included: materials, updates, between‑session support boundaries.",
        ],
      },
      {
        title: "Write your cancellation policy in plain English",
        body: "Simple wins: reschedule window, late policy, no‑show policy. Keep it fair—premium doesn’t mean punitive.",
        bullets: [
          "Print it once; hand to new parents.",
        ],
      },
    ],
    scripts: [
      {
        title: "Stating price calmly",
        lines: [
          "“My standard is weekly sessions—$[X] per hour, billed as a 4‑week block at $[total]. That includes a short parent recap and a focused homework plan.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Draft a fair cancellation/reschedule policy",
        prompt:
          "Write a fair tutoring cancellation and reschedule policy for weekly in‑person library sessions. Tone: calm, professional, not corporate. Include examples. Keep under 180 words.",
      },
    ],
    mistakes: [
      {
        title: "Discounting on the spot from fear",
        problem: "You train parents to pressure you.",
        fix: "If needed, remove a feature or shorten frequency—not slash price instantly.",
      },
    ],
    proTips: [
      "If someone says you’re expensive, agree once: “It is an investment—weekly structure is what creates results.”",
    ],
    checklist: [
      "☐ I chose weekly pricing + 4‑week billing.",
      "☐ I wrote what’s included / not included.",
      "☐ I printed policy + rate card.",
      "☐ I practiced stating price without apologizing.",
    ],
  },
  "convert-to-paid": {
    overview: [
      "This lesson is the conversion conversation: how to move from a successful trial to a paid weekly plan without awkwardness, pressure, or vague “let me know.”",
    ],
    whyItMatters: [
      "Most tutors lose here not from skill but from unclear next steps. Clarity is kindness.",
    ],
    outcome: [
      "You have a default close, a fallback offer, and a follow‑up message template.",
    ],
    steps: [
      {
        title: "Assume the sale—gently",
        body: "After summarizing wins, transition naturally: “If you want to continue, here’s how weekly works.” Don’t ask “do you think it was okay?”—that invites lukewarm answers.",
        bullets: [
          "Ask logistics questions, not permission questions.",
        ],
      },
      {
        title: "Offer two scheduling choices",
        body: "People decide faster between two options than open‑ended calendars.",
        bullets: [
          "If neither works, ask: “What’s the closest window that would?”",
        ],
      },
      {
        title: "Handle hesitation with a diagnostic question",
        body: "“What part are you unsure about—schedule, price, or fit?” Answer that single thread.",
        bullets: [
          "If it’s price: offer smaller frequency or shorter block—not a panic discount.",
        ],
      },
      {
        title: "Lock with a tiny deposit or first paid date",
        body: "Even a small commitment reduces flake. If you can’t take deposits, lock a first paid session time on the calendar.",
        bullets: [
          "Send a written recap message the same day.",
        ],
      },
    ],
    scripts: [
      {
        title: "Soft close",
        lines: [
          "“If this felt helpful, the next step is weekly sessions so it sticks. Most families do Tuesdays or Thursdays—which is easier for you?”",
        ],
      },
      {
        title: "If they want to discuss with spouse",
        lines: [
          "“Totally—what’s the best way to follow up? I can text you a one‑paragraph summary you can forward.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Write a one‑paragraph recap text to forward",
        prompt:
          "Write a text message a parent can forward to a spouse after a tutoring trial. Include: what we worked on, what improved, homework, proposed weekly plan, price, and next step. Tone: warm, concise, no jargon. Student grade [X] subject [Y]. Details: [paste notes].",
      },
    ],
    mistakes: [
      {
        title: "Ending with “follow up sometime”",
        problem: "You lose momentum.",
        fix: "Always assign a time + channel.",
      },
    ],
    proTips: [
      "Silence after you state the plan is fine. Don’t talk yourself out of a sale.",
    ],
    checklist: [
      "☐ I practiced the soft close 20 times.",
      "☐ I prepared two scheduling options.",
      "☐ I wrote my follow‑up text template.",
      "☐ I defined my fallback offer (2 sessions).",
    ],
  },
};
