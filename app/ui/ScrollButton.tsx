"use client";

import { useCallback, useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function ScrollButton(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const viewportHeight = window.innerHeight;

      // If we've scrolled more than % of the viewport height, hide the button
      if (window.scrollY > viewportHeight * 0.1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToNextSection = useCallback(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: window.innerHeight,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, []);

  const buttonClasses = cn(
    "absolute hidden sm:block sm:bottom-16 self-center",
    "bg-sky-500 rounded-full p-3",
    "shadow-lg transition-all duration-300",
    "hover:bg-sky-500/90 hover:shadow-xl hover:-translate-y-1",
    "focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2",
    isVisible
      ? "opacity-100 translate-y-0"
      : "opacity-0 translate-y-10 pointer-events-none"
  );

  return (
    <button
      onClick={scrollToNextSection}
      className={buttonClasses}
      aria-hidden={!isVisible}
      tabIndex={isVisible ? 0 : -1}
      type="button"
      {...props}
    >
      <ChevronDown
        className="h-6 w-6 text-neutral-50"
        aria-hidden="true"
        focusable="false"
      />
    </button>
  );
}
