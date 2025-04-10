import { ProjectContent } from "../lib/content";

const citizensProject: ProjectContent = {
  title: "Citizens Bank Internship",
  blurb: "My time as an intern at Citizens Bank.",
  href: "/citizens",
  cta: "read story",
  image: {
    src: "/citizens/citizens-ss.jpeg",
    alt: "project thumbnail",
    width: 4096,
    height: 1777,
  },
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "Last fall, I interned at ",
        },
        {
          type: "link",
          href: "https://www.citizensbank.com/",
          value: "Citizens Bank",
        },
        {
          type: "text",
          value:
            " for my WPI graduation capstone! I led a hybrid team of 5 interns from WPI—3 developers, 1 data scientist, and 1 business analyst. We worked alongside an existing Citizens team for 8 weeks. We were guided by their managers, but we ran our own sprints.",
        },
      ],
    },
    {
      type: "ul",
      description: [
        {
          type: "text",
          value: "We did 3 main things:",
        },
      ],
      children: [
        {
          type: "li",
          children: [
            {
              type: "text",
              value:
                "Fabricate a dashboard to streamline customer support for open banking customers",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value:
                "Automate realtime customer analytics into Datadog from a Postgres database",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value:
                "Build a preparatory project with React, Java/Spring Boot, and OAuth to gain familiarity with the Citizens Bank tech stack",
            },
          ],
        },
      ],
    },
  ],
  stack: [
    "React",
    "Postgres",
    "Express.js",
    "Tailwind.css",
    "Turborepo",
    "Datadog",
  ],
  year: 2024,
  content: [
    {
      type: "image",
      imageSet: {
        src: "/citizens/citizens-ss.jpeg",
        alt: "citizens thumbnail",
        width: 4096,
        height: 1777,
      },
    },
    {
      type: "imageAboveTextLeft",
      imageSet: {
        src: "/citizens/open-banking.jpeg",
        alt: "open banking diagram",
        width: 1366,
        height: 768,
      },
      heading: "Open Banking Context",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Citizens Bank was migrating customers to their open banking API's. Open banking is the transparent sharing of a customer's financial information, usually to let them connect their bank accounts to third-party fintech apps. If you've ever used Venmo, Chime, or Robinhood, you've used open banking!",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "In open banking, banks must develop ",
            },
            {
              type: "link",
              href: "https://financialdataexchange.org/",
              value: "standardized API's",
            },
            {
              type: "text",
              value:
                " and OAuth flows to make customer info available to fintech apps. Supporting open banking is crucial to stay relevant in a modernizing financial landscape.",
            },
          ],
        },
      ],
    },
    {
      type: "split",
      imageRight: false,
      imageSet: {
        src: "/citizens/streamline.svg",
        srcDark: "/citizens/streamline-dark.svg",
        alt: "streamlining icon",
        width: 1920,
        height: 1080,
      },
      heading: "Main Project: Streamline Customer Support",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Many Citizens customers had problems, like bank accounts not showing up in Chime or their OAuth consent flow glitching. Citizens had no ideal tools to debug a customer's open banking configurations, but rather a tedious process spanning different departments. Our solution was to create a dashboard to aggregate a customer's info, accounts, and fintech configurations in one place, to speed up customer support.",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      imageSet: {
        src: "/citizens/accounts.jpg",
        alt: "accounts page screenshot",
        width: 2358,
        height: 966,
      },
    },
    {
      type: "textCenter",
      heading: "Using Agile",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "We employed agile methodologies by doing regular stand-ups, planning, demo's, retro's, etc. Our team met regularly with our stakeholders to discern direction and demo our progress. Retrospectives were super helpful—we made key changes like setting sprint goals, moving from remote to hybrid, and starting code reviews. We used Bitbucket, Jira, Teams, and pair-programming.",
            },
          ],
        },
      ],
    },
    {
      type: "split",
      imageRight: true,
      imageSet: {
        src: "/citizens/figma-iterations.png",
        alt: "figma iterations",
        width: 1920,
        height: 1920,
      },
      heading: "Leadership & Iterative Design",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "We made initial Figma mockups for our dashboard, but they later lagged behind our evolving specifications. So, I initiated a discussion on UI. We brainstormed new layouts and settled on a final design. I learned to use Figma's frames, auto layout, components, and scroll behavior. Figma is awesome!",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Leadership is dynamic. It wasn't my explicit responsibility to lead the team in UI, but I saw the need and stepped up. I led throughout the project, running meetings and tracking key features. I have a passion for understanding the larger context behind my work. I used that to drive our design and feature decisions to provide true value to Citizens!",
            },
          ],
        },
      ],
    },
    {
      type: "imageAboveTextLeft",
      imageSet: {
        src: "/citizens/architecture.svg",
        alt: "architecture",
        width: 800,
        height: 450,
      },  
      heading: "Architecture",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Our dashboard aggregated customer information. An employee can input a customer's ID, then view their fintech apps, accounts, and information to debug any issues.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Our backend obtained customer info from internal mainframe API's. We also queried a Postgres database that stored a user's history of app integrations. We used Postman to test the Citizens mainframe and our own endpoints.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "We integrated the info on a frontend of React Router/React Query/Shadcn/Tailwind. We used React Router as a declarative routing library. I learned to set up index routes and route parameters. I also implemented route validation and redirects for customer ID's. This was challenging but satisfying! Shadcn's built-in accessibility and easy customization was super nice. Turborepo worked great too!",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      imageSet: {
        src: "/citizens/apps.jpg",
        alt: "apps page screenshot",
        width: 2358,
        height: 1010,
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
                "Our dashboard simplified customer support, retaining and attracting Citizens Bank customers. We handed off our dashboard to the Citizens team for future iterations and use. We also automated analytics on Citizens' open banking customers, posting statistics into Datadog for better market insights. Our team helped Citizens stay cutting-edge in an evolving, modernizing financial world.",
            },
          ],
        },
      ],
    },
    {
      type: "textRightPadding",
      heading: "Learnings: Working at a Bank",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "Aside from learning a ton about software and leadership, I also learned what it's like to work at a bank!",
            },
          ],
        },
        {
          type: "ul",
          description: [
            {
              type: "text",
              value: "I noticed a few things:",
            },
          ],
          children: [
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "We used older, reliable software versions",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "We could not access production data",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value:
                    "Test data was unrealistic and unrepresentative (kind of frustrating)",
                },
              ],
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value:
                "We initially wanted to do a deep analysis on our open banking customers to get insights into revenue opportunities. But, we faced the limitations above, in addition to performance and scope limitations.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Overall, I learned a ton and am excited to grow more!",
            },
          ],
        },
      ],
    },
  ],
};

export default citizensProject;
