/** @typedef {import('./types').LessonPlaybook} LessonPlaybook */

/** @type {Record<string, LessonPlaybook>} */
export const gettingClientsPlaybooks = {
  "approach-parents": {
    overview: [
      "This lesson is the field guide for starting respectful conversations with parents and students in a library without feeling creepy, salesy, or “random adult approaching kids.”",
    ],
    whyItMatters: [
      "Your entire acquisition engine is proximity + trust. If your approach is off by 10%, you’ll get avoided—hard to recover in the same building.",
    ],
    outcome: [
      "You have a repeatable approach sequence and a default opener you can use 50 times until it feels automatic.",
    ],
    steps: [
      {
        title: "Set your approach rules (safety + optics first)",
        body: "Defaults: speak from a few feet away, angled posture (not squared‑up), keep volume low, never block exits, prefer addressing the adult if a minor is present. If only a student is present, keep it short and public—your goal is to route to a parent when possible.",
        bullets: [
          "If staff ever hints you’re disruptive, adjust immediately—your permission to operate is social.",
        ],
      },
      {
        title: "Use the “help lens” opener (not the pitch lens)",
        body: "Start with observation + permission: “Hi—sorry to interrupt—looks like homework night. I tutor here on [days]. If you ever want a quick plan for what to practice, I do free 20‑minute checks.”",
        bullets: [
          "Ask permission: “Is it okay if I share how that works?”",
        ],
      },
      {
        title: "Qualify in 2 questions (fast, respectful)",
        body: "Q1: “What subject is the sticky one right now?” Q2: “Is there a test coming up, or is it more ongoing homework?” These tell you urgency, lane fit, and what trial to offer.",
        bullets: [
          "If it’s not your lane, be honest and exit gracefully—trust rises.",
        ],
      },
      {
        title: "Offer a micro‑trial with a time boundary",
        body: "“If you want, we can do 20 minutes today—I'll pinpoint the first skill to fix and leave you with a 3‑step plan.” Time boundaries reduce fear.",
        bullets: [
          "If today is bad, book next week immediately.",
        ],
      },
      {
        title: "End with a written takeaway (even tiny)",
        body: "A sticky note with your name + days + what you’ll do in 20 minutes increases follow‑through dramatically.",
        bullets: [
          "Keep prewritten sticky templates to stay fast.",
        ],
      },
    ],
    scripts: [
      {
        title: "Student‑only situation (careful tone)",
        lines: [
          "“Hey—no pressure. I tutor here on [days]. If your parent/guardian is around, I can explain a free 20‑minute study check. I don’t start sessions without a guardian for younger students.”",
        ],
      },
      {
        title: "Busy parent brushing you off",
        lines: [
          "“Totally get it—if homework fights start happening, I’m here [days]. Want a sticky with my times?”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate 10 respectful openers + 10 polite exits",
        prompt:
          "Create 10 respectful openers and 10 polite exits for an in‑person tutor approaching families in a public library. Constraints: prioritize child safety optics, avoid pressure, include variations for busy/rushed parents. Keep each line under 35 words.",
      },
    ],
    mistakes: [
      {
        title: "Talking too long",
        problem: "You become a nuisance.",
        fix: "Cap yourself at ~30–45 seconds unless they invite more.",
      },
      {
        title: "Debating education philosophy",
        problem: "You lose the booking.",
        fix: "Diagnose → offer trial → schedule.",
      },
    ],
    proTips: [
      "Mirror their language: if they say “reading,” don’t say “literacy intervention.”",
      "Smile slower—fast smiles read as salesy in some cultures; calm reads premium.",
    ],
    checklist: [
      "☐ I wrote my safety/approach rules.",
      "☐ I memorized one opener + one exit.",
      "☐ I practiced 2‑question qualification 10 times.",
      "☐ I prepared sticky notes / a card with times.",
      "☐ I role‑played a student‑only scenario aloud.",
    ],
  },
  "conversation-scripts": {
    overview: [
      "This lesson gives you copy‑pasteable scripts that still sound human. Scripts aren’t robotic—they’re training wheels until your tone becomes natural.",
    ],
    whyItMatters: [
      "In libraries, hesitation reads as inexperience. Scripts let you speak confidently while you’re still learning.",
    ],
    outcome: [
      "You have 3 scripts: opener, trial invite, objection handling—and you’ve said them out loud 20+ times.",
    ],
    steps: [
      {
        title: "Pick one “signature opener” and commit for 2 weeks",
        body: "Switching scripts daily makes you sound unsure. Commit, measure results, then tweak one variable at a time (wording, offer size, time slot).",
        bullets: [
          "Track: conversations → trials booked → paid conversions.",
        ],
      },
      {
        title: "Build the trial invite as a two‑beat rhythm",
        body: "Beat 1: value (“quick plan”). Beat 2: low risk (“20 minutes, free, right here”). Pause after beat 1—let them respond.",
        bullets: [
          "Silence is not awkward; it’s respect.",
        ],
      },
      {
        title: "Create 6 objection responses (short)",
        body: "Common objections: no time, not sure, need spouse, student resistant, price worry (early), “we have a tutor.” Each gets a 2‑sentence response that ends with a next step.",
        bullets: [
          "Never argue—acknowledge, narrow, offer smaller next step.",
        ],
      },
      {
        title: "Practice with a friend: 10 rapid reps",
        body: "Have them throw random objections. Your goal is calm tone + closing to a time.",
        bullets: [
          "Record audio and listen for uptalk—reduce it.",
        ],
      },
    ],
    scripts: [
      {
        title: "Opener + permission",
        lines: [
          "“Hi—sorry to interrupt. I tutor math/reading here on [days]. If it’s ever helpful, I do free 20‑minute ‘stuck point’ checks. Is it okay if I explain what that means in 10 seconds?”",
        ],
      },
      {
        title: "Spouse objection",
        lines: [
          "“Totally—if you want, take this sticky with times. If they’re interested, you can text/call me here: [number]. I can also meet both of you for 2 minutes next week.”",
        ],
      },
      {
        title: "Student resistant",
        lines: [
          "“No problem—some days homework feels awful. If you ever want, we can try one tiny skill for 10 minutes and stop if it’s not helping.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate objection handling cards",
        prompt:
          "Create objection handling responses for a library tutor offering a free 20‑minute diagnostic. Objections: no time, skeptical spouse, already have tutor, student hates tutoring, worried about privacy, worried about cost later. For each: 2 sentences max + a question that moves toward scheduling.",
      },
    ],
    mistakes: [
      {
        title: "Sounding rehearsed",
        problem: "People disengage.",
        fix: "Vary only the middle clause; keep structure constant.",
      },
    ],
    proTips: [
      "End questions with scheduling: “Tuesday at 4:30 or Thursday at 5?” assumes a move forward.",
    ],
    checklist: [
      "☐ I chose one opener for 2 weeks.",
      "☐ I wrote 6 objection responses.",
      "☐ I practiced 10 rapid reps with a friend or voice memo.",
      "☐ I recorded myself and reduced uptalk.",
      "☐ I printed scripts on a small card for week 1.",
    ],
  },
  "offer-free-trial": {
    overview: [
      "This lesson turns “free trial” from a discount into a structured product: a bounded experience that proves diagnosis + teaching + follow‑through.",
    ],
    whyItMatters: [
      "Free only converts if it feels valuable and professional. Sloppy trials attract free‑seekers; crisp trials attract paying families.",
    ],
    outcome: [
      "You can run a 20–30 minute trial with a repeatable agenda and a clean close to next session.",
    ],
    steps: [
      {
        title: "Define the trial deliverables (what they walk away with)",
        body: "Minimum: (1) one identified bottleneck skill, (2) one practiced fix, (3) a 3‑item homework plan, (4) a recommended weekly plan option.",
        bullets: [
          "Write these on a card you show parents at the end—visuals feel premium.",
        ],
      },
      {
        title: "Pre‑trial intake (60 seconds)",
        body: "Ask grade, class/topic, what happened last week, what they tried. Don’t interrogate—just enough to pick the right micro‑skill.",
        bullets: [
          "If parent is present, invite them to observe quietly.",
        ],
      },
      {
        title: "Teach one micro‑skill only",
        body: "Trials fail when you “teach the whole course.” Pick one skill that can improve in 15 minutes: a procedure, a reading move, a computation habit.",
        bullets: [
          "Announce the skill: “Today we’re fixing X.”",
        ],
      },
      {
        title: "Close with two choices (schedule psychology)",
        body: "“If this was helpful, the next step is weekly sessions—same time each week. Do you want Tuesdays at 4:30 or Thursdays at 5?”",
        bullets: [
          "If hesitant: offer a smaller paid bridge: two paid sessions + decision point.",
        ],
      },
    ],
    scripts: [
      {
        title: "Trial framing (low pressure, high clarity)",
        lines: [
          "“In the next 20 minutes, I’m going to find the exact step that’s breaking, practice it together, then leave you with a tiny homework plan for the week.”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a trial session agenda template",
        prompt:
          "Create a 25‑minute trial tutoring agenda for in‑person library tutoring in [subject] for grade [X]. Include timing blocks, parent observation notes, and a closing script that offers weekly sessions without sounding pushy.",
      },
    ],
    mistakes: [
      {
        title: "Trials that wander",
        problem: "No clear win.",
        fix: "Name the skill at minute 2; return to it repeatedly.",
      },
    ],
    proTips: [
      "Parents buy confidence. Speak slowly when summarizing wins—your calm is part of the product.",
    ],
    checklist: [
      "☐ I defined trial deliverables.",
      "☐ I wrote my 60‑second intake questions.",
      "☐ I chose 3 micro‑skills I can teach fast in my lane.",
      "☐ I practiced a two‑choice close out loud.",
      "☐ I printed a takeaway card template.",
    ],
  },
  "placement-test": {
    overview: [
      "This lesson builds a placement test that feels helpful—not like school punishment—and produces a clear “first skill to fix” story parents understand.",
    ],
    whyItMatters: [
      "A good placement test is sales infrastructure: it makes the problem real and makes your plan look inevitable.",
    ],
    outcome: [
      "You have a 5–10 question mini test + a scoring rubric + a parent explanation script.",
    ],
    steps: [
      {
        title: "Choose test goals: diagnose gaps, not ego",
        body: "You’re not proving the student is bad. You’re mapping: speed, accuracy, vocabulary, procedure, reading comprehension, or executive function (showing work).",
        bullets: [
          "Pick 2 dimensions max per trial so you don’t overwhelm.",
        ],
      },
      {
        title: "Write questions in a ladder (easy → medium → stretch)",
        body: "Start easy to build confidence and reveal careless errors vs conceptual errors. End with one stretch item to show ambition—never humiliate.",
        bullets: [
          "Keep it to 10 minutes of work for the student.",
        ],
      },
      {
        title: "Administer like a clinician (neutral, warm)",
        body: "Explain: “This isn’t for a grade—it's a map so we don’t waste time.” Timer visible. Encourage thinking aloud on one item if helpful.",
        bullets: [
          "Take notes on patterns, not just wrong answers.",
        ],
      },
      {
        title: "Translate results into a parent story",
        body: "Use: “Here’s what went well / here’s the pattern / here’s the first skill that unlocks progress / here’s what we’ll do weekly.”",
        bullets: [
          "Parents remember stories, not numbers.",
        ],
      },
    ],
    scripts: [
      {
        title: "Parent explanation (after mini test)",
        lines: [
          "“We found a consistent pattern: [pattern]. That usually means [skill] is the first domino. If we train that for a few weeks, homework gets easier in [these ways].”",
        ],
      },
    ],
    aiUsage: [
      {
        title: "Generate a balanced mini placement test",
        prompt:
          "Create a 8‑question placement mini‑test for [grade] [subject]. Provide difficulty ladder, answer key, and a short rubric describing common wrong‑answer patterns and what each implies instructionally.",
      },
    ],
    mistakes: [
      {
        title: "Too many topics in one test",
        problem: "Confusing results, unclear plan.",
        fix: "Keep it narrow; expand in paid sessions.",
      },
    ],
    proTips: [
      "Photograph the student’s work (with permission) so you can reference progress later—powerful retention tool.",
    ],
    checklist: [
      "☐ I wrote an 8‑question ladder test for my lane.",
      "☐ I wrote a neutral administration script.",
      "☐ I created a rubric for patterns (not just grading).",
      "☐ I practiced the parent explanation story aloud.",
      "☐ I printed blank answer sheets.",
    ],
  },
};
