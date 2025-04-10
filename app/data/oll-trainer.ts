import { ProjectContent } from "../lib/content";

const ollTrainerProject: ProjectContent = {
  title: "Rubik's Cube Trainer",
  blurb: "My first web project!",
  href: "/oll-trainer",
  cta: "view project",
  image: {
    src: "/oll-trainer/oll-trainer-ss.png",
    alt: "project thumbnail",
    width: 3248,
    height: 2112
  },
  description: [
    {
      type: "paragraph",
      children: [
        { type: "text", value: "work in progress...enjoy some lorum ipsum" }
      ]
    }
  ],
  stack: ["React", "Express", "Material UI"],
  year: 2022,
  link: "https://oll-trainer-s-leirbag.vercel.app/",
  linkCTA: "view site",
  content: [
    {
      type: "image",
      imageSet: {
        src: "/oll-trainer/oll-trainer-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112
      }
    },
    {
      type: "textLeft",
      heading: "Project Purpose",
      content: [
        {
          type: "paragraph",
          children: [
            { 
              type: "text", 
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra mus phasellus potenti hac. Class blandit gravida semper; pharetra amet nibh sem dis?" 
            }
          ]
        }
      ]
    },
    {
      type: "textCenter",
      heading: "Thought Process",
      content: [
        {
          type: "paragraph",
          children: [
            { 
              type: "text", 
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra mus phasellus potenti hac. Class blandit gravida semper; pharetra amet nibh sem dis?" 
            }
          ]
        }
      ]
    },
    {
      type: "split",
      imageRight: false,
      imageSet: {
        src: "/oll-trainer/oll-trainer-ss.png",
        alt: "project thumbnail",
        width: 3248,
        height: 2112
      },
      heading: "Problem",
      content: [
        {
          type: "paragraph",
          children: [
            { 
              type: "text", 
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra mus phasellus potenti hac. Class blandit gravida semper; pharetra amet nibh sem dis?" 
            }
          ]
        }
      ]
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
              value: "Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra mus phasellus potenti hac. Class blandit gravida semper; pharetra amet nibh sem dis?" 
            }
          ]
        }
      ]
    }
  ]
};

export default ollTrainerProject;