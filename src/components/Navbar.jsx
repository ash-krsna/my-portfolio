import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { identity, navItems } from "../data/content";

const mobileDockItems = [
  { id: "home", label: "Intro", icon: "bi-house-door" },
  { id: "projects", label: "Work", icon: "bi-grid-1x2" },
  { id: "resume", label: "Resume", icon: "bi-file-earmark-text" },
  { id: "contact", label: "Contact", icon: "bi-send" }
];

export function Navbar({ activeSection, theme, onToggleTheme }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const close = () => setOpen(false);
    window.addEventListener("resize", close);
    return () => window.removeEventListener("resize", close);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6">
      <nav className="navbar-shell mx-auto flex max-w-7xl items-center justify-between px-3 py-3">
        <a href="#home" className="flex items-center gap-3" aria-label="Go to home">
          <span className="brand-mark">{identity.initials}</span>
          <span className="brand-copy hidden min-w-0 sm:block">
            <span>{identity.name}</span>
            <small>Portfolio issue / 2026</small>
          </span>
        </a>

        <div className="nav-links hidden items-center p-1 xl:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`nav-link relative px-4 py-2 ${activeSection === item.id ? "is-active" : ""}`}
            >
              {activeSection === item.id ? (
                <motion.span
                  layoutId="nav-active-pill"
                  className="nav-active-pill absolute inset-0"
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
            className="icon-button hidden md:inline-flex"
            aria-label="Open GitHub"
          >
            <i className="bi bi-github" />
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
          >
            <span>{theme === "dark" ? "Day" : "Night"}</span>
            <i className={`bi ${theme === "dark" ? "bi-sun" : "bi-moon"}`} />
          </button>
          <a href="#contact" className="btn btn-compact btn-nav hidden md:inline-flex">
            Contact
          </a>
          <button
            type="button"
            onClick={() => setOpen((current) => !current)}
            className="icon-button inline-flex xl:hidden"
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
          className="mobile-nav-panel mx-auto mt-3 grid max-w-7xl gap-2 p-3 xl:hidden"
        >
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className={`mobile-nav-link px-4 py-3 ${activeSection === item.id ? "is-active" : ""}`}
            >
              {item.label}
            </a>
          ))}
        </motion.div>
      ) : null}

      <nav className="mobile-dock" aria-label="Mobile quick navigation">
        {mobileDockItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`mobile-dock-link ${activeSection === item.id ? "is-active" : ""}`}
            aria-label={`Go to ${item.label}`}
          >
            <i className={`bi ${item.icon}`} />
            <span>{item.label}</span>
          </a>
        ))}
      </nav>
    </header>
  );
}
