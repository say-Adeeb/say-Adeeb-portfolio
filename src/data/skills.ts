export interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

export const featuredSkills = [
  {
    title: "Data Analytics & Visualization",
    description: "SQL, Python, Power BI, Tableau",
  },
  {
    title: "Machine Learning",
    description: "Predictive modeling, feature engineering, model evaluation",
  },
  {
    title: "Generative AI & RAG",
    description: "LLM applications, RAG pipelines, vector search, AI integration",
  },
];

export const skillCategories: SkillCategory[] = [
  {
    name: "Data & BI",
    icon: "chart",
    skills: ["SQL", "Excel", "Power BI", "Tableau"],
  },
  {
    name: "Programming & Analysis",
    icon: "code",
    skills: ["Python", "Pandas", "NumPy", "EDA", "Statistics"],
  },
  {
    name: "Machine Learning",
    icon: "brain",
    skills: [
      "Scikit-learn",
      "XGBoost",
      "Regression",
      "Classification",
      "Clustering",
    ],
  },
  {
    name: "AI & GenAI",
    icon: "sparkles",
    skills: [
      "LLMs",
      "RAG",
      "LangChain",
      "FAISS",
      "Hugging Face",
      "Prompt Engineering",
    ],
  },
  {
    name: "Engineering & Deployment",
    icon: "server",
    skills: [
      "FastAPI",
      "REST APIs",
      "Git/GitHub",
      "Docker",
      "Kubernetes (Fundamentals)",
    ],
  },
];

export interface GraphNode {
  id: string;
  label: string;
  x: number;
  y: number;
  major?: boolean;
  group: number;
}

export interface GraphEdge {
  from: string;
  to: string;
}

export const graphNodes: GraphNode[] = [
  { id: "data", label: "Data", x: 0.5, y: 0.5, major: true, group: 0 },
  { id: "analytics", label: "Analytics", x: 0.25, y: 0.35, major: true, group: 1 },
  { id: "python", label: "Python", x: 0.5, y: 0.2, major: true, group: 2 },
  { id: "sql", label: "SQL", x: 0.75, y: 0.35, major: true, group: 1 },
  { id: "insights", label: "Insights", x: 0.15, y: 0.2, group: 1 },
  { id: "viz", label: "Visualization", x: 0.85, y: 0.2, group: 1 },
  { id: "ds", label: "Data Science", x: 0.35, y: 0.55, group: 2 },
  { id: "sklearn", label: "Scikit-learn", x: 0.25, y: 0.72, group: 3 },
  { id: "ml", label: "ML", x: 0.5, y: 0.78, major: true, group: 3 },
  { id: "llms", label: "LLMs", x: 0.65, y: 0.65, group: 4 },
  { id: "rag", label: "RAG", x: 0.75, y: 0.78, major: true, group: 4 },
  { id: "ai", label: "AI", x: 0.85, y: 0.55, major: true, group: 4 },
  { id: "fastapi", label: "FastAPI", x: 0.65, y: 0.35, group: 5 },
  { id: "docker", label: "Docker", x: 0.55, y: 0.92, group: 5 },
  { id: "k8s", label: "K8s", x: 0.72, y: 0.92, group: 5 },
];

export const graphEdges: GraphEdge[] = [
  { from: "data", to: "analytics" },
  { from: "data", to: "python" },
  { from: "data", to: "sql" },
  { from: "analytics", to: "insights" },
  { from: "sql", to: "viz" },
  { from: "python", to: "ds" },
  { from: "ds", to: "sklearn" },
  { from: "sklearn", to: "ml" },
  { from: "ml", to: "llms" },
  { from: "llms", to: "rag" },
  { from: "rag", to: "ai" },
  { from: "python", to: "fastapi" },
  { from: "fastapi", to: "docker" },
  { from: "docker", to: "k8s" },
  { from: "ml", to: "docker" },
];
