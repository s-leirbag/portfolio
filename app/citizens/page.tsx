import Image from "next/image";
import Link from "next/link";
import ContactMe from "../ui/ContactMe";
import ProjectCard from "../ui/ProjectCard";

export default function Page() {
  return (
    <div className="gradient-bg-100">
      <div className="gradient-bg-100">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-4 md:px-16 mx-auto pt-[calc(25vh)] gap-8 flex flex-col">
          <h1 className="text-5xl md:text-8xl py-0.5 rounded font-semibold bg-gradient-to-r from-sky-500 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
            Citizens Bank Internship
          </h1>
          <div className="flex flex-col gap-8 leading-loose text-neutral-600 dark:text-neutral-300">
            <p>
              Last fall, I interned at{" "}
              <Link
                href={"https://www.citizensbank.com/"}
                className="hover:underline text-sky-500 hover:text-[#0ea5e9e6]"
                target="_blank"
                rel="noopener noreferrer"
              >
                Citizens Bank
              </Link>{" "}
              for my WPI graduation capstone! I led a hybrid team of 5 interns
              from WPI—3 developers, 1 data scientist, and 1 business analyst.
              We worked alongside an existing Citizens team for 8 weeks. We were
              guided by their managers, but we ran our own sprints.
            </p>
            <div>
              We did 3 main things:
              <ul className="list-disc list-inside pl-4">
                <li>
                  Fabricate a dashboard to streamline customer support for open
                  banking customers
                </li>
                <li>
                  Automate realtime customer analytics into Datadog from a
                  Postgres database
                </li>
                <li>
                  Build a preparatory project with React, Java/Spring Boot, and
                  OAuth to gain familiarity with the Citizens Bank tech stack
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 gap-y-8 max-w-lg">
            <div className="space-y-2">
              <strong>Stack</strong>
              <p className="text-neutral-600 dark:text-neutral-300">React</p>
              <p className="text-neutral-600 dark:text-neutral-300">Postgres</p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Express.js
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Tailwind.css
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Turborepo
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
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-4 md:px-16 mx-auto gap-32 mb-32 flex flex-col">
        <Image
          src="/citizens/citizens-ss.jpeg"
          alt="citizens thumbnail"
          width={4096}
          height={1777}
          priority
        />
        <Image
          src="/citizens/open-banking.jpeg"
          alt="open banking diagram"
          width={1366}
          height={768}
        />
        <div>
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Open Banking Context
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            Citizens Bank was migrating customers to their open banking
            API&apos;s. Open banking is the transparent sharing of a
            customer&apos;s financial information, usually to let them connect
            their bank accounts to third-party fintech apps. If you&apos;ve ever
            used Venmo, Chime, or Robinhood, you&apos;ve used open banking!
            <br />
            <br />
            In open banking, banks must develop{" "}
            <Link
              href={"https://financialdataexchange.org/"}
              className="hover:underline text-sky-500 hover:text-[#0ea5e9e6]"
              target="_blank"
              rel="noopener noreferrer"
            >
              standardized API&apos;s
            </Link>{" "}
            and OAuth flows to make customer info available to fintech apps.
            Supporting open banking is crucial to stay relevant in a modernizing
            financial landscape.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <div className="m-auto">
            <Image
              src="/citizens/streamline.svg"
              alt="streamlining icon"
              width={1920}
              height={1080}
              className="dark:hidden"
            />
            <Image
              src="/citizens/streamline-dark.svg"
              alt="streamlining icon"
              width={1920}
              height={1080}
              className="hidden dark:inline-block"
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Main Project: Streamline Customer Support
            </h3>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              Many Citizens customers had problems, like bank accounts not
              showing up in Chime or their OAuth consent flow glitching.
              Citizens had no ideal tools to debug a customer&apos;s open
              banking configurations, but rather a tedious process spanning
              different departments. Our solution was to create a dashboard to
              aggregate a customer&apos;s info, accounts, and fintech
              configurations in one place, to speed up customer support.
            </p>
          </div>
        </div>
        <Image
          src="/citizens/accounts.jpg"
          alt="accounts page screenshot"
          width={2358}
          height={966}
        />
        <div className="text-center lg:px-32">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Using Agile
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            We employed agile methodologies by doing regular stand-ups,
            planning, demo&apos;s, retro&apos;s, etc. Our team met regularly
            with our stakeholders to discern direction and demo our progress.
            Retrospectives were super helpful—we made key changes like setting
            sprint goals, moving from remote to hybrid, and starting code
            reviews. We used Bitbucket, Jira, Teams, and pair-programming.
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <div className="m-auto">
            <Image
              src="/citizens/figma-iterations.png"
              alt="figma iterations"
              width={1920}
              height={1920}
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Leadership & Iterative Design
            </h3>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              We made initial Figma mockups for our dashboard, but they later
              lagged behind our evolving specifications. So, I initiated a
              discussion on UI. We brainstormed new layouts and settled on a
              final design. I learned to use Figma&apos;s frames, auto layout,
              components, and scroll behavior. Figma is awesome!
              <br />
              <br />
              Leadership is dynamic. It wasn&apos;t my explicit responsibility
              to lead the team in UI, but I saw the need and stepped up. I led
              throughout the project, running meetings and tracking key
              features. I have a passion for understanding the larger context
              behind my work. I used that to drive our design and feature
              decisions to provide true value to Citizens!
            </p>
          </div>
        </div>
        <Image
          src="/citizens/architecture.svg"
          alt="architecture"
          width={800}
          height={450}
        />
        <div>
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Architecture
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            Our dashboard aggregated customer information. An employee can input
            a customer&apos;s ID, then view their fintech apps, accounts, and
            information to debug any issues.
            <br />
            <br />
            Our backend obtained customer info from internal mainframe
            API&apos;s. We also queried a Postgres database that stored a
            user&apos;s history of app integrations. We used Postman to test the
            Citizens mainframe and our own endpoints.
            <br />
            <br />
            We integrated the info on a frontend of React Router/React
            Query/Shadcn/Tailwind. We used React Router as a declarative routing
            library. I learned to set up index routes and route parameters. I
            also implemented route validation and redirects for customer
            ID&apos;s. This was challenging but satisfying! Shadcn&apos;s
            built-in accessibility and easy customization was super nice.
            Turborepo worked great too!
          </p>
        </div>
        <Image
          src="/citizens/apps.jpg"
          alt="apps page screenshot"
          width={2358}
          height={1010}
        />
        <div className="text-center lg:px-32">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Impact
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            Our dashboard simplified customer support, retaining and attracting
            Citizens Bank customers. We handed off our dashboard to the Citizens
            team for future iterations and use. We also automated analytics on
            Citizens&apos; open banking customers, posting statistics into
            Datadog for better market insights. Our team helped Citizens stay
            cutting-edge in an evolving, modernizing financial world.
          </p>
        </div>
        <div className="lg:pr-64">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Learnings: Working at a Bank
          </h3>
          <div className="leading-loose text-neutral-600 dark:text-neutral-300">
            Aside from learning a ton about software and leadership, I also
            learned what it&apos;s like to work at a bank!
            <br />
            <br />I noticed a few things:
            <ul className="list-disc list-inside pl-4">
              <li>We used older, reliable software versions</li>
              <li>We could not access production data</li>
              <li>
                Test data was unrealistic and unrepresentative (kind of
                frustrating)
              </li>
            </ul>
            <br />
            We initially wanted to do a deep analysis on our open banking
            customers to get insights into revenue opportunities. But, we faced
            the limitations above, in addition to performance and scope
            limitations.
            <br />
            <br />
            Overall, I learned a ton and am excited to grow more!
          </div>
        </div>
      </div>
      <div className="gradient-bg-100">
        <div className="w-full sm:w-[640px] lg:w-[768px] px-4 sm:px-16 m-auto">
          <h2 className="text-3xl md:text-6xl py-0.5 rounded font-semibold text-shadow-50px">
            Other Work
          </h2>
          <p className="text-shadow-20px leading-loose text-neutral-600 dark:text-neutral-300">
            I learn by doing! Take a look at some of my past and ongoing
            projects.
          </p>
        </div>
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] pt-8 pb-16 px-4 md:p-16 mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <ProjectCard
            title="ButcherBox Internship"
            desc="My summer e-commerce internship."
            href="/butcherbox"
            cta="read story"
            imageSrc="/butcherbox/butcherbox-ss.png"
            imageWidth={3248}
            imageHeight={2112}
          />
          <ProjectCard
            title="Brigham & Women's Hospital Application"
            desc="Leading an 11-person agile project."
            href="/hospital"
            cta="view project"
            imageSrc="/hospital/path.png"
            imageWidth={1920}
            imageHeight={1080}
          />
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
