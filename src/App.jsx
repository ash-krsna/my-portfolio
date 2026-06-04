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
import { CaseStudiesSection } from "./sections/CaseStudiesSection";
import { LabSection } from "./sections/LabSection";
import { SkillsSection } from "./sections/SkillsSection";
import { ResumeSection } from "./sections/ResumeSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { HireSection } from "./sections/HireSection";
import { ContactSection } from "./sections/ContactSection";
import { CertificationsSection } from "./sections/CertificationsSection";

gsap.registerPlugin(ScrollTrigger);

function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("about");
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

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target?.id) {
          setActiveSection(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -55% 0px",
        threshold: [0.2, 0.45, 0.7]
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--page-bg)] text-[var(--text-primary)] transition-colors duration-500">
      <Loader visible={loading} />
      {!loading ? <CursorGlow /> : null}

      <div className="fixed inset-0 -z-30 bg-[radial-gradient(circle_at_15%_20%,var(--spot-1),transparent_22%),radial-gradient(circle_at_84%_18%,var(--spot-2),transparent_24%),linear-gradient(180deg,var(--page-bg),var(--page-bg-soft))]" />
      <div className="fixed inset-0 -z-20 opacity-[0.08] [background-size:48px_48px] [background-image:linear-gradient(var(--grid-color)_1px,transparent_1px),linear-gradient(90deg,var(--grid-color)_1px,transparent_1px)]" />

      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto mt-4 flex max-w-7xl items-center justify-between gap-4 rounded-[2rem] border border-black/10 bg-white/72 px-4 py-3 shadow-glow backdrop-blur-2xl dark:border-white/10 dark:bg-[#09090f]/72 md:px-6">
          <a href="#home" className="flex items-center gap-3">
            <span className="brand-emblem flex h-12 w-12 items-center justify-center rounded-2xl text-white shadow-[0_18px_40px_rgba(72,194,141,0.2)]">
              <span className="brand-emblem__core">
                <span className="brand-emblem__glyph">A</span>
              </span>
            </span>
            <div>
              <p className="font-display text-lg text-zinc-950 dark:text-white">Akash Bhagwat</p>
              <p className="text-xs uppercase tracking-[0.24em] text-zinc-500 dark:text-white/38">Developer · tech systems</p>
            </div>
          </a>

          <nav className="nav-dock hidden items-center gap-2 rounded-full border border-black/10 bg-black/[0.03] px-2 py-2 dark:border-white/10 dark:bg-white/[0.04] xl:flex">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                whileHover={{ y: -4, scale: 1.03 }}
                whileTap={{ y: 0, scale: 0.92 }}
                transition={{ type: "spring", stiffness: 420, damping: 16 }}
                className={`relative rounded-full px-4 py-2.5 text-sm font-medium transition ${
                  activeSection === item.id
                    ? "text-zinc-950 dark:text-white"
                    : "text-zinc-600 hover:text-zinc-950 dark:text-white/55 dark:hover:text-white"
                }`}
              >
                {activeSection === item.id ? (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full border border-black/10 bg-white shadow-[0_10px_24px_rgba(15,15,20,0.08)] dark:border-white/10 dark:bg-white/10 dark:shadow-none"
                    transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  />
                ) : null}
                <span className="relative z-10">{item.label}</span>
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle isDark={isDark} onToggle={toggleTheme} />
            <a
              href="https://github.com/ash-krsna"
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full border border-black/10 bg-black/5 px-4 py-3 text-sm font-semibold text-zinc-900 transition hover:-translate-y-0.5 hover:shadow-[0_14px_30px_rgba(15,15,20,0.08)] dark:border-white/10 dark:bg-white/5 dark:text-white md:inline-flex"
            >
              GitHub
            </a>
          </div>
        </div>
      </header>

      <div className="header-mobile-nav fixed inset-x-0 top-[5.5rem] z-40 px-4 md:px-6 xl:hidden">
        <div className="mx-auto flex max-w-7xl gap-2 overflow-x-auto rounded-full border border-black/10 bg-white/72 px-2 py-2 backdrop-blur-2xl dark:border-white/10 dark:bg-[#09090f]/72">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-medium transition ${
                activeSection === item.id
                  ? "border border-black/10 bg-white text-zinc-950 dark:border-white/10 dark:bg-white/10 dark:text-white"
                  : "text-zinc-600 dark:text-white/58"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      <main className="overflow-hidden">
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <CaseStudiesSection />
        <LabSection />
        <CertificationsSection />
        <SkillsSection />
        <ResumeSection />
        <TestimonialsSection />
        <HireSection />
        <ContactSection />
      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-7xl flex-col gap-4 px-4 pb-10 pt-4 text-sm text-zinc-500 dark:text-white/42 md:flex-row md:items-center md:justify-between md:px-6 lg:px-8"
      >
        <p>Built as a focused technical portfolio for recruiters, collaborators, and product-minded teams.</p>
        <p className="uppercase tracking-[0.22em]">Theme: {theme}</p>
      </motion.footer>
    </div>
  );
}

export default App;
