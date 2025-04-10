import Image from "next/image";
import Link from "next/link";
import React from "react";
import ProjectCard from "../ui/ProjectCard";
import ContactMe from "../ui/ContactMe";

export type RichTextNode =
  | {
      type: "paragraph";
      children: InlineNode[];
    }
  | {
      type: "ul";
      description?: InlineNode[]; // <- optional description
      children: { type: "li"; children: InlineNode[] }[];
    };

type InlineNode =
  | { type: "text"; value: string }
  | { type: "link"; href: string; value: string };

type ImageSet = {
  src: string;
  srcDark?: string;
  alt: string;
  width: number;
  height: number;
};

type Block =
  | {
      type: "image";
      imageSet: ImageSet;
    }
  | {
      type: "textLeft" | "textCenter" | "textRightPadding";
      heading: string;
      content: RichTextNode[];
    }
  | {
      type: "imageAboveTextLeft" | "imageAboveTextCenter";
      imageSet: ImageSet;
      heading: string;
      content: RichTextNode[];
    }
  | {
      type: "split";
      imageRight: boolean;
      imageSet: ImageSet;
      heading: string;
      content: RichTextNode[];
    };

export type ProjectContent = {
  title: string;
  blurb: string;
  href: string;
  cta: string;
  image: ImageSet;
  description: RichTextNode[];
  stack: string[];
  year: number;
  content: Block[];
};

// Function to render inline nodes (text and links)
function renderInlineNode(node: InlineNode, index: number): React.ReactNode {
  switch (node.type) {
    case "text":
      return <React.Fragment key={index}>{node.value}</React.Fragment>;
    case "link":
      return (
        <Link
          key={index}
          href={node.href}
          className="hover:underline text-sky-500 hover:text-[#0ea5e9e6]"
          target="_blank"
          rel="noopener noreferrer"
        >
          {node.value}
        </Link>
      );
    default:
      return null;
  }
}

