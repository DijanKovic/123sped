/** @typedef {import('./types').LessonPlaybook} LessonPlaybook */

/** @type {Record<string, LessonPlaybook>} */
export const scalingPlaybooks = {
  "more-students-more-libraries": {
    overview: [
      "This lesson expands demand carefully: when to add a second library, how to clone your system without cloning chaos, and how to protect your reputation as you grow.",
    ],
    whyItMatters: [
      "Premature expansion spreads you thin and breaks consistency—the exact opposite of premium positioning.",
    ],
    outcome: [
      "You have expansion criteria (numbers + operational stability) and a launch checklist for a second site.",
    ],
    steps: [
      {
        title: "Set minimum expansion criteria",
        body: "Example criteria: 8+ recurring weekly sessions OR consistent waitlist OR stable prep time under X hours/week. Pick numbers that match your life.",
        bullets: [
          "If you’re still rewriting prompts weekly, fix systems first.",
        ],
      },
      {
        title: "Clone the core loop, not random marketing",
        body: "Same trial, same placement approach, same templates, same parent update rhythm. Expansion is repetition with a new address.",
        bullets: [
          "Change only what the building requires (noise norms, tables).",
        ],
      },
      {
        title: "Run a 2‑week “soft launch” at the new library",
        body: "Show up consistently before heavy outreach. Staff familiarity reduces friction.",
        bullets: [
          "Bring the same signage, same business card, same schedule card.",
        ],
      },
      {
        title: "Track leads separately per site for 30 days",
        body: "Simple spreadsheet: touches, trials, closes. If conversion drops, you’re missing trust signals—fix before scaling further.",
        bullets: [
          "If one site underperforms, audit environment differences first.",
        ],
      },
    ],
    scripts: [
      {
        title: "Introducing yourself at a new library",
        lines: [
          "“Hi, I’m [Name]. I tutor on [days/times] at [other branch] and I’m starting the same schedule here because families asked. Happy to follow any preferences you have for seating and noise.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a second‑site launch checklist",
        prompt:
          "Create a checklist for launching tutoring sessions at a second public library location. Include staff introduction, signage, weekly schedule card, trial offer, safety norms, and lead tracking. Tone: practical.",
      },
    ],
    mistakes: [
      {
        title: "Expanding because you’re bored",
        problem: "You break profitability and quality.",
        fix: "Expand on demand signals + stable systems.",
      },
    ],
    proTips: [
      "Different libraries have different cultures—spend your first sessions listening more than pitching.",
    ],
    checklist: [
      "☐ I wrote my expansion criteria on paper.",
      "☐ I scheduled a 2‑week soft launch block.",
      "☐ I created a lead tracker per site.",
      "☐ I practiced my new‑site intro with staff language.",
    ],
  },
  "train-helpers": {
    overview: [
      "This lesson turns your personal method into something teachable: shadowing, checklists, and quality control so help actually helps.",
    ],
    whyItMatters: [
      "If you hire or partner carelessly, your brand becomes inconsistent—and libraries remember inconsistency.",
    ],
    outcome: [
      "You have a training path: shadow → co‑teach → solo with audits.",
    ],
    steps: [
      {
        title: "Write your “Standard Operating Session” (SOS) doc",
        body: "1–2 pages: session structure, tone rules, what to never say, how to handle frustration, how to end, how to write parent updates.",
        bullets: [
          "Use plain language—helpers aren’t you yet.",
        ],
      },
      {
        title: "Shadowing protocol (first 3 sessions)",
        body: "They watch, take notes on your moves, debrief 10 minutes after. They do not teach yet.",
        bullets: [
          "Give them a observation checklist: engagement, pacing, corrections.",
        ],
      },
      {
        title: "Co‑teach: they run chunks, you supervise",
        body: "Start with guided practice chunk only. You intervene only for safety/brand risks.",
        bullets: [
          "Record debrief notes: one strength, one fix next time.",
        ],
      },
      {
        title: "Quality audits: random review weekly",
        body: "Read their parent updates and glance at assigned homework. Catch drift early.",
        bullets: [
          "Make audits kind—culture beats fear.",
        ],
      },
    ],
    scripts: [
      {
        title: "Helper debrief prompt",
        lines: [
          "“What did you see that worked? What would you do differently next time? Which step felt hardest for the student?”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a trainee observation checklist",
        prompt:
          "Create a 1‑page observation checklist for a trainee watching an in‑person tutoring session. Categories: rapport, clarity, pacing, error handling, practice design, parent communication. Use checkboxes and short prompts.",
      },
    ],
    mistakes: [
      {
        title: "Letting helpers improvise too early",
        problem: "Brand inconsistency.",
        fix: "Constrain early work to your templates.",
      },
    ],
    proTips: [
      "Pay well for reliability, not “credentials theater”—on‑time and coachable beats fancy resumes early.",
    ],
    checklist: [
      "☐ I wrote the SOS doc.",
      "☐ I scheduled 3 shadow sessions.",
      "☐ I created a trainee observation checklist.",
      "☐ I defined audit cadence for parent updates.",
    ],
  },
  "increase-income": {
    overview: [
      "This lesson is a sane path to higher income: utilization first, rate increases second, upsells last—without turning into a pushy salesperson.",
    ],
    whyItMatters: [
      "If you raise prices before you’re booked, you slow learning demand signals. If you never raise prices, you trap yourself.",
    ],
    outcome: [
      "You have a simple ladder: fill → raise → add optional add‑ons.",
    ],
    steps: [
      {
        title: "Measure utilization for 2 weeks",
        body: "What percent of your available tutoring slots are filled? If low, fix acquisition and retention—not prices.",
        bullets: [
          "Track no‑shows and cancels separately—they’re leakage.",
        ],
      },
      {
        title: "Raise rates on new clients first",
        body: "Grandfather existing families for a period if needed; announce new rate confidently with value framing.",
        bullets: [
          "Increase in small steps you can say without flinching.",
        ],
      },
      {
        title: "Add one premium upsell only after stable demand",
        body: "Examples: exam week intensive, extra homework grading, short progress report.",
        bullets: [
          "Upsells should reduce parent anxiety, not confuse pricing.",
        ],
      },
      {
        title: "Reinvest time savings into outcomes",
        body: "Use AI + templates to buy time, then spend that time on diagnostics and communication—that supports higher prices.",
        bullets: [
          "Premium is perceived value, not more worksheets.",
        ],
      },
    ],
    scripts: [
      {
        title: "Raising prices (new clients)",
        lines: [
          "“My standard weekly rate is now $[X]—I’m keeping a few legacy spots at the old rate for current families for [timeframe].”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Draft a rate increase FAQ",
        prompt:
          "Write a calm FAQ for tutoring clients about a rate increase for new clients, with optional grandfathering language. Include: why, what changes, how scheduling works, and reassurance about quality. 10 Q&As max.",
      },
    ],
    mistakes: [
      {
        title: "Competing on discounts",
        problem: "You attract flaky demand.",
        fix: "Compete on clarity, consistency, and measurable wins.",
      },
    ],
    proTips: [
      "If you’re fully booked for 3 weeks straight, that’s your market signal to raise rates or add a second block.",
    ],
    checklist: [
      "☐ I measured utilization for 2 weeks.",
      "☐ I set a new client rate and grandfather policy.",
      "☐ I wrote one optional upsell with a clear benefit.",
      "☐ I identified one hour/week to reinvest into diagnostics/updates.",
    ],
  },
};
