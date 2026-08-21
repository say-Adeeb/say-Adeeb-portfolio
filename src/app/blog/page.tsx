import type { Metadata } from "next";
import { Sparkles } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FadeIn } from "@/components/ui/FadeIn";

export const metadata: Metadata = {
  title: "Blog",
  description: "Writing on data, machine learning, and AI — coming soon.",
};

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-16 lg:py-24">
      <FadeIn>
        <SectionHeading eyebrow="Blog" title="Writing" />
      </FadeIn>

      <FadeIn delay={0.1}>
        <Card className="flex flex-col items-center gap-3 py-16 text-center">
          <Sparkles className="text-accent" size={28} />
          <h3 className="font-display text-lg font-bold text-foreground">
            Coming Soon
          </h3>
          <p className="max-w-md text-sm leading-relaxed text-muted">
            I&apos;m working on posts about data analytics, machine learning
            experiments, and building with AI. Check back soon.
          </p>
        </Card>
      </FadeIn>
    </section>
  );
}
