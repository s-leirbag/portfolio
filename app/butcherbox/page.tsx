import Image from "next/image";
import Link from "next/link";
import ContactMe from "../ui/ContactMe";
import ProjectCard from "../ui/ProjectCard";

export default function Page() {
  return (
    <div className="gradient-bg-100">
      <div className="gradient-bg-100">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:px-16 mx-auto pt-[calc(25vh)] gap-8 flex flex-col">
          <h1 className="text-5xl md:text-8xl py-0.5 rounded font-semibold bg-gradient-to-r from-sky-500 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
            ButcherBox Internship
          </h1>
          <div className="flex flex-col gap-8 leading-loose text-neutral-600 dark:text-neutral-300">
            <p>
              Last summer, I interned at{" "}
              <Link
                href={"https://www.butcherbox.com/"}
                className="hover:underline text-sky-500 hover:text-[#0ea5e9e6]"
                target="_blank"
                rel="noopener noreferrer"
              >
                ButcherBox
              </Link>
              , a subscription-based meat delivery service that specializes in
              providing high-quality meat directly to customers&apos; doors! As
              a Web Development Intern, I worked alongside one of their hybrid
              teams, pair-programming and participating in stand-ups,
              retro&apos;s, and more. This was my first internship. I got to
              learn so much!
            </p>
            <div>
              I did 3 main things:
              <ul className="list-disc list-inside pl-4">
                <li>Develop a content-authoring tool</li>
                <li>
                  Increase Datadog observability by adding RUM actions and
                  dashboards
                </li>
                <li>
                  Refine UI components—and have fun issues with prefetching and
                  responsiveness
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 gap-y-8 max-w-lg">
            <div className="space-y-2">
              <strong>Stack</strong>
              <p className="text-neutral-600 dark:text-neutral-300">React</p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Contentful
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">Datadog</p>
            </div>
            <div className="space-y-2">
              <strong>Year</strong>
              <p className="text-neutral-600 dark:text-neutral-300">2024</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:px-16 mx-auto gap-32 mb-32 flex flex-col">
        <Image
          src="/butcherbox/butcherbox-ss.png"
          alt="project thumbnail"
          width={3248}
          height={2112}
          priority
        />
        <div>
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Main Project
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            My main project had to do with our Content Management System,
            Contentful! We had a bunch of flexible but complex content templates
            that pained content authors each week. These templates allowed for a
            variety of configurations of headings, colors, links, and
            positioning. This gave great customization and standardization
            across our site! But, since Contentful is headless, by default we
            can&apos;t visualize what configurations are possible within our
            templates. We had to reference textual documentation in a tedious
            manner, wasting time and risking making mistakes or creating worse
            content designs.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <div className="m-auto">
            <Image
              src="/butcherbox/visualize.svg"
              alt="Visualizing Content Templates"
              width={1920}
              height={1080}
              className="dark:hidden"
            />
            <Image
              src="/butcherbox/visualize-dark.svg"
              alt="Visualizing Content Templates"
              width={1920}
              height={1080}
              className="hidden dark:inline-block"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Visualizing Content Templates
            </h3>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              Our solution was to create a visual web tool. Authors would use it
              to view all possible content configurations, filter for certain
              characteristics, and easily see what configurations are possible
              within our templates.
            </p>
          </div>
        </div>
        <Image
          src="/butcherbox/whats-in-the-box.png"
          alt="what's in the box"
          width={3248}
          height={2112}
        />
        <div className="text-center lg:px-32">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Development Process
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            We built this tool into an existing internal web app, extending its
            features. I referenced Figma mockups to create new routes and lay
            out the pages. One huge part of the project was generating all
            possible content permutations from our templates. I paired with an
            engineer and used test-driven development to cover all possible
            content permutations and detailed nuances. This required me to spend
            a ton of time in Contentful and gain a thorough understanding of our
            content model.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <div className="m-auto">
            <Image
              src="/butcherbox/filter.svg"
              alt="filtering"
              width={1920}
              height={1080}
              className="dark:hidden"
            />
            <Image
              src="/butcherbox/filter-dark.svg"
              alt="filtering"
              width={1920}
              height={1080}
              className="hidden dark:inline-block"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Challenge: Filtering
            </h3>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              A key feature was letting content authors filter for possible
              configurations, like having a background image and one heading. I
              found that such a simple feature like filtering can actually be
              hard to implement! You have to code the UI components, their
              state, and then the actual filtering code. You have to create
              clean, modular data structures to represent filter options, UI
              state, and the filters to apply. This was a surprising challenge
              but I really enjoyed working through it! I now have a greater
              appreciation for filters.
            </p>
          </div>
        </div>
        <Image
          src="/butcherbox/fish-smooch.png"
          alt="fish smooch"
          width={3248}
          height={2112}
        />
        <div className="text-center lg:px-32">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Impact
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            While developing this tool, we demo&apos;d our progress in sprint
            reviews and the tool began to be used even during development!
            Overall, it helped content authors create great copywriting to help
            get high-quality meat to customers!
          </p>
        </div>
        <div className="lg:pr-64">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Learnings
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            I learned a ton about Contentful, Datadog, React Router, Storybook,
            and Jest. I dove deeper into the basics of Typescript, React, Git,
            and even Chrome Dev Tools for debugging.
            <br />
            <br />
            I was surprised how little time you spend actually writing code
            compared to reading code; having meetings; and writing tickets,
            PR&apos;s, and documentation. I loved practicing technical
            communication, planning for meetings, and presenting my work. I
            learned to break down PR&apos;s to make things easy for my team to
            review.
            <br />
            <br />I also learned a lot from pair-programming. I learned to write
            pseudocode, to discern what rabbit holes to pursue or leave, and to
            use test-driven development. I loved working in a real engineering
            environment and growing my hard and soft skills. I have a long way
            to go!
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
          <ProjectCard
            title="Citizens Bank Internship"
            desc="My time as an intern at Citizens Bank."
            href="/citizens"
            cta="read story"
            imageSrc="/citizens/citizens-ss.jpeg"
            imageWidth={4096}
            imageHeight={1777}
          />
          <ProjectCard
            title="Rubiks Cube Trainer"
            desc="My first web project!"
            href="/oll-trainer"
            cta="view project"
            imageSrc="/oll-trainer/oll-trainer-ss.png"
            imageWidth={3248}
            imageHeight={2112}
          />
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
