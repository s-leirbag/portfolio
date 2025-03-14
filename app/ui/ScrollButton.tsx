"use client";

import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/app/lib/utils";

export default function ScrollButton() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      // Get the height of the viewport
      const viewportHeight = window.innerHeight;

      // If we've scrolled more than % of the viewport height, hide the button
      if (window.scrollY > viewportHeight * 0.1) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToNextSection = () => {
    // Scroll to the next viewport height
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToNextSection}
      className={cn(
        "self-center",
        "bg-sky-500 text-primary-foreground rounded-full p-3",
        "shadow-lg transition-all duration-300",
        "hover:bg-sky-500/90 hover:shadow-xl hover:-translate-y-1",
        "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2",
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      )}
      aria-label="Scroll to next section"
    >
      <ChevronDown className="h-6 w-6" />
    </button>
  );
}
