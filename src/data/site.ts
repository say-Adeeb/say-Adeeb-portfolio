export const siteConfig = {
  name: "Syed Adeeb",
  title: "Data & AI Professional",
  tagline: "I make data talk, models think, and AI do the heavy lifting.",
  location: "Hyderabad, India",
  rotatingRoles: [
    "Data Analyst",
    "Data Scientist",
    "ML Engineer",
    "AI Engineer",
  ],
  email: process.env.CONTACT_EMAIL ?? "your.email@gmail.com",
  links: {
    linkedin: "https://www.linkedin.com/in/syed-adeeb-/",
    github: "https://github.com/say-Adeeb",
  },
  traits: ["Curious", "Practical", "Adaptable", "Analytical", "Experimental"],
  hobbies: [
    "Football",
    "Creating content",
    "Experimenting with new tech & AI tools",
    "Building random ideas that catch my interest",
  ],
  shortBio:
    "I'm Syed Adeeb, working across data analytics, data science, machine learning, and AI. I like understanding how things work, building practical projects, and occasionally wondering why the same code that worked yesterday has suddenly changed its mind.",
  longBio: [
    "My journey into tech wasn't exactly a straight line. I started in a non-technical field and later made the switch into data, beginning with analytics and gradually moving into data science, machine learning, and AI. Most of what I've learned has come from actually working with these tools, building projects, getting stuck, and figuring things out along the way.",
    "What keeps me interested is the freedom to explore ideas and experiment with them. Sometimes that means finding something interesting in a dataset, sometimes training a model just to see how well it performs, and sometimes building an AI application because I thought, \"Can I actually make this work?\" That curiosity has shaped how I learn—I prefer building, testing, and improving things rather than stopping at just understanding the theory.",
  ],
  softSkills: [
    "Adaptable teaching style",
    "Student mentoring & motivation",
    "Analytical thinking",
    "Clear communication",
    "Time management",
    "Research & investigation",
  ],
  teachingHighlights: [
    "Designed tool-wise and topic-wise mini projects after each module to reinforce hands-on learning.",
    "Guided students through end-to-end analysis: problem understanding, cleaning, analysis, visualization, and insights.",
    "Structured hands-on tasks so students could apply concepts independently, not just follow theory.",
  ],
  nav: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Projects", href: "/projects" },
    { label: "Experience", href: "/experience" },
    { label: "Skills", href: "/skills" },
    { label: "Blog", href: "/blog" },
    { label: "Contact", href: "/contact" },
  ],
  techStack: "Next.js, Tailwind CSS, Framer Motion",
};
