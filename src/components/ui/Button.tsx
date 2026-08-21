import Link from "next/link";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost" | "disabled";
  href?: string;
  external?: boolean;
}

export function Button({
  children,
  className,
  variant = "primary",
  href,
  external,
  disabled,
  ...props
}: ButtonProps) {
  const styles = cn(
    "inline-flex items-center justify-center gap-2 rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-200",
    variant === "primary" &&
      "bg-primary text-white shadow-lg shadow-primary/20 hover:bg-primary-light hover:shadow-primary/30",
    variant === "secondary" &&
      "border border-border bg-card text-foreground hover:border-accent/50 hover:bg-surface",
    variant === "ghost" &&
      "text-muted hover:text-foreground hover:bg-surface",
    variant === "disabled" &&
      "cursor-not-allowed border border-border bg-surface text-muted opacity-60",
    className,
  );

  if (href && variant !== "disabled") {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={styles}
        >
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={styles}>
        {children}
      </Link>
    );
  }

  return (
    <button className={styles} disabled={disabled || variant === "disabled"} {...props}>
      {children}
    </button>
  );
}
