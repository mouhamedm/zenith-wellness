"use client";

import * as React from "react";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800;900&display=swap');

.cinematic-footer-wrapper {
  font-family: 'Plus Jakarta Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  --pill-bg-1: color-mix(in oklch, var(--foreground) 3%, transparent);
  --pill-bg-2: color-mix(in oklch, var(--foreground) 1%, transparent);
  --pill-shadow: color-mix(in oklch, var(--background) 50%, transparent);
  --pill-highlight: color-mix(in oklch, var(--foreground) 10%, transparent);
  --pill-inset-shadow: color-mix(in oklch, var(--background) 80%, transparent);
  --pill-border: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-1-hover: color-mix(in oklch, var(--foreground) 8%, transparent);
  --pill-bg-2-hover: color-mix(in oklch, var(--foreground) 2%, transparent);
  --pill-border-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
  --pill-shadow-hover: color-mix(in oklch, var(--background) 70%, transparent);
  --pill-highlight-hover: color-mix(in oklch, var(--foreground) 20%, transparent);
}

@keyframes footer-breathe {
  0% { transform: translate(-50%, -50%) scale(1); opacity: 0.6; }
  100% { transform: translate(-50%, -50%) scale(1.1); opacity: 1; }
}

@keyframes footer-scroll-marquee {
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
}

@keyframes footer-heartbeat {
  0%, 100% { transform: scale(1); filter: drop-shadow(0 0 5px color-mix(in oklch, var(--destructive) 50%, transparent)); }
  15%, 45% { transform: scale(1.2); filter: drop-shadow(0 0 10px color-mix(in oklch, var(--destructive) 80%, transparent)); }
  30% { transform: scale(1); }
}

.animate-footer-breathe {
  animation: footer-breathe 8s ease-in-out infinite alternate;
}

.animate-footer-scroll-marquee {
  animation: footer-scroll-marquee 40s linear infinite;
}

.animate-footer-heartbeat {
  animation: footer-heartbeat 2s cubic-bezier(0.25, 1, 0.5, 1) infinite;
}

.footer-bg-grid {
  background-size: 60px 60px;
  background-image: 
    linear-gradient(to right, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px),
    linear-gradient(to bottom, color-mix(in oklch, var(--foreground) 3%, transparent) 1px, transparent 1px);
  mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
  -webkit-mask-image: linear-gradient(to bottom, transparent, black 30%, black 70%, transparent);
}

.footer-aurora {
  background: radial-gradient(
    circle at 50% 50%, 
    color-mix(in oklch, var(--primary) 15%, transparent) 0%, 
    color-mix(in oklch, var(--secondary) 15%, transparent) 40%, 
    transparent 70%
  );
}

