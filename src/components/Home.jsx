import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import resume from "../assets/images/kaighassy.pdf";
import ProjectCards from "./ProjectCards";
import HeroShowcase from "./HeroShowcase";
import ScrollReveal from "./ScrollReveal";
import AmbientMotion from "./AmbientMotion";
import SmoothScroll, { setSmoothScrollLocked, smoothScrollTo } from "./SmoothScroll";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "experience", label: "Experience" },
  { id: "contact", label: "Contact" },
];

const experienceRoles = [
  {
    role: "Web Developer & Content Creator",
    company: "Al Layal Media and Graphics FZE LLC",
    location: "Dubai, UAE · Remote",
    period: "Jan 2025 · Mar 2025",
    link: "https://allayal.com/",
    highlights: [
      "Developed and maintained the company website using React.js with responsive layouts and reusable components.",
      "Worked with existing frontend structures and implemented UI changes for client projects.",
      "Integrated frontend workflows with APIs and maintained clean, scalable component structure.",
      "Collaborated with the team to deliver website projects for Dubai-based clients.",
    ],
  },
];

const marqueeItems = [
  "MongoDB",
  "Express",
  "React",
  "Node.js",
  "REST APIs",
  "JWT",
  "JavaScript ES6+",
  "Tailwind CSS",
  "Bootstrap",
  "Redux",
  "Vite",
  "EmailJS",
  "Git",
];

const skillGroups = [
  {
    title: "Interface",
    note: "Components, layouts, and the screens people use.",
    items: ["React", "JavaScript", "Tailwind CSS", "Bootstrap", "Redux"],
  },
  {
    title: "MERN",
    note: "Auth, data, and the APIs behind the product.",
    items: ["Node.js", "Express", "MongoDB", "REST APIs", "JWT"],
  },
  {
    title: "Workflow",
    note: "The tools I use to build, check, and ship.",
    items: ["Git", "GitHub", "Vite", "Postman", "VS Code", "EmailJS"],
  },
];

const journey = [
  {
    period: "2020 — 2023",
    title: "Bachelor of Computer Applications (BCA)",
    place: "Sree Kerala Varma College, Thrissur — Calicut University",
  },
  {
    period: "Nov 2023 — June 2024",
    title: "MEAN/MERN Full Stack",
    place: "Luminar Technolab, Cochin",
  },
  {
    period: "Sep 2025",
    title: "Responsive Web Design",
    place: "freeCodeCamp",
    href: "https://www.freecodecamp.org/certification/fcce91e1db5-1eb9-48d1-9b57-1e98d33da869/responsive-web-design",
  },
];

