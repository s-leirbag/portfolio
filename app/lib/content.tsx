import Image from "next/image";
import Link from "next/link";
import React from "react";
import { projects } from "../data/projects";
import SvgCollage from "../SvgCollage";
import ContactMe from "../ui/ContactMe";
import ProjectCard from "../ui/ProjectCard";
import { sampleN } from "./utils";

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

export type ImageSet = {
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
  link?: string;
  linkCTA?: string;
  svgs: React.ComponentType<{ size?: number }>[];
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
export function renderImageSet(imageSet: ImageSet): React.ReactNode {
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
  switch (block.type) {
    case "image":
      return (
        <div key={index} className="py-32">
          {renderImageSet(block.imageSet)}
        </div>
      );

    case "textLeft":
      return (
        <section key={index} className="py-32">
          <div>
            <h3 className="text-4xl lg:text-5xl mb-2 font-semibold">
              {block.heading}
            </h3>
            <div className="space-y-8">
              {block.content.map((node, nodeIndex) =>
                renderRichTextNode(node, nodeIndex)
              )}
            </div>
          </div>
        </section>
      );

    case "textCenter":
      return (
        <section key={index} className="py-32">
          <div className="text-center md:px-16 lg:px-32">
            <h3 className="text-4xl lg:text-5xl mb-2 font-semibold">
              {block.heading}
            </h3>
            <div className="space-y-8">
              {block.content.map((node, nodeIndex) =>
                renderRichTextNode(node, nodeIndex)
              )}
            </div>
          </div>
        </section>
      );

    case "textRightPadding":
      return (
        <section key={index} className="py-32">
          <div className="md:pr-32 lg:pr-64">
            <h3 className="text-4xl lg:text-5xl mb-2 font-semibold">
              {block.heading}
            </h3>
            <div className="space-y-8">
              {block.content.map((node, nodeIndex) =>
                renderRichTextNode(node, nodeIndex)
              )}
            </div>
          </div>
        </section>
      );

    case "imageAboveTextLeft":
    case "imageAboveTextCenter":
      return (
        <section key={index} className="py-32">
          <div
            className={
              block.type === "imageAboveTextCenter" ? "text-center" : ""
            }
          >
            <div className="flex flex-row justify-center">
              {renderImageSet(block.imageSet)}
            </div>
            {block.heading && (
              <h3 className="text-4xl lg:text-5xl mt-8 mb-2 font-semibold">
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
        </section>
      );

    case "split":
      return (
        <section key={index} className="py-32">
          <div className="md:grid md:grid-cols-2 gap-8 space-y-8 md:space-y-0">
            <div className="m-auto">{renderImageSet(block.imageSet)}</div>
            <div className={block.imageRight ? "col-start-1 row-start-1" : ""}>
              <h3 className="text-4xl lg:text-5xl mb-2 font-semibold">
                {block.heading}
              </h3>
              <div className="space-y-8">
                {block.content.map((node, nodeIndex) =>
                  renderRichTextNode(node, nodeIndex)
                )}
              </div>
            </div>
          </div>
        </section>
      );

    default:
      return null;
  }
}

// Main component to render the entire project
export function ProjectPage({ project }: { project: ProjectContent }) {
  return (
    <main id="main-content" className="relative overflow-hidden">
      <div className="w-full lg:max-w-[1280px] m-auto">
        <article>
          {/* Hero Section */}
          <header className="relative">
            <SvgCollage
              x={"25vw"}
              y={"40vh"}
              count={12}
              size={128}
              svgs={project.svgs}
              className="transition-opacity duration-300 opacity-0 sm:opacity-10"
            />
            <div className="py-16 px-4 md:px-16 pt-[calc(25vh)] gap-8 flex flex-col">
              <h1 className="text-5xl md:text-7xl lg:text-8xl py-0.5 font-semibold bg-gradient-to-r from-sky-500 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <div className="space-y-8">
                {project.description.map((node, index) =>
                  renderRichTextNode(node, index)
                )}
              </div>

              <div className="pt-4 grid grid-cols-[repeat(auto-fit,minmax(8.75rem,1fr))] gap-2 gap-y-8 max-w-lg">
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
                {project.link && project.linkCTA && (
                  <div className="space-y-2">
                    <strong>Link</strong>
                    <Link
                      href={project.link}
                      className="block w-fit rounded-lg bg-sky-800 hover:bg-sky-700 text-neutral-50 py-4 px-4 hover:ring-1 hover:ring-sky-300"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.linkCTA} {"->"}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </header>

          {/* Main Content */}
          <div className="px-4 md:px-16">
            {project.content.map((block, index) => renderBlock(block, index))}
          </div>
        </article>

        <section className="relative">
          <div className="px-4 md:mx-auto max-w-2xl">
            <h2 className="text-5xl lg:text-6xl py-0.5 pt-16 font-semibold">
              Other Work
            </h2>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              I learn by doing! Take a look at some of my past and ongoing
              projects.
            </p>
          </div>
          <div className="pt-8 pb-16 px-4 md:p-16 grid grid-cols-[repeat(auto-fit,minmax(min(18.75rem,100%),1fr))] gap-4 md:gap-8">
            {sampleN(
              projects.filter(
                (projectContent) => projectContent.title !== project.title
              ),
              2
            ).map((p, i) => (
              <ProjectCard
                key={i}
                title={p.title}
                blurb={p.blurb}
                href={p.href}
                cta={p.cta}
                imageSet={p.image}
              />
            ))}
          </div>
        </section>
        <ContactMe />
      </div>
    </main>
  );
}
