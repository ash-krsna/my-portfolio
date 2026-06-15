import { motion } from "framer-motion";
import { proofPoints } from "../data/content";

export function About() {
  return (
    <section id="about" className="section-band px-4 py-24 sm:px-6 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-kicker">About</p>
          <h2 className="section-title mt-4">A practical builder with a learner's momentum.</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="space-y-8"
        >
          <div className="story-panel">
            <p>
              I am Akash Ohalkar, a BCA graduate from Maharashtra who enjoys building the kind of frontend experiences that
              feel clear the moment someone lands on them. My current strength is turning ideas into polished React.js and
              JavaScript interfaces, then supporting them with Python, SQL, Flask, and MySQL whenever the project needs more
              than a static screen.
            </p>
            <p>
              I am still early in my professional developer journey, and I see that as an advantage: I learn fast, care about
              details, and keep improving the way I think about product flow, accessibility, performance, and security. Cyber
              security is becoming a serious part of my direction because I want to build web products that are not just
              attractive, but more responsible and safer by design.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {proofPoints.map((point, index) => (
              <div key={point} className="proof-card">
                <span>0{index + 1}</span>
                <p>{point}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
