import Link from "next/link";
import { ArrowRight, ExternalLink, Github } from "lucide-react";
import { Project } from "@/data/projects";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  compact?: boolean;
}

const categoryColors: Record<string, string> = {
  Analytics: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
  "Machine Learning": "bg-violet-500/10 text-violet-600 dark:text-violet-400",
  "AI / GenAI": "bg-purple-500/10 text-purple-600 dark:text-purple-400",
  Deployment: "bg-slate-500/10 text-slate-600 dark:text-slate-400",
};

export function ProjectCard({ project, compact = false }: ProjectCardProps) {
  return (
    <Card className="flex h-full flex-col">
      <div className="mb-4 flex items-start justify-between gap-3">
        <span
          className={cn(
            "rounded-full px-3 py-1 text-xs font-medium",
            categoryColors[project.category],
          )}
        >
          {project.category}
        </span>
        {project.status === "placeholder" && (
          <span className="rounded-full bg-surface px-2 py-0.5 text-[10px] font-medium uppercase tracking-wide text-muted">
            Details coming soon
          </span>
        )}
      </div>

      <h3 className="font-display text-xl font-bold text-foreground">
        {project.name}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-muted">
        {compact ? project.summary : project.description}
      </p>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.techStack.slice(0, compact ? 4 : 6).map((tech) => (
          <Tag key={tech}>{tech}</Tag>
        ))}
      </div>

      <div className="mt-6 flex items-center gap-4 border-t border-border pt-4">
        {project.github ? (
          <Link
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            <Github size={16} />
            GitHub
          </Link>
        ) : (
          <span className="flex items-center gap-1.5 text-sm text-muted/50">
            <Github size={16} />
            GitHub — TBD
          </span>
        )}
        {project.demo ? (
          <Link
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted transition-colors hover:text-primary"
          >
            <ExternalLink size={16} />
            Demo
          </Link>
        ) : null}
        {!compact && (
          <Link
            href="/projects"
            className="ml-auto flex items-center gap-1 text-sm font-medium text-primary hover:text-accent"
          >
            View all
            <ArrowRight size={14} />
          </Link>
        )}
      </div>
    </Card>
  );
}
