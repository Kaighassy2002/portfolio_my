import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { projects as sourceProjects } from "../data/projects";

const ordered = [...sourceProjects].sort(
  (a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured))
);

function metricsFor(width) {
  const ratio = width < 640 ? 0.88 : width < 1024 ? 0.74 : 0.6;
  const gap = width < 640 ? 12 : 18;
  return { width, slideW: width * ratio, gap };
}

export default function HeroShowcase() {
  const reduceMotion = useReducedMotion();
  const viewportRef = useRef(null);
  const busy = useRef(false);
  const count = ordered.length;
  const slides = count ? [ordered[count - 1], ...ordered, ordered[0]] : [];
  const [index, setIndex] = useState(1);
  const [anim, setAnim] = useState(true);
  const [metrics, setMetrics] = useState({ width: 0, slideW: 0, gap: 18 });
  const pointer = useRef(null);

  useLayoutEffect(() => {
    const el = viewportRef.current;
    if (!el) return undefined;
    const measure = () => setMetrics(metricsFor(el.clientWidth));
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (anim) return undefined;
    const id = requestAnimationFrame(() => setAnim(true));
    return () => cancelAnimationFrame(id);
  }, [anim]);

  const realIndex = ((index - 1) % count + count) % count;
  const activeProject = ordered[realIndex];
  const offset =
    metrics.width > 0
      ? metrics.width / 2 - metrics.slideW / 2 - index * (metrics.slideW + metrics.gap)
      : 0;

  const step = (dir) => {
    if (!count) return;
    if (reduceMotion) {
      setAnim(false);
      setIndex((current) => {
        let next = current + dir;
        if (next < 1) next = count;
        if (next > count) next = 1;
        return next;
      });
      return;
    }
    if (busy.current) return;
    busy.current = true;
    setAnim(true);
    setIndex((current) => current + dir);
  };

  const onTransitionEnd = (event) => {
    if (event.target !== event.currentTarget || event.propertyName !== "transform") return;
    busy.current = false;
    if (index === 0) {
      setAnim(false);
      setIndex(count);
    } else if (index === count + 1) {
      setAnim(false);
      setIndex(1);
    }
  };

  const onPointerDown = (event) => {
    if (event.target.closest("a, button")) return;
    pointer.current = { x: event.clientX, y: event.clientY };
  };

  const onPointerUp = (event) => {
    if (!pointer.current) return;
    const dx = event.clientX - pointer.current.x;
    const dy = event.clientY - pointer.current.y;
    pointer.current = null;
    if (Math.abs(dx) < 8 && Math.abs(dy) < 8) {
      const slide = event.target.closest("[data-pos]");
      if (!slide) return;
      const next = Number(slide.dataset.pos);
      if (next !== index) {
        if (reduceMotion) {
          const wrapped = next < 1 ? count : next > count ? 1 : next;
          setAnim(false);
          setIndex(wrapped);
        } else if (!busy.current) {
          busy.current = true;
          setAnim(true);
          setIndex(next);
        }
      }
      return;
    }
    if (dx > 50) step(-1);
    else if (dx < -50) step(1);
  };

  if (!count) return null;

  return (
    <div
      className="hero-carousel hero-rise"
      role="region"
      aria-roledescription="carousel"
      aria-label="Selected projects"
      tabIndex={0}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") {
          event.preventDefault();
          step(-1);
        } else if (event.key === "ArrowRight") {
          event.preventDefault();
          step(1);
        }
      }}
    >
      <p className="sr-only" aria-live="polite">
        {activeProject ? `${activeProject.title}. Project ${realIndex + 1} of ${count}.` : ""}
      </p>
      <div
        className="hero-viewport"
        ref={viewportRef}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerCancel={() => {
          pointer.current = null;
        }}
      >
        <div
          className="hero-track"
          onTransitionEnd={onTransitionEnd}
          style={{
            gap: `${metrics.gap}px`,
            transform: `translate3d(${offset}px, 0, 0)`,
            transition: anim ? undefined : "none",
            opacity: metrics.width ? 1 : 0,
          }}
        >
          {slides.map((project, position) => {
            const isActive = position === index;
            return (
              <article
                key={`${project.title}-${position}`}
                className={`hero-slide${isActive ? " is-active" : ""}`}
                data-pos={position}
                aria-hidden={!isActive}
                style={{ width: metrics.slideW || undefined }}
              >
                <div className={`hero-card${isActive ? " is-active" : ""}`}>
                  <div className="hero-card-media">
                    <img src={project.img} alt="" draggable="false" />
                  </div>
                  <div className="hero-card-copy">
                    <h2>{project.title}</h2>
                    <p>{project.desc}</p>
                    {project.link ? (
                      <a
                        className="btn-pill hero-more"
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        tabIndex={isActive ? 0 : -1}
                      >
                        Read more
                        <span className="btn-arrow" aria-hidden="true">
                          →
                        </span>
                      </a>
                    ) : (
                      <span className="hero-soon">In progress</span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      <button
        type="button"
        className="hero-arrow hero-arrow-prev"
        onClick={() => step(-1)}
        aria-label="Previous project"
      >
        ←
      </button>
      <button
        type="button"
        className="hero-arrow hero-arrow-next"
        onClick={() => step(1)}
        aria-label="Next project"
      >
        →
      </button>
    </div>
  );
}
