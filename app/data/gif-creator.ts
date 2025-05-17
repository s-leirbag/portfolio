import {
  Brush,
  Pencil,
  Smile,
  Sparkles,
  Sticker
} from "lucide-react";
import { ProjectContent } from "../lib/content";

const gifCreator: ProjectContent = {
  title: "GIF Creator",
  blurb: "Building a funny GIF maker for my friend.",
  href: "/gif-creator",
  cta: "view project",
  image: {
    src: "/gif-creator/gif-creator-ss.png",
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
            "I made a GIF creation site to easily photoshop my friend's face into funny GIFs! This was my first time designing and developing a full-stack application. I faced many painful bugs and the UI still has room for improvement, but I learned a ton in the process.",
        },
      ],
    },
    {
      type: "paragraph",
      children: [
        {
          type: "text",
          value:
            "Users can upload a face, choose a GIF, and adjust the face's position on each frame. It was a fun challenge to build what's essentially a lightweight image editor nearly from scratch. I integrated an in-app tutorial and GIF templates for easy usage!",
        },
      ],
    },
  ],
  stack: [
    "React",
    "Express",
    "Material UI",
    "Sharp Image Processing",
    "Multer",
  ],
  year: 2023,
  link: "https://gif-editor.onrender.com/",
  linkCTA: "view site",
  svgs: [Smile, Sticker, Pencil, Brush, Sparkles],
  content: [
    {
      type: "image",
      imageSet: {
        src: "/gif-creator/gif-creator-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112,
      },
    },
  ],
};

export default gifCreator;
