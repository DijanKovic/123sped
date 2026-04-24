import {
  BookOpen,
  CalendarClock,
  Rocket,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const ICONS = {
  "book-open": BookOpen,
  users: Users,
  "trending-up": TrendingUp,
  sparkles: Sparkles,
  "calendar-clock": CalendarClock,
  rocket: Rocket,
};

export default function ModuleIcon({ name, className }) {
  const Cmp = ICONS[name] || BookOpen;
  return <Cmp className={className} aria-hidden="true" />;
}
