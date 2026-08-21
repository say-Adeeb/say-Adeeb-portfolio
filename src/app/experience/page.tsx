import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { certifications, education, experience } from "@/data/experience";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Experience",
  description: "Work experience, education, and certifications.",
};

export default function ExperiencePage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Experience"
          title="Work Experience"
          description="Roles that shaped how I think about data, teaching, and problem-solving."
        />
      </FadeIn>

      <div className="space-y-6">
        {experience.map((item, i) => (
          <FadeIn key={item.id} delay={i * 0.08}>
            <Card>
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="text-sm font-medium text-primary">
                    {item.company}
                  </p>
                </div>
                <div className="text-right text-sm text-muted">
                  <p>{item.dates}</p>
                  <p>{item.location}</p>
                </div>
              </div>
              <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted">
                {item.bullets.map((bullet, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </Card>
          </FadeIn>
        ))}
      </div>

      <FadeIn className="mt-10">
        <Card className="bg-surface/40">
          <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
            Teaching Highlights
          </h3>
          <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted">
            {siteConfig.teachingHighlights.map((point, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {point}
              </li>
            ))}
          </ul>
        </Card>
      </FadeIn>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <FadeIn delay={0.1}>
          <Card className="h-full">
            <div className="flex items-center gap-2">
              <GraduationCap size={18} className="text-accent" />
              <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
                Education
              </h3>
            </div>
            <p className="mt-3 font-display font-semibold text-foreground">
              {education.degree}
            </p>
            <p className="text-sm text-muted">
              {education.school} · {education.year}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {education.coursework.map((course) => (
                <Tag key={course}>{course}</Tag>
              ))}
            </div>
          </Card>
        </FadeIn>

        <FadeIn delay={0.18}>
          <Card className="h-full">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Certifications
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {certifications.map((cert) => (
                <li key={cert.name} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  <span>
                    {cert.name}{" "}
                    <span className="text-muted/70">— {cert.issuer}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
