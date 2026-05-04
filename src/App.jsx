import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import { CursorGlow } from "./components/CursorGlow";
import { Loader } from "./components/Loader";
import { ThemeToggle } from "./components/ThemeToggle";
import { useLenis } from "./hooks/useLenis";
import { useTheme } from "./hooks/useTheme";
import { navItems } from "./data/content";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ProjectsSection } from "./sections/ProjectsSection";
import { GallerySection } from "./sections/GallerySection";
import { CinematicSection } from "./sections/CinematicSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ResumeSection } from "./sections/ResumeSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { ContactSection } from "./sections/ContactSection";
import { CertificationsSection } from "./sections/CertificationsSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const { theme, isDark, toggleTheme } = useTheme();
  useLenis();

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1600);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (loading) return undefined;
    const ctx = gsap.context(() => {
      gsap.utils.toArray(".section-shell").forEach((node) => {
        gsap.fromTo(
          node,
          { opacity: 0.88, y: 24 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: node,
              start: "top 85%"
            }
          }
        );
      });
    });

    return () => ctx.revert();
  }, [loading]);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-500">
      <Loader visible={loading} />
      {!loading ? <CursorGlow /> : null}

      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_15%_20%,var(--spot-1),transparent_22%),radial-gradient(circle_at_84%_18%,var(--spot-2),transparent_24%),linear-gradient(180deg,var(--page-bg),var(--page-bg-soft))]" />
      <div className="fixed inset-0 -z-20 opacity-[0.08] [background-size:48px_48px] [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)]" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between gap-4 rounded-full border border-black/10 bg-white/70 px-4 py-3 shadow-glow backdrop-blur-xl dark:border-white/10 dark:bg-[#09090f]/70 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[linear-gradient(135deg,#ff4d4f,#911515)] font-display text-lg font-bold text-white">A</span>
            <div>
              <p className="font-display text-lg text-zinc-950 dark:text-white">Akash Bhagwat</p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/38">Creative developer</p>
            </div>
          </a>

          <nav className="hidden items-center gap-5 lg:flex">
            {navItems.map((item) => (
              <a key={item.id} href={`#${item.id}`} className="text-sm text-zinc-600 transition hover:text-zinc-950 dark:text-white/55 dark:hover:text-white">
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <a
              href="https://github.com/ash-krsna"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 dark:border-white/10 dark:bg-white/5 dark:text-white md:inline-flex"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <GallerySection />
        <CinematicSection />
        <CertificationsSection />
        <SkillsSection />
        <ResumeSection />
        <TestimonialsSection />
        <ContactSection />
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-10 pt-4 text-sm text-zinc-500 dark:text-white/42 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
      >
        <p>Built as a cinematic digital experience for recruiters, collaborators, and future story worlds.</p>
        <p className="uppercase tracking-[0.22em]">Theme: {theme}</p>
      </motion.footer>
    </div>
  );
}

export default App;
