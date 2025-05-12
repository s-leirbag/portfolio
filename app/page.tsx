import {
  Binary,
  Bug,
  Cog,
  Cpu,
  Database,
  Laptop,
  SquareTerminal,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { projects } from "./data/projects";
import SvgCollage from "./SvgCollage";
import ContactMe from "./ui/ContactMe";
import ProjectCard from "./ui/ProjectCard";
import ScrollButton from "./ui/ScrollButton";

export default function Home() {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="w-full lg:max-w-[1280px] m-auto">
        <div className="relative py-16 pt-24 px-4 md:px-16 flex flex-col justify-center gap-8 min-h-screen">
          <div className="absolute inset-0 -z-20 translate-x-[25vw] translate-y-[40vh] opacity-10">
            <SvgCollage
              count={10}
              size={128}
              className="w-full h-full"
              svgs={[
                <Cpu size={128} key="cpu" />,
                <Binary size={128} key="binary" />,
                <Laptop size={128} key="laptop" />,
                <SquareTerminal size={128} key="squareterminal" />,
              ]}
            />
          </div>
          <div className="absolute inset-0 -z-20 bg-texture-dots" />
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-12">
            <Image
              className="rounded-2xl lg:w-64 lg:h-64 w-48 h-full md:order-1"
              src="/professional_photo.jpeg"
              alt="portrait photo"
              width={2344}
              height={2344}
              priority
            />
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-5xl md:text-7xl lg:text-8xl py-0.5 font-semibold bg-gradient-to-r from-sky-600 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
                Gabriel Shiu
              </h1>
              <p className="leading-relaxed text-neutral-600 dark:text-neutral-300">
                I&apos;m a lifelong learner and teacher, passionate about
                growing as a software engineer and helping my peers along the
                way!
                <br />
                <br />
                Over the past year, I&apos;ve interned at ButcherBox and
                Citizens Bank, and have continued learning through personal
                projects. I plan to enter industry in 2025—I am excited to build
                innovative software and inspire others!
              </p>
              <div className="flex flex-row">
                <a
                  href="https://www.linkedin.com/in/gabriel-d-shiu/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-2 pr-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-linkedin"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a
                  href="https://github.com/s-leirbag"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-github"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <ScrollButton />
        </div>
        <div className="relative">
          <div className="absolute inset-0 -z-20 -translate-x-[40vw] translate-y-[5vh] transition-opacity duration-300 opacity-0 lg:opacity-10 ">
            <SvgCollage
              count={15}
              size={128}
              className="w-full h-full"
              svgs={[
                <Cog size={128} key="cog" />,
                <Wrench size={128} key="wrench" />,
                <Laptop size={128} key="laptop" />,
                <SquareTerminal size={128} key="squareterminal" />,
                <Bug size={128} key="bug" />,
                <Database size={128} key="database" />,
              ]}
            />
          </div>
          <div className="px-4 md:mx-auto max-w-2xl">
            <h2 className="text-5xl lg:text-6xl py-0.5 pt-16 font-semibold">
              Work
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              I learn by doing! Take a look at some of my past and ongoing
              projects.
            </p>
          </div>
          <div className="pt-8 pb-16 px-4 md:p-16 grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-4 md:gap-8">
            {projects.map((p, i) => (
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
        </div>
        <ContactMe />
      </div>
    </div>
  );
}
