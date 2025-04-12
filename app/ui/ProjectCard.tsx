import Link from "next/link";
import { ImageSet, renderImageSet } from "../lib/content";

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
  return (
    <Link
      href={href}
      className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
    >
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
