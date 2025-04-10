import { cn } from "@/app/lib/utils";
import Image from "next/image";
import Link from "next/link";

type Snippet = {
  heading: string;
  text: string[];
};

type ImageSet = {
  src: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
};

const TextContent = ({
  snippet,
  className = "",
}: {
  snippet: Snippet;
  className?: string;
}) => (
  <div className={cn("space-y-8", className)}>
    <h3 className="text-2xl md:text-5xl -mb-6 rounded font-semibold">
      {snippet.heading}
    </h3>
    {snippet.text.map((s, i) => (
      <p
        key={i}
        className="leading-loose text-neutral-600 dark:text-neutral-300"
      >
        {s}
      </p>
    ))}
  </div>
);

const ImageSet = ({
  imageSet: { src, srcDark, alt, width, height },
}: {
  imageSet: ImageSet;
}) => (
  <>
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn({ "dark:hidden": !!srcDark })}
    />
    {srcDark && (
      <Image
        src={srcDark}
        alt={alt}
        width={width}
        height={height}
        className="hidden dark:inline-block"
      />
    )}
  </>
);

export function Text({ snippet }: { snippet: Snippet }) {
  return <TextContent snippet={snippet} />;
}

export function TextCenter({ snippet }: { snippet: Snippet }) {
  return <TextContent snippet={snippet} className="text-center lg:px-32" />;
}

export function TextRightPadding({ snippet }: { snippet: Snippet }) {
  return <TextContent snippet={snippet} className="lg:pr-64" />;
}

export function ImageWithText({
  snippet,
  imageSet,
}: {
  snippet: Snippet;
  imageSet: ImageSet;
}) {
  return (
    <>
      <ImageSet imageSet={imageSet} />
      <TextContent snippet={snippet} className="mt-8" />
    </>
  );
}

export function Split({
  snippet,
  imageSet,
  imageRight = false,
}: {
  snippet: Snippet;
  imageSet: ImageSet;
  imageRight?: boolean;
}) {
  return (
    <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
      <div className="m-auto">
        <ImageSet imageSet={imageSet} />
      </div>
      <div
        className={cn("space-y-8", { "col-start-1 row-start-1": imageRight })}
      >
        <TextContent snippet={snippet} />
      </div>
    </div>
  );
}
