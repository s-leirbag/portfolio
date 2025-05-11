"use client";

import Link from "next/link";
import { ImageSet, renderImageSet } from "../lib/content";
import { useCallback, useRef, useState } from "react";

export default function ProjectCard({
  title,
  blurb,
  href,
  cta,
  imageSet,
}: {
  title: string;
  blurb: string;
  href: string;
  cta: string;
  imageSet: ImageSet;
}) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLAnchorElement>(null);

  const updateMousePosition = useCallback((e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({ x, y });
  }, []);

  return (
    <Link
      href={href}
      className="relative group border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
      ref={cardRef}
      onMouseMove={updateMousePosition}
    >
      <div className="absolute -z-10 inset-0 rounded-xl pointer-events-none bg-neutral-100 dark:bg-neutral-800" />
      <div
        className="absolute -z-10 inset-0 rounded-xl pointer-events-none opacity-0 group-hover:opacity-50 transition-opacity duration-500 from-neutral-100 to-neutral-200 dark:from-neutral-700 dark:to-neutral-800"
        style={{
          background: `radial-gradient(circle at ${position.x}px ${position.y}px, var(--tw-gradient-stops))`,
        }}
      />
      <h3 className="text-2xl lg:text-3xl font-semibold">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{blurb}</p>
      <p className="font-medium hover:underline">
        {cta} {"->"}
      </p>
      <div className="flex-1 flex">
        <div className="m-auto">{renderImageSet(imageSet)}</div>
      </div>
    </Link>
  );
}