.footer-glass-pill {
  background: linear-gradient(145deg, var(--pill-bg-1) 0%, var(--pill-bg-2) 100%);
  box-shadow: 
      0 10px 30px -10px var(--pill-shadow), 
      inset 0 1px 1px var(--pill-highlight), 
      inset 0 -1px 2px var(--pill-inset-shadow);
  border: 1px solid var(--pill-border);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.footer-glass-pill:hover {
  background: linear-gradient(145deg, var(--pill-bg-1-hover) 0%, var(--pill-bg-2-hover) 100%);
  border-color: var(--pill-border-hover);
  box-shadow: 
      0 20px 40px -10px var(--pill-shadow-hover), 
      inset 0 1px 1px var(--pill-highlight-hover);
  color: var(--foreground);
}

.footer-giant-bg-text {
  font-size: 26vw;
  line-height: 0.75;
  font-weight: 900;
  letter-spacing: -0.05em;
  color: transparent;
  -webkit-text-stroke: 1px color-mix(in oklch, var(--foreground) 5%, transparent);
  background: linear-gradient(180deg, color-mix(in oklch, var(--foreground) 10%, transparent) 0%, transparent 60%);
  -webkit-background-clip: text;
  background-clip: text;
}

.footer-text-glow {
  background: linear-gradient(180deg, var(--foreground) 0%, color-mix(in oklch, var(--foreground) 40%, transparent) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  filter: drop-shadow(0px 0px 20px color-mix(in oklch, var(--foreground) 15%, transparent));
}
`;

export type MagneticButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    as?: React.ElementType;
  };

const MagneticButton = React.forwardRef<HTMLElement, MagneticButtonProps>(
  ({ className, children, as: Component = "button", ...props }, forwardedRef) => {
    const localRef = useRef<HTMLElement>(null);

    useEffect(() => {
      if (typeof window === "undefined") return;
      const element = localRef.current;
      if (!element) return;

      const ctx = gsap.context(() => {
        const handleMouseMove = (e: MouseEvent) => {
          const rect = element.getBoundingClientRect();
          const h = rect.width / 2;
          const w = rect.height / 2;
          const x = e.clientX - rect.left - h;
          const y = e.clientY - rect.top - w;

          gsap.to(element, {
            x: x * 0.4,
            y: y * 0.4,
            rotationX: -y * 0.15,
            rotationY: x * 0.15,
            scale: 1.05,
            ease: "power2.out",
            duration: 0.4,
          });
        };

        const handleMouseLeave = () => {
          gsap.to(element, {
            x: 0,
            y: 0,
            rotationX: 0,
            rotationY: 0,
            scale: 1,
            ease: "elastic.out(1, 0.3)",
            duration: 1.2,
          });
        };

        element.addEventListener("mousemove", handleMouseMove as EventListener);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
          element.removeEventListener("mousemove", handleMouseMove as EventListener);
          element.removeEventListener("mouseleave", handleMouseLeave);
        };
      }, element);

      return () => ctx.revert();
    }, []);

    return (
      <Component
        ref={(node: HTMLElement) => {
          (localRef as React.MutableRefObject<HTMLElement | null>).current = node;
          if (typeof forwardedRef === "function") forwardedRef(node);
          else if (forwardedRef) (forwardedRef as React.MutableRefObject<HTMLElement | null>).current = node;
        }}
        className={cn("cursor-pointer", className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);
MagneticButton.displayName = "MagneticButton";

const MarqueeItem = () => (
  <div className="flex items-center space-x-12 px-6">
    <span>Harmonie Corps & Esprit</span> <span className="text-primary/60">✦</span>
    <span>Soins Holistiques</span> <span className="text-secondary/60">✦</span>
    <span>Therapies Naturelles</span> <span className="text-primary/60">✦</span>
    <span>Bien-etre Total</span> <span className="text-secondary/60">✦</span>
    <span>Serenite Authentique</span> <span className="text-primary/60">✦</span>
  </div>
);

export function CinematicFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const giantTextRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const linksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!wrapperRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        giantTextRef.current,
        { y: "10vh", scale: 0.8, opacity: 0 },
        {
          y: "0vh",
          scale: 1,
          opacity: 1,
          ease: "power1.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 80%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );

      gsap.fromTo(
        [headingRef.current, linksRef.current],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: wrapperRef.current,
            start: "top 40%",
            end: "bottom bottom",
            scrub: 1,
          },
        }
      );
    }, wrapperRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: STYLES }} />
      <div
        id="contact"
        ref={wrapperRef}
        className="relative min-h-screen md:h-screen w-full"
        style={{
          clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
          transform: "translateZ(0)",
          willChange: "transform",
        }}
      >
        <footer className="relative md:absolute inset-0 flex min-h-screen md:h-full w-full flex-col justify-between overflow-hidden bg-background text-foreground cinematic-footer-wrapper pt-12 pb-6 md:pt-0 md:pb-0">
          <div className="footer-aurora absolute left-1/2 top-1/2 h-[60vh] w-[80vw] -translate-x-1/2 -translate-y-1/2 animate-footer-breathe rounded-[50%] blur-[80px] pointer-events-none z-0" />
          <div className="footer-bg-grid absolute inset-0 z-0 pointer-events-none" />

          <div
            ref={giantTextRef}
            className="footer-giant-bg-text absolute bottom-[-2vh] md:bottom-[-5vh] left-1/2 -translate-x-1/2 whitespace-nowrap z-0 pointer-events-none select-none"
          >
            ZENITH
          </div>

          <div className="absolute top-4 md:top-12 left-0 w-full overflow-hidden border-y border-border/50 bg-background/60 backdrop-blur-md py-2.5 md:py-4 z-10 -rotate-2 scale-110 shadow-2xl">
            <div className="flex w-max animate-footer-scroll-marquee text-xs md:text-sm font-bold tracking-[0.3em] text-muted-foreground uppercase">
              <MarqueeItem />
              <MarqueeItem />
            </div>
          </div>

          <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-4 md:px-6 mt-16 md:mt-20 w-full max-w-5xl mx-auto">
            <h2
              ref={headingRef}
              className="text-3xl sm:text-5xl md:text-8xl font-black footer-text-glow tracking-tighter mb-8 md:mb-12 text-center"
            >
              Commencer votre voyage ?
            </h2>

            <div ref={linksRef} className="flex flex-col items-center gap-4 md:gap-6 w-full">
              <div className="flex flex-wrap justify-center gap-3 md:gap-4 w-full">
                <MagneticButton as="a" href="#contact" className="footer-glass-pill px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-foreground font-bold text-xs sm:text-sm md:text-base flex items-center gap-2.5 md:gap-3 group">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.5 12 19.79 19.79 0 0 1 1.21 3.18 2 2 0 0 1 3.22 1h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 9a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                  </svg>
                  Nous contacter
                </MagneticButton>

                <MagneticButton as="a" href="#contact" className="footer-glass-pill px-6 py-3.5 sm:px-8 sm:py-4 md:px-10 md:py-5 rounded-full text-foreground font-bold text-xs sm:text-sm md:text-base flex items-center gap-2.5 md:gap-3 group">
                  <svg className="w-4 h-4 md:w-5 md:h-5 text-muted-foreground group-hover:text-foreground transition-colors shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                    <line x1="16" y1="2" x2="16" y2="6" />
                    <line x1="8" y1="2" x2="8" y2="6" />
                    <line x1="3" y1="10" x2="21" y2="10" />
                  </svg>
                  Reserver une seance
                </MagneticButton>
              </div>

              <div className="flex flex-wrap justify-center gap-2.5 sm:gap-3 md:gap-6 w-full mt-1 md:mt-2">
                <MagneticButton as="a" href="#soins" className="footer-glass-pill px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-muted-foreground font-medium text-[11px] sm:text-xs md:text-sm hover:text-foreground">
                  Nos services
                </MagneticButton>
                <MagneticButton as="a" href="#espaces" className="footer-glass-pill px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-muted-foreground font-medium text-[11px] sm:text-xs md:text-sm hover:text-foreground">
                  Confidentialite
                </MagneticButton>
                <MagneticButton as="a" href="#histoire" className="footer-glass-pill px-4 py-2 sm:px-5 sm:py-2.5 md:px-6 md:py-3 rounded-full text-muted-foreground font-medium text-[11px] sm:text-xs md:text-sm hover:text-foreground">
                  Mentions legales
                </MagneticButton>
              </div>
            </div>
          </div>

          <div className="relative z-20 w-full pb-6 md:pb-8 px-4 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
            <div className="text-muted-foreground text-[10px] md:text-xs font-semibold tracking-widest uppercase order-2 md:order-1 text-center md:text-left">
              &copy; {new Date().getFullYear()} Centre Zenith Bien-etre. Tous droits reserves.
            </div>

            <div className="footer-glass-pill px-5 py-2.5 md:px-6 md:py-3 rounded-full flex items-center gap-2 order-1 md:order-2 cursor-default border-border/50">
              <span className="text-muted-foreground text-[10px] md:text-xs font-bold uppercase tracking-widest">Developpe par</span>
              <span className="animate-footer-heartbeat text-xs md:text-base text-destructive">❤</span>
              <span className="text-foreground font-black text-xs md:text-sm tracking-normal ml-1">MMD.Dev</span>
            </div>

            <MagneticButton
              as="button"
              onClick={scrollToTop}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full footer-glass-pill flex items-center justify-center text-muted-foreground hover:text-foreground group order-3"
            >
              <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:-translate-y-1.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
              </svg>
            </MagneticButton>
          </div>
        </footer>
      </div>
    </>
  );
}
