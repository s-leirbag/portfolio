import Image from "next/image";
import Link from "next/link";
import ContactMe from "../ui/ContactMe";

export default function Page() {
  return (
    <div className="gradient-bg-100">
      <div className="gradient-bg-100">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:px-16 mx-auto pt-[calc(25vh)] gap-8 flex flex-col">
          <h1 className="text-5xl md:text-8xl py-0.5 rounded font-semibold bg-gradient-to-r from-sky-500 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
            {"Rubik's"} Cube Trainer
          </h1>
          <p>
            work in progress...
            <br />
            <Link
              href={"https://github.com/s-leirbag/portfolio"}
              className="hover:underline text-sky-500"
            >
              https://github.com/s-leirbag/portfolio
            </Link>
          </p>
          <div className="pt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 gap-y-8 max-w-lg">
            <div className="space-y-2">
              <strong>Stack</strong>
              <p>React</p>
              <p>Express</p>
              <p>Material UI</p>
            </div>
            <div className="space-y-2">
              <strong>Year</strong>
              <p>2022</p>
            </div>
            <div className="space-y-2">
              <strong>Link</strong>
              <Link
                href={"https://oll-trainer-s-leirbag.vercel.app/"}
                className="block w-fit rounded-lg bg-sky-500 hover:bg-[#0ea5e9e6] text-neutral-50 py-4 px-4 sm:px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                view site {"->"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:px-16 mx-auto gap-32 mb-32 flex flex-col">
        <Image
          src="/oll-trainer/oll-trainer-ss.png"
          alt="project thumbnail"
          width={3248}
          height={2112}
          priority
        />
        <div>
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Project Purpose
          </h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
            mus phasellus potenti hac. Class blandit gravida semper; pharetra
            amet nibh sem dis?
          </p>
        </div>
        <div className="text-center lg:px-32">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Thought Process
          </h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
            mus phasellus potenti hac. Class blandit gravida semper; pharetra
            amet nibh sem dis?
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <div className="m-auto">
            <Image
              src="/oll-trainer/oll-trainer-ss.png"
              alt="project thumbnail"
              width={3248}
              height={2112}
              priority
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Problem
            </h3>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
              mus phasellus potenti hac. Class blandit gravida semper; pharetra
              amet nibh sem dis?
            </p>
          </div>
        </div>
        <div className="lg:pr-64">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Learnings
          </h3>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
            mus phasellus potenti hac. Class blandit gravida semper; pharetra
            amet nibh sem dis?
          </p>
        </div>
      </div>
      <div className="gradient-bg-100">
        <div className="w-full sm:w-[640px] lg:w-[768px] px-8 sm:px-16 m-auto">
          <h2 className="text-3xl md:text-6xl py-0.5 pt-16 rounded font-semibold text-shadow-50px">
            Other Work
          </h2>
          <p className="text-shadow-20px leading-loose text-neutral-600 dark:text-neutral-300">
            I learn by doing! Take a look at some of my past and ongoing
            projects.
          </p>
        </div>
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] pt-8 pb-16 px-8 md:p-16 mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <Link
            href={"/butcherbox"}
            className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
          >
            <h3 className="text-xl md:text-3xl font-semibold">
              ButcherBox Internship
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              My summer e-commerce internship.
            </p>
            <p className="font-medium hover:underline">read story {"->"}</p>
            <div className="flex-1 flex">
              <Image
                src="/butcherbox/butcherbox-ss.png"
                alt="project thumbnail"
                width={3248}
                height={2112}
                priority
              />
            </div>
          </Link>
          <Link
            href={"/citizens"}
            className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
          >
            <h3 className="text-xl md:text-3xl font-semibold">
              Citizens Bank Internship
            </h3>
            <p className="text-neutral-600 dark:text-neutral-300">
              My time as an intern at Citizens Bank.
            </p>
            <p className="font-medium hover:underline">read story {"->"}</p>
            <div className="flex-1 flex">
              <Image
                src="/citizens/citizens-ss.jpeg"
                alt="project thumbnail"
                width={4096}
                height={1777}
                className="m-auto"
              />
            </div>
          </Link>
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
