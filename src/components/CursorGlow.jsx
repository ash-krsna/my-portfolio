import { useEffect } from "react";

export function CursorGlow() {
  useEffect(() => {
    const node = document.createElement("div");
    node.className = "cursor-glow";
    document.body.appendChild(node);

    const move = (event) => {
      node.style.setProperty("--x", `${event.clientX}px`);
      node.style.setProperty("--y", `${event.clientY}px`);
    };

    window.addEventListener("pointermove", move);
    return () => {
      window.removeEventListener("pointermove", move);
      node.remove();
    };
  }, []);

  return null;
}
