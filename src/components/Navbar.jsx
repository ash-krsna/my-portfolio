import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { identity, navItems } from "../data/content";

export function Navbar({ activeSection }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-white/10 bg-[#050812]/80 px-3 py-3 shadow-[0_18px_70px_rgba(0,0,0,0.38)] backdrop-blur-2xl">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <span className="brand-mark">{identity.initials}</span>
          <span className="hidden min-w-0 sm:block">
            <span className="block font-display text-sm font-bold text-white">{identity.name}</span>
            <span className="block text-[11px] font-medium uppercase text-cyan-100/50">
              Frontend Developer
            </span>
          </span>
        </a>

        <div className="hidden items-center rounded-full border border-white/10 bg-white/[0.035] p-1 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`relative rounded-full px-4 py-2 text-sm font-semibold transition ${
                activeSection === item.id ? "text-white" : "text-slate-400 hover:text-white"
              }`}
            >
              {activeSection === item.id ? (
                <motion.span
                  layoutId="nav-active-pill"
                  className="absolute inset-0 rounded-full bg-white/10 ring-1 ring-white/10"
                  transition={{ type: "spring", stiffness: 420, damping: 34 }}
                />
              ) : null}
              <span className="relative z-10">{item.label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <a
            href={identity.github}
            target="_blank"
            rel="noreferrer"
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-white transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:text-cyan-200 md:inline-flex"
            aria-label="Open GitHub"
          >
            <i className="bi bi-github" />
          </a>
          <a href="#contact" className="btn btn-compact hidden md:inline-flex">
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white lg:hidden"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            <i className={`bi ${open ? "bi-x-lg" : "bi-list"} text-lg`} />
          </button>
        </div>
      </nav>

      {open ? (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          className="mx-auto mt-3 grid max-w-7xl gap-2 rounded-[1.5rem] border border-white/10 bg-[#07101d]/95 p-3 shadow-2xl backdrop-blur-2xl lg:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`rounded-2xl px-4 py-3 text-sm font-semibold ${
                activeSection === item.id ? "bg-white/10 text-white" : "text-slate-300"
              }`}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}
    </header>
  );
}
