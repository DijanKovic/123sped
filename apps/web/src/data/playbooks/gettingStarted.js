/** @typedef {import('./types').LessonPlaybook} LessonPlaybook */

/** @type {Record<string, LessonPlaybook>} */
export const gettingStartedPlaybooks = {
  "what-ai-tutoring-is": {
    overview: [
      "This lesson defines AI tutoring the way profitable library tutors actually use it: AI accelerates your prep and personalization, while you still deliver the human teaching parents pay for.",
      "If you get the definition wrong, you either become a gimmick (“AI replaces the tutor”) or you ignore leverage and burn out on prep.",
    ],
    whyItMatters: [
      "Parents buy outcomes and trust. “AI tutoring” only works when it clearly improves teaching quality and speed—not when it sounds futuristic.",
      "Libraries are conservative environments. You need a simple story: you teach, AI helps you prepare faster and more carefully.",
    ],
    outcome: [
      "You can explain your offer in one sentence without sounding like you’re cutting corners.",
      "You have a non‑negotiable quality rule for anything AI generates before a student sees it.",
    ],
    steps: [
      {
        title: "Write your one‑sentence offer (the parent‑friendly version)",
        body: "Say it out loud until it feels natural: “I tutor in person at the library, and I use AI behind the scenes to plan faster and practice smarter—everything your student sees is reviewed by me.” Parents should hear safety, clarity, and human accountability.",
        bullets: [
          "Remove buzzwords like “cutting‑edge model” or “neural”.",
          "Emphasize: in‑person, library, weekly structure, your review step.",
        ],
      },
      {
        title: "Separate the three roles: Teacher, Coach, Operator",
        body: "Teacher is live instruction. Coach is diagnosis + motivation. Operator is scheduling, worksheets, parent updates. AI is best at operator‑speed tasks and draft explanations—never at replacing your eyes on the student while they think.",
        bullets: [
          "Pick one phrase you repeat: “I teach. AI drafts. I verify.”",
        ],
      },
      {
        title: "Create your AI safety checklist (60 seconds, every time)",
        body: "Before anything touches a student: (1) Is it age‑appropriate? (2) Is it correct for the curriculum level you promised? (3) Is it the right difficulty—not busywork, not a trap? (4) Does it match what you observed in session?",
        bullets: [
          "If you can’t verify quickly, shrink the task (3 problems, not 30).",
        ],
      },
      {
        title: "Define what AI tutoring is NOT (your boundaries)",
        body: "You are not outsourcing teaching to a chat window in session. You are not promising grades you can’t influence. You are not doing “AI babysitting.” Write these boundaries as 4 bullet points in your notes app—this prevents scope creep when parents ask for discounts or miracles.",
        bullets: [
          "Add: you don’t share student data unnecessarily; prompts are structured, not personal diaries.",
        ],
      },
      {
        title: "Pick two “AI wins” you will mention in libraries",
        body: "Examples: “I can generate leveled practice in minutes,” “I can create a clean weekly plan fast,” “I can produce alternate explanations when a student is stuck.” Pick two that match your real workflow so you never oversell.",
        bullets: [
          "Practice saying each win in under 8 seconds.",
        ],
      },
      {
        title: "Run a 10‑minute reality check on your tools",
        body: "Open your AI tool and generate one warm‑up, one explanation, and three practice items for a topic you’d actually teach. Time yourself. If prep still feels chaotic, your bottleneck is process—not “more prompts.” Fix process first.",
        bullets: [
          "Save the best output as a template you’ll reuse weekly.",
        ],
      },
    ],
    scripts: [
      {
        title: "To a parent (honest + premium)",
        lines: [
          "“I tutor in person here at the library. I use AI to help me prepare faster—lesson plans, practice, and parent updates—so sessions stay focused. Nothing goes to your student without my review.”",
        ],
      },
      {
        title: "To a teen student (simple)",
        lines: [
          "“I’m the tutor. Sometimes I use AI to make practice sets and explanations, but you and I still do the thinking together.”",
        ],
      },
      {
        title: "If someone jokes: “So the robot teaches?”",
        lines: [
          "“Nope—I teach. AI just speeds up the boring prep so we get more learning time.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a “library‑safe” service description",
        body: "Use AI to tighten your language so it’s parent‑friendly and non‑technical.",
        prompt:
          "Rewrite this tutoring offer for parents in a public library context. Keep it honest: I teach in person; AI helps me prepare. 120 words max, warm tone, no hype, no jargon. Include a clear quality rule: I review everything. Here is my draft: [paste].",
      },
      {
        title: "Create a quick verification rubric for worksheets",
        body: "Turn your instincts into a repeatable checklist you can apply in under a minute.",
        prompt:
          "Create a 10‑item rubric a tutor can use to verify an AI‑generated worksheet for grades [X–Y] in [subject]. Include correctness traps, difficulty calibration, wording clarity, and inclusivity. Output as a checklist with yes/no questions.",
      },
    ],
    mistakes: [
      {
        title: "Overselling “AI” instead of outcomes",
        problem: "Parents hear risk, not magic.",
        fix: "Lead with confidence + structure: weekly plan, measurable skill, your in‑person accountability.",
      },
      {
        title: "Printing AI worksheets without checking",
        problem: "One wrong problem destroys trust fast—libraries talk.",
        fix: "Do the first three problems yourself, every time, until your prompts are reliable.",
      },
      {
        title: "Letting sessions become “AI demos”",
        problem: "Students need thinking reps, not tool tours.",
        fix: "AI happens before/after session; live time is tutoring, not tech showcases.",
      },
    ],
    proTips: [
      "The premium positioning line: “I’m organized enough to be predictable.” Predictability is a luxury product in tutoring.",
      "If you teach multiple ages, keep two prompt libraries—wording that works for 4th grade will insult 10th graders and confuse parents.",
      "When you feel imposter syndrome, remember: parents pay for clarity, kindness, and consistency—AI just helps you deliver those more often.",
    ],
    checklist: [
      "☐ I can explain AI tutoring in one sentence (parent‑friendly).",
      "☐ I wrote my “AI is NOT” boundaries list.",
      "☐ I completed the AI safety checklist on a real draft worksheet.",
      "☐ I chose two AI wins I will mention in public conversations.",
      "☐ I timed my prep workflow once and identified the bottleneck.",
    ],
  },
  "library-system": {
    overview: [
      "This lesson breaks down the library tutoring system as a repeatable loop: show up → offer value fast → book trials → convert to a simple weekly plan.",
      "Libraries work because they’re trusted public spaces with built‑in traffic—if you respect norms and stay consistent, demand compounds.",
    ],
    whyItMatters: [
      "Most tutors fail from randomness: random days, random offers, random follow‑ups. The library model wins from repetition and low customer acquisition friction.",
    ],
    outcome: [
      "You can describe your weekly rhythm (days/times) and your trial offer without sounding salesy.",
      "You know exactly what “counts” as a successful first touch in a library.",
    ],
    steps: [
      {
        title: "Pick your anchor schedule (before you recruit students)",
        body: "Choose 1–2 days per week and 2–3 hour windows you can keep for 8 weeks. This is your product: reliability. If your schedule drifts, your brand drifts.",
        bullets: [
          "Write it as: “Tues/Thu, 4:00–6:30pm, Downtown Library, Study Tables near [landmark].”",
        ],
      },
      {
        title: "Choose your “home tables” and route inside the building",
        body: "Walk the library like a professional: where you’ll sit, where it’s quiet enough, where staff can see you’re respectful. Introduce yourself to staff once: you’re a tutor, you’ll keep noise low, you’ll clean up.",
        bullets: [
          "Avoid chokepoints (kid zones) if you need focus for older students.",
        ],
      },
      {
        title: "Define your free trial as a micro‑product",
        body: "A trial should be small, specific, and outcome‑oriented: “20 minutes: diagnose the stuck point + leave with a 3‑step plan.” Not “free tutoring forever.”",
        bullets: [
          "Write your trial promise in 12–18 words.",
        ],
      },
      {
        title: "Build your first‑touch loop (see → greet → qualify → offer)",
        body: "See: notice homework/test books. Greet: warm, brief. Qualify: one question about what they’re working on. Offer: trial framed as help, not sales.",
        bullets: [
          "Your goal is a booked time, not a debate.",
        ],
      },
      {
        title: "Create a follow‑up ritual for the same day",
        body: "If someone is interested but not ready, end with: “I’m here Tuesdays/Thursdays—want me to save you a 20‑minute slot next week?” Put it in your phone notes: name + subject + day they chose.",
        bullets: [
          "Never leave a warm lead without a next time.",
        ],
      },
      {
        title: "Set conversion rules: what “paid” means",
        body: "Paid should be a simple weekly plan: same day, same length, clear price, clear cancellation policy. If you can’t explain it in 20 seconds, it’s too complex.",
        bullets: [
          "Start with 4‑week blocks so commitment feels manageable.",
        ],
      },
    ],
    scripts: [
      {
        title: "Staff introduction (first time)",
        lines: [
          "“Hi, I’m [Name]. I tutor students here on [days]. I keep sessions quiet and clean up after myself. If there’s a preferred area for tutoring—or anything I should avoid—please tell me.”",
        ],
      },
      {
        title: "Parent opener (helpful, not pushy)",
        lines: [
          "“Hi—looks like homework night. I tutor math/reading here on [days]. If you ever want a free 20‑minute ‘stuck point’ check, I do those at [time]. No pressure—just a clearer plan.”",
        ],
      },
      {
        title: "If they say “We’re just browsing”",
        lines: [
          "“Totally—if homework ever gets stressful, I’m here [days]. If you want, I can write down my times.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a weekly operations checklist",
        body: "Make your library days feel professional: what you pack, what you do on arrival, how you close out.",
        prompt:
          "Create a one‑page weekly checklist for an in‑person tutor working in a public library on [days/times]. Include: arrival setup, hygiene for shared tables, session structure, parent communication, and end‑of‑day review. Keep it practical, 15–25 lines.",
      },
    ],
    mistakes: [
      {
        title: "Showing up inconsistently",
        problem: "Libraries reward regulars; random visits look hobbyist.",
        fix: "Miss fewer days than competitors. If you skip, you reset trust.",
      },
      {
        title: "Pitching price before pain",
        problem: "You look transactional before you’re trusted.",
        fix: "Lead with diagnosis + a small win; price comes after value.",
      },
    ],
    proTips: [
      "Carry a paper tent sign: “Math/Reading Help — Free 20‑min plan checks — [Your Name]”. Libraries vary—ask staff what signage is allowed.",
      "Track “touches per hour” for practice: polite conversations attempted, not just wins.",
    ],
    checklist: [
      "☐ I chose anchor days/times for 8 weeks.",
      "☐ I picked my home tables and introduced myself to staff.",
      "☐ I wrote my trial offer in 12–18 words.",
      "☐ I practiced the first‑touch loop out loud 10 times.",
      "☐ I defined my paid weekly plan in under 20 seconds of speech.",
    ],
  },
  "materials-and-setup": {
    overview: [
      "This lesson is your field kit: what you carry, how you organize notes, and how you build a reusable AI prompt library so prep stays lightweight.",
    ],
    whyItMatters: [
      "Premium tutoring feels organized. Chaos reads as amateur—and parents notice faster than students.",
    ],
    outcome: [
      "You have a backpack kit and a note format you can use in every session.",
      "You have 3 saved prompts you’ll reuse weekly.",
    ],
    steps: [
      {
        title: "Build the “Session Kit” (minimum viable professionalism)",
        body: "Notebook (bound), pens, pencils, eraser, sticky tabs, a folder with blank paper, a simple timer, and a printed “parent update” template. Optional: small whiteboard if allowed.",
        bullets: [
          "Keep everything visible but tidy—your desk is part of your brand.",
        ],
      },
      {
        title: "Create your student note template (one page per student)",
        body: "Fields: name/grade, parent contact (if permitted), goal, current topic, gaps, today’s plan, homework assigned, next session focus.",
        bullets: [
          "Spend 60 seconds updating this after every session.",
        ],
      },
      {
        title: "Make a “prompt library” file with 3 starters",
        body: "Start with: lesson plan prompt, worksheet prompt, weekly schedule prompt. You’ll expand later—consistency beats cleverness at the start.",
        bullets: [
          "Name files clearly: LP_v1, WS_v1, WK_v1.",
        ],
      },
      {
        title: "Decide your device rules (and communicate them)",
        body: "If you use a laptop/tablet for AI prep, decide when it’s open. Many tutors: device closed during teaching, open only for generating/adjusting materials between sets.",
        bullets: [
          "Parents should never wonder whether you’re “half‑present.”",
        ],
      },
      {
        title: "Pack the night before (non‑negotiable)",
        body: "A 2‑minute pack routine prevents forgotten folders—the classic amateur tell.",
        bullets: [
          "Use a checklist for the first month until it’s automatic.",
        ],
      },
    ],
    scripts: [
      {
        title: "Explaining your folder to a parent (confidence)",
        lines: [
          "“I keep a simple running log for each student—what we practiced, what stuck, and what we’re doing next—so progress doesn’t depend on memory.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a printable session note layout",
        prompt:
          "Design a printable one‑page student session log for a tutor. Fields should include goals, topics, errors observed, practice assigned, and next session plan. Keep it clean, black‑and‑white, lots of whitespace.",
      },
      {
        title: "Turn messy notes into a parent update paragraph",
        prompt:
          "Convert these tutor notes into a 120‑word parent update that is warm, specific, and action‑oriented. Notes: [paste].",
      },
    ],
    mistakes: [
      {
        title: "Too many apps",
        problem: "Tool stack creep kills speed.",
        fix: "One notes system + one AI workflow + paper backups.",
      },
    ],
    proTips: [
      "Pre‑print 10 parent update slips—you’ll feel faster even when you don’t use them all.",
    ],
    checklist: [
      "☐ Session kit packed and labeled.",
      "☐ Student note template printed or templated.",
      "☐ Three prompts saved and tested once each.",
      "☐ Device rules decided + practiced explanation.",
      "☐ Night‑before packing routine scheduled.",
    ],
  },
  "choose-subjects": {
    overview: [
      "This lesson helps you pick a narrow tutoring lane so your marketing, practice sets, and library conversations all reinforce each other.",
    ],
    whyItMatters: [
      "Generalists compete on price. Specialists compete on clarity—and clarity converts.",
    ],
    outcome: [
      "You can state your subject + age band + outcome promise in one line.",
    ],
    steps: [
      {
        title: "List 5 subjects you could teach—then cross out 4",
        body: "Keep the intersection of: demand in your area, your confidence, and your ability to show progress quickly. Early wins beat ego.",
        bullets: [
          "Good early lanes: arithmetic → pre‑algebra, reading comprehension grades 3–7, homework accountability grades 6–9.",
        ],
      },
      {
        title: "Pick one age band (at first)",
        body: "Different ages need different tone, pacing, and parent communication. Narrow until you’re fully booked.",
        bullets: [
          "Example: “Grades 4–7 math foundations.”",
        ],
      },
      {
        title: "Write your outcome promise (measurable-ish)",
        body: "Not “get better at math.” Better: “turn missing steps into consistent written work,” “raise accuracy on fraction problems,” “read with fewer stops and stronger summaries.”",
        bullets: [
          "If you can’t observe it in 2 sessions, it’s too vague.",
        ],
      },
      {
        title: "Run a 30‑minute competitor scan",
        body: "Search local tutors/kumon/etc. Note positioning and prices. You’re not copying—you’re choosing whitespace.",
        bullets: [
          "Decide: are you the affordable organizer, the premium diagnostician, or the specialist in one skill?",
        ],
      },
      {
        title: "Create your “no list” (what you don’t teach)",
        body: "Saying no increases trust. Examples: “I don’t do AP Chemistry,” “I don’t do college‑level,” “I don’t do test‑only cramming without baseline skills.”",
        bullets: [
          "Practice saying no politely (script below).",
        ],
      },
    ],
    scripts: [
      {
        title: "Polite “not my lane” redirect",
        lines: [
          "“That’s a little outside my specialty—I focus on [lane] because that’s where I get the fastest wins. If you want, I can still help you find a good direction.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a positioning paragraph for your lane",
        prompt:
          "I tutor [subject] for [age band] in a public library. Write a 90‑word positioning statement emphasizing outcomes and structure, not buzzwords. Include who it’s for and who it’s not for.",
      },
    ],
    mistakes: [
      {
        title: "Teaching everything to everyone",
        problem: "You’ll prep forever and market nowhere.",
        fix: "Narrow for 6–8 weeks; expand only when booked.",
      },
    ],
    proTips: [
      "If you’re young, narrowness reads as credibility: “I focus on exactly this skill chain.”",
    ],
    checklist: [
      "☐ I chose one primary subject lane.",
      "☐ I chose one age band.",
      "☐ I wrote an outcome promise I can observe quickly.",
      "☐ I wrote my “no list.”",
      "☐ I practiced my positioning paragraph aloud.",
    ],
  },
};
