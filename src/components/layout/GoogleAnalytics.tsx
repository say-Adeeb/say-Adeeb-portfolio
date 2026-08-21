"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

export function GoogleAnalytics() {
  const pathname = usePathname();
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

  useEffect(() => {
    if (!gaId || typeof window === "undefined") return;

    const script = document.createElement("script");
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
    script.async = true;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    function gtag(...args: unknown[]) {
      window.dataLayer?.push(args);
    }
    gtag("js", new Date());
    gtag("config", gaId);
  }, [gaId]);

  useEffect(() => {
    if (!gaId || typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", gaId, { page_path: pathname });
  }, [pathname, gaId]);

  return null;
}

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}
