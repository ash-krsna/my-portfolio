export const navItems = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "notes", label: "Notes Space" },
  { id: "certifications", label: "Achievements" },
  { id: "skills", label: "Skills" },
  { id: "resume", label: "Resume" },
  { id: "hire", label: "Hire" },
  { id: "contact", label: "Contact" }
];

export const heroHighlights = [
  "Frontend Engineer",
  "React + Vite",
  "AI-Aware UI",
  "API + Agent Flows",
  "Security-Aware Builder"
];

export const heroStats = [
  { label: "Focus", value: "UI Engineering" },
  { label: "Current", value: "AI-Era Products" },
  { label: "Learning", value: "Agents + Edge" },
  { label: "Mode", value: "Build Smart" }
];

export const heroTerminalLines = [
  "boot portfolio --profile akash",
  "stack: react, js, python, sql, ai-aware-ui",
  "signal: frontend precision + agentic product thinking",
  "watchlist: ai security, edge ai, robotics, inference cost",
  "deploy: vercel, github, practical client-ready work"
];

export const aboutTimeline = [
  {
    year: "Now",
    title: "Frontend craft for AI-era products",
    description:
      "Sharpening interfaces that can explain system state, guide user decisions, and stay dependable as AI tools, APIs, and automation enter everyday products."
  },
  {
    year: "Learning arc",
    title: "React, APIs, agents, edge devices, and systems",
    description:
      "Going deeper into scalable frontend architecture, API integration, agent workflows, Raspberry Pi style edge experiments, and cleaner observable interface systems."
  },
  {
    year: "Next chapter",
    title: "Builder with technical range and security awareness",
    description:
      "Growing toward a stronger developer identity that mixes code quality, AI-aware product thinking, interface discipline, experimentation, and responsible security habits."
  }
];

export const projects = [
  {
    id: "bsb-school",
    title: "BSB International School Website",
    label: "Featured Live Build",
    description:
      "A live school platform designed to present academics, student growth, and institutional transparency through a clear digital experience for parents, students, and administrators.",
    impact:
      "Structured to balance public presentation with role-based access to student information, while keeping the experience responsive and easy to navigate.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UX", "Information Design"],
    cover: "/media/photos/portrait-01.jpeg",
    metrics: ["Live on Vercel", "Parent-friendly UX", "Secure result flow"],
    caseStudy: {
      problem:
        "The school needed a trustworthy web presence that could communicate academics and school culture while also supporting access to sensitive student-related information.",
      analysis: [
        "Parents need quick access to results and progress information without getting lost.",
        "Public and private information require different levels of visibility.",
        "The site has to feel welcoming on phones as well as on larger screens used for admin tasks."
      ],
      solution:
        "Designed a multi-surface school website with clearer navigation, live sections for achievements and updates, and structured result-access flows that separate sensitive student views from general public content.",
      outcomes: [
        "Created a more organized information hierarchy for academics, events, and updates.",
        "Improved trust through cleaner layout and institutional presentation.",
        "Made the experience usable across devices for parents, visitors, and staff."
      ]
    },
    links: [
      { label: "Live Site", href: "https://bsb-international-school.vercel.app/" },
      { label: "Legacy Gallery", href: "https://ash-krsna.github.io/BSB-International-School/gallery.html" }
    ],
    featured: true
  },
  {
    id: "pandurang-pratishthan",
    title: "Pandurang Pratishthan",
    label: "Live Organization Site",
    description:
      "A public-facing website built to communicate mission, activities, and key sections clearly for visitors while keeping the overall experience lightweight and accessible.",
    impact:
      "Focused on making the organization feel credible online through cleaner content flow, approachable layout, and responsive presentation.",
    stack: ["Frontend UI", "Responsive Design", "Public Website", "Content Layout"],
    cover: "/media/photos/nature-01.jpeg",
    metrics: ["Live on Vercel", "Public-facing site", "Mobile-friendly flow"],
    caseStudy: {
      problem:
        "The organization needed a digital presence that felt more structured and trustworthy than a simple static page, while still staying lightweight and easy for visitors to use.",
      analysis: [
        "Visitors need important information quickly without visual clutter.",
        "The message and identity of the organization should come across clearly.",
        "Mobile browsing matters because many users arrive through phones."
      ],
      solution:
        "Built a cleaner responsive layout with a simpler content hierarchy, direct section flow, and a more polished frontend treatment to help visitors understand the organization quickly.",
      outcomes: [
        "Improved readability and structure across sections.",
        "Made the site easier to browse on smaller screens.",
        "Strengthened the visual credibility of the organization online."
      ]
    },
    links: [{ label: "Live Site", href: "https://pandurang-pratishthan.vercel.app/#home" }]
  },
  {
    id: "lift-management",
    title: "Lift Management",
    label: "Live Web App",
    description:
      "A workflow-focused web experience designed around clarity, responsive layout behavior, and a smoother operations-oriented user journey.",
    impact:
      "Shows my interest in useful digital products with thoughtful interaction flow, clearer interface logic, and a more practical product mindset.",
    stack: ["Responsive UI", "Interaction Flow", "Frontend Logic", "Usability", "Operations UI"],
    cover: "/media/photos/random-01.jpeg",
    metrics: ["Live demo", "Operations-oriented UI", "Clear workflow structure"],
    caseStudy: {
      problem:
        "Operational interfaces often become visually heavy and difficult to scan, which slows down decision-making and repeated actions.",
      analysis: [
        "Users need a layout that helps them scan and act quickly.",
        "The interface should avoid unnecessary visual noise.",
        "Responsive behavior matters because operations dashboards still get opened on smaller screens."
      ],
      solution:
        "Created a cleaner frontend flow with a more deliberate layout, better spacing, and interaction patterns that keep the experience focused on task completion.",
      outcomes: [
        "Improved clarity across workflow steps.",
        "Made the demo feel more like a usable product than a loose concept.",
        "Showed stronger product thinking in the interface decisions."
      ]
    },
    links: [{ label: "Live Demo", href: "https://ash-krsna.github.io/Lift-Management/?v=demo2" }]
  },
  {
    id: "vehicle-tracker",
    title: "Vehicle Tracker",
    label: "Live Demo",
    description:
      "A responsive frontend experience centered on interaction design, clean structure, and polished presentation for technical workflows.",
    impact:
      "Built to show stronger interface discipline, smoother motion, and better screen-to-screen composition with practical dashboard energy.",
    stack: ["HTML", "CSS", "JavaScript", "Responsive UI", "Dashboard UI"],
    cover: "/media/photos/street-01.jpeg",
    metrics: ["Responsive demo", "Dashboard direction", "Interaction polish"],
    caseStudy: {
      problem:
        "Tracking interfaces can become dense and generic, making it hard to communicate state, movement, and system clarity at a glance.",
      analysis: [
        "The interface should feel technical without becoming cold or cluttered.",
        "Information grouping matters more than decoration in tracking-style products.",
        "Motion can help orient the user when used carefully."
      ],
      solution:
        "Built a cleaner visual language with stronger composition, tighter spacing, and interaction patterns that make the experience feel more product-like and easier to scan.",
      outcomes: [
        "Improved presentation quality for a technical concept.",
        "Demonstrated stronger UI hierarchy and screen composition.",
        "Made the build feel more aligned with modern dashboard expectations."
      ]
    },
    links: [
      { label: "Live Demo", href: "https://ash-krsna.github.io/codex-" },
      { label: "GitHub", href: "https://github.com/ash-krsna" }
    ]
  }
];

export const certificates = [
  {
    title: "Cybersecurity Virtual Experience Program",
    platform: "Forage",
    description:
      "Completed a virtual job simulation focused on real-world cybersecurity tasks including threat analysis, web request investigation, and suspicious user behavior review.",
    href: "/media/documents/deloitte-cyber-job-simulations.pdf",
    cta: "View Certificate",
    badge: "Verified",
    icon: "bi-shield-lock"
  },
  {
    title: "BCG Virtual Experience Program",
    platform: "BCG",
    description:
      "Verified local certificate reflecting practical industry-style experience and structured problem solving.",
    href: "/media/documents/bcg.pdf",
    cta: "View Certificate",
    badge: "New",
    icon: "bi-briefcase"
  },
  {
    title: "Commonwealth Cyber Security Certificate",
    platform: "Commonwealth",
    description:
      "Security-focused certificate added from your local portfolio files to strengthen the cybersecurity side of your profile.",
    href: "/media/documents/commonwealth-cyber-security.pdf",
    cta: "View Certificate",
    badge: "New",
    icon: "bi-shield-check"
  },
  {
    title: "Commonwealth Certificate",
    platform: "Commonwealth",
    description:
      "Verified achievement representing broader learning progress and continued completion of recognized programs.",
    href: "/media/documents/commonwealth.pdf",
    cta: "View Certificate",
    badge: "New",
    icon: "bi-award"
  },
  {
    title: "Microsoft Learn Achievement",
    platform: "Microsoft Learn",
    description:
      "Platform-based verified achievement documenting continued progress in technical learning and practical skill development.",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fachievements%2Fshare%2Fen-us%2FAkashGitaBhagwat-1594%2FCYCQ6CY9%3FsharingId%3D27AF0B5C79B5ED56&urlhash=rsKK&mt=UFaMnKZuEhfV8AKSoUI42RSOLBqosPpPmxRk6R7ulLppNUg8ypw3BqjndifL-QAvh8dFnubueP_tf47dlGYOqSF-T3KbQ82bVlMify45pYUlOweiKDT1PO1PUw&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BiLp9eNb%2BSEGBK1UH9uqiqw%3D%3D",
    cta: "View Achievement",
    badge: "CYCQ6CY9",
    icon: "bi-microsoft"
  },
  {
    title: "Microsoft Learn Achievement",
    platform: "Microsoft Learn",
    description:
      "A second verified Microsoft Learn achievement showing continued guided learning and platform-backed skill growth.",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fachievements%2Fshare%2Fen-us%2FAkashGitaBhagwat-1594%2FB9KAXT3D%3FsharingId%3D27AF0B5C79B5ED56&urlhash=YuM2&mt=FxcVPRXGWGA8c_FQYOhgvsCLpfMDhX1xNUg6yzLxVncgOg-nA5MQ8FfzmvSlUNpU7hBlbReT8b2m7U2MVyIwr-qkbe9mDLeG5LjGn1QeCEfdF5Gv4H5f73-luw&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BiLp9eNb%2BSEGBK1UH9uqiqw%3D%3D",
    cta: "View Achievement",
    badge: "B9KAXT3D",
    icon: "bi-microsoft"
  },
  {
    title: "Microsoft Learn Achievement",
    platform: "Microsoft Learn",
    description:
      "A third verified Microsoft Learn achievement reinforcing your technical consistency and long-term growth curve.",
    href: "https://www.linkedin.com/safety/go/?url=https%3A%2F%2Flearn.microsoft.com%2Fapi%2Fachievements%2Fshare%2Fen-us%2FAkashGitaBhagwat-1594%2F37UDPJLH%3FsharingId%3D27AF0B5C79B5ED56&urlhash=do12&mt=3D0gz1N8jE-uffh_o7mu8HR3B6PreF0Pk858BYBfa3PaihAYtnJEngCycL8D74HywialoK-jOdAHL3Ac546-GOLuB3SgUEBN_Kh9CLCEtBEKd9k1d-6qGjaMjw&isSdui=true&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BiLp9eNb%2BSEGBK1UH9uqiqw%3D%3D",
    cta: "View Achievement",
    badge: "37UDPJLH",
    icon: "bi-microsoft"
  }
];

export const skills = [
  { name: "React", value: 84 },
  { name: "JavaScript", value: 89 },
  { name: "AI-Aware UI", value: 78 },
  { name: "UI Engineering", value: 87 },
  { name: "API Integration", value: 80 },
  { name: "Cyber Security Basics", value: 76 },
  { name: "Edge + IoT Curiosity", value: 68 },
  { name: "Problem Solving", value: 88 }
];

export const labExperiments = [
  {
    title: "Edge AI + Raspberry Pi curiosity",
    copy:
      "Exploring the hardware side of tech through Raspberry Pi style tinkering, lightweight automation, sensor thinking, and small edge-computing experiments.",
    icon: "bi-cpu"
  },
  {
    title: "Agent-ready interface systems",
    copy:
      "Designing UI patterns that make AI and automation easier to understand: clear states, visible feedback, human review, and strong action boundaries.",
    icon: "bi-diagram-3"
  },
  {
    title: "AI security mindset",
    copy:
      "Learning how modern products should handle trust, identity, prompt safety, sensitive data, and stronger user-side security awareness.",
    icon: "bi-shield-lock"
  }
];

