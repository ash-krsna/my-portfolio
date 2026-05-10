export function ThemeToggle({ isDark, onToggle }) {
  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={onToggle}
      className="group relative inline-flex h-12 w-[88px] items-center rounded-full border border-black/10 bg-white/75 px-1.5 shadow-[0_10px_30px_rgba(15,15,20,0.08)] backdrop-blur-xl transition dark:border-white/10 dark:bg-white/5"
    >
      <span
        className={`absolute left-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full shadow-lg transition-transform duration-500 ${
          isDark
            ? "translate-x-[40px] bg-[linear-gradient(135deg,#f1d5a6,#ffb85c)] text-[#22170b]"
            : "translate-x-0 bg-[#111116] text-white"
        }`}
      >
        <i className={`bi ${isDark ? "bi-moon-stars-fill" : "bi-brightness-high-fill"} text-sm`} />
      </span>
      <span className="relative z-10 flex w-full items-center justify-between px-[9px] text-[13px] text-zinc-500 dark:text-white/45">
        <i className={`bi bi-brightness-high-fill transition ${isDark ? "opacity-35" : "opacity-90"}`} />
        <i className={`bi bi-moon-stars-fill transition ${isDark ? "opacity-90" : "opacity-35"}`} />
      </span>
    </button>
  );
}
