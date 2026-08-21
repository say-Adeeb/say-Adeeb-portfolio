import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { featuredProjects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export function FeaturedProjects() {
  return (
    <section className="bg-surface/40 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <FadeIn>
          <SectionHeading
            eyebrow="Projects"
            title="Featured Work"
            description="A mix of analytics, machine learning, and AI projects — each demonstrating a different capability."
          />
        </FadeIn>

        <div className="grid gap-6 sm:grid-cols-2">
          {featuredProjects.map((project, i) => (
            <FadeIn key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} compact />
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.3}>
          <div className="mt-10 text-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 font-medium text-primary transition-colors hover:text-accent"
            >
              View all projects
              <ArrowRight size={16} />
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
