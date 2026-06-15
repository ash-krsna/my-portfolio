import { identity } from "../data/content";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
        <p>
          Designed and built for {identity.name}. Frontend, Python, SQL, and cyber security learning in one clear portfolio.
        </p>
        <div className="flex gap-4">
          <a href={identity.github} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
            GitHub
          </a>
          <a href={identity.portfolio} target="_blank" rel="noreferrer" className="hover:text-cyan-200">
            Portfolio
          </a>
          <a href={`mailto:${identity.email}`} className="hover:text-cyan-200">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
