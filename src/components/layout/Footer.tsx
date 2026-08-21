import { siteConfig } from "@/data/site";
import Link from "next/link";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 py-10 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-display text-sm font-semibold text-foreground">
            © 2026 {siteConfig.name}
          </p>
          <p className="mt-1 text-sm text-muted">
            Built with {siteConfig.techStack}
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href={siteConfig.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card p-2.5 text-muted transition-colors hover:border-accent/40 hover:text-primary"
            aria-label="LinkedIn"
          >
            <Linkedin size={18} />
          </Link>
          <Link
            href={siteConfig.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-border bg-card p-2.5 text-muted transition-colors hover:border-accent/40 hover:text-primary"
            aria-label="GitHub"
          >
            <Github size={18} />
          </Link>
        </div>
      </div>
    </footer>
  );
}
