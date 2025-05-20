import { Beef, ChefHat, Drumstick, Fish, Ham, Utensils } from "lucide-react";
import { ProjectContent } from "../lib/content";

const butcherbox: ProjectContent = {
  title: "ButcherBox Internship",
  blurb: "My summer e-commerce internship.",
  href: "butcherbox",
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
  svgs: [Beef, ChefHat, Fish, Drumstick, Ham, Utensils],
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

export default butcherbox;
