import Image from "next/image";
import Link from "next/link";

export default function ProjectCard({
  title,
  desc,
  href,
  cta,
  imageSrc,
  imageWidth,
  imageHeight,
}: {
  title: string;
  desc: string;
  href: string;
  cta: string;
  imageSrc: string;
  imageWidth: number;
  imageHeight: number;
}) {
  return (
    <Link
      href={href}
      className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
    >
      <h3 className="text-xl md:text-3xl font-semibold">{title}</h3>
      <p className="text-neutral-600 dark:text-neutral-300">{desc}</p>
      <p className="font-medium hover:underline">
        {cta} {"->"}
      </p>
      <div className="flex-1 flex">
        <Image
          src={imageSrc}
          alt={`${title} project thumbnail`}
          width={imageWidth}
          height={imageHeight}
          className="m-auto"
        />
      </div>
    </Link>
  );
}
