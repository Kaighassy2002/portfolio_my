import { useEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const ORB_DEPTH = [22, -16, 12, -9];

export default function AmbientMotion() {
  const reduceMotion = useReducedMotion();
  const rootRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (reduceMotion) return undefined;

    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    if (!finePointer.matches) return undefined;

    const glow = glowRef.current;
    const fluid = rootRef.current?.querySelector(".fluid");
    const orbs = Array.from(document.querySelectorAll(".orb"));

    let x = 0;
    let y = 0;
    let targetX = 0;
    let targetY = 0;
    let hasPointer = false;
    let frame = 0;
    let running = false;

    const render = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;

      const nx = x / window.innerWidth - 0.5;
      const ny = y / window.innerHeight - 0.5;

      if (glow) {
        glow.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      }
      if (fluid) {
        fluid.style.transform = `translate3d(${nx * 28}px, ${ny * 16}px, 0)`;
      }
      orbs.forEach((orb, index) => {
        const depth = ORB_DEPTH[index] ?? 8;
        orb.style.transform = `translate3d(${nx * depth}px, ${ny * depth * 0.7}px, 0)`;
      });

      if (Math.abs(targetX - x) > 0.4 || Math.abs(targetY - y) > 0.4) {
        frame = requestAnimationFrame(render);
      } else {
        running = false;
      }
    };

    const onMove = (event) => {
      targetX = event.clientX;
      targetY = event.clientY;
      if (!hasPointer) {
        x = targetX;
        y = targetY;
        hasPointer = true;
        glow?.classList.add("is-on");
      }
      if (!running) {
        running = true;
        frame = requestAnimationFrame(render);
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      window.removeEventListener("pointermove", onMove);
      cancelAnimationFrame(frame);
      orbs.forEach((orb) => {
        orb.style.transform = "";
      });
    };
  }, [reduceMotion]);

  if (reduceMotion) return null;

  return (
    <div className="ambient" ref={rootRef} aria-hidden="true">
      <span className="cursor-glow" ref={glowRef} />
      <svg className="fluid" viewBox="0 0 1440 900" preserveAspectRatio="none">
        <path
          className="fluid-line"
          d="M-80 180 C 140 120, 300 250, 520 176 S 860 90, 1100 188 S 1340 280, 1540 170"
        />
        <path
          className="fluid-line fluid-line-b"
          d="M-80 470 C 180 530, 360 390, 620 468 S 980 590, 1220 455 S 1420 360, 1540 490"
        />
        <path
          className="fluid-line fluid-line-c"
          d="M-80 760 C 220 820, 420 680, 700 748 S 1040 860, 1280 730 S 1460 640, 1540 770"
        />
      </svg>
    </div>
  );
}
