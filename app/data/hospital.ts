import { ProjectContent } from "../lib/content";

const hospitalProject: ProjectContent = {
  title: "Brigham & Women's Hospital Application",
  blurb: "Leading an 11-person agile project.",
  href: "/hospital",
  cta: "view project",
  image: {
    src: "/hospital/path.png",
    alt: "project thumbnail",
    width: 1920,
    height: 1080,
  },
  description: [
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value: "I led a team of 11 students in WPI's CS-3733 Software Engineering course. We built a theoretical kiosk application for Brigham & Women's Hospital. I used my previous web skills to lead the team as an Assistant Lead Developer, mentoring younger engineers and guiding decisions. We simulated a modern software team, with front-end and back-end developers, a scrum master, PM, PO, and leads! I worked on all parts of the codebase but focused on the front-end.",
        },
      ],
    },
    {
      type: "ul",
      description: [
        {
          type: "text",
          value: "Core features:",
        },
      ],
      children: [
        {
          type: "li",
          children: [
            {
              type: "text",
              value: "Hospital map navigation with a Voice AI assistant and on-the-go mobile directions",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value: "Request services to specific rooms",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value: "Admin and employee login with OAuth through Auth0",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value: "Employee management",
            },
          ],
        },
        {
          type: "li",
          children: [
            {
              type: "text",
              value: "Responsive design",
            },
          ],
        },
      ],
    },
  ],
  stack: ["React", "Prisma/Postgres", "TypeScript", "Turborepo", "Docker", "AWS"],
  year: 2024,
  content: [
    {
      type: "image",
      imageSet: {
        src: "/hospital/path.png",
        alt: "project thumbnail",
        width: 1920,
        height: 1080,
      },
    },
    {
      type: "textLeft",
      heading: "Goal: Modernize Hospital Management",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Hospitals need to run quickly and smoothly to save lives. But, they are extremely complex to manage. We architected a prototype hospital management app for Brigham & Women's Hospital. The app would theoretically run on kiosks placed throughout the hospital. It guides visitors through the huge building and helps employees request services and manage staff.",
            },
          ],
        },
      ],
    },
    {
      type: "imageAboveTextLeft",
      imageSet: {
        src: "/hospital/directions-text-and-mobile.png",
        alt: "hospital map with navigation directions",
        width: 1920,
        height: 1080,
      },
      heading: "Simplifying Hospital Navigation",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Our app streamlined hospital navigation. It displays a map of each floor with interactive nodes for different rooms. Users can automatically generate optimized, visual paths between rooms. They also get a textual list of directions and can scan a QR code to take the directions on-the-go on their phone!",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "The graph was loaded into our Postgres database from CSV data. We used the Canvas API to render the map. This was very complex! I connected the Canvas API with React for buttons and state. We implemented various pathfinding algorithms like A* and Dijkstra's, using the Strategy design pattern for clean code.",
            },
          ],
        },
      ],
    },
    {
      type: "imageAboveTextLeft",
      imageSet: {
        src: "/hospital/service-request-creation.png",
        alt: "service request creation",
        width: 1920,
        height: 1080,
      },
      heading: "Service Requests",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "We integrated jobs into the map. Staff can request services like sanitation, transport, and language interpretation to specific rooms. They can request specific employees and give details.",
            },
          ],
        },
      ],
    },
    {
      type: "imageAboveTextLeft",
      imageSet: {
        src: "/hospital/service-request-admin-view.png",
        alt: "list of service requests from a hospital admin's view",
        width: 1920,
        height: 1080,
      },
      heading: "Handling Service Requests",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Employees can log into the kiosk using OAuth with Auth0. They can view their assigned service requests and mark them completed. Hospital admins can log in and view requests for all employees and filter accordingly.",
            },
          ],
        },
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "I did a lot of the login management, showing the appropriate pages and information based on the employee. I paired with a newer teammate and mentored him to eventually flesh out the authentication features on his own! I also did a lot of the request displaying, filtering, and data management. This was my first big experience working with authentication and databases and I learned a lot!",
            },
          ],
        },
      ],
    },
    {
      type: "imageAboveTextLeft",
      imageSet: {
        src: "/hospital/ok-tommy-ai.png",
        alt: "voice AI assistant",
        width: 1894,
        height: 1011,
      },
      heading: "More Features",
      content: [
        {
          type: "ul",
          description: [
            {
              type: "text",
              value: "We implemented many other features, including:",
            },
          ],
          children: [
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "View and edit tables for service requests, employees, map nodes/edges",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "OAuth/Auth0 login for admin and staff. Admin add/edit staff.",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "Voice AI Assistant, \"Ok Tommy\" (our Scrum Master <3), to interact with the map and pages using React Speech Kit",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "AWS deployment",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "Scrolling announcements",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "Realtime charts with Reaviz for service request completion statistics",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "CSV tables import/export",
                },
              ],
            },
            {
              type: "li",
              children: [
                {
                  type: "text",
                  value: "Various easter eggs...",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      type: "imageAboveTextCenter",
      imageSet: {
        src: "/hospital/figma-all.png",
        alt: "placeholder",
        width: 3248,
        height: 2112,
      },
      heading: "Styling",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "Styling was a total mess! We struggled to coordinate across all 11 people, and none of us had prior Figma experience. But as we progressed, we iterated on Figma mockups, helping create consistency. I mentored an engineer who wanted to learn more about CSS, and we renovated some pages. He went on to re-work much of our team's CSS!",
            },
          ],
        },
      ],
    },
    {
      type: "split",
      imageRight: false,
      imageSet: {
        src: "/hospital/responsiveness.png",
        alt: "placeholder",
        width: 1920,
        height: 1920,
      },
      heading: "Responsiveness",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "We made our app responsive for different dimensions! This was quite difficult due to busy UI on the map and having an unconventional layout with a context menu.",
            },
          ],
        },
      ],
    },
    {
      type: "image",
      imageSet: {
        src: "/hospital/about.png",
        alt: "placeholder",
        width: 1920,
        height: 1080,
      },
    },
    {
      type: "textCenter",
      heading: "Team Dynamics",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "todo...",
            },
          ],
        },
      ],
    },
    {
      type: "split",
      imageRight: false,
      imageSet: {
        src: "/hospital/team-photo.jpeg",
        alt: "placeholder",
        width: 3462,
        height: 3072,
      },
      heading: "Learnings",
      content: [
        {
          type: "paragraph",
          children: [
            {
              type: "text",
              value: "todo...",
            },
          ],
        },
      ],
    },
  ],
};

export default hospitalProject;