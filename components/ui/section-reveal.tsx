"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Wrapper qui anime ses enfants a l'entree dans le viewport.
 * - Le label (eyebrow) glisse depuis la gauche
 * - Le titre se revele ligne par ligne avec un masque
 * - Le sous-titre fait un fade-up decale
 */
export default function SectionReveal({ children }: { children: React.ReactNode }) {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!rootRef.current) return;
    const root = rootRef.current;

    const label   = root.querySelector<HTMLElement>("[data-reveal='label']");
    const words   = root.querySelectorAll<HTMLElement>("[data-reveal='word']");
    const sub     = root.querySelector<HTMLElement>("[data-reveal='sub']");

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          once: true,
        },
        defaults: { ease: "power3.out" },
      });

      if (label) {
        gsap.set(label, { x: -32, opacity: 0 });
        tl.to(label, { x: 0, opacity: 1, duration: 0.6 }, 0);
      }

      if (words.length) {
        gsap.set(words, { y: "110%", opacity: 0 });
        tl.to(
          words,
          { y: "0%", opacity: 1, duration: 0.8, stagger: 0.08 },
          label ? 0.15 : 0,
        );
      }

      if (sub) {
        gsap.set(sub, { y: 24, opacity: 0 });
        tl.to(sub, { y: 0, opacity: 1, duration: 0.7 }, "-=0.3");
      }
    }, root);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={rootRef}>
      {children}
    </div>
  );
}
