export const identity = {
  name: "Akash Ohalkar",
  initials: "AO",
  role: "Software Developer",
  headline: "Python · Flask · SQL · REST APIs · Web Development",
  summary:
    "I build practical web applications and backend solutions using Python, databases, APIs, and web fundamentals.",
  location: "Pune, Maharashtra, India",
  status: "Open to software development opportunities",
  email: "akashohalkar300@gmail.com",
  phone: "+91 9699134688",
  github: "https://github.com/ash-krsna",
  portfolio: "https://my-portfolio-ochre-xi-97.vercel.app/",
  resume: "/media/documents/akash-ohalkar-resume.pdf"
};

export const navItems = [
  { id: "projects", label: "Selected Work" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" }
];

export const heroSignals = ["Python", "Flask", "SQL/MySQL", "REST APIs", "JavaScript"];

export const heroDetails = [
  { label: "Base", value: "Pune, Maharashtra" },
  { label: "Education", value: "BCA completed, MCA pursuing" },
  { label: "Looking for", value: "Junior developer, backend, and full-stack roles" }
];

export const profileVitals = [
  { label: "Primary stack", value: "Python, Flask, SQL, REST APIs" },
  { label: "Current role", value: "Trainee HTML Programmer at Aptara" },
  { label: "Direction", value: "Backend and practical web applications" },
  { label: "Availability", value: "Open to entry-level software roles" }
];

export const disciplineStrip = [
  "Python",
  "Flask",
  "REST APIs",
  "SQL",
  "MySQL",
  "MongoDB",
  "HTML",
  "CSS",
  "Bootstrap",
  "JavaScript",
  "Git",
  "GitHub"
];

export const aboutHighlights = [
  {
    label: "Background",
    value:
      "BCA graduate currently pursuing an online MCA, with a focus on strengthening software development fundamentals."
  },
  {
    label: "Build style",
    value:
      "Comfortable with practical projects that connect forms, routes, database records, and clear user-facing pages."
  },
  {
    label: "Next step",
    value:
      "Seeking a genuine junior software role where I can contribute, learn from a team, and keep building useful systems."
  }
];

export const focusModes = [
  {
    label: "Backend",
    title: "Routes, records, and workflows",
    copy:
      "Python, Flask, SQL, and API practice used to move data through clear CRUD flows and application logic.",
    icon: "bi-diagram-3"
  },
  {
    label: "Frontend",
    title: "Readable, responsive interfaces",
    copy:
      "HTML, CSS, Bootstrap, and JavaScript used to create pages that are easy to scan and practical to use.",
    icon: "bi-layout-text-sidebar-reverse"
  },
  {
    label: "Habits",
    title: "Steady improvement through projects",
    copy:
      "Project work, GitHub practice, and continued MCA learning are helping turn fundamentals into recruiter-visible proof.",
    icon: "bi-git"
  }
];

export const skillGroups = [
  {
    title: "Backend",
    icon: "bi-hdd-network",
    description: "Core server-side skills for junior Python and backend development roles.",
    skills: ["Python", "Flask", "REST APIs", "JSON", "CRUD operations"]
  },
  {
    title: "Databases",
    icon: "bi-database",
    description: "Database tools used across project work and continued practice.",
    skills: ["MySQL", "SQL", "MongoDB"]
  },
  {
    title: "Frontend",
    icon: "bi-window",
    description: "Web interface skills used to build responsive pages and simple application screens.",
    skills: ["HTML", "CSS", "Bootstrap", "JavaScript"]
  },
  {
    title: "Tools",
    icon: "bi-tools",
    description: "Development workflow tools used for code, version control, and project sharing.",
    skills: ["Git", "GitHub", "Postman", "Vite"]
  },
  {
    title: "Currently Learning",
    icon: "bi-compass",
    description: "Foundational technologies being strengthened through small builds and practice.",
    skills: ["React basics", "Node.js basics", "Express basics"]
  }
];

export const projects = [
  {
    title: "BSB International School ERP",
    category: "Full-stack school application",
    period: "Node.js / Express / MySQL / React",
    status: "Public repo + live site",
    featured: true,
    stack: ["Node.js", "Express", "MySQL", "React", "Electron", "Cloudinary"],
    problem:
      "A school needs more than a brochure site: admissions, student records, fees, attendance, notices, and office workflows need a structured system.",
    solution:
      "A production-style monorepo with an API, web app, desktop shell, database schema, deployment docs, and ERP-oriented modules.",
    implementation:
      "Organized the project into app workspaces, backend routes, database setup, role-based workflows, and a Vercel-ready public website.",
    proof:
      "Shows full-stack thinking, backend structure, database planning, and the ability to document a larger application.",
    description:
      "A school ERP and website project structured around admissions, student records, fees, attendance, notices, reporting, and office use.",
    github: "https://github.com/ash-krsna/BSB-International-School",
    live: "https://bsb-international-school.vercel.app/",
    icon: "bi-mortarboard",
    visual: {
      title: "ERP flow",
      rows: ["Admissions", "Student profiles", "Fees + receipts", "Notices + reports"]
    }
  },
  {
    title: "Lift Management System",
    category: "Python backend logic",
    period: "Python / MySQL / HTML",
    status: "Source + static demo",
    featured: true,
    stack: ["Python", "MySQL", "HTML", "CSS", "Scheduling logic"],
    problem:
      "Lift control needs predictable decisions across floors, queues, directions, maintenance mode, and emergency states.",
    solution:
      "A Python lift dashboard with MySQL-backed records, request assignment logic, lift rules, logs, and browser/Tkinter interfaces.",
    implementation:
      "Built controller, scheduler, database, lift model, SQL schema, and a simple browser dashboard for testing lift behavior.",
    proof:
      "Shows decomposition, state management, database handling, and practical backend logic beyond a static website.",
    description:
      "A Python project that models multi-lift request handling, floor movement, queues, maintenance state, and database logging.",
    github: "https://github.com/ash-krsna/Lift-Management",
    live: "https://ash-krsna.github.io/Lift-Management/?v=demo2",
    icon: "bi-arrow-down-up",
    visual: {
      title: "Lift status",
      rows: ["B1 -> 9 floor order", "4 lift controller", "Queues + logs", "MySQL tables"]
    }
  },
  {
    title: "Pandurang Pratishthan NGO Website",
    category: "Organization website",
    period: "HTML / CSS / JavaScript / Vercel API",
    status: "Live",
    featured: true,
    stack: ["HTML", "CSS", "JavaScript", "Razorpay API", "Vercel"],
    problem:
      "An NGO website needs clear public information, donation intent, volunteer contact paths, and trust-focused content.",
    solution:
      "A responsive static site with mission sections, gallery filters, donation flow hooks, volunteer/contact forms, and Vercel serverless API routes.",
    implementation:
      "Built the landing structure, interaction scripts, donation checkout integration files, form feedback, and deployment configuration.",
    proof:
      "Shows practical frontend execution, API integration awareness, and careful handling of launch placeholders.",
    description:
      "A mobile-first NGO website with donation, volunteer, contact, gallery, and mission-led content flows.",
    github: "https://github.com/ash-krsna/Pandurang-Pratishthan",
    live: "https://pandurang-pratishthan.vercel.app/",
    icon: "bi-people",
    visual: {
      title: "Site paths",
      rows: ["Mission", "Donation", "Volunteer", "Contact"]
    }
  },
  {
    title: "Vehicle Tracker",
    category: "Frontend concept",
    period: "HTML / CSS / JavaScript",
    status: "Static demo",
    featured: false,
    stack: ["HTML", "CSS", "JavaScript"],
    impact:
      "Turns a tracking idea into a responsive interface with vehicle information, dynamic UI states, and room for future map integration.",
    description:
      "A compact static demo focused on vehicle information, status display, and responsive UI practice.",
    github: "https://github.com/ash-krsna/codex-",
    live: "https://ash-krsna.github.io/codex-",
    icon: "bi-geo-alt"
  },
  {
    title: "Personal Portfolio",
    category: "Developer profile",
    period: "React / Vite / Tailwind",
    status: "Current site",
    featured: false,
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    impact:
      "Presents identity, verified projects, skills, education, resume, and contact links in one focused recruiter journey.",
    description:
      "This portfolio, rebuilt as a concise software developer profile with a verified project selection and cleaner positioning.",
    github: "https://github.com/ash-krsna/my-portfolio",
    live: "https://my-portfolio-ochre-xi-97.vercel.app/",
    icon: "bi-person-badge"
  }
];

export const experienceItems = [
  {
    date: "Jan 2026 - Present",
    title: "Trainee HTML Programmer",
    org: "Aptara, Pune",
    description:
      "Works with structured HTML and digital content workflows, building accuracy, semantic organization, and production discipline.",
    icon: "bi-briefcase"
  },
  {
    date: "2025 - Present",
    title: "Independent software projects",
    org: "Self-directed project work",
    description:
      "Building web and backend practice projects with Python, SQL/MySQL, JavaScript, API integrations, and deployment workflows.",
    icon: "bi-window-stack"
  }
];

export const educationItems = [
  {
    date: "2026 - Present",
    title: "Master of Computer Applications",
    org: "Dr. D.Y. Patil Vidyapeeth Online",
    description:
      "Currently pursuing postgraduate study while strengthening software development and backend fundamentals.",
    icon: "bi-mortarboard"
  },
  {
    date: "2022 - 2025",
    title: "Bachelor of Computer Applications",
    org: "Savitribai Phule Pune University",
    description:
      "Completed undergraduate study in computer applications, programming, databases, and web technologies.",
    icon: "bi-journal-code"
  }
];

export const resumeHighlights = [
  "Early-career software developer profile focused on Python, Flask, SQL, REST APIs, and web development.",
  "Hands-on practice with Python, MySQL, JavaScript, HTML, CSS, Git, GitHub, and application workflows.",
  "Current Trainee HTML Programmer experience at Aptara with structured digital content workflows.",
  "BCA completed, MCA currently pursuing, and actively building project evidence for junior developer roles."
];

export const contactLinks = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, icon: "bi-envelope" },
  { label: "GitHub", value: "github.com/ash-krsna", href: identity.github, icon: "bi-github" },
  { label: "Resume", value: "Download PDF", href: identity.resume, icon: "bi-file-earmark-text", download: true },
  { label: "Portfolio", value: "Live portfolio", href: identity.portfolio, icon: "bi-globe2" }
];
