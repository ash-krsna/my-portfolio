export const identity = {
  name: "Akash Ohalkar",
  initials: "AO",
  role: "Frontend Developer | Cyber Security Learner | Python & SQL Developer",
  location: "Maharashtra, India",
  status: "Open to Internship / Junior Developer Roles",
  email: "akashohalkar300@gmail.com",
  github: "https://github.com/ash-krsna",
  portfolio: "https://ash-krsna.github.io/my-portfolio/",
  linkedin: "https://www.linkedin.com/in/akash-gita-bhagwat",
  resume: "/media/documents/akash-ohalkar-resume.pdf"
};

export const navItems = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "journey", label: "Journey" },
  { id: "resume", label: "Resume" },
  { id: "contact", label: "Contact" }
];

export const heroSignals = [
  "React.js interfaces",
  "Python + SQL logic",
  "Security-first mindset",
  "Recruiter-ready portfolio"
];

export const impactMetrics = [
  { value: "5+", label: "Projects Built", tone: "cyan" },
  { value: "React", label: "+ Python + SQL", tone: "violet" },
  { value: "BCA", label: "Graduate", tone: "emerald" },
  { value: "Cyber", label: "Security Learner", tone: "blue" },
  { value: "Open", label: "To Work", tone: "rose" }
];

export const proofPoints = [
  "Built web projects across school, NGO, tracking, portfolio, and computer vision use cases.",
  "Comfortable turning simple requirements into responsive pages, dashboards, and user flows.",
  "Growing from frontend fundamentals into full-stack thinking with Flask, MySQL, Python, and security awareness."
];

export const skillGroups = [
  {
    title: "Frontend",
    icon: "bi-window-stack",
    description: "Clean, responsive interfaces with strong hierarchy and smooth interactions.",
    skills: ["React.js", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Responsive UI"]
  },
  {
    title: "Backend",
    icon: "bi-braces-asterisk",
    description: "Practical server logic, routing, forms, and Python-backed workflows.",
    skills: ["Python", "Flask", "REST basics", "Form handling", "API thinking"]
  },
  {
    title: "Database",
    icon: "bi-database-check",
    description: "Data modeling foundations for useful web applications and reporting.",
    skills: ["SQL", "MySQL", "CRUD flows", "Queries", "Relational basics"]
  },
  {
    title: "Tools",
    icon: "bi-tools",
    description: "Daily developer workflow for shipping, debugging, and collaboration.",
    skills: ["Git", "GitHub", "VS Code", "Vercel", "Postman", "Chrome DevTools"]
  },
  {
    title: "Cyber Security",
    icon: "bi-shield-lock",
    description: "Learning security fundamentals to build safer and more trustworthy products.",
    skills: ["OWASP Top 10", "Nmap", "Wireshark", "Burp Suite basics", "Networking", "Linux basics"]
  }
];

export const projects = [
  {
    title: "NGO Management Website",
    category: "Full-stack system",
    stack: ["Flask", "MySQL", "Python", "HTML", "CSS"],
    impact: "Organizes donor, activity, and admin workflows into one clearer management experience.",
    description:
      "A practical NGO platform shaped around real operations: records, activity updates, and structured admin work.",
    github: "https://github.com/ash-krsna",
    live: "https://pandurang-pratishthan.vercel.app/#home",
    icon: "bi-people"
  },
  {
    title: "BSB International School Website",
    category: "Institution website",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UX"],
    impact: "Improves trust for parents and visitors through a polished school-first web presence.",
    description:
      "A clean public website with better information flow for academics, updates, gallery content, and school identity.",
    github: "https://github.com/ash-krsna",
    live: "https://bsb-international-school.vercel.app/",
    icon: "bi-mortarboard"
  },
  {
    title: "Vehicle Tracker",
    category: "Dashboard concept",
    stack: ["JavaScript", "CSS", "Dashboard UI", "Maps thinking"],
    impact: "Turns a technical tracking idea into a sharper interface recruiters can quickly understand.",
    description:
      "A responsive tracking-oriented UI focused on status, movement, scan-friendly cards, and practical product thinking.",
    github: "https://github.com/ash-krsna",
    live: "https://ash-krsna.github.io/codex-",
    icon: "bi-geo-alt"
  },
  {
    title: "Gun Detection Project",
    category: "Computer vision",
    stack: ["Python", "OpenCV", "Detection logic", "Security awareness"],
    impact: "Connects Python learning with real-time safety and security use cases.",
    description:
      "An OpenCV-based project exploring object detection concepts and how software can support threat-awareness workflows.",
    github: "https://github.com/ash-krsna",
    live: "",
    icon: "bi-camera-video"
  },
  {
    title: "Personal Portfolio",
    category: "Personal brand",
    stack: ["React", "Vite", "Tailwind CSS", "Framer Motion"],
    impact: "Presents identity, proof, projects, and contact details in a recruiter-friendly journey.",
    description:
      "A modern portfolio system designed to show who Akash is, what he builds, and where he is growing next.",
    github: "https://github.com/ash-krsna/my-portfolio",
    live: "https://ash-krsna.github.io/my-portfolio/",
    icon: "bi-person-badge"
  }
];

export const journeyItems = [
  {
    date: "BCA Graduate",
    title: "Built the foundation",
    description:
      "Completed a Bachelor of Computer Applications background with fundamentals in programming, databases, web technology, and problem solving.",
    icon: "bi-journal-code"
  },
  {
    date: "Aptara",
    title: "Process Associate experience",
    description:
      "Gained workplace discipline, accuracy, communication habits, and process thinking that now support how I approach technical work.",
    icon: "bi-briefcase"
  },
  {
    date: "Projects",
    title: "Started shipping web experiences",
    description:
      "Moved from learning concepts into building public websites, dashboards, Flask/MySQL workflows, and responsive portfolio experiences.",
    icon: "bi-rocket-takeoff"
  },
  {
    date: "Now",
    title: "Cyber security learning journey",
    description:
      "Growing security awareness through networking basics, OWASP concepts, Linux practice, and tools such as Nmap, Wireshark, and Burp Suite.",
    icon: "bi-shield-check"
  }
];

export const resumeHighlights = [
  "Frontend development with React.js, JavaScript, Tailwind CSS, HTML, and CSS.",
  "Python, Flask, SQL, and MySQL foundations for full-stack project work.",
  "Cyber security learning across OWASP, networking, Linux, and security tools.",
  "BCA graduate with process experience and a practical project portfolio."
];

export const contactLinks = [
  { label: "Email", value: identity.email, href: `mailto:${identity.email}`, icon: "bi-envelope" },
  { label: "GitHub", value: "github.com/ash-krsna", href: identity.github, icon: "bi-github" },
  { label: "LinkedIn", value: "LinkedIn profile", href: identity.linkedin, icon: "bi-linkedin" },
  { label: "Portfolio", value: "ash-krsna.github.io/my-portfolio", href: identity.portfolio, icon: "bi-globe2" }
];
