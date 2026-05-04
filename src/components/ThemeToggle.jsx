export function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={onToggle}
      className="group relative inline-flex h-12 w-24 items-center rounded-full border border-white/12 bg-white/8 px-1.5 backdrop-blur"
    >
      <span
        className={`absolute left-1.5 top-1.5 h-9 w-9 rounded-full bg-white shadow-lg transition-transform duration-500 ${
          isDark ? "translate-x-11 bg-[#f1d5a6]" : "translate-x-0 bg-[#0d0d14]"
        }`}
      />
      <span className="relative z-10 flex w-full items-center justify-between px-2 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-900 dark:text-white">
        <span className={isDark ? "opacity-50" : "opacity-100"}>Light</span>
        <span className={isDark ? "opacity-100" : "opacity-50"}>Dark</span>
      </span>
    </button>
  );
}
