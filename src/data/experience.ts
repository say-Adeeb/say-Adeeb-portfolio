export interface ExperienceItem {
  id: string;
  title: string;
  company: string;
  dates: string;
  location: string;
  featured: boolean;
  bullets: string[];
}

export interface EducationItem {
  degree: string;
  school: string;
  year: string;
  coursework: string[];
}

export interface Certification {
  name: string;
  issuer: string;
}

export const experience: ExperienceItem[] = [
  {
    id: "fsa-trainer",
    title: "Data Analyst Trainer",
    company: "Full Stack Academy",
    dates: "Jan 2025 – Present",
    location: "India",
    featured: true,
    bullets: [
      "Delivered instructor-led training in Data Analytics, covering SQL, Excel, Python, Pandas, NumPy, Power BI, Tableau, Data Visualization, and Statistics.",
      "Trained 150+ students using practical datasets, business examples, assignments, and hands-on projects to simplify technical concepts.",
      "Designed structured learning materials, assessments, quizzes, and project-based activities for graduates and early-career professionals.",
      "Mentored students on projects, presentations, portfolio development, and placement readiness.",
    ],
  },
  {
    id: "amazon",
    title: "Transportation Specialist",
    company: "Amazon Development Centre",
    dates: "Aug 2024 – Jan 2025",
    location: "India",
    featured: false,
    bullets: [
      "Investigated operational exceptions across Amazon's transportation network—sharpened analytical troubleshooting and cross-team coordination.",
      "Monitored shipment flow and coordinated escalations to minimize disruptions and support timely resolution.",
    ],
  },
  {
    id: "teleperformance",
    title: "Support Analyst — Level 3",
    company: "Teleperformance",
    dates: "Sept 2022 – Dec 2023",
    location: "India",
    featured: false,
    bullets: [
      "Provided L3 support in a regulated, data-sensitive environment with strict compliance and privacy protocols.",
      "Investigated escalated cases requiring accurate problem-solving, clear communication, and timely resolution.",
    ],
  },
  {
    id: "educator",
    title: "Mathematics, Physics & Chemistry Educator",
    company: "Independent",
    dates: "Feb 2024 – Jun 2024",
    location: "India",
    featured: false,
    bullets: [
      "Taught STEM subjects, simplifying complex concepts and developing students' analytical and problem-solving skills.",
      "Adapted teaching methods for different learning levels—experience that strengthened communication and concept breakdown.",
    ],
  },
];

export const education: EducationItem = {
  degree: "Bachelor of Science (B.Sc.) in Computer Science",
  school: "Osmania University",
  year: "Aug 2022",
  coursework: [
    "Computer Science",
    "Programming",
    "Databases",
    "Mathematics",
    "Statistics",
  ],
};

export const certifications: Certification[] = [
  { name: "Generative AI Mastermind", issuer: "Outskill" },
  { name: "GenAI Job Simulation", issuer: "BCG" },
  { name: "Data Analytics Job Simulation", issuer: "Deloitte" },
  { name: "GenAI Powered Data Analytics Job Simulation", issuer: "Deloitte" },
  {
    name: "Data Visualization: Empowering Business with Effective Insights",
    issuer: "Tata",
  },
  { name: "Power BI Workshop", issuer: "Office Master" },
];
