import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import { motion } from "motion/react";
import {
  containerVariants,
  fadeIn,
  itemVariants,
} from "@/utils/animations";
import { modules } from "@/data/courseContent";
import { useCourseProgress } from "@/hooks/useCourseProgress";

/**
 * @param {object} props
 * @param {string} props.title
 * @param {{ href: string, label: string }[]} props.navItems
 * @param {import('react').ReactNode} props.children
 * @param {'card' | 'ghost'} [props.surface]
 */
export default function AppShell({ title, navItems, children, surface = "card" }) {
  const location = useLocation();
  const pathname = location?.pathname || "/";
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activePath, setActivePath] = useState(null);
  const progress = useCourseProgress(modules);

  useEffect(() => {
    if (typeof window === "undefined") {
      setActivePath(null);
    } else {
      setActivePath(window.location.pathname || "/");
    }
  }, []);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  const isGhost = surface === "ghost";

  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#F4F2FF] font-inter text-zinc-900">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-white via-[#F4F2FF] to-[#FAF7F2]" />
        <div className="absolute -left-32 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-400/15 blur-3xl animate-float" />
        <div className="absolute -right-40 top-24 h-[520px] w-[520px] rounded-full bg-violet-400/15 blur-3xl animate-float" />
        <div className="absolute bottom-[-220px] left-1/3 h-[520px] w-[520px] rounded-full bg-amber-200/20 blur-3xl animate-float" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(15,23,42,0.06)_1px,transparent_0)] bg-[length:28px_28px] opacity-[0.18]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className="sticky top-0 z-30 border-b border-white/50 bg-white/55 backdrop-blur-xl supports-[backdrop-filter]:bg-white/45"
      >
        <div className="mx-auto max-w-6xl px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <div className="flex min-w-0 items-center gap-3">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-xl border border-white/60 bg-white/70 px-3 py-2 text-sm font-semibold text-zinc-800 shadow-sm transition hover:bg-white md:hidden"
                onClick={() => setMobileOpen((v) => !v)}
                aria-label="Toggle menu"
              >
                Menu
              </button>
              <motion.a
                href="/"
                className="min-w-0 text-base font-semibold tracking-tight text-zinc-950 transition hover:text-zinc-700"
                whileHover={{ y: -1 }}
                whileTap={{ scale: 0.99 }}
              >
                <span className="block truncate">{title}</span>
              </motion.a>
            </div>

            <div className="hidden items-center gap-5 md:flex">
              {navItems.map((item) => {
                const isActive = activePath === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`relative text-sm font-semibold transition ${
                      isActive ? "text-zinc-950" : "text-zinc-600 hover:text-zinc-950"
                    }`}
                    whileHover={{ y: -1 }}
                    whileTap={{ scale: 0.99 }}
                  >
                    {item.label}
                    {isActive ? (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute -bottom-2 left-0 right-0 mx-auto h-0.5 w-8 rounded-full bg-gradient-to-r from-indigo-600 to-violet-600"
                      />
                    ) : null}
                  </motion.a>
                );
              })}
            </div>
          </div>

          <div className="mt-3 hidden md:block">
            <div className="flex items-center justify-between gap-3 text-xs text-zinc-600">
              <div className="font-medium">
                Course progress:{" "}
                <span className="text-zinc-950">
                  {progress.completed}/{progress.total} lessons
                </span>
              </div>
              <div className="font-semibold text-zinc-900">{progress.percent}%</div>
            </div>
            <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-zinc-200/70">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-indigo-600 via-violet-600 to-fuchsia-500"
                initial={false}
                animate={{ width: `${progress.percent}%` }}
                transition={{ type: "spring", stiffness: 120, damping: 18 }}
              />
            </div>
          </div>
        </div>
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 py-8 md:grid-cols-[260px_1fr]">
        <motion.aside
          className="hidden md:block"
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.45, delay: 0.05 }}
        >
          <div className="rounded-3xl border border-white/60 bg-white/55 p-2 shadow-lg shadow-indigo-500/10 backdrop-blur-xl">
            <div className="border-b border-white/50 px-4 py-3">
              <div className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                Navigation
              </div>
              <div className="mt-1 text-sm font-semibold text-zinc-900">
                Learning workspace
              </div>
            </div>
            <nav className="p-2">
              {navItems.map((item, idx) => {
                const isActive = activePath === item.href;
                return (
                  <motion.a
                    key={item.href}
                    href={item.href}
                    className={`mb-1 block rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                      isActive
                        ? "bg-zinc-950 text-white shadow-md shadow-indigo-500/20"
                        : "text-zinc-700 hover:bg-white/70"
                    }`}
                    initial={{ opacity: 0, x: -8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    whileHover={{ x: 3 }}
                  >
                    {item.label}
                  </motion.a>
                );
              })}
            </nav>
          </div>
        </motion.aside>

        <motion.main
          {...fadeIn}
          className="min-w-0"
        >
          {mobileOpen ? (
            <motion.div
              className="mb-4 rounded-3xl border border-white/60 bg-white/70 p-2 shadow-lg backdrop-blur-xl md:hidden"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
            >
              <nav className="p-2">
                {navItems.map((item) => {
                  const isActive = activePath === item.href;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      className={`mb-1 block rounded-2xl px-3 py-2 text-sm font-semibold ${
                        isActive
                          ? "bg-zinc-950 text-white"
                          : "text-zinc-700 hover:bg-white/70"
                      }`}
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </a>
                  );
                })}
              </nav>
            </motion.div>
          ) : null}

          <motion.div
            key={pathname}
            variants={containerVariants}
            initial="initial"
            animate="animate"
            className={
              isGhost
                ? ""
                : "rounded-[28px] border border-white/60 bg-white/70 p-5 shadow-xl shadow-indigo-500/10 backdrop-blur-xl md:p-8"
            }
          >
            <motion.div variants={itemVariants}>{children}</motion.div>
          </motion.div>

          <motion.div
            className="mt-8 text-center text-xs text-zinc-600"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.15 }}
          >
            Built for execution: show up, follow the playbook, ship results.
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}
