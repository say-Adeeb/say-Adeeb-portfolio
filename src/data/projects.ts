export type ProjectCategory =
  | "Analytics"
  | "Machine Learning"
  | "AI / GenAI"
  | "Deployment";

export interface Project {
  id: string;
  name: string;
  summary: string;
  description: string;
  category: ProjectCategory;
  featured: boolean;
  techStack: string[];
  github?: string;
  demo?: string;
  status: "ready" | "placeholder";
}

export const projects: Project[] = [
  {
    id: "rag-chatbot",
    name: "RAG-Powered AI Chatbot",
    summary:
      "End-to-end RAG application using website/PDF data, embeddings, and an LLM.",
    description:
      "Built a retrieval-augmented generation pipeline that ingests documents and website content, creates vector embeddings, and answers questions through an LLM. Designed for practical Q&A over custom knowledge bases with a clean API layer.",
    category: "AI / GenAI",
    featured: true,
    techStack: [
      "Python",
      "LangChain",
      "FAISS",
      "Sentence Transformers",
      "FastAPI",
      "LLM",
    ],
    status: "placeholder",
  },
  {
    id: "customer-segmentation",
    name: "Customer Segmentation",
    summary:
      "Clustering-based customer segmentation using K-Means and exploratory data analysis.",
    description:
      "Applied unsupervised learning to discover distinct customer groups from behavioral and demographic data. Used EDA to understand patterns, K-Means clustering for segmentation, and visualizations to communicate actionable insights.",
    category: "Machine Learning",
    featured: true,
    techStack: ["Python", "Pandas", "Scikit-learn", "Matplotlib", "Seaborn"],
    status: "placeholder",
  },
  {
    id: "loan-approval",
    name: "Loan Approval Prediction",
    summary:
      "Machine learning classification project using XGBoost for loan eligibility.",
    description:
      "Developed a predictive model to classify loan approval outcomes using structured financial data. Focused on feature engineering, model evaluation, and interpreting results for business decision-making.",
    category: "Machine Learning",
    featured: true,
    techStack: ["Python", "XGBoost", "Scikit-learn", "Pandas", "Jupyter"],
    status: "placeholder",
  },
  {
    id: "bi-analytics",
    name: "End-to-End Data Analytics & BI Project",
    summary:
      "SQL-driven analysis with Power BI/Tableau dashboards and business insights.",
    description:
      "Reserved for a full analytics workflow—from SQL queries and data transformation to interactive dashboards and stakeholder-ready insights. Demonstrates the bridge between raw data and business decisions.",
    category: "Analytics",
    featured: true,
    techStack: ["SQL", "Power BI", "Tableau", "Excel", "Python"],
    status: "placeholder",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
