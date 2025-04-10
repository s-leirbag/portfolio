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

type ProjectContent = {
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
        <div key={index}>
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
          <div className="lg:pr-64 space-y-8">
            <h3 className="text-2xl md:text-5xl -mb-6 rounded font-semibold">
              {block.heading}
            </h3>
            {block.content.map((node, nodeIndex) =>
              renderRichTextNode(node, nodeIndex)
            )}
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
              <h3 className="text-2xl md:text-5xl my-8 rounded font-semibold">
                {block.heading}
              </h3>
            )}
            {block.content.length > 0 && (
              <div className="space-y-8 mt-8">
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
            {!block.imageRight && (
              <div className="m-auto">{renderImageSet(block.imageSet)}</div>
            )}
            <div>
              <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
                {block.heading}
              </h3>
              <div className="space-y-8">
                {block.content.map((node, nodeIndex) =>
                  renderRichTextNode(node, nodeIndex)
                )}
              </div>
            </div>
            {block.imageRight && (
              <div className="m-auto">{renderImageSet(block.imageSet)}</div>
            )}
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
          <div className="flex flex-col gap-8 leading-loose text-neutral-600 dark:text-neutral-300">
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

const butcherBoxProject: ProjectContent = {
  title: "ButcherBox Internship",
  blurb: "My summer e-commerce internship.",
  href: "/butcherbox",
  cta: "read story",
  image: {
    src: "/butcherbox/butcherbox-ss.png",
    alt: "project thumbnail",
    width: 3248,
    height: 2112,
  },
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Last summer, I interned at ",
        },
        {
          type: "link",
          href: "https://www.butcherbox.com/",
          value: "ButcherBox",
        },
        {
          type: "text",
          value:
            ", a subscription-based meat delivery service that specializes in providing high-quality meat directly to customers' doors! As a Web Development Intern, I worked alongside one of their hybrid teams, pair-programming and participating in stand-ups, retro's, and more. This was my first internship. I got to learn so much!",
        },
      ],
    },
    {
      type: "ul",
      description: [
        {
          type: "text",
          value: "I did 3 main things:",
        },
      ],
      children: [
        {
          type: "li",
          children: [
            {
              type: "text",
              value: "Develop a content-authoring tool",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value:
                "Increase Datadog observability by adding RUM actions and dashboards",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value:
                "Refine UI components—and have fun issues with prefetching and responsiveness",
            },
          ],
        },
      ],
    },
  ],
  stack: ["React", "Contentful", "Datadog"],
  year: 2024,
  content: [
    {
      type: "image",
      imageSet: {
        src: "/butcherbox/butcherbox-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112,
      },
    },
    {
      type: "textLeft",
      heading: "Main Project",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "My main project had to do with our Content Management System, Contentful! We had a bunch of flexible but complex content templates that pained content authors each week. These templates allowed for a variety of configurations of headings, colors, links, and positioning. This gave great customization and standardization across our site! But, since Contentful is headless, by default we can't visualize what configurations are possible within our templates. We had to reference textual documentation in a tedious manner, wasting time and risking making mistakes or creating worse content designs.",
            },
          ],
        },
      ],
    },
    {
      type: "split",
      imageRight: false,
      imageSet: {
        src: "/butcherbox/visualize.svg",
        srcDark: "/butcherbox/visualize-dark.svg",
        alt: "Visualizing Content Templates",
        width: 1920,
        height: 1080,
      },
      heading: "Visualizing Content Templates",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Our solution was to create a visual web tool. Authors would use it to view all possible content configurations, filter for certain characteristics, and easily see what configurations are possible within our templates.",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      imageSet: {
        src: "/butcherbox/whats-in-the-box.png",
        alt: "what's in the box",
        width: 3248,
        height: 2112,
      },
    },
    {
      type: "textCenter",
      heading: "Development Process",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "We built this tool into an existing internal web app, extending its features. I referenced Figma mockups to create new routes and lay out the pages. One huge part of the project was generating all possible content permutations from our templates. I paired with an engineer and used test-driven development to cover all possible content permutations and detailed nuances. This required me to spend a ton of time in Contentful and gain a thorough understanding of our content model.",
            },
          ],
        },
      ],
    },
    {
      type: "split",
      imageRight: false,
      imageSet: {
        src: "/butcherbox/filter.svg",
        srcDark: "/butcherbox/filter-dark.svg",
        alt: "filtering",
        width: 1920,
        height: 1080,
      },
      heading: "Challenge: Filtering",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "A key feature was letting content authors filter for possible configurations, like having a background image and one heading. I found that such a simple feature like filtering can actually be hard to implement! You have to code the UI components, their state, and then the actual filtering code. You have to create clean, modular data structures to represent filter options, UI state, and the filters to apply. This was a surprising challenge but I really enjoyed working through it! I now have a greater appreciation for filters.",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      imageSet: {
        src: "/butcherbox/fish-smooch.png",
        alt: "fish smooch",
        width: 3248,
        height: 2112,
      },
    },
    {
      type: "textCenter",
      heading: "Impact",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "While developing this tool, we demo'd our progress in sprint reviews and the tool began to be used even during development! Overall, it helped content authors create great copywriting to help get high-quality meat to customers!",
            },
          ],
        },
      ],
    },
    {
      type: "textRightPadding",
      heading: "Learnings",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "I learned a ton about Contentful, Datadog, React Router, Storybook, and Jest. I dove deeper into the basics of Typescript, React, Git, and even Chrome Dev Tools for debugging.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "I was surprised how little time you spend actually writing code compared to reading code; having meetings; and writing tickets, PR's, and documentation. I loved practicing technical communication, planning for meetings, and presenting my work. I learned to break down PR's to make things easy for my team to review.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "I also learned a lot from pair-programming. I learned to write pseudocode, to discern what rabbit holes to pursue or leave, and to use test-driven development. I loved working in a real engineering environment and growing my hard and soft skills. I have a long way to go!",
            },
          ],
        },
      ],
    },
  ],
};

export default butcherBoxProject;
