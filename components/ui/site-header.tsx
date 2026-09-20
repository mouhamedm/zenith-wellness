"use client";
import { useState } from "react";
import Link from "next/link";

const NAV_LINKS = [
  { label: "Soins", href: "#soins" },
  { label: "Espaces", href: "#espaces" },
  { label: "Notre histoire", href: "#histoire" },
  { label: "Contact", href: "#contact" },
];

export default function SiteHeader() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full px-6 md:px-12 py-5 flex items-center justify-between bg-transparent absolute top-0 left-0 z-50">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-2 group"
        aria-label="Zenith Bien-etre — Accueil"
      >
        <svg
          width="28"
          height="28"
          viewBox="0 0 32 32"
          fill="none"
          className="shrink-0 transition-transform duration-500 group-hover:rotate-12"
          aria-hidden="true"
        >
          <path
            d="M16 4C16 4 10 10 10 17C10 20.3137 12.6863 23 16 23C19.3137 23 22 20.3137 22 17C22 10 16 4 16 4Z"
            fill="currentColor"
            className="text-foreground/80 transition-colors group-hover:text-foreground"
          />
          <path
            d="M16 23C16 23 8 20 6 14C4.5 9.5 8 6 12 8C9 11 10 17 16 23Z"
            fill="currentColor"
            className="text-foreground/50 transition-colors group-hover:text-foreground/70"
          />
          <path
            d="M16 23C16 23 24 20 26 14C27.5 9.5 24 6 20 8C23 11 22 17 16 23Z"
            fill="currentColor"
            className="text-foreground/50 transition-colors group-hover:text-foreground/70"
          />
          <line
            x1="16"
            y1="23"
            x2="16"
            y2="29"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            className="text-foreground/40"
          />
        </svg>
        <span className="text-lg font-black tracking-tight text-foreground leading-none transition-opacity group-hover:opacity-80">
          ZENITH<span className="font-light opacity-60 ml-0.5 text-base">wellness</span>
        </span>
      </Link>

      <nav
        className="hidden md:flex items-center gap-8"
        aria-label="Navigation principale"
      >
        {NAV_LINKS.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={[
              "relative text-sm font-medium tracking-wide",
              "text-foreground/60 hover:text-foreground",
              "transition-colors duration-200",
              "after:absolute after:-bottom-0.75 after:left-0",
              "after:h-[1.5px] after:w-full after:rounded-full after:bg-foreground",
              "after:origin-left after:scale-x-0",
              "after:transition-transform after:duration-300 after:ease-out",
              "hover:after:scale-x-100",
            ].join(" ")}
          >
            {link.label}
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className={[
          "hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full",
          "glass-pill-btn",
          "text-sm font-semibold",
          "hover:gap-3",
          "transition-[gap] duration-300 ease-out",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground/30",
        ].join(" ")}
      >
        Reserver
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </a>

      {/* Burger mobile */}
      <button
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
        className="md:hidden flex flex-col justify-center items-center gap-1.25 p-2.5 rounded-xl text-foreground/80 hover:text-foreground hover:bg-foreground/5 transition-colors"
        aria-label={isMobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={isMobileMenuOpen}
        aria-controls="mobile-nav-menu"
      >
        <span
          className={`h-[1.5px] bg-foreground/80 rounded-full transition-all duration-300 origin-center ${
            isMobileMenuOpen ? "w-5 translate-y-[6.5px] rotate-45" : "w-5"
          }`}
        />
        <span
          className={`w-4 h-[1.5px] bg-foreground/80 rounded-full transition-all duration-300 ${
            isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100"
          }`}
        />
        <span
          className={`h-[1.5px] bg-foreground/80 rounded-full transition-all duration-300 origin-center ${
            isMobileMenuOpen ? "w-5 translate-y-[-6.5px] -rotate-45" : "w-3"
          }`}
        />
      </button>

      {/* Menu mobile déroulant */}
      {isMobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden absolute top-full left-0 w-full px-4 pt-2 pb-4 transition-all duration-300"
        >
          <div className="bg-[#f5f3ef]/95 dark:bg-[#141414]/95 backdrop-blur-2xl border border-foreground/10 rounded-2xl p-5 shadow-2xl flex flex-col gap-3 animate-in fade-in slide-in-from-top-3 duration-200">
            <nav className="flex flex-col gap-1" aria-label="Navigation mobile">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-base font-medium text-foreground/80 hover:text-foreground py-2.5 px-3 rounded-xl hover:bg-foreground/5 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <hr className="border-t border-foreground/10 my-1" />

            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="glass-pill-btn flex items-center justify-center gap-2 w-full py-3 rounded-full text-sm font-semibold text-center"
            >
              <span>Reserver une seance</span>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
