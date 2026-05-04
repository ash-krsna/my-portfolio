import { useRef } from "react";
import clsx from "clsx";

export function MagneticButton({ href, children, className, secondary = false, download = false }) {
  const ref = useRef(null);

  const handleMove = (event) => {
    if (!ref.current || window.innerWidth < 768) return;
    const rect = ref.current.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    ref.current.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.transform = "translate(0px, 0px)";
  };

  return (
    <a
      ref={ref}
      href={href}
      download={download}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel={href?.startsWith("http") ? "noreferrer" : undefined}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      className={clsx(
        "magnetic-button inline-flex items-center justify-center gap-3 rounded-full px-5 py-3 text-sm font-semibold transition duration-300",
        secondary
          ? "border border-white/15 bg-white/6 text-zinc-900 dark:text-white"
          : "bg-[linear-gradient(135deg,#ff4d4f,#9c1717)] text-white shadow-[0_20px_50px_rgba(255,77,79,0.28)]",
        className
      )}
    >
      {children}
    </a>
  );
}
