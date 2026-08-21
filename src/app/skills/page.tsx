import type { Metadata } from "next";
import { featuredSkills, skillCategories } from "@/data/skills";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Skills",
  description: "Data analytics, machine learning, and AI/GenAI skills.",
};

export default function SkillsPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Skills"
          title="What I Work With"
          description="The tools and techniques I reach for across analytics, ML, and AI."
        />
      </FadeIn>

      <div className="grid gap-6 sm:grid-cols-3">
        {featuredSkills.map((skill, i) => (
          <FadeIn key={skill.title} delay={i * 0.08}>
            <Card className="h-full">
              <h3 className="font-display text-base font-bold text-foreground">
                {skill.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {skill.description}
              </p>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn delay={0.2}>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {skillCategories.map((category) => (
            <Card key={category.name}>
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                {category.name}
              </h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Tag key={skill}>{skill}</Tag>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}
