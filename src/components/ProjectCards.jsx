import { useState } from "react";

import { projects } from "../data/projects";
import ScrollReveal from "./ScrollReveal";
import { smoothScrollTo } from "./SmoothScroll";

function ProjectCards() {
  const [showAll, setShowAll] = useState(false);

  const featuredProject = projects.find((p) => p.featured) ?? projects[0];
  const otherProjects = projects.filter((p) => p !== featuredProject);
  const displayedOthers = showAll ? otherProjects : otherProjects.slice(0, 3);
  const visibleProjects = [featuredProject, ...displayedOthers];
  const hasMore = otherProjects.length > 3;

  const toggleProjects = () => {
    setShowAll((open) => {
      if (open) {
        smoothScrollTo("projects");
      }
      return !open;
    });
  };

  return (
    <div>
      <div className="project-list">
        {visibleProjects.map((proj, index) => {
          const tags = proj.tech.filter((tag) => tag && String(tag).trim());
          return (
            <ScrollReveal
              as="article"
              key={proj.title}
              className={`project-row${index % 2 ? " is-flip" : ""}`}
              y={22}
              delay={Math.min(index, 4) * 0.05}
            >
              <div className="project-copy">
                <div className="project-kicker">
                  <span className="project-num">{String(index + 1).padStart(2, "0")}</span>
                  {proj.featured ? <span className="pill-note">Featured</span> : null}
                  {proj.comingSoon ? <span className="pill-note">In progress</span> : null}
                </div>
                <h3 className="project-title">{proj.title}</h3>
                <p className="project-desc">{proj.desc}</p>
                <p className="tech-list">{tags.join(" / ")}</p>
                <p className="project-status">
                  {proj.comingSoon
                    ? "In progress"
                    : proj.featured
                      ? "Live in production"
                      : "Shipped · live"}
                </p>
                {proj.link ? (
                  <a
                    className="text-link"
                    href={proj.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {proj.featured ? "Launch app" : "Open project"}
                    <span className="arrow-move" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                ) : (
                  <p className="quiet-note">Link coming soon</p>
                )}
              </div>
              <div className="project-media">
                {proj.img ? (
                  <div className="media-shift" data-scroll-parallax>
                    <img
                      src={proj.img}
                      alt={proj.title}
                      loading={index === 0 ? "eager" : "lazy"}
                    />
                  </div>
                ) : (
                  <div className="project-fallback">Preview soon</div>
                )}
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      {hasMore ? (
        <div className="load-more">
          <button type="button" className="btn-pill" onClick={toggleProjects}>
            {showAll ? "Show less" : `Load all ${projects.length} projects`}
            <span className="btn-arrow" aria-hidden="true">
              {showAll ? "↑" : "↓"}
            </span>
          </button>
        </div>
      ) : null}
    </div>
  );
}

export default ProjectCards;
