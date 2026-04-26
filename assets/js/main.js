(() => {
      const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      const revealTargets = document.querySelectorAll(".reveal, .scroll-stage");
      const tiltTargets = document.querySelectorAll(".tilt-3d");
      const nameCinematic = document.getElementById("nameCinematic");
      const nameTarget = document.getElementById("nameTarget");
      const hero = document.getElementById("home");
      let nameAnimationLocked = false;

      if (!reduceMotion) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("in-view");
              observer.unobserve(entry.target);
            }
          });
        }, { threshold: 0.18, rootMargin: "0px 0px -8% 0px" });

        revealTargets.forEach((target) => revealObserver.observe(target));

        let targetScrollY = window.scrollY;
        let smoothScrollY = window.scrollY;
        let animationFrameId = null;
        let baseWidth = 0;
        let baseHeight = 0;

        const measureName = () => {
          if (!nameCinematic) {
            return;
          }

          baseWidth = nameCinematic.offsetWidth;
          baseHeight = nameCinematic.offsetHeight;
        };

        const updateNameMotion = (scrollY) => {
          if (!nameCinematic || !nameTarget || !hero) {
            return;
          }

          if (nameAnimationLocked) {
            nameCinematic.style.opacity = "0";
            nameCinematic.style.pointerEvents = "none";
            nameTarget.classList.add("ready");
            return;
          }

          const targetRect = nameTarget.getBoundingClientRect();
          const progress = Math.min(Math.max(scrollY / Math.max(hero.offsetHeight * 0.42, 220), 0), 1);
          const eased = progress * progress * (3 - 2 * progress);

          const narrowScreen = window.innerWidth < 720;
          const startScale = narrowScreen ? 1.1 : 1.45;
          const endScale = narrowScreen ? 0.4 : 0.34;
          const scale = startScale + (endScale - startScale) * eased;

          const centeredX = window.innerWidth * 0.5 - (baseWidth * startScale * 0.5);
          const safeMargin = 24;
          const startX = Math.max(safeMargin, centeredX);
          const startY = Math.max(36, window.innerHeight * 0.22 - (baseHeight * startScale * 0.28));
          const endX = targetRect.left;
          const endY = targetRect.top + (targetRect.height - baseHeight * endScale) * 0.5;
          const x = startX + (endX - startX) * eased;
          const y = startY + (endY - startY) * eased;
          const opacity = 1 - Math.max(0, (progress - 0.84) / 0.16);

          nameCinematic.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
          nameCinematic.style.opacity = `${opacity}`;
          nameTarget.classList.toggle("ready", progress > 0.72);

          if (progress >= 0.999) {
            nameAnimationLocked = true;
            nameCinematic.style.opacity = "0";
            nameCinematic.style.pointerEvents = "none";
            nameTarget.classList.add("ready");
          }
        };

        const renderMotion = () => {
          smoothScrollY += (targetScrollY - smoothScrollY) * 0.28;
          if (Math.abs(targetScrollY - smoothScrollY) < 0.1) {
            smoothScrollY = targetScrollY;
          }

          document.documentElement.style.setProperty("--scroll-shift", `${smoothScrollY}px`);
          updateNameMotion(smoothScrollY);

          if (Math.abs(targetScrollY - smoothScrollY) > 0.1) {
            animationFrameId = window.requestAnimationFrame(renderMotion);
          } else {
            animationFrameId = null;
          }
        };

        const requestRender = () => {
          if (animationFrameId === null) {
            animationFrameId = window.requestAnimationFrame(renderMotion);
          }
        };

        const onScroll = () => {
          targetScrollY = window.scrollY;
          requestRender();
        };

        const onResize = () => {
          measureName();
          targetScrollY = window.scrollY;
          smoothScrollY = window.scrollY;
          updateNameMotion(smoothScrollY);
        };

        measureName();
        updateNameMotion(smoothScrollY);
        window.addEventListener("scroll", onScroll, { passive: true });
        window.addEventListener("resize", onResize);

        tiltTargets.forEach((node) => {
          node.addEventListener("pointermove", (event) => {
            const rect = node.getBoundingClientRect();
            const px = (event.clientX - rect.left) / rect.width;
            const py = (event.clientY - rect.top) / rect.height;
            const ry = (px - 0.5) * 10;
            const rx = (0.5 - py) * 10;

            node.classList.add("is-active");
            node.style.setProperty("--mx", `${px * 100}%`);
            node.style.setProperty("--my", `${py * 100}%`);
            node.style.transform = `perspective(1200px) rotateX(${rx}deg) rotateY(${ry}deg) translateY(-4px)`;
          });

          node.addEventListener("pointerleave", () => {
            node.classList.remove("is-active");
            node.style.transform = "";
          });
        });
      } else {
        revealTargets.forEach((target) => target.classList.add("in-view"));
        if (nameCinematic) {
          nameCinematic.style.display = "none";
        }
        if (nameTarget) {
          nameTarget.classList.add("ready");
        }
        tiltTargets.forEach((node) => {
          node.style.transform = "none";
        });
      }
    })();
