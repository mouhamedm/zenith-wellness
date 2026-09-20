"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";

/**
 * Custom cursor bien-etre :
 * - Petit point vert sauge qui suit la souris instantanement
 * - Grand anneau translucide qui suit avec un leger retard (spring)
 * - L'anneau grossit et devient semi-opaque sur les elements interactifs
 * - Desactive automatiquement sur les appareils tactiles
 */
export default function CustomCursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Uniquement sur les peripheriques a pointeur (souris / trackpad)
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const dot  = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    // Activer le curseur personnalise
    document.body.classList.add("custom-cursor-active");

    // Position courante du curseur (pour le suivi instantane du dot)
    let mouseX = window.innerWidth  / 2;
    let mouseY = window.innerHeight / 2;

    // Position animee de l'anneau
    const pos = { x: mouseX, y: mouseY };

    // Positionner les deux elements au centre au demarrage (evite le flash top-left)
    gsap.set([dot, ring], { x: mouseX, y: mouseY, xPercent: -50, yPercent: -50 });

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      // Le point suit instantanement
      gsap.set(dot, { x: mouseX, y: mouseY });
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });

    // Boucle GSAP pour l'anneau avec interpolation douce (lerp)
    const ticker = gsap.ticker.add(() => {
      const dx = mouseX - pos.x;
      const dy = mouseY - pos.y;
      // lerp factor : plus petit = plus lent (plus de trainee)
      pos.x += dx * 0.12;
      pos.y += dy * 0.12;
      gsap.set(ring, { x: pos.x, y: pos.y });
    });

    // Agrandir l'anneau sur les elements interactifs
    const interactiveSelectors = "a, button, [role='button'], input, label, .fan-card";

    const onEnterInteractive = () => {
      gsap.to(ring, {
        width: 64,
        height: 64,
        opacity: 0.6,
        borderColor: "color-mix(in oklch, #2d6a4f 80%, transparent)",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 0,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const onLeaveInteractive = () => {
      gsap.to(ring, {
        width: 36,
        height: 36,
        opacity: 0.35,
        borderColor: "color-mix(in oklch, #2d6a4f 60%, transparent)",
        duration: 0.4,
        ease: "power2.out",
      });
      gsap.to(dot, {
        scale: 1,
        duration: 0.2,
        ease: "power2.out",
      });
    };

    const addListeners = () => {
      document.querySelectorAll<HTMLElement>(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", onEnterInteractive);
        el.addEventListener("mouseleave", onLeaveInteractive);
      });
    };

    // Masquer le curseur quand la souris quitte la fenetre
    const onMouseLeave = () => gsap.to([dot, ring], { opacity: 0, duration: 0.2 });
    const onMouseEnter = () => gsap.to([dot, ring], { opacity: 1, duration: 0.2 });
    document.addEventListener("mouseleave", onMouseLeave);
    document.addEventListener("mouseenter", onMouseEnter);

    // Attacher les listeners une premiere fois et observer les nouveaux elements
    addListeners();
    const observer = new MutationObserver(addListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      document.body.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
      document.removeEventListener("mouseenter", onMouseEnter);
      gsap.ticker.remove(ticker);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Anneau externe — suit avec retard */}
      <div
        ref={ringRef}
        className="cursor-ring"
        style={{
          width: 36,
          height: 36,
          borderRadius: "50%",
          border: "1.5px solid color-mix(in oklch, #2d6a4f 60%, transparent)",
          opacity: 0.35,
          background: "transparent",
        }}
        aria-hidden="true"
      />
      {/* Point central — suit instantanement */}
      <div
        ref={dotRef}
        className="cursor-dot"
        style={{
          width: 7,
          height: 7,
          borderRadius: "50%",
          background: "#2d6a4f",
          opacity: 1,
        }}
        aria-hidden="true"
      />
    </>
  );
}
