import { ProjectContent } from "../lib/content";

const rubiks: ProjectContent = {
  title: "Rubik's Cube Trainer",
  blurb: "My first web project!",
  href: "/rubiks",
  cta: "view project",
  image: {
    src: "/rubiks/oll-trainer-ss.png",
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
          value:
            "I made a speedcubing website to learn React! I based it on Roman Strakhov's ",
        },
        {
          type: "link",
          href: "https://bestsiteever.net/oll/",
          value: "OLL Trainer",
        },
        {
          type: "text",
          value:
            ", except he used pure JS/CSS and I used React and Material UI. I wanted to have a manageable website I could copy with React to gain experience.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "The user picks algorithms to learn. Then, the site gives them scrambles, times them, and stores their times. I also added customizable UI and easter eggs!",
        },
      ],
    },
  ],
  stack: ["React", "Express", "Material UI"],
  year: 2022,
  link: "https://oll-trainer-s-leirbag.vercel.app/",
  linkCTA: "view site",
  content: [
    {
      type: "image",
      imageSet: {
        src: "/rubiks/oll-trainer-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112,
      },
    },
  ],
};

export default rubiks;
