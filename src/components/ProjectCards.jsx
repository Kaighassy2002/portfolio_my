import React, { useEffect, useRef, useState } from "react";

import clientPortfolio from "../assets/images/client.jpg";
import hairsalon from "../assets/images/hairsalon.jpg";
import bookshop from "../assets/images/bookshop.jpg";
import portfolio from "../assets/images/portfolio.jpg";
import creative from "../assets/images/creative.jpg";
import jewellery from "../assets/images/jewellery.jpg";
import clinic from "../assets/images/clinic.jpg";
import allayal from "../assets/images/allayal.jpg";
import greenleaf from "../assets/images/greenleaf.jpg";
import goks from "../assets/images/goks.jpg";

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
            }, index * 80);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
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
      title: "Developer Portfolio",
      img: portfolio,
      desc: "Responsive personal portfolio built with React, Bootstrap, and custom CSS. Integrated EmailJS for seamless visitor contact.",
      link: "https://www.kaighassy.com/",
      tech: ["React", "Bootstrap", "Custom CSS", "EmailJS"],
    },
    {
      title: "Greenleaf Platform",
      img: greenleaf,
      desc: "Full stack plus browser extension: FastAPI backend with auth, RBAC, certificates and notifications; Meta WhatsApp messaging; PostgreSQL with SQLAlchemy/Alembic; responsive frontend with optimized API integration.",
      link: "https://greenleaf-frontend.vercel.app/",
      tech: [
        "React",
        "FastAPI",
        "PostgreSQL",
        "Browser Extension",
        "WhatsApp API",
      ],
    },
    {
      title: "Goks — Rental Billing SaaS",
      img: goks,
      desc: "Multi-tenant SaaS for rental businesses: inventory, bookings, invoicing, and payments. PostgreSQL row-level security, REST APIs, and a role-based dashboard for end-to-end workflows.",
      link: "https://goks-nine.vercel.app/",
      tech: ["React", "PostgreSQL", "RLS", "REST API", "Multi-tenant"],
    },
    {
      title: "Jewellery E-commerce (MERN)",
      img: jewellery,
      desc: "Full-stack jewellery shopping site with authentication, product listing, cart, and order management. Responsive reusable components with REST APIs across React, Node.js, Express, and MongoDB.",
      link: "https://saanvi-frontend.vercel.app/",
      tech: ["React", "Node.js", "Express", "MongoDB"],
    },
    {
      title: "Allayal",
      img: allayal,
      desc: "Company web experience with a clean, responsive layout and fast interaction patterns.",
      link: "https://allayal.com/",
      tech: ["React", "Tailwind CSS"],
    },
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
      title: "Book Shop",
      img: bookshop,
      desc: "An e-commerce bookshop interface driven by JSON data, featuring filtering, search, and responsive layouts.",
      link: "https://book-shop-gi4r.vercel.app/",
      tech: ["React", "Redux", "JSON Server", "Bootstrap"],
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
      img: clinic,
      desc: "A MERN stack healthcare website for doctor clinics featuring appointment slot booking, awareness sessions, and a clean, accessible user experience.",
      link: null,
      comingSoon: true,
      tech: ["MongoDB", "Express", "React", "Node.js", "Booking System"],
    },
  ];

  const displayedProjects = showAll ? projects : projects.slice(0, 4);
  const hasMore = projects.length > 4;

  return (
    <div className="relative">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.35] dark:opacity-20"
        style={{
          backgroundImage: `linear-gradient(to right, rgb(148 163 184 / 0.12) 1px, transparent 1px),
 linear-gradient(to bottom, rgb(148 163 184 / 0.12) 1px, transparent 1px)`,
          backgroundSize: "48px 48px",
        }}
        aria-hidden
      />

      <div className="grid gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-6">
        {displayedProjects.map((proj, index) => (
          <article
            key={`${proj.title}-${index}`}
            ref={(el) => {
              cardRefs.current[index] = el;
            }}
            className="project-card group relative flex flex-col overflow-hidden rounded-2xl border border-slate-200/90 bg-white/90 shadow-sm ring-1 ring-slate-200/50 backdrop-blur-sm transition-all duration-500 ease-out dark:border-slate-800/90 dark:bg-slate-950/55 dark:ring-slate-800/60 dark:shadow-[0_0_0_1px_rgba(15,23,42,0.6)] dark:hover:shadow-[0_24px_48px_-24px_rgba(6,182,212,0.22)]"
            style={{
              opacity: 0,
              transform: "translateY(28px)",
              transition: "opacity 0.55s cubic-bezier(0.22,1,0.36,1), transform 0.55s cubic-bezier(0.22,1,0.36,1), box-shadow 0.4s ease",
            }}
          >
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100 dark:via-cyan-400/40"
              aria-hidden
            />

            <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-100 dark:bg-slate-900/80">
              {proj.img ? (
                <>
                  <img
                    src={proj.img}
                    alt={proj.title}
                    className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/20 to-transparent opacity-90 dark:from-slate-950/90" />
                </>
              ) : (
                <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
                  <span className="font-mono text-[10px] font-medium uppercase tracking-[0.25em] text-slate-500 dark:text-slate-400">
                    Preview soon
                  </span>
                </div>
              )}

              <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-slate-950/80 to-transparent dark:from-slate-950" />

              <div className="absolute left-3 top-3 flex items-center gap-2 sm:left-4 sm:top-4">
                <span className="rounded-md border border-white/15 bg-slate-950/45 px-2 py-0.5 font-mono text-[10px] font-semibold tabular-nums text-slate-100 shadow-sm backdrop-blur-md sm:text-[11px]">
                  {String(index + 1).padStart(2, "0")}
                </span>
                {proj.comingSoon && (
                  <span className="rounded-md border border-amber-400/40 bg-amber-500/15 px-2 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-amber-100 backdrop-blur-md">
                    Soon
                  </span>
                )}
              </div>

              <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4">
                <h3 className="text-balance text-base font-semibold leading-snug tracking-tight text-white drop-shadow-sm sm:text-lg">
                  {proj.title}
                </h3>
              </div>
            </div>

            <div className="relative flex flex-1 flex-col gap-4 border-l-2 border-transparent px-4 pb-4 pt-4 transition-colors duration-500 group-hover:border-cyan-500/45 sm:px-5 sm:pb-5 sm:pt-5 dark:group-hover:border-cyan-400/40">
              <p className="text-[13px] leading-relaxed text-slate-600 sm:text-sm dark:text-slate-400">
                {proj.desc}
              </p>

              {proj.tech && (
                <div className="flex flex-wrap gap-1.5">
                  {proj.tech
                    .filter((tag) => tag && String(tag).trim())
                    .map((tag, tagIndex) => (
                      <span
                        key={`${tag}-${tagIndex}`}
                        className="rounded-md border border-slate-200/90 bg-slate-50 px-2 py-0.5 text-[10px] font-medium text-slate-600 transition-colors duration-300 group-hover:border-cyan-500/25 group-hover:bg-cyan-500/[0.06] group-hover:text-cyan-800 dark:border-slate-700/80 dark:bg-slate-900/70 dark:text-slate-400 dark:group-hover:border-cyan-500/30 dark:group-hover:bg-cyan-500/10 dark:group-hover:text-cyan-200/90"
                      >
                        {tag}
                      </span>
                    ))}
                </div>
              )}

              <div className="mt-auto flex flex-col gap-3 border-t border-slate-200/80 pt-4 dark:border-slate-800/80 sm:flex-row sm:items-center sm:justify-between">
                <span
                  className={`inline-flex items-center gap-2 text-[11px] font-medium ${
                    proj.comingSoon
                      ? "text-amber-700/90 dark:text-amber-300/90"
                      : "text-slate-500 dark:text-slate-500"
                  }`}
                >
                  <span
                    className={`h-1.5 w-1.5 rounded-full ${
                      proj.comingSoon
                        ? "bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.6)]"
                        : "bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.45)]"
                    }`}
                  />
                  {proj.comingSoon ? "In development" : "Shipped & live"}
                </span>

                {proj.link ? (
                  <a
                    href={proj.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2.5 text-xs font-semibold text-slate-800 transition-all duration-300 hover:border-cyan-500/40 hover:bg-gradient-to-r hover:from-cyan-500/10 hover:to-emerald-500/10 hover:text-cyan-900 sm:w-auto dark:border-slate-700 dark:bg-slate-900/50 dark:text-slate-100 dark:hover:border-cyan-500/45 dark:hover:from-cyan-500/15 dark:hover:to-emerald-500/10 dark:hover:text-cyan-100"
                  >
                    Open live demo
                    <i className="fa-solid fa-arrow-up-right-from-square text-[10px] opacity-70" />
                  </a>
                ) : (
                  <span className="inline-flex w-full items-center justify-center rounded-xl border border-dashed border-slate-300 px-3 py-2.5 text-xs font-medium text-slate-500 sm:w-auto dark:border-slate-600 dark:text-slate-500">
                    Link coming soon
                  </span>
                )}
              </div>
            </div>

            <div
              className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
              style={{
                boxShadow:
                  "inset 0 0 0 1px rgba(6,182,212,0.22), 0 0 40px -12px rgba(6,182,212,0.25)",
              }}
              aria-hidden
            />
          </article>
        ))}
      </div>

      {hasMore && (
        <div className="mt-10 flex justify-center sm:mt-12">
          <button
            type="button"
            onClick={() => setShowAll(!showAll)}
            className="group/more inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-sm transition-all duration-300 hover:border-cyan-500/50 hover:bg-slate-50 hover:text-cyan-900 dark:border-slate-600 dark:bg-slate-900/80 dark:text-slate-100 dark:hover:border-cyan-500/50 dark:hover:bg-slate-900 dark:hover:text-cyan-100"
          >
            {showAll ? (
              <>
                Show fewer projects
                <i className="fa-solid fa-chevron-up text-xs text-cyan-600 transition-transform group-hover/more:-translate-y-0.5 dark:text-cyan-400" />
              </>
            ) : (
              <>
                Show all {projects.length} projects
                <i className="fa-solid fa-chevron-down text-xs text-cyan-600 transition-transform group-hover/more:translate-y-0.5 dark:text-cyan-400" />
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
}

export default ProjectCards;
