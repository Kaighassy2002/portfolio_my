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

export const projects = [
  {
    title: "Developer Portfolio",
    img: portfolio,
    desc: "Responsive personal portfolio with React, Bootstrap, and custom CSS. EmailJS for visitor contact without a backend.",
    link: "https://www.kaighassy.com/",
    tech: ["React", "Bootstrap", "Custom CSS", "EmailJS"],
  },
  {
    title: "Greenleaf Platform",
    img: greenleaf,
    desc: "Full stack plus browser extension: FastAPI, auth, RBAC, certificates, notifications, Meta WhatsApp, PostgreSQL with SQLAlchemy/Alembic, and a responsive frontend.",
    link: "https://greenleaf-frontend.vercel.app/",
    tech: [
      "React",
      "FastAPI",
      "PostgreSQL",
      "Browser Extension",
      "WhatsApp API",
    ],
    featured: true,
  },
  {
    title: "Goks — Rental Billing SaaS",
    img: goks,
    desc: "Multi-tenant SaaS for rentals: inventory, bookings, invoicing, and payments. PostgreSQL RLS, REST APIs, and role-based dashboards.",
    link: "https://goks-nine.vercel.app/",
    tech: ["React", "PostgreSQL", "RLS", "REST API", "Multi-tenant"],
  },
  {
    title: "Jewellery E-commerce",
    img: jewellery,
    desc: "Full-stack jewellery store: auth, catalog, cart, and orders. Reusable React components with Express/MongoDB APIs.",
    link: "https://saanvi-frontend.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Allayal",
    img: allayal,
    desc: "Company site with a clean responsive layout, fast interactions, and maintainable component structure.",
    link: "https://allayal.com/",
    tech: ["React", "Tailwind CSS"],
  },
  {
    title: "Creative Studio",
    img: creative,
    desc: "Marketing-style company frontend: services, pricing, and strong visual hierarchy. UI/UX showcase build.",
    link: "https://media-website-ecru.vercel.app/",
    tech: ["React", "Tailwind", "CSS"],
  },
  {
    title: "Hair Salon",
    img: hairsalon,
    desc: "Salon booking platform with JWT auth, reusable UI, and a smooth booking flow.",
    link: "https://hair-salon-alpha.vercel.app/",
    tech: ["React", "Node.js", "Express", "MongoDB"],
  },
  {
    title: "Book Shop",
    img: bookshop,
    desc: "Bookshop UI with JSON-driven data, filtering, search, and responsive layouts.",
    link: "https://book-shop-gi4r.vercel.app/",
    tech: ["React", "Redux", "JSON Server", "Bootstrap"],
  },
  {
    title: "Client Portfolio",
    img: clientPortfolio,
    desc: "Custom portfolio with a blog and a lightweight notes surface for drafting content.",
    link: "https://www.athulsuresh.me/",
    tech: ["React", "Node.js", "Express", "MongoDB", "Lexical Editor"],
  },
  {
    title: "Clinic booking platform",
    img: clinic,
    desc: "Healthcare concept: clinic site with appointment slots, awareness sessions, and an accessible patient-first UI. Build in progress.",
    link: null,
    comingSoon: true,
    tech: ["MongoDB", "Express", "React", "Node.js", "Booking"],
  },
];