// Function to render rich text nodes (paragraphs and lists)
function renderRichTextNode(
  node: RichTextNode,
  index: number
): React.ReactNode {
  switch (node.type) {
    case "paragraph":
      return (
        <p
          key={index}
          className="leading-loose text-neutral-600 dark:text-neutral-300"
        >
          {node.children.map((child, childIndex) =>
            renderInlineNode(child, childIndex)
          )}
        </p>
      );
    case "ul":
      return (
        <div
          key={index}
          className="leading-loose text-neutral-600 dark:text-neutral-300"
        >
          {node.description && (
            <div>
              {node.description.map((desc, descIndex) =>
                renderInlineNode(desc, descIndex)
              )}
            </div>
          )}
          <ul className="list-disc list-inside pl-4">
            {node.children.map((item, itemIndex) => (
              <li key={itemIndex}>
                {item.children.map((child, childIndex) =>
                  renderInlineNode(child, childIndex)
                )}
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return null;
  }
}

// Function to render image sets
function renderImageSet(imageSet: ImageSet): React.ReactNode {
  if (imageSet.srcDark) {
    return (
      <>
        <Image
          src={imageSet.src}
          alt={imageSet.alt}
          width={imageSet.width}
          height={imageSet.height}
          className="dark:hidden"
        />
        <Image
          src={imageSet.srcDark}
          alt={imageSet.alt}
          width={imageSet.width}
          height={imageSet.height}
          className="hidden dark:inline-block"
        />
      </>
    );
  }

  return (
    <Image
      src={imageSet.src}
      alt={imageSet.alt}
      width={imageSet.width}
      height={imageSet.height}
    />
  );
}

// Function to render each block type
function renderBlock(block: Block, index: number): React.ReactNode {
  const gradientBg = (
    <div className="absolute inset-y-0 w-screen left-1/2 -translate-x-1/2 -z-10 gradient-bg-thick blur-xl" />
  );

  switch (block.type) {
    case "image":
      return (
        <div key={index} className="relative py-32">
          {gradientBg}
          {renderImageSet(block.imageSet)}
        </div>
      );

    case "textLeft":
      return (
        <div key={index} className="relative py-32">
          {gradientBg}
          <div className="lg:pr-8">
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              {block.heading}
            </h3>
            <div className="space-y-8">
              {block.content.map((node, nodeIndex) =>
                renderRichTextNode(node, nodeIndex)
              )}
            </div>
          </div>
        </div>
      );

    case "textCenter":
      return (
        <div key={index} className="relative py-32">
          {gradientBg}
          <div className="text-center lg:px-32">
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              {block.heading}
            </h3>
            <div className="space-y-8">
              {block.content.map((node, nodeIndex) =>
                renderRichTextNode(node, nodeIndex)
              )}
            </div>
          </div>
        </div>
      );

    case "textRightPadding":
      return (
        <div key={index} className="relative py-32">
          {gradientBg}
          <div className="lg:pr-64">
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              {block.heading}
            </h3>
            <div className="space-y-8">
              {block.content.map((node, nodeIndex) =>
                renderRichTextNode(node, nodeIndex)
              )}
            </div>
          </div>
        </div>
      );

    case "imageAboveTextLeft":
    case "imageAboveTextCenter":
      return (
        <div key={index} className="relative py-32">
          {gradientBg}
          <div
            className={
              block.type === "imageAboveTextCenter" ? "text-center" : ""
            }
          >
            {renderImageSet(block.imageSet)}
            {block.heading && (
              <h3 className="text-2xl md:text-5xl mt-8 mb-2 rounded font-semibold">
                {block.heading}
              </h3>
            )}
            {block.content.length > 0 && (
              <div className="space-y-8">
                {block.content.map((node, nodeIndex) =>
                  renderRichTextNode(node, nodeIndex)
                )}
              </div>
            )}
          </div>
        </div>
      );

    case "split":
      return (
        <div key={index} className="relative py-32">
          {gradientBg}
          <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8 lg:space-y-0">
            <div className="m-auto">{renderImageSet(block.imageSet)}</div>
            <div className={block.imageRight ? "col-start-1 row-start-1" : ""}>
              <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
                {block.heading}
              </h3>
              <div className="space-y-8">
                {block.content.map((node, nodeIndex) =>
                  renderRichTextNode(node, nodeIndex)
                )}
              </div>
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

// Main component to render the entire project
export function ProjectPage({ project }: { project: ProjectContent }) {
  return (
    <div className="relative w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] m-auto">
      <div className="absolute inset-0 -z-10 gradient-bg blur-xl" />

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-y-0 w-screen left-1/2 -translate-x-1/2 -z-10 gradient-bg-thick blur-xl" />
        <div className="py-16 px-4 md:px-16 pt-[calc(25vh)] gap-8 flex flex-col">
          <h1 className="text-5xl md:text-8xl py-0.5 rounded font-semibold bg-gradient-to-r from-sky-500 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
            {project.title}
          </h1>
          <div className="space-y-8">
            {project.description.map((node, index) =>
              renderRichTextNode(node, index)
            )}
          </div>

          <div className="pt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 gap-y-8 max-w-lg">
            <div className="space-y-2">
              <strong>Stack</strong>
              {project.stack.map((item, index) => (
                <p
                  key={index}
                  className="text-neutral-600 dark:text-neutral-300"
                >
                  {item}
                </p>
              ))}
            </div>
            <div className="space-y-2">
              <strong>Year</strong>
              <p className="text-neutral-600 dark:text-neutral-300">
                {project.year}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-4 md:px-16 flex flex-col">
        {project.content.map((block, index) => renderBlock(block, index))}
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 w-screen left-1/2 -translate-x-1/2 -z-10 gradient-bg-thick blur-xl" />
        <div className="px-4 sm:px-16 md:px-32">
          <h2 className="text-3xl md:text-6xl py-0.5 pt-16 rounded font-semibold text-shadow-50px">
            Other Work
          </h2>
          <p className="text-shadow-20px leading-loose text-neutral-600 dark:text-neutral-300">
            I learn by doing! Take a look at some of my past and ongoing
            projects.
          </p>
        </div>
        <div className="pt-8 pb-16 px-4 md:p-16 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
          <ProjectCard
            title="Citizens Bank Internship"
            desc="My time as an intern at Citizens Bank."
            href="/citizens"
            cta="read story"
            imageSrc="/citizens/citizens-ss.jpeg"
            imageWidth={4096}
            imageHeight={1777}
          />
          <ProjectCard
            title="Brigham & Women's Hospital Application"
            desc="Leading an 11-person agile project."
            href="/hospital"
            cta="view project"
            imageSrc="/hospital/path.png"
            imageWidth={1920}
            imageHeight={1080}
          />
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
