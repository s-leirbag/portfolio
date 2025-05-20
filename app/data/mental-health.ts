import { Brain, Heart, Sun, User } from "lucide-react";
import { ProjectContent } from "../lib/content";

const mentalHealth: ProjectContent = {
  title: "Mental Health Mentor Matcher",
  blurb: "Using LLMs and leading my hackathon team.",
  href: "/mental-health",
  cta: "view project",
  image: {
    src: "/mental-health/mental-health-ss.png",
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
            "As a sophomore, I led a hackathon team of two freshmen to develop a mental health app!",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "International students can struggle to find proper mentorship for mental health. Our app pairs international students with suitable mentors by using ChatGPT to match based on cultural background.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "My two teammates were new to web development, so I gave them a crash course and guided them to build a prototype frontend. Meanwhile, I architected the backend with FastAPI and ChatGPT's API. FastAPI has awesome interactive API docs.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "We learned a ton and built a working, dockerized prototype to help international students!",
        },
      ],
    },
  ],
  stack: ["React", "Python", "FastAPI", "ChatGPT API", "Docker"],
  year: 2023,
  link: "https://github.com/s-leirbag/MentorNatio",
  linkCTA: "view repo",
  svgs: [Brain, Sun, Heart, User],
  content: [
    {
      type: "image",
      imageSet: {
        src: "/mental-health/mental-health-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112,
      },
    },
    {
      type: "image",
      imageSet: {
        src: "/mental-health/mental-health-matches-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112,
      },
    },
  ],
};

export default mentalHealth;