export const notesSpaceItems = [
  {
    title: "AI-native development needs stronger review habits",
    topic: "AI-Native Dev",
    status: "New signal",
    note:
      "AI is becoming part of the development workflow itself: planning, coding, debugging, testing, and documenting. The opportunity is speed, but the risk is accepting generated work without enough technical judgment.",
    problem:
      "Teams can ship faster while also creating hidden defects, weak architecture, dependency confusion, or security mistakes if AI output is treated as automatically correct.",
    solution:
      "Use AI as a pair-builder, not an unchecked author. Keep code review, threat modeling, tests, traceable decisions, and human ownership at the center of the workflow.",
    perspective:
      "This is where I want to grow as a frontend developer: use AI to move faster, but keep the taste, responsibility, and debugging discipline human."
  },
  {
    title: "Preemptive cybersecurity changes dashboard design",
    topic: "Preemptive Security",
    status: "2026 watch",
    note:
      "Security tools are shifting from reacting after an incident to predicting weak signals earlier. That makes the interface challenge bigger because teams need to see risk before it becomes obvious.",
    problem:
      "A dashboard full of alerts can still fail if it does not explain priority, confidence, blast radius, or the next action clearly enough for a fast decision.",
    solution:
      "Design security surfaces around risk stories: what changed, why it matters, which assets are exposed, what evidence supports it, and what action should happen first.",
    perspective:
      "Preemptive security is not only a backend or SOC problem. A good interface can help defenders think faster when the signal is still early."
  },
  {
    title: "Disinformation security will need product-level defenses",
    topic: "Digital Trust",
    status: "Rising risk",
    note:
      "AI-generated media, synthetic reviews, fake executive messages, and manipulated content are becoming business risks. Trust is turning into a product and security problem at the same time.",
    problem:
      "Users may interact with polished but false information, and organizations can lose trust when there is no clear way to verify origin, intent, or authenticity.",
    solution:
      "Build visible verification flows, provenance labels, reporting paths, source comparison, and content confidence signals that help people slow down before trusting high-impact information.",
    perspective:
      "I like this topic because it sits directly between UI and security. The screen has to help people notice when something feels too smooth to trust blindly."
  },
  {
    title: "Energy-efficient computing will shape AI product UX",
    topic: "Efficient Compute",
    status: "Tech trend",
    note:
      "AI products are starting to care more about compute cost, energy use, battery impact, and latency. Performance is no longer only about speed; it is also about choosing when heavy intelligence is worth it.",
    problem:
      "If every feature calls a large model, products can become expensive, slow, and wasteful. Users feel that through waiting, heat, battery drain, or inconsistent responsiveness.",
    solution:
      "Use tiered intelligence: local logic first, smaller models when possible, cached answers, progressive enhancement, and clear UI states when a heavier AI step is actually running.",
    perspective:
      "Frontend can help make efficient AI feel natural. The interface decides how often users ask for intelligence and how clearly the system explains the cost of that choice."
  },
  {
    title: "Agentic AI needs human-centered control panels",
    topic: "Agentic AI",
    status: "2026 signal",
    note:
      "AI agents are moving from demos into real workflows, but the interface challenge is still very human: users need to know what the agent is doing, what it changed, and when to approve or stop it.",
    problem:
      "Autonomous tools can feel powerful but unclear. Without visible state, permissions, audit trails, and fallback actions, users may not trust the system even when the model is capable.",
    solution:
      "Build agent interfaces with timeline views, review checkpoints, confidence signals, clear cancel paths, and plain-language summaries of decisions before important actions happen.",
    perspective:
      "My take is that frontend developers will be important in making AI feel dependable. The best agent products will not just automate work; they will make automation understandable."
  },
  {
    title: "AI security is becoming product design work",
    topic: "Cyber Security",
    status: "Current affair",
    note:
      "As AI becomes part of normal apps, security is no longer only a backend checklist. The product surface has to help users avoid leaking data, trusting bad outputs, or approving risky actions.",
    problem:
      "AI tools introduce new behavior risks: prompt injection, unclear data handling, over-permissioned agents, and users pasting sensitive information into systems they do not fully understand.",
    solution:
      "Design safer flows with permission scopes, data-use warnings, output verification patterns, secure defaults, and UI that separates suggestion from confirmed action.",
    perspective:
      "This matches my cybersecurity interest: strong products should not only look polished, they should guide safer decisions at the exact moment users need that guidance."
  },
  {
    title: "Inference cost will shape frontend decisions",
    topic: "AI Infrastructure",
    status: "Tech trend",
    note:
      "The AI conversation is shifting from experimentation to cost, latency, and reliability. That matters for frontend too because the interface decides when AI calls happen and how users experience waiting.",
    problem:
      "A product can become expensive or slow if every interaction triggers a heavy model call. Users also lose confidence when loading states are vague or repeated AI responses feel unnecessary.",
    solution:
      "Use smarter UX patterns: progressive disclosure, cached results, draft previews, lightweight local logic, streaming feedback, and clear states that make latency feel intentional.",
    perspective:
      "I want my frontend work to understand the cost behind the screen. Good UI can reduce waste, improve trust, and make advanced systems feel calmer."
  },
  {
    title: "Physical AI makes hardware curiosity useful again",
    topic: "Robotics + Edge",
    status: "Emerging",
    note:
      "AI is moving beyond chat boxes into robotics, devices, cameras, sensors, and real-world environments. That makes edge computing and hardware curiosity more valuable for software builders.",
    problem:
      "Pure web projects can hide the real constraints of systems: sensor delay, unreliable inputs, limited compute, device safety, and the need for feedback that users can trust quickly.",
    solution:
      "Use small hardware experiments, Raspberry Pi projects, and device-style thinking to learn how software behaves when it meets real inputs, physical constraints, and edge decisions.",
    perspective:
      "This is why I like mixing frontend with systems curiosity. The stronger I understand real-world inputs, the better I can design interfaces that explain them clearly."
  },
  {
    title: "Digital provenance will become part of everyday trust",
    topic: "Digital Trust",
    status: "2026 signal",
    note:
      "As AI-generated text, images, video, and synthetic media become normal, products will need better ways to show where content came from, how it changed, and whether it should be trusted.",
    problem:
      "Users can no longer judge authenticity only by how polished something looks. A convincing image, message, or dashboard output may still be incomplete, manipulated, or generated without context.",
    solution:
      "Add provenance-aware UI patterns: source labels, change history, verified badges with real meaning, content lineage, confidence notes, and clear separation between original data and AI-generated output.",
    perspective:
      "I think trust will become a visible interface feature. Good frontend work will help people understand not just what they are seeing, but why they should believe it."
  },
  {
    title: "Post-quantum security is a future problem starting now",
    topic: "Quantum Security",
    status: "Security watch",
    note:
      "Post-quantum cryptography is becoming a real planning topic because organizations need time to identify old encryption, update systems, and build crypto agility before quantum risk becomes urgent.",
    problem:
      "Security migrations are slow. Even if quantum attacks are not a daily threat yet, long-lived data and outdated cryptography can create risk years before teams are ready to replace them.",
    solution:
      "Start with inventory thinking: know where encryption is used, avoid hard-coded assumptions, design systems that can swap algorithms, and keep security decisions visible to technical teams.",
    perspective:
      "This topic reminds me that secure development is not only about fixing bugs. It is also about designing systems that can adapt when the threat model changes."
  },
  {
    title: "On-device AI will make privacy and speed feel connected",
    topic: "Edge AI",
    status: "Product shift",
    note:
      "More AI work is moving closer to devices, browsers, phones, and edge systems. That can reduce latency and protect sensitive data, but it also changes how interfaces explain local versus cloud behavior.",
    problem:
      "Users often do not know where their data is processed. If an AI feature feels private but quietly sends everything to a server, the product creates a trust gap.",
    solution:
      "Design clear local/cloud states, lightweight model interactions, fallback behavior, battery-aware experiences, and privacy explanations that are simple enough to understand in the moment.",
    perspective:
      "For frontend developers, this is exciting because the browser becomes more than a display layer. It becomes part of the intelligence, privacy, and performance story."
  },
  {
    title: "Synthetic data needs careful product boundaries",
    topic: "Data + AI",
    status: "Trend note",
    note:
      "Synthetic data can help teams build and test AI systems when real data is limited or sensitive, but it can also create false confidence if the product forgets what the data does not represent.",
    problem:
      "If teams treat synthetic examples as perfect reality, models and dashboards can miss edge cases, bias, messy user behavior, or real-world failure patterns.",
    solution:
      "Show dataset limits, label generated examples clearly, test against real validation sets where possible, and build review steps before synthetic outputs influence important decisions.",
    perspective:
      "My view is that AI products need honest interfaces. A good UI should make uncertainty visible instead of hiding it behind a clean-looking result."
  }
];

