import { MapPin } from "lucide-react";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/Button";
import { NetworkGraph } from "@/components/home/NetworkGraph";
import { RotatingTitle } from "@/components/home/RotatingTitle";
import { FadeIn } from "@/components/ui/FadeIn";

export function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-accent/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 lg:grid-cols-2 lg:items-center lg:py-24">
        <FadeIn>
          <p className="font-mono text-xs uppercase tracking-widest text-accent">
            Portfolio
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Hi, I&apos;m{" "}
            <span className="text-gradient">{siteConfig.name}</span>
          </h1>
          <p className="mt-2 font-display text-xl font-semibold text-foreground/90">
            {siteConfig.title}
          </p>
          <RotatingTitle />
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted">
            {siteConfig.tagline}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-muted">
            <MapPin size={16} className="text-accent" />
            {siteConfig.location}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button href="/projects">View Projects</Button>
            <Button href="/contact" variant="secondary">
              Contact
            </Button>
          </div>
        </FadeIn>

        <FadeIn delay={0.15}>
          <NetworkGraph />
        </FadeIn>
      </div>
    </section>
  );
}
