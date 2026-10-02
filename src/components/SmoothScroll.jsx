import { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";

let lenis = null;

export function setSmoothScrollLocked(locked) {
  if (!lenis) return;
  if (locked) lenis.stop();
  else lenis.start();
}

export function smoothScrollTo(target) {
  if (lenis) {
    if (typeof target === "number") {
      lenis.scrollTo(target, { force: true });
      return;
    }
    const id = String(target).replace(/^#/, "");
    const node = document.getElementById(id);
    if (node) lenis.scrollTo(node, { force: true });
    return;
  }

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const behavior = reduce ? "auto" : "smooth";
  if (typeof target === "number") {
    window.scrollTo({ top: target, behavior });
    return;
  }
  document.getElementById(String(target).replace(/^#/, ""))?.scrollIntoView({
    behavior,
    block: "start",
  });
}

export default function SmoothScroll() {
  useEffect(() => {
    const instance = new Lenis({
      autoRaf: true,
      duration: 1.45,
      wheelMultiplier: 1.15,
      smoothWheel: true,
      syncTouch: false,
      allowNestedScroll: true,
      anchors: true,
      stopInertiaOnNavigate: true,
    });

    lenis = instance;

    return () => {
      instance.destroy();
      if (lenis === instance) lenis = null;
    };
  }, []);

  return null;
}
