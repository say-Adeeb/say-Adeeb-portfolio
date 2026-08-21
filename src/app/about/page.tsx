import type { Metadata } from "next";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { Tag } from "@/components/ui/Tag";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "About",
  description: siteConfig.shortBio,
};

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <FadeIn>
        <SectionHeading eyebrow="About" title="About Me" />
      </FadeIn>

      <div className="grid gap-12 lg:grid-cols-3">
        <FadeIn className="lg:col-span-2">
          <div className="space-y-5 text-base leading-relaxed text-muted">
            {siteConfig.longBio.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Traits
            </h3>
            <div className="mt-3 flex flex-wrap gap-2">
              {siteConfig.traits.map((trait) => (
                <Tag key={trait}>{trait}</Tag>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-6">
          <Card>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Soft Skills
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {siteConfig.softSkills.map((skill) => (
                <li key={skill} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" />
                  {skill}
                </li>
              ))}
            </ul>
          </Card>

          <Card>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Outside of Work
            </h3>
            <ul className="mt-3 space-y-2 text-sm text-muted">
              {siteConfig.hobbies.map((hobby) => (
                <li key={hobby} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                  {hobby}
                </li>
              ))}
            </ul>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
