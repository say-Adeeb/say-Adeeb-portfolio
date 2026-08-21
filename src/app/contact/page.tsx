import type { Metadata } from "next";
import { Github, Linkedin, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";
import { ContactForm } from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Syed Adeeb.",
};

export default function ContactPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <FadeIn>
        <SectionHeading
          eyebrow="Contact"
          title="Let's Talk"
          description="Have a role, project, or idea in mind? Send a message or reach out directly."
        />
      </FadeIn>

      <div className="grid gap-8 lg:grid-cols-5">
        <FadeIn className="lg:col-span-3">
          <Card>
            <ContactForm />
          </Card>
        </FadeIn>

        <FadeIn delay={0.1} className="space-y-4 lg:col-span-2">
          <Card>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wide text-foreground">
              Direct Contact
            </h3>
            <div className="mt-4 space-y-3">
              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              >
                <Mail size={18} className="text-accent" />
                {siteConfig.email}
              </a>
              <a
                href={siteConfig.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              >
                <Linkedin size={18} className="text-accent" />
                LinkedIn
              </a>
              <a
                href={siteConfig.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-sm text-muted transition-colors hover:text-primary"
              >
                <Github size={18} className="text-accent" />
                GitHub
              </a>
            </div>
          </Card>

          <Card className="bg-surface/40">
            <p className="text-sm leading-relaxed text-muted">
              Based in {siteConfig.location}. Open to opportunities in data
              analytics, data science, machine learning, and AI.
            </p>
          </Card>
        </FadeIn>
      </div>
    </section>
  );
}
