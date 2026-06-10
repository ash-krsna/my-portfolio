# Akash Bhagwat Portfolio

<div align="center">

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:020617,45:0f172a,100:2563eb&height=210&section=header&text=Akash%20Bhagwat&fontSize=52&fontColor=ffffff&fontAlignY=38&desc=Frontend%20Engineer%20%7C%20React%20%2B%20Vite%20%7C%20Security-Aware%20Builder&descAlignY=58&animation=fadeIn" alt="Akash Bhagwat Portfolio header" />

<img src="https://readme-typing-svg.demolab.com?font=Fira+Code&weight=500&size=23&pause=1100&color=22D3EE&center=true&vCenter=true&width=900&lines=Cybersecurity%20%2B%20AI%20%2B%20Python%20focused;Building%20practical%20web%20and%20automation%20projects;Exploring%20LLMs%2C%20RAG%2C%20and%20AI%20agents;Learning%20SOC%2C%20network%20security%2C%20and%20cloud%20fundamentals" alt="Typing SVG" />

<br />

<img src="https://img.shields.io/badge/React-18.3.1-111827?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React badge" />
<img src="https://img.shields.io/badge/Vite-5.4.10-111827?style=for-the-badge&logo=vite&logoColor=FFD62E" alt="Vite badge" />
<img src="https://img.shields.io/badge/Tailwind-3.4.14-111827?style=for-the-badge&logo=tailwindcss&logoColor=38BDF8" alt="Tailwind CSS badge" />
<img src="https://img.shields.io/badge/Vercel-Ready-111827?style=for-the-badge&logo=vercel&logoColor=white" alt="Vercel badge" />

<br /><br />

<a href="https://ash-krsna.github.io/codex-">
  <img src="https://img.shields.io/badge/Live_Portfolio-Visit_Site-14b8a6?style=for-the-badge&logo=firefoxbrowser&logoColor=white" alt="Live portfolio" />
</a>
<a href="https://github.com/ash-krsna">
  <img src="https://img.shields.io/badge/GitHub-ash--krsna-0f172a?style=for-the-badge&logo=github&logoColor=white" alt="GitHub profile" />
</a>
<a href="https://www.linkedin.com/in/akash-gita-bhagwat">
  <img src="https://img.shields.io/badge/LinkedIn-Akash%20Bhagwat-2563eb?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn profile" />
</a>

</div>

---

## Portfolio Snapshot

This is a React + Vite portfolio built around practical IT skills, cybersecurity interest, AI/LLM learning, Llama/Ollama experimentation, Python/web development, achievements, project case studies, and a security-aware developer identity.

<table>
  <tr>
    <td width="58%">

### What This Portfolio Shows

- IT profile covering Python, SQL, React.js, Flask, MySQL, Linux, and networking
- Cybersecurity direction with ethical hacking, vulnerability assessment, SOC, and tool awareness
- AI direction with LLMs, Llama/Ollama, AI agents, RAG, LangChain, vector databases, prompt engineering, and automation
- Project case studies with live demos and product-style presentation
- Certificates, achievements, resume, and professional contact flow
- Smooth motion using Framer Motion, GSAP, and Lenis
- Responsive design tuned for desktop and mobile viewing

  </td>
    <td width="42%">

```bash
> whoami
Akash Bhagwat

> focus
Frontend Engineering + UI Systems

> stack
React, Vite, Tailwind, JavaScript

> status
Open to projects and collaboration
```

  </td>
  </tr>
</table>

---

## Experience Highlights

| Area | Details |
| --- | --- |
| Development | Python, SQL, React.js, Flask, JavaScript, responsive web UI |
| Motion | Framer Motion, GSAP, Lenis smooth scrolling |
| AI Direction | LLMs, Llama/Ollama, AI agents, RAG, LangChain, vector databases, prompt engineering, automation |
| Security Awareness | Cybersecurity fundamentals, OWASP Top 10, Nmap, Wireshark, Burp Suite |
| Deployment | Vite build pipeline with Vercel-ready configuration |

---

## Featured Projects

| Project | Type | Live Link |
| --- | --- | --- |
| BSB International School Website | School website and public information platform | [Visit site](https://bsb-international-school.vercel.app/) |
| Pandurang Pratishthan | Organization website | [Visit site](https://pandurang-pratishthan.vercel.app/#home) |
| Lift Management | Operations-focused web app demo | [Open demo](https://ash-krsna.github.io/Lift-Management/?v=demo2) |
| Vehicle Tracker | Responsive dashboard-style frontend demo | [Open demo](https://ash-krsna.github.io/codex-) |

---

## Tech Stack

<div align="center">
  <img src="https://skillicons.dev/icons?i=html,css,js,react,vite,tailwind,nodejs,mongodb,mysql,linux,github,vscode&theme=dark" alt="Tech stack icons" />
</div>

<br />

| Category | Tools |
| --- | --- |
| Core | Python, SQL, React, Vite, JavaScript, Flask |
| Styling | Tailwind CSS, Bootstrap Icons, custom CSS |
| Motion | Framer Motion, GSAP, Lenis |
| Backend Utility | Vercel serverless function, Resend |
| Learning Areas | Cybersecurity, SOC, LLMs, Llama, Ollama, RAG, LangChain, vector databases, Docker, cloud computing concepts |

---

## Project Structure

```text
.
|-- api/
|   `-- contact.js
|-- public/
|   `-- media/
|       |-- documents/
|       `-- photos/
|-- src/
|   |-- components/
|   |-- data/
|   |-- hooks/
|   |-- sections/
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- package.json
|-- tailwind.config.js
|-- vercel.json
`-- vite.config.js
```

---

## Run Locally

### 1. Clone The Repository

```bash
git clone https://github.com/ash-krsna/my-Portfolio.git
cd my-Portfolio
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Start Development Server

```bash
npm run dev
```

The local Vite server usually runs at:

```text
http://localhost:5173
```

### 4. Build For Production

```bash
npm run build
```

### 5. Preview Production Build

```bash
npm run preview
```

---

## Contact Form Setup

The portfolio contact form uses the serverless endpoint in:

```text
api/contact.js
```

For Vercel deployment, add this environment variable:

```text
RESEND_API_KEY=your_resend_api_key
```

For production, replace the sender address in `api/contact.js` with an email from your verified Resend domain.

---

## Deployment

This project is already configured for Vercel:

```json
{
  "framework": "vite",
  "installCommand": "npm install",
  "buildCommand": "npm run build",
  "outputDirectory": "dist"
}
```

Deployment flow:

1. Install dependencies with `npm install`.
2. Build with `npm run build`.
3. Deploy the generated `dist/` folder to Vercel, Netlify, GitHub Pages, or any static hosting platform.

---

## Achievements Included

- Deloitte Cybersecurity Virtual Experience Program
- BCG Virtual Experience Program
- Commonwealth Cyber Security Certificate
- Commonwealth Certificate
- Microsoft Learn achievements
- Resume and supporting portfolio documents

---

## Future Improvements

- Add final updated resume PDF in `public/media/documents/`
- Rename Microsoft Learn achievement cards with exact badge titles
- Expand the project gallery with more high-quality screenshots
- Add more case study detail for live projects
- Improve SEO metadata and Open Graph preview assets

---

<div align="center">

## Build Philosophy

> Build clean interfaces, keep learning fast, and make every project feel useful, thoughtful, and ready to show.

<img src="https://capsule-render.vercel.app/api?type=waving&color=0:020617,50:0f172a,100:2563eb&height=120&section=footer" alt="Footer wave" />

</div>
