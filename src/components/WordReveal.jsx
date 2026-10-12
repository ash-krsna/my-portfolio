import { motion, useReducedMotion } from "framer-motion";

const wordVariants = {
  hidden: { opacity: 0, y: "0.7em", filter: "blur(6px)" },
  visible: { opacity: 1, y: 0, filter: "blur(0px)" }
};

export function WordReveal({
  as = "span",
  text,
  className = "",
  delay = 0,
  stagger = 0.035,
  duration = 0.5,
  animateOnView = false
}) {
  const shouldReduceMotion = useReducedMotion();
  const MotionTag = motion[as] || motion.span;
  const StaticTag = as;
  const words = text.split(" ");

  if (shouldReduceMotion) {
    return <StaticTag className={className}>{text}</StaticTag>;
  }

  return (
    <MotionTag
      className={`word-reveal ${className}`.trim()}
      aria-label={text}
      variants={{
        hidden: {},
        visible: {
          transition: {
            delayChildren: delay,
            staggerChildren: stagger
          }
        }
      }}
      initial="hidden"
      animate={animateOnView ? undefined : "visible"}
      whileInView={animateOnView ? "visible" : undefined}
      viewport={animateOnView ? { once: true, amount: 0.6 } : undefined}
    >
      {words.map((word, index) => (
        <motion.span
          key={`${word}-${index}`}
          aria-hidden="true"
          className="word-reveal-word"
          variants={wordVariants}
          transition={{ duration, ease: "easeOut" }}
        >
          {word}
          {index < words.length - 1 ? "\u00A0" : ""}
        </motion.span>
      ))}
    </MotionTag>
  );
}
