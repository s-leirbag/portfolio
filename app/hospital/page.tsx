import Image from "next/image";
import Link from "next/link";
import ContactMe from "../ui/ContactMe";
import ProjectCard from "../ui/ProjectCard";

export default function Page() {
  return (
    <div className="gradient-bg-thick">
      <div className="gradient-bg-thick">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-4 md:px-16 mx-auto pt-[calc(25vh)] gap-8 flex flex-col">
          <h1 className="text-5xl md:text-8xl py-0.5 rounded font-semibold bg-gradient-to-r from-sky-500 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
            Brigham & Women&apos;s Hospital Application
          </h1>
          <div className="flex flex-col gap-8 leading-loose text-neutral-600 dark:text-neutral-300">
            <p>
              I led a team of 11 students in WPI&apos;s CS-3733 Software
              Engineering course. We built a theoretical kiosk application for
              Brigham & Women&apos;s Hospital. I used my previous web skills to
              lead the team as an Assistant Lead Developer, mentoring younger
              engineers and guiding decisions. We simulated a modern software
              team, with front-end and back-end developers, a scrum master, PM,
              PO, and leads! I worked on all parts of the codebase but focused
              on the front-end.
            </p>
            <div>
              Core features:
              <ul className="list-disc list-inside pl-4">
                <li>
                  Hospital map navigation with a Voice AI assistant and
                  on-the-go mobile directions
                </li>
                <li>Request services to specific rooms</li>
                <li>Admin and employee login with OAuth through Auth0</li>
                <li>Employee management</li>
                <li>Responsive design</li>
              </ul>
            </div>
          </div>
          <div className="pt-4 grid grid-cols-[repeat(auto-fit,minmax(120px,1fr))] gap-2 gap-y-8 max-w-lg">
            <div className="space-y-2">
              <strong>Stack</strong>
              <p className="text-neutral-600 dark:text-neutral-300">React</p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Prisma/Postgres
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                TypeScript
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">
                Turborepo
              </p>
              <p className="text-neutral-600 dark:text-neutral-300">Docker</p>
              <p className="text-neutral-600 dark:text-neutral-300">AWS</p>
            </div>
            <div className="space-y-2">
              <strong>Year</strong>
              <p className="text-neutral-600 dark:text-neutral-300">2024</p>
            </div>
            <div className="space-y-2">
              <strong>Link</strong>
              <Link
                href={"https://github.com/s-leirbag/hospital-application/"}
                className="block w-fit rounded-lg bg-sky-500 hover:bg-[#0ea5e9e6] text-neutral-50 py-4 px-4 sm:px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                view repo {"->"}
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-4 md:px-16 mx-auto gap-64 mb-32 flex flex-col">
        <Image
          src="/hospital/path.png"
          alt="project thumbnail"
          width={1920}
          height={1080}
          priority
        />
        <div>
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Goal: Modernize Hospital Management
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            Hospitals need to run quickly and smoothly to save lives. But, they
            are extremely complex to manage. We architected a prototype hospital
            management app for Brigham & Women&apos;s Hospital. The app would
            theoretically run on kiosks placed throughout the hospital. It
            guides visitors through the huge building and helps employees
            request services and manage staff.
          </p>
        </div>
        <div>
          <Image
            src="/hospital/directions-text-and-mobile.png"
            alt="hospital map with navigation directions"
            width={1920}
            height={1080}
            className="mb-8"
          />
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Simplifying Hospital Navigation
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            Our app streamlined hospital navigation. It displays a map of each
            floor with interactive nodes for different rooms. Users can
            automatically generate optimized, visual paths between rooms. They
            also get a textual list of directions and can scan a QR code to take
            the directions on-the-go on their phone!
            <br />
            <br />
            The graph was loaded into our Postgres database from CSV data. We
            used the Canvas API to render the map. This was very complex! I
            connected the Canvas API with React for buttons and state. We
            implemented various pathfinding algorithms like A* and
            Dijkstra&apos;s, using the Strategy design pattern for clean code.
          </p>
        </div>
        <div>
          <Image
            src="/hospital/service-request-creation.png"
            alt="service request creation"
            width={1920}
            height={1080}
            className="mb-8"
          />
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Service Requests
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            We integrated jobs into the map. Staff can request services like
            sanitation, transport, and language interpretation to specific
            rooms. They can request specific employees and give details.
          </p>
        </div>
        <div>
          <Image
            src="/hospital/service-request-admin-view.png"
            alt="list of service requests from a hospital admin's view"
            width={1920}
            height={1080}
            className="mb-8"
          />
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Handling Service Requests
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            Employees can log into the kiosk using OAuth with Auth0. They can
            view their assigned service requests and mark them completed.
            Hospital admins can log in and view requests for all employees and
            filter accordingly.
            <br />
            <br />I did a lot of the login management, showing the appropriate
            pages and information based on the employee. I paired with a newer
            teammate and mentored him to eventually flesh out the authentication
            features on his own! I also did a lot of the request displaying,
            filtering, and data management. This was my first big experience
            working with authentication and databases and I learned a lot!
          </p>
        </div>

        <div>
          <Image
            src="/hospital/ok-tommy-ai.png"
            alt="voice AI assistant"
            width={1894}
            height={1011}
            className="mb-8"
          />
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            More Features
          </h3>
          <div className="leading-loose text-neutral-600 dark:text-neutral-300">
            We implemented many other features, including:
            <ul className="list-disc list-inside pl-4">
              <li>
                View and edit tables for service requests, employees, map
                nodes/edges
              </li>
              <li>
                OAuth/Auth0 login for admin and staff. Admin add/edit staff.
              </li>
              <li>
                Voice AI Assistant, &quot;Ok Tommy&quot; (our Scrum Master {"<"}
                3), to interact with the map and pages using React Speech Kit
              </li>
              <li>AWS deployment</li>
              <li>Scrolling announcements</li>
              <li>
                Realtime charts with Reaviz for service request completion
                statistics
              </li>
              <li>CSV tables import/export</li>
              <li>Various easter eggs...</li>
            </ul>
          </div>
        </div>
        <div>
          <Image
            src="/hospital/figma-all.png"
            alt="placeholder"
            width={3248}
            height={2112}
          />
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold text-center lg:px-32">
            Styling
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300 text-center lg:px-32">
            Styling was a total mess! We struggled to coordinate across all 11
            people, and none of us had prior Figma experience. But as we
            progressed, we iterated on Figma mockups, helping create
            consistency. I mentored an engineer who wanted to learn more about
            CSS, and we renovated some pages. He went on to re-work much of our
            team&apos;s CSS!
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <div className="m-auto">
            <Image
              src="/hospital/responsiveness.png"
              alt="placeholder"
              width={1920}
              height={1920}
            />
          </div>
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Responsiveness
            </h3>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              We made our app responsive for different dimensions! This was
              quite difficult due to busy UI on the map and having an
              unconventional layout with a context menu.
            </p>
          </div>
        </div>
        <Image
          src="/hospital/about.png"
          alt="placeholder"
          width={1920}
          height={1080}
        />
        <div className="text-center lg:px-32">
          <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
            Team Dynamics
          </h3>
          <p className="leading-loose text-neutral-600 dark:text-neutral-300">
            todo...
          </p>
        </div>
        <div className="lg:grid lg:grid-cols-2 gap-8 space-y-8">
          <Image
            src="/hospital/team-photo.jpeg"
            alt="placeholder"
            width={3462}
            height={3072}
            className="m-auto"
          />
          <div>
            <h3 className="text-2xl md:text-5xl mb-2 rounded font-semibold">
              Learnings
            </h3>
            <p className="leading-loose text-neutral-600 dark:text-neutral-300">
              todo...
            </p>
          </div>
        </div>
      </div>
      <div className="gradient-bg-thick">
        <div className="w-full sm:w-[640px] lg:w-[768px] px-4 sm:px-16 m-auto">
          <h2 className="text-3xl md:text-6xl py-0.5 pt-16 rounded font-semibold text-shadow-50px">
            Other Work
          </h2>
          <p className="text-shadow-20px leading-loose text-neutral-600 dark:text-neutral-300">
            I learn by doing! Take a look at some of my past and ongoing
            projects.
          </p>
        </div>
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] pt-8 pb-16 px-4 md:p-16 mx-auto grid grid-cols-[repeat(auto-fit,minmax(min(300px,100%),1fr))] gap-8">
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
            title="Citizens Bank Internship"
            desc="My time as an intern at Citizens Bank."
            href="/citizens"
            cta="read story"
            imageSrc="/citizens/citizens-ss.jpeg"
            imageWidth={4096}
            imageHeight={1777}
          />
        </div>
      </div>
      <ContactMe />
    </div>
  );
}
