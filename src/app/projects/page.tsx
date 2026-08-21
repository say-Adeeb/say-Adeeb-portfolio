import type { Metadata } from "next";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Projects",
  description: "Analytics, machine learning, and AI/GenAI projects.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Projects"
          title="All Projects"
          description="A mix of analytics, machine learning, and AI projects — each demonstrating a different capability."
        />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <FadeIn key={project.id} delay={i * 0.06}>
            <ProjectCard project={project} />
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
