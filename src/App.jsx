import { useEffect, useState } from "react";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Hero } from "./components/Hero";
import { Impact } from "./components/Impact";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";
import { Skills } from "./components/Skills";
import { Timeline } from "./components/Timeline";
import { navItems } from "./data/content";
import { useLenis } from "./hooks/useLenis";

function App() {
  const [activeSection, setActiveSection] = useState("home");
  useLenis();

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
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.18, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[#030712] text-white">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <Impact />
        <Skills />
        <Projects />
        <Timeline />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
