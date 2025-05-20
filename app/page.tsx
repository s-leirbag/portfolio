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
import Socials from "./ui/Socials";

export default function Home() {
  return (
    <main id="main-content" className="relative overflow-hidden">
      <div className="w-full lg:max-w-[1280px] m-auto">
        <section className="relative py-16 pt-24 px-4 md:px-16 flex flex-col justify-center gap-8 min-h-screen">
          <SvgCollage
            x={"25vw"}
            y={"40vh"}
            count={10}
            size={128}
            svgs={[Cpu, Binary, Laptop, SquareTerminal]}
          />
          <div className="absolute inset-0 -z-20 bg-texture-dots" />
          <div className="w-full flex flex-col md:flex-row gap-4 md:gap-12">
            <Image
              className="rounded-2xl lg:w-64 lg:h-64 w-48 h-full md:order-1"
              src="/professional_photo.jpeg"
              alt="A smiling developer...before he returns to debugging"
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
              <Socials />
            </div>
          </div>
          <ScrollButton />
        </section>
        <section className="relative">
          <SvgCollage
            x={"-40vw"}
            y={"5vh"}
            count={15}
            size={128}
            svgs={[Cog, Wrench, Laptop, SquareTerminal, Bug, Database]}
            className="transition-opacity duration-300 opacity-0 lg:opacity-10"
          />
          <div className="px-4 md:mx-auto max-w-2xl">
            <h2 className="text-5xl lg:text-6xl py-0.5 pt-16 font-semibold">
              Work
            </h2>
            <p className="text-neutral-600 dark:text-neutral-300">
              I learn by doing! Take a look at some of my past and ongoing
              projects.
            </p>
          </div>
          <div className="pt-8 pb-16 px-4 md:p-16 grid grid-cols-[repeat(auto-fit,minmax(min(18.75rem,100%),1fr))] gap-4 md:gap-8">
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
        </section>
        <ContactMe />
      </div>
    </main>
  );
}
