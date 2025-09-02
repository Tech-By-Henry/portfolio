// src/pages/data/projects.js
const projects = [
  {
    slug: "qr-attendance",
    title: "QR code attendance system",
    description:
      "Attendance tracking for classes and events using unique QR codes per session. Built with the Django templating system for server-rendered pages, role-based access control, and exportable attendance reports.",
    tech: ["Django", "PostgreSQL", "Html","Css", "Javascript", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    slug: "school-management-system",
    title: "School management system",
    description:
      "End-to-end admin portal for schools covering students, staff, classes, grading, attendance, and fees. Implemented with Django templating for reliable server-side rendering, simple deployments, and secure authentication.",
    tech: ["Django", "Html","Css", "Javascript", "Bootstrap"],
    github: "#",
    live: "#",
  },
  {
    slug: "airbnb-clone",
    title: "Airbnb clone",
    description:
      "A simplified clone of Airbnb for property listing and booking. Supports user authentication, property management, and booking flows. Built to explore modern full-stack patterns.",
    tech: ["React", "Node.js", "Express", "MongoDB"],
    github: "#",
    live: "#",
  },
  {
    slug: "simple-shell-c",
    title: "Simple shell with C",
    description:
      "A Unix-like shell implemented in C, supporting basic command execution, built-in functions, and piping. Focused on understanding process management and system calls at a low level.",
    tech: ["C", "Linux System Calls"],
    github: "#",
    live: "#",
  },
  {
    slug: "voting-app",
    title: "Voting app",
    description:
      "A digital voting platform allowing users to cast and tally votes securely. Includes role-based admin dashboards, unique voting codes, and result visualization.",
    tech: ["Django", "Html", "PostgreSQL", "Css",],
    github: "#",
    live: "#",
  },
  {
    slug: "telegram-support-bot",
    title: "Telegram support bot system",
    description:
      "A Telegram bot that handles customer support requests, ticketing, and agent assignment. Automates responses and forwards escalations to staff via a connected admin panel.",
    tech: ["Node", "Telegram Bot API", "MongoDB"],
    github: "#",
    live: "#",
  },
];

export default projects;