export const testimonials = [
  {
    quote: "The next version of this space is being built for the people who notice both the interface and the engineering behind it.",
    author: "Portfolio note"
  },
  {
    quote: "Code, systems, and product clarity are all part of the same identity here.",
    author: "Future collaborators"
  }
];

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/ash-krsna", icon: "bi-github" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/akash-gita-bhagwat", icon: "bi-linkedin" },
  { label: "Instagram Profile", href: "https://www.instagram.com/duskveil_______/", icon: "bi-instagram" },
  { label: "Email", href: "mailto:akash.gita.bhagwat@gmail.com", icon: "bi-envelope" }
];

export const hireMeOffers = [
  {
    title: "Modern frontend development",
    copy: "Responsive interfaces, polished layouts, and cleaner product presentation for web experiences that need to feel sharp, usable, and current.",
    icon: "bi-window"
  },
  {
    title: "AI-aware portfolio and product pages",
    copy: "Personal brands, product pages, and presentation-focused websites with stronger visual hierarchy, modern interaction quality, and smarter technical positioning.",
    icon: "bi-layout-text-window"
  },
  {
    title: "Tech experimentation",
    copy: "Developer-focused builds, interface concepts, automation-minded ideas, edge experiments, and practical systems work shaped by curiosity and clarity.",
    icon: "bi-cpu"
  }
];
