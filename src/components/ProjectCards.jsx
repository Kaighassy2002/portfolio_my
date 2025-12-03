import React from "react";

import clientPortfolio from "../assets/images/client.jpg";
import hairsalon from "../assets/images/hairsalon.jpg";
import bookshop from "../assets/images/bookshop.jpg";
import portfolio from "../assets/images/portfolio.jpg";

function ProjectCards() {
  const projects = [
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
      link: "https://portfolio-my-alpha.vercel.app/",
      tech: ["React", "Tailwind", "CSS"],
    },
    {
      title: "Client Portfolio",
      img: clientPortfolio,
      desc: "A bespoke portfolio with integrated blog and a lightweight scribble space for quick notes and content ideas.",
      link: "https://www.athulsuresh.me/",
      tech: ["React",  "Node.js", "Express", "MongoDB","Lexical Editor"],
    },
    {
      title: "Book Shop",
      img: bookshop,
      desc: "An e-commerce bookshop interface driven by JSON data, featuring filtering, search, and responsive layouts.",
      link: "https://book-shop-mauve.vercel.app/",
      tech: ["React", "JSON Server", "Bootstrap"],
    },
    {
      title: "Coming Soon",
      img: null,
      desc: "An upcoming full stack project focused on real-time experiences and advanced UI/UX.",
      link: null,
      comingSoon: true,
      tech: ["Full Stack", "Realtime", "UI/UX"],
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

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((proj) => (
        <article
          key={proj.title}
          className="group relative flex flex-col overflow-hidden rounded-2xl border border-slate-700/80 bg-slate-950/70 shadow-lg shadow-slate-950/80 backdrop-blur transition hover:-translate-y-1 hover:border-cyan-400/70 hover:shadow-2xl hover:shadow-cyan-900/60"
        >
          <div className="relative h-40 w-full overflow-hidden bg-slate-900/80">
            {proj.img ? (
              <img
                src={proj.img}
                alt={proj.title}
                className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 text-xs font-medium uppercase tracking-[0.2em] text-slate-400">
                Coming Soon
              </div>
            )}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-950/95 via-slate-950/70 to-transparent" />

            {proj.comingSoon && (
              <div className="absolute left-3 top-3 rounded-full border border-amber-400/60 bg-amber-400/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-200 shadow-sm shadow-amber-500/40 backdrop-blur">
                Coming Soon
              </div>
            )}
          </div>

          <div className="flex flex-1 flex-col gap-3 p-4">
            <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
              {proj.title}
            </h3>
            <p className="text-xs leading-relaxed text-slate-300 sm:text-sm">
              {proj.desc}
            </p>

            {proj.tech && (
              <div className="mt-1 flex flex-wrap gap-1.5">
                {proj.tech.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-slate-900/80 px-2 py-0.5 text-[10px] font-medium text-slate-300 ring-1 ring-slate-700/70"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}

            <div className="mt-auto flex items-center justify-between pt-2 text-xs text-slate-400">
              <span className="inline-flex items-center gap-1 text-[11px]">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400/80" />
                {proj.comingSoon ? "Concept in progress" : "Live project"}
              </span>

              {proj.link ? (
                <a
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-200 transition hover:bg-cyan-400/20"
                >
                  View Project
                  <span>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                </a>
              ) : (
                <span className="inline-flex items-center gap-1 rounded-full border border-slate-700/80 bg-slate-900/80 px-3 py-1 text-[11px] font-semibold text-slate-400">
                  In Design
                </span>
              )}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default ProjectCards;
