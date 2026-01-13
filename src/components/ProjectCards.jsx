import React, { useEffect, useRef, useState } from "react";

import clientPortfolio from "../assets/images/client.jpg";
import hairsalon from "../assets/images/hairsalon.jpg";
import bookshop from "../assets/images/bookshop.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import creative from "../assets/images/creative.jpg";
import jewellery from "../assets/images/jewellery.jpg";

function ProjectCards() {
  const cardRefs = useRef([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = "1";
              entry.target.style.transform = "translateY(0)";
            }, index * 100);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((card) => {
      if (card) observer.observe(card);
    });

    return () => {
      cardRefs.current.forEach((card) => {
        if (card) observer.unobserve(card);
      });
    };
  }, [showAll]);

  const projects = [
    {
      title: "Creative Studio",
      img: creative,
      desc: "A frontend-designed company website featuring service highlights, pricing sections, and a visually engaging layout. Built purely for UI/UX presentation.",
      link: "https://media-website-ecru.vercel.app/",
      tech: ["React", "Tailwind", "CSS"],
    },
    {
      title: "Hair Salon",
      img: hairsalon,
      desc: "A modern MERN-based salon platform with JWT authentication, reusable UI components, and smooth booking flows.",
      link: "https://hair-salon-alpha.vercel.app/",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Developer Portfolio",
      img: portfolio,
      desc: "A polished personal portfolio built with React and custom components, optimized for responsiveness and performance.",
      link: "https://www.kaighassy.com/",
      tech: ["React", "Tailwind", "CSS"],
    },
    
    {
      title: "Book Shop",
      img: bookshop,
      desc: "An e-commerce bookshop interface driven by JSON data, featuring filtering, search, and responsive layouts.",
      link: "https://book-shop-mauve.vercel.app/",
      tech: ["React", "JSON Server", "Bootstrap"],
    },
    {
      title: "Client Portfolio",
      img: clientPortfolio,
      desc: "A bespoke portfolio with integrated blog and a lightweight scribble space for quick notes and content ideas.",
      link: "https://www.athulsuresh.me/",
      tech: ["React", "Node.js", "Express", "MongoDB", "Lexical Editor"],
    },
    {
      title: "Coming Soon",
      img: jewellery,
      desc: "An upcoming MERN full-stack website featuring secure payment gateway integration, real-time functionality, and a modern UI/UX.",
      link: null,
      comingSoon: true,
      tech: ["MERN Stack", "Payment Gateway", "Realtime", "UI/UX"],
    },
    {
      title: "Coming Soon",
      img: null,
      desc: "A new experiment exploring design systems, component libraries, and front-end performance.",
      link: null,
      comingSoon: true,
      tech: ["Design Systems", "Performance"],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const hasMore = projects.length > 4;

  return (
    <>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {displayedProjects.map((proj, index) => (
          <article
            key={proj.title}
            ref={(el) => (cardRefs.current[index] = el)}
            className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-800/50 bg-gradient-to-br from-slate-900/90 via-slate-950/90 to-slate-900/90 shadow-2xl shadow-black/50 backdrop-blur-xl transition-all duration-500 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:border-cyan-500/50 hover:shadow-[0_20px_60px_-15px_rgba(6,182,212,0.3)]"
            style={{
              opacity: 0,
              transform: "translateY(30px)",
              transition: "opacity 0.6s ease-out, transform 0.6s ease-out",
            }}
          >
          {/* Animated gradient border effect */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/20 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          
          {/* Glow effect */}
          <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/30 to-purple-500/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-50" />

          <div className="relative h-36 w-full overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
            {proj.img ? (
              <>
                <img
                  src={proj.img}
                  alt={proj.title}
                  className="h-full w-full object-cover transition-all duration-700 ease-out group-hover:scale-110 group-hover:brightness-110"
                />
                {/* Overlay gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-60 transition-opacity duration-500 group-hover:opacity-40" />
              </>
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-800 via-slate-900 to-slate-800">
                <div className="relative">
                  <div className="absolute inset-0 animate-pulse rounded-full bg-cyan-500/20 blur-2xl" />
                  <div className="relative text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                    Coming Soon
                  </div>
                </div>
              </div>
            )}

            {/* Bottom gradient fade */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />

            {/* Coming Soon badge */}
            {proj.comingSoon && (
              <div className="absolute left-3 top-3 animate-pulse rounded-full border border-amber-400/60 bg-gradient-to-r from-amber-400/20 to-amber-500/10 px-3 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-amber-200 shadow-lg shadow-amber-500/30 backdrop-blur-md transition-all duration-300 group-hover:scale-110 group-hover:shadow-amber-500/50">
                Coming Soon
              </div>
            )}

            {/* Hover overlay effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-purple-500/0 opacity-0 transition-opacity duration-500 group-hover:from-cyan-500/10 group-hover:to-purple-500/10 group-hover:opacity-100" />
          </div>

          <div className="relative flex flex-1 flex-col gap-3 p-4">
            <h3 className="text-base font-bold text-slate-50 transition-colors duration-300 group-hover:text-cyan-300 sm:text-lg">
              {proj.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-300/90 sm:text-sm">
              {proj.desc}
            </p>

            {proj.tech && (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {proj.tech.map((tag, tagIndex) => (
                  <span
                    key={tag}
                    className="tech-tag rounded-full bg-slate-800/80 px-2.5 py-0.5 text-[10px] font-medium text-slate-300 ring-1 ring-slate-700/50 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-cyan-500/20 hover:text-cyan-200 hover:ring-cyan-500/50"
                    style={{
                      animationDelay: `${tagIndex * 50}ms`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-auto flex items-center justify-between border-t border-slate-800/50 pt-3">
              <span className="inline-flex items-center gap-1.5 text-[10px] text-slate-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400/80 opacity-75" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                </span>
                {proj.comingSoon ? "Concept in progress" : "Live project"}
              </span>

              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="group/btn inline-flex items-center gap-1.5 rounded-full border border-cyan-400/60 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 px-3 py-1.5 text-[10px] font-semibold text-cyan-200 shadow-lg shadow-cyan-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-cyan-600/20 hover:shadow-xl hover:shadow-cyan-500/40 hover:text-cyan-100"
                >
                  View Project
                  <span className="transition-transform duration-300 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1">
                    <i className="fa-solid fa-arrow-up-right-from-square text-[9px]" />
                  </span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-700/80 bg-slate-800/80 px-3 py-1.5 text-[10px] font-semibold text-slate-400 backdrop-blur-sm">
                  In Design
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
      </div>

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group/viewmore inline-flex items-center gap-2 rounded-full border border-cyan-400/60 bg-gradient-to-r from-cyan-500/10 to-cyan-600/10 px-6 py-3 text-sm font-semibold text-cyan-200 shadow-lg shadow-cyan-500/20 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-cyan-600/20 hover:shadow-xl hover:shadow-cyan-500/40 hover:text-cyan-100"
          >
            {showAll ? (
              <>
                <span>View Less</span>
                <i className="fa-solid fa-chevron-up transition-transform duration-300 group-hover/viewmore:-translate-y-0.5" />
              </>
            ) : (
              <>
                <span>View More</span>
                <i className="fa-solid fa-chevron-down transition-transform duration-300 group-hover/viewmore:translate-y-0.5" />
              </>
            )}
          </button>
        </div>
      )}
    </>
  );
}

export default ProjectCards;
