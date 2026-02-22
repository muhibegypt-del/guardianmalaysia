"use client";

import { useEffect, useRef } from "react";

export function useFadeIn<T extends HTMLElement = HTMLDivElement>(
  options?: { threshold?: number; stagger?: boolean }
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const className = options?.stagger ? "fade-in-stagger" : "fade-in";
    element.classList.add(className);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      },
      { threshold: options?.threshold ?? 0.1 }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [options?.threshold, options?.stagger]);

  return ref;
}