function Home() {
  const [theme, setTheme] = useState(() => {
    if (typeof window === "undefined") return "dark";
    return localStorage.getItem("theme") || "dark";
  });
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [showBackTop, setShowBackTop] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);
  const form = useRef(null);
  const heroRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
    const metaTheme = document.querySelector('meta[name="theme-color"]');
    if (metaTheme) {
      metaTheme.setAttribute("content", theme === "dark" ? "#0D0D0D" : "#E9E9E9");
    }
  }, [theme]);

  useEffect(() => {
    const sectionIds = navLinks.map((l) => l.id);
    const observers = [];
    const options = {
      root: null,
      rootMargin: "-42% 0px -42% 0px",
      threshold: 0,
    };
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(id);
        });
      }, options);
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  useEffect(() => {
    let backTop = false;
    let header = false;
    const onScroll = () => {
      const el = document.documentElement;
      const top = el.scrollTop;
      const max = el.scrollHeight - el.clientHeight;
      if (progressRef.current) {
        progressRef.current.style.width = `${max > 0 ? (top / max) * 100 : 0}%`;
      }
      const nextBack = top > 480;
      if (nextBack !== backTop) {
        backTop = nextBack;
        setShowBackTop(nextBack);
      }
      const nextHeader = top > 12;
      if (nextHeader !== header) {
        header = nextHeader;
        setHeaderScrolled(nextHeader);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return undefined;

    let frame = 0;
    const update = () => {
      const hero = heroRef.current;
      if (hero) {
        const rect = hero.getBoundingClientRect();
        const progress = Math.min(1, Math.max(0, -rect.top / Math.max(rect.height, 1)));
        const distance = window.innerWidth < 760 ? 8 : 16;
        hero.style.setProperty("--hero-shift", `${(progress * distance).toFixed(2)}px`);
      }

      const viewH = window.innerHeight || 1;
      const max = window.innerWidth < 760 ? 8 : 14;
      document.querySelectorAll("[data-scroll-parallax]").forEach((node) => {
        const rect = node.getBoundingClientRect();
        if (rect.bottom < -80 || rect.top > viewH + 80) return;
        const delta = (rect.top + rect.height / 2 - viewH / 2) / viewH;
        const shift = Math.max(-max, Math.min(max, -delta * max));
        node.style.setProperty("--scroll-shift", `${shift.toFixed(2)}px`);
      });
    };
    const onScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    if (!mobileMenuOpen) return undefined;
    const onKey = (event) => {
      if (event.key === "Escape") setMobileMenuOpen(false);
    };
    setSmoothScrollLocked(true);
    document.addEventListener("keydown", onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      setSmoothScrollLocked(false);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = previous;
    };
  }, [mobileMenuOpen]);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1020) setMobileMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const scrollToId = (id) => {
    const menuWasOpen = mobileMenuOpen;
    setMobileMenuOpen(false);
    const go = () => {
      setSmoothScrollLocked(false);
      smoothScrollTo(id);
    };
    if (menuWasOpen) {
      window.setTimeout(go, 40);
    } else {
      go();
    }
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

  return (
    <div className="page">
      <SmoothScroll />
      <AmbientMotion />
      <div className="geo" aria-hidden="true">
        <span className="orb orb-a" />
        <span className="orb orb-b" />
        <span className="orb orb-c" />
        <span className="orb orb-d" />
      </div>

      <div className="progress" aria-hidden="true">
        <span ref={progressRef} />
      </div>

      <div className="shell">
        <span className="shell-orbit" aria-hidden="true" />

        <header
          className={`nav${headerScrolled ? " is-scrolled" : ""}${mobileMenuOpen ? " is-open" : ""}`}
        >
          <div className="nav-bar">
            <button type="button" className="brand" onClick={() => scrollToId("home")}>
              <span>Kaighassy</span>
            </button>

            <ul className="nav-links">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    type="button"
                    className={`nav-link${activeSection === link.id ? " is-active" : ""}`}
                    onClick={() => scrollToId(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>

            <div className="nav-actions">
              <button
                type="button"
                className="icon-btn"
                onClick={toggleTheme}
                aria-label="Toggle color theme"
              >
                {theme === "dark" ? (
                  <i className="fa-regular fa-sun" />
                ) : (
                  <i className="fa-regular fa-moon" />
                )}
              </button>
              <button
                type="button"
                className={`nav-toggle${mobileMenuOpen ? " is-open" : ""}`}
                aria-label="Toggle menu"
                aria-expanded={mobileMenuOpen}
                onClick={() => setMobileMenuOpen((prev) => !prev)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>

          {mobileMenuOpen ? (
            <div className="mobile-menu" data-lenis-prevent>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  type="button"
                  className={activeSection === link.id ? "is-active" : undefined}
                  onClick={() => scrollToId(link.id)}
                >
                  {link.label}
                </button>
              ))}
            </div>
          ) : null}
        </header>

        <main>
          <section id="home" className="hero" ref={heroRef}>
            <h1 className="sr-only">Full-stack Developer</h1>
            <div className="hero-parallax">
            <div className="hero-lockup hero-rise">
              <div className="hero-topline">
                <p className="hero-display" aria-hidden="true">
                  Full-stack
                </p>
                <button
                  type="button"
                  className="btn-pill hero-cta"
                  onClick={() => scrollToId("projects")}
                >
                  Projects
                  <span className="btn-arrow" aria-hidden="true">
                    →
                  </span>
                </button>
              </div>
              <div className="hero-subline">
                <p className="hero-bio">
                  I write maintainable, clean and <em>understandable code</em> so
                  building products stays enjoyable.
                </p>
                <p className="hero-display hero-role" aria-hidden="true">
                  Developer
                </p>
              </div>
            </div>
            </div>

            <div className="hero-parallax is-mid">
            <div className="hero-socials hero-rise">
              <a
                className="social-pill"
                href="https://github.com/Kaighassy2002"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-github" aria-hidden="true" />
                GitHub
              </a>
              <a
                className="social-pill"
                href="https://www.linkedin.com/in/kaighassy-suresh-1215a5254/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fa-brands fa-linkedin-in" aria-hidden="true" />
                LinkedIn
              </a>
              <a className="social-pill" href="mailto:kaighassysuresh@gmail.com">
                <i className="fa-regular fa-envelope" aria-hidden="true" />
                Email
              </a>
              <a
                className="social-pill"
                href={resume}
                download="Kaighassy_Resume.pdf"
              >
                <i className="fa-regular fa-file-lines" aria-hidden="true" />
                Résumé
              </a>
            </div>
            </div>

            <div className="hero-parallax is-slow">
              <HeroShowcase />
            </div>
          </section>

          <ScrollReveal className="marquee" y={12} duration={0.45}>
            <div className="marquee-track">
              {[0, 1].map((copy) => (
                <div className="marquee-group" key={copy}>
                  {marqueeItems.map((item) => (
                    <span key={`${copy}-${item}`}>
                      {item} <span className="sep">/</span>
                    </span>
                  ))}
                </div>
              ))}
            </div>
          </ScrollReveal>

          <section id="about" className="section">
            <div className="about-grid">
              <div>
                <ScrollReveal>
                  <p className="kicker">.... / About ...</p>
                  <h2 className="section-title">
                    I build web apps people use.
                  </h2>
                </ScrollReveal>
                <ScrollReveal delay={0.05} y={18}>
                  <div className="prose">
                    <p>
                      I'm a web developer working with React and the MERN stack. I use
                      React for the interface, with Node, Express, and MongoDB behind it
                      for data, APIs, and auth.
                    </p>
                    <p>
                      The work I take on is practical: e-commerce platforms, dashboards, and
                      client websites. I care about keeping the experience clear and the
                      code easy to come back to.
                    </p>
                  </div>
                </ScrollReveal>
              </div>
              <dl className="snapshot">
                {[
                  ["Stack", "React, Node.js, Express, MongoDB"],
                  ["Core strengths", "REST APIs, JWT, responsive UI"],
                  ["Languages", "English · Malayalam"],
                ].map(([label, value], index) => (
                  <div className="snapshot-item" key={label}>
                    <ScrollReveal delay={index * 0.07} y={16} duration={0.5}>
                      <dt>{label}</dt>
                      <dd>{value}</dd>
                    </ScrollReveal>
                  </div>
                ))}
              </dl>
            </div>
          </section>

          <section id="skills" className="section">
            <ScrollReveal>
              <p className="kicker">.... / Skills ...</p>
              <div className="section-head">
                <h2 className="section-title">The stack behind the work.</h2>
                <p className="lede">
                  React for the interface, MERN for the product, and a small set of tools
                  I use to build and ship it.
                </p>
              </div>
            </ScrollReveal>
            <div className="skill-board">
              {skillGroups.map((group, index) => (
                <ScrollReveal key={group.title} delay={index * 0.08} y={18} duration={0.5}>
                  <article className="skill-card">
                    <h3>{group.title}</h3>
                    <p className="skill-note">{group.note}</p>
                    <ul className="skill-list">
                      {group.items.map((item) => (
                        <li className="skill-chip" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </section>

          <section id="projects" className="section">
            <ScrollReveal>
              <p className="kicker">.... / Projects ...</p>
              <div className="section-head">
                <h2 className="section-title">Selected work.</h2>
                <p className="lede">
                  Live products and client sites. The stack follows what each one needed.
                </p>
              </div>
            </ScrollReveal>
            <ProjectCards />
          </section>

          <section id="journey" className="section">
            <ScrollReveal>
              <p className="kicker">.... / Journey ...</p>
              <h2 className="section-title">Education and training.</h2>
            </ScrollReveal>
            <ol className="timeline">
              {journey.map((item, index) => (
                <ScrollReveal
                  as="li"
                  className="t-item"
                  key={item.title}
                  delay={index * 0.07}
                  y={16}
                  duration={0.5}
                >
                  <span className="t-dot" aria-hidden="true" />
                  <p className="t-period">{item.period}</p>
                  <div className="t-body">
                    <h3>{item.title}</h3>
                    <p className="t-place">{item.place}</p>
                    {item.href ? (
                      <a
                        className="text-link"
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View certificate
                        <span className="arrow-move" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ) : null}
                  </div>
                </ScrollReveal>
              ))}
            </ol>
          </section>

          <section id="experience" className="section">
            <ScrollReveal>
              <p className="kicker">.... / Experience ...</p>
              <div className="section-head">
                <h2 className="section-title">Where I ship production work today.</h2>
                <p className="lede">
                  Day-to-day client work alongside the projects above—shipping real sites
                  and features.
                </p>
              </div>
            </ScrollReveal>
              {experienceRoles.map((job, index) => (
                <ScrollReveal
                  as="article"
                  className="exp-row"
                  key={job.company}
                  delay={index * 0.06}
                  y={18}
                  duration={0.55}
                >
                  <p className="exp-period">{job.period}</p>
                  <div>
                    <p className="exp-company">{job.company}</p>
                    <p className="exp-location">{job.location}</p>
                  </div>
                  <div>
                    <p className="exp-role">{job.role}</p>
                    {job.link ? (
                      <a
                        className="text-link"
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit company site
                        <span className="arrow-move" aria-hidden="true">
                          ↗
                        </span>
                      </a>
                    ) : null}
                  </div>
                  <ul className="exp-highlights">
                    {job.highlights.map((line) => (
                      <li key={line}>{line}</li>
                    ))}
                  </ul>
                </ScrollReveal>
              ))}
          </section>

          <section id="contact" className="section">
            <ScrollReveal>
              <p className="kicker">.... / Contact ...</p>
              <div className="contact-intro">
                <h2 className="contact-title">
                  Tell me what
                  <br />
                  you&apos;re building.
                </h2>
                <p className="lede">
                  Need help with an app, API, or UI refresh? Share goals, timeline, and
                  scope—I&apos;ll reply with a clear next step.
                </p>
              </div>
            </ScrollReveal>
            <div className="contact-grid">
              <ScrollReveal>
                <div className="contact-links">
                  <a className="text-link" href="mailto:kaighassysuresh@gmail.com">
                    kaighassysuresh@gmail.com
                    <span className="arrow-move" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  <a className="text-link" href="tel:+919037194425">
                    +91 9037194425
                  </a>
                  <a
                    className="text-link"
                    href="https://www.linkedin.com/in/kaighassy-suresh-1215a5254/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    LinkedIn
                    <span className="arrow-move" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                  <a
                    className="text-link"
                    href="https://github.com/Kaighassy2002"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                    <span className="arrow-move" aria-hidden="true">
                      ↗
                    </span>
                  </a>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.08} y={24}>
                <form ref={form} className="form-card" onSubmit={sendEmail}>
                  <div className="field">
                    <label htmlFor="user_name">Name</label>
                    <input
                      id="user_name"
                      name="user_name"
                      type="text"
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="user_email">Email</label>
                    <input
                      id="user_email"
                      name="user_email"
                      type="email"
                      required
                      placeholder="you@example.com"
                    />
                  </div>
                  <div className="field">
                    <label htmlFor="message">Project details</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={5}
                      required
                      placeholder="What are you building?"
                    />
                  </div>
                  <button type="submit" className="btn-pill btn-block">
                    Send message
                    <span className="btn-arrow" aria-hidden="true">
                      →
                    </span>
                  </button>
                </form>
              </ScrollReveal>
            </div>
          </section>
        </main>

        <ScrollReveal as="footer" className="footer" y={14} duration={0.5}>
          <p>© {new Date().getFullYear()} Kaighassy</p>
          <div className="footer-links">
            <a
              href="https://www.linkedin.com/in/kaighassy-suresh-1215a5254/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <i className="fa-brands fa-linkedin" />
            </a>
            <a
              href="https://github.com/Kaighassy2002"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <i className="fa-brands fa-github" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {showBackTop ? (
        <button
          type="button"
          className="back-top"
          onClick={() => smoothScrollTo(0)}
          aria-label="Back to top"
        >
          ↑
        </button>
      ) : null}

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
        theme={theme === "dark" ? "dark" : "light"}
      />
    </div>
  );
}

export default Home;
