import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import resume from "../assets/images/kaighassy.pdf";
import ProjectCards from "./ProjectCards";

function Home() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });
  const form = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {  
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_bnliupn", "template_bktehah", form.current, {
        publicKey: "nLmgnRoo60wm3KeeB",
      })
      .then(() => {
        toast.success("Message sent successfully!");

        emailjs
          .sendForm("service_bnliupn", "template_z9plu5o", form.current, {
            publicKey: "nLmgnRoo60wm3KeeB",
          })
          .catch((error) => {
            console.error("Auto-reply failed", error);
          });

        e.target.reset();
      })
      .catch((error) => {
        console.error("FAILED...", error);
        toast.error("Failed to send message. Please try again.");
      });
  };

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="relative overflow-hidden">
      {/* Background glow (dark mode only) */}
      <div className="pointer-events-none fixed inset-0 -z-10 hidden dark:block">
        <div className="absolute -top-32 left-0 h-72 w-72 rounded-full bg-cyan-500/30 blur-3xl" />
        <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-emerald-500/25 blur-3xl" />
        <div className="absolute inset-x-0 top-40 h-px bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />
      </div>

      {/* Navbar */}
      <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-white/80 backdrop-blur-xl dark:border-slate-800/70 dark:bg-slate-950/70">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400 to-emerald-400 text-slate-950 shadow-lg shadow-cyan-500/40">
              <span className="font-mono text-lg font-bold">K</span>
            </span>
            <span className="font-mono text-sm sm:text-base text-slate-800 dark:text-slate-200">
              kaighassy_
            </span>
          </div>

          <div className="hidden items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex">
            <button
              onClick={() => scrollToId("home")}
              className="transition hover:text-cyan-500 dark:hover:text-cyan-300"
            >
              Home
            </button>
            <button
              onClick={() => scrollToId("about")}
              className="transition hover:text-cyan-500 dark:hover:text-cyan-300"
            >
              About
            </button>
          <button
              onClick={() => scrollToId("skills")}
              className="transition hover:text-cyan-500 dark:hover:text-cyan-300"
          >
              Skills
          </button>
            <button
              onClick={() => scrollToId("projects")}
              className="transition hover:text-cyan-500 dark:hover:text-cyan-300"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToId("contact")}
              className="rounded-full border border-cyan-500/70 bg-cyan-500/10 px-4 py-1.5 text-cyan-700 shadow-sm shadow-cyan-500/30 transition hover:-translate-y-0.5 hover:bg-cyan-500/20 dark:border-cyan-400/60 dark:bg-cyan-400/10 dark:text-cyan-200 dark:hover:bg-cyan-400/20"
            >
              Let&apos;s Talk
            </button>

            <button
              type="button"
              onClick={toggleTheme}
              aria-label="Toggle color theme"
              className="ml-1 inline-flex h-8 w-8 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-700 shadow-sm transition hover:border-cyan-400 hover:text-cyan-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:border-cyan-400 dark:hover:text-cyan-300"
            >
              {theme === "dark" ? (
                <i className="fa-regular fa-sun text-[15px]" />
              ) : (
                <i className="fa-regular fa-moon text-[15px]" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <main className="mx-auto max-w-6xl px-4 pb-16 pt-10 text-slate-900 sm:px-6 sm:pt-14 lg:pt-16 dark:text-slate-100">
        {/* Hero Section */}
        <section
          id="home"
          className="grid gap-10 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center"
        >
          {/* Hero content */}
          <div className="space-y-8">
            {/* Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-500/10 px-3 py-1 text-[11px] font-medium text-cyan-700 shadow-sm shadow-cyan-500/40 backdrop-blur dark:border-cyan-400/40 dark:bg-cyan-400/10 dark:text-cyan-200">
              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
              <span>Full Stack Developer • React · Node · MongoDB</span>
            </div>

            {/* Headline */}
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.4em] text-slate-500 dark:text-slate-400">
                Full Stack Developer
              </p>
              <h1 className="text-balance text-3xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-[2.8rem] dark:text-slate-50">
                I design &amp; build
                <span className="block bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 bg-clip-text text-transparent">
                  modern, production‑ready web apps
                </span>
                from UI to database.
              </h1>
              <p className="max-w-xl text-sm leading-relaxed text-slate-600 sm:text-base dark:text-slate-300">
                From polished interfaces to scalable APIs, I bring ideas to life
                with a **React + Node.js** stack, focusing on **performance,
                accessibility, and clean developer experience**.
              </p>
        </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3">
              <button
                onClick={() => scrollToId("projects")}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-5 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:shadow-xl"
              >
                View Projects
                <span className="transition-transform group-hover:translate-x-1">
                  ↗
                </span>
              </button>

              <button
                onClick={() => scrollToId("contact")}
                className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-2 text-sm font-medium text-slate-200 shadow-sm shadow-slate-900/80 backdrop-blur transition hover:border-cyan-400/70 hover:bg-slate-900"
              >
                <span className="text-cyan-300">
                  <i className="fa-solid fa-comments" />
                </span>
                Book a collaboration
              </button>

              <a
                href={resume}
                download="Kaighassy_Suresh_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 underline-offset-4 hover:text-cyan-300 hover:underline"
              >
                <span className="text-cyan-300">
                  <i className="fa-solid fa-download" />
                </span>
                Download resume
              </a>
            </div>

            {/* Tech chips */}
            <div className="flex flex-wrap items-center gap-3 text-[11px] text-slate-300">
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-slate-700/80">
                <span className="text-cyan-300">
                  <i className="fa-brands fa-react" />
                </span>
                <span>React, Hooks, component-driven UI</span>
                </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/80 px-3 py-1 ring-1 ring-slate-700/80">
                <span className="text-emerald-300">
                  <i className="fa-solid fa-server" />
                </span>
                <span>Node.js, Express.js, MongoDB APIs</span>
              </div>
            </div>
            </div>

          {/* Hero visual: code-focused panel */}
          <div className="relative">
            <div className="pointer-events-none absolute -inset-0.5 rounded-3xl bg-gradient-to-br from-cyan-400/60 via-slate-50/10 to-emerald-400/60 opacity-60 blur-2xl" />
            <div className="relative overflow-hidden rounded-3xl border border-slate-700/70 bg-slate-900/70 p-4 shadow-2xl shadow-cyan-900/70 backdrop-blur-xl">
              {/* pseudo code editor */}
              <div className="mb-4 rounded-2xl border border-slate-700/70 bg-slate-950/80 text-[11px] text-slate-200 shadow-inner shadow-slate-950/80">
                <div className="flex items-center justify-between border-b border-slate-800/80 px-3 py-1.5 text-[10px] text-slate-400">
                  <div className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-rose-500" />
                    <span className="h-2 w-2 rounded-full bg-amber-400" />
                    <span className="h-2 w-2 rounded-full bg-emerald-400" />
                  </div>
                  <span className="font-mono">stack.config.ts</span>
                </div>
                <div className="space-y-0.5 px-4 py-3 font-mono text-[10px] leading-relaxed text-slate-300">
                  <p>
                    <span className="text-sky-400">const</span>{" "}
                    <span className="text-cyan-300">stack</span>{" "}
                    <span className="text-slate-400">=</span>{" "}
                    <span className="text-slate-300">{`\u007b`}</span>
                  </p>
                  <p className="pl-4">
                    frontend:
                    <span className="text-emerald-300">
                      {" "}
                      [&quot;React&quot;, &quot;Tailwind&quot;, &quot;UX&quot;]
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    backend:
                    <span className="text-emerald-300">
                      {" "}
                      [&quot;Node.js&quot;, &quot;Express&quot;]
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    database:
                    <span className="text-emerald-300">
                      {" "}
                      [&quot;MongoDB&quot;]
                    </span>
                    ,
                  </p>
                  <p className="pl-4">
                    focus:
                    <span className="text-emerald-300">
                      {" "}
                      [&quot;Performance&quot;, &quot;DX&quot;, &quot;UI&quot;]
                    </span>
                  </p>
                  <p>
                    <span className="text-slate-300">{`\u007d`}</span>
                    <span className="text-slate-500">;</span>
                  </p>
                </div>
              </div>

              {/* small stat tiles */}
              <div className="grid grid-cols-2 gap-3 text-[11px] text-slate-300">
                <div className="rounded-xl border border-cyan-500/30 bg-slate-950/60 p-3 shadow shadow-cyan-900/60">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300">
                    Frontend
                  </p>
                  <p>React interfaces, design systems, animations</p>
                </div>
                <div className="rounded-xl border border-emerald-500/30 bg-slate-950/60 p-3 shadow shadow-emerald-900/60">
                  <p className="mb-1 font-mono text-[10px] uppercase tracking-[0.2em] text-emerald-300">
                    Backend
                  </p>
                  <p>API design, auth flows, MongoDB data models</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section
          id="about"
          className="mt-20 scroll-mt-24 space-y-8 lg:mt-24"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                About
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Building experiences that feel fast, polished, and intuitive.
              </h2>
                </div>
              </div>

          <div className="grid gap-8 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] md:items-start">
            <div className="space-y-4 text-sm leading-relaxed text-slate-300 sm:text-base">
              <p>
                I&apos;m a full stack developer who enjoys designing and
                engineering web applications from scratch—translating ideas into{" "}
                <span className="font-semibold text-cyan-300">
                  thoughtful interfaces and reliable backends
                </span>
                . I care deeply about small details: motion, micro-interactions,
                accessibility, and performance.
              </p>
              <p>
                My workflow is centered around modern JavaScript, React on the
                frontend, and Node.js/Express with MongoDB on the backend. I
                focus on{" "}
                <span className="font-semibold text-emerald-300">
                  clean architecture, reusable components, and maintainable
                  code
                </span>{" "}
                that scales as projects grow.
              </p>
            </div>

            <div className="space-y-4 rounded-2xl border border-slate-700/70 bg-slate-950/70 p-4 shadow-lg shadow-slate-950/80 backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-100">
                Snapshot
              </h3>
              <dl className="space-y-3 text-xs text-slate-300 sm:text-sm">
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Primary stack</dt>
                  <dd className="text-right">
                    React, Node.js, Express.js, MongoDB
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Focus areas</dt>
                  <dd className="text-right">
                    UI/UX, performance, responsive design
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-slate-400">Workflow</dt>
                  <dd className="text-right">
                    Git, VS Code, API-first development
                  </dd>
                </div>
              </dl>
                </div>
              </div>
        </section>

        {/* Education & Certificates */}
        <section
          className="mt-20 grid gap-10 scroll-mt-24 lg:mt-24 lg:grid-cols-2"
        >
          {/* Education */}
          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              Education
            </p>
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/80 backdrop-blur">
              <h3 className="text-lg font-semibold text-slate-50">
                Bachelor of Computer Applications (BCA)
              </h3>
              <p className="mt-1 text-sm text-slate-300">
                Sree Kerala Varma College, Thrissur - Calicut University
              </p>
              <p className="mt-2 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
                2020 - 2023
              </p>
            </div>
            </div>

          {/* Courses / Certificates */}
          <div className="space-y-5">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
              Courses &amp; Certificates
            </p>
            <div className="space-y-4">
              <div className="rounded-2xl border border-emerald-500/30 bg-slate-950/70 p-5 shadow-lg shadow-emerald-900/60 backdrop-blur">
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  MEAN/MERN Full Stack - Luminar Technolab, Cochin
                </h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-[0.2em] text-emerald-300">
                  Nov 2023 - June 2024
                </p>
                <p className="mt-2 text-sm text-slate-300">
                  Covered full stack JavaScript, REST APIs, authentication,
                  deployment, and production workflows using modern tooling.
                </p>
                </div>

              <div className="rounded-2xl border border-cyan-500/40 bg-slate-950/70 p-5 shadow-lg shadow-cyan-900/70 backdrop-blur">
                <h3 className="text-sm font-semibold text-slate-50 sm:text-base">
                  Responsive Web Design - freeCodeCamp
                </h3>
                <p className="mt-2 text-sm text-slate-300">
                  Strengthened fundamentals in semantic HTML, modern CSS, and
                  responsive layouts across devices.
                </p>
                <a
                  href="https://www.freecodecamp.org/certification/fcce91e1db5-1eb9-48d1-9b57-1e98d33da869/responsive-web-design"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 rounded-full border border-cyan-400/60 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold text-cyan-200 transition hover:bg-cyan-400/20 mt-3"
                >
                  View Certificate
                  <span>
                    <i className="fa-solid fa-arrow-up-right-from-square" />
                  </span>
                </a>
              </div>
              
            </div>
          </div>
        </section>

        {/* Skills & Tools */}
        <section
          id="skills"
          className="mt-20 scroll-mt-24 space-y-8 lg:mt-24"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                Skills
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                A focused full stack toolkit.
              </h2>
            </div>
            </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            {/* Technical Skills */}
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/80 backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                Technical Stack
              </h3>
              <div className="mt-4 grid grid-cols-2 gap-4 sm:grid-cols-3">
                {[
                  { label: "React.js", icon: "fa-brands fa-react" },
                  { label: "Node.js", icon: "fa-brands fa-node-js" },
                  { label: "Express.js", icon: "fa-solid fa-server" },
                  { label: "MongoDB", icon: "fa-solid fa-database" },
                  { label: "HTML/CSS", icon: "fa-solid fa-code" },
                  { label: "JavaScript (ES6+)", icon: "fa-brands fa-js" },
                ].map((skill) => (
                  <div
                    key={skill.label}
                    className="group flex items-center gap-3 rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-3 text-xs text-slate-200 shadow-sm shadow-slate-950/80 transition hover:-translate-y-0.5 hover:border-cyan-400/70 hover:bg-slate-900"
                  >
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-slate-950/80 text-cyan-300 ring-1 ring-slate-700/80 group-hover:text-cyan-200">
                      <i className={skill.icon} />
                    </span>
                    <span className="text-[11px] font-medium sm:text-xs">
                      {skill.label}
                    </span>
                </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/70 p-5 shadow-lg shadow-slate-950/80 backdrop-blur">
              <h3 className="text-sm font-semibold text-slate-100 sm:text-base">
                Tools &amp; Software
              </h3>
              <div className="mt-4 grid grid-cols-1 gap-3 text-xs text-slate-300 sm:text-sm">
                <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2.5">
                  <span>VS Code</span>
                  <span className="text-cyan-300">
                    <i className="fa-solid fa-code" />
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2.5">
                  <span>Git &amp; GitHub</span>
                  <span className="text-cyan-300">
                    <i className="fa-brands fa-github" />
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2.5">
                  <span>Postman</span>
                  <span className="text-cyan-300">
                    <i className="fa-solid fa-flask" />
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2.5">
                  <span>Bootstrap</span>
                  <span className="text-cyan-300">
                    <i className="fa-brands fa-bootstrap" />
                  </span>
                </div>
                <div className="flex items-center justify-between rounded-xl border border-slate-700/80 bg-slate-900/70 px-3 py-2.5">
                  <span>Tailwind CSS</span>
                  <span className="text-cyan-300">
                    <i className="fa-solid fa-wand-magic-sparkles" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section
          id="projects"
          className="mt-20 scroll-mt-24 space-y-6 lg:mt-24"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                Projects
              </p>
              <h2 className="mt-1 text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Selected work and experiments.
              </h2>
        </div>
      </div>

        <ProjectCards />
      </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="mt-20 scroll-mt-24 lg:mt-24 lg:pb-6"
        >
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] lg:items-start">
            <div className="space-y-4">
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-cyan-400">
                Contact
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl">
                Let&apos;s collaborate on your next web project.
              </h2>
              <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
                Whether you need a new product, a redesign, or help polishing an
                existing application, I can help you ship fast, user-friendly
                experiences with a modern full stack.
              </p>

              <div className="mt-4 flex flex-wrap gap-3 text-xs text-slate-300 sm:text-sm">
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5">
                  <span className="text-cyan-300">
                    <i className="fa-solid fa-envelope" />
                  </span>
                  <span>Email-based contact form powered by EmailJS</span>
                </div>
                <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-950/80 px-3 py-1.5">
                  <span className="text-emerald-300">
                    <i className="fa-solid fa-lock" />
                  </span>
                  <span>No spam, just project-focused replies</span>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-700/70 bg-slate-950/80 p-5 shadow-xl shadow-slate-950/90 backdrop-blur">
              <form
                ref={form}
                onSubmit={sendEmail}
                className="space-y-4 text-sm text-slate-200"
              >
                <div className="space-y-1.5">
                  <label
                    htmlFor="user_name"
                    className="text-xs font-medium text-slate-300"
                  >
                    Name
                  </label>
                  <input
                    id="user_name"
                    name="user_name"
                      type="text"
                    placeholder="Your name"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="user_email"
                    className="text-xs font-medium text-slate-300"
                  >
                    Email
                  </label>
                  <input
                    id="user_email"
                    name="user_email"
                      type="email"
                      required
                    placeholder="you@example.com"
                    className="w-full rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/40"
                  />
                </div>

                <div className="space-y-1.5">
                  <label
                    htmlFor="message"
                    className="text-xs font-medium text-slate-300"
                  >
                    Project details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                      rows={4}
                    placeholder="Share a bit about your idea, timeline, and what you’re looking to build."
                    className="w-full resize-none rounded-lg border border-slate-700/80 bg-slate-900/70 px-3 py-2 text-sm text-slate-100 outline-none ring-cyan-400/0 transition focus:border-cyan-400/80 focus:ring-2 focus:ring-cyan-500/40"
                    />
                </div>

                  <button
                    type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 to-emerald-400 px-4 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-cyan-500/40 transition hover:-translate-y-0.5 hover:shadow-xl"
                  >
                    Send Message
                  <span>
                    <i className="fa-solid fa-paper-plane" />
                  </span>
                  </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 bg-slate-950/80 py-6 text-xs text-slate-400 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 sm:flex-row sm:px-6">
          <p className="text-center sm:text-left">
            © {new Date().getFullYear()} Kaighassy Suresh. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-lg text-slate-300">
            <a
              href="https://www.linkedin.com/in/kaighassy-suresh-1215a5254/"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/Kaighassy2002"
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-cyan-300"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
      </div>
      </footer>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Home;





