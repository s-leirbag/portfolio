import Image from "next/image";
import Link from "next/link";
import ScrollButton from "./ui/ScrollButton";

export default function Home() {
  return (
    <div className="gradient-bg-70">
      <div className="gradient-bg-80">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:px-16 mx-auto flex flex-col justify-between gap-8 min-h-screen">
          <h1 className="sm:text-xl py-0.5 font-semibold text-center">
            work in progress...
            <br />
            <Link
              href={"https://github.com/s-leirbag/portfolio"}
              className="hover:underline text-sky-500"
            >
              https://github.com/s-leirbag/portfolio
            </Link>
          </h1>
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
              <h1 className="text-5xl md:text-8xl py-0.5 font-semibold bg-gradient-to-r from-sky-600 to-sky-300 dark:to-sky-200 bg-clip-text text-transparent">
                Gabriel Shiu
              </h1>
              <p>
                Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum
                nostra mus phasellus potenti hac. Class blandit gravida semper;
                pharetra amet nibh sem dis? Donec consequat sagittis augue
                curabitur dapibus ornare dapibus facilisis. Venenatis maecenas
                eros suspendisse nec ultrices platea. Bibendum massa nibh
                ridiculus lorem mus. Egestas
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
      </div>
      <div className="gradient-bg-80">
        <div className="w-full sm:w-[640px] lg:w-[768px] px-8 sm:px-16 m-auto">
          <h2 className="text-3xl md:text-6xl py-0.5 font-semibold text-shadow-50px">
            Work
          </h2>
          <p className="text-shadow-20px">
            Lorem ipsum odor amet, consectetuer adipiscing elit.
          </p>
        </div>
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] pt-8 pb-16 px-8 md:p-16 mx-auto grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-8">
          <Link
            href={"/work/butcherbox"}
            className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
          >
            <h3 className="text-xl md:text-3xl font-semibold">
              ButcherBox Internship
            </h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            <p className="font-medium hover:underline">view project {"->"}</p>
            <div className="flex-1 flex">
              <Image
                src="/butcherbox-ss.png"
                alt="project thumbnail"
                width={3248}
                height={2112}
                priority
              />
            </div>
          </Link>
          <Link
            href={"/work/citizens"}
            className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
          >
            <h3 className="text-xl md:text-3xl font-semibold">
              Citizens Bank Internship
            </h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            <p className="font-medium hover:underline">view project {"->"}</p>
            <div className="flex-1 flex">
              <Image
                src="/citizens-ss.jpeg"
                alt="project thumbnail"
                width={4096}
                height={1828}
                priority
                className="m-auto"
              />
            </div>
          </Link>
          <Link
            href={"/work/oll-trainer"}
            className="bg-neutral-100 dark:bg-neutral-800 border-neutral-200 dark:border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
          >
            <h3 className="text-xl md:text-3xl font-semibold">
              Rubiks Cube Trainer
            </h3>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
            <p className="font-medium hover:underline">view project {"->"}</p>
            <div className="flex-1 flex">
              <Image
                src="/oll-trainer-ss.png"
                alt="project thumbnail"
                width={3248}
                height={2112}
                priority
              />
            </div>
          </Link>
        </div>
      </div>
      <div className="gradient-bg-80">
        <div className="w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:p-16 mx-auto flex flex-col justify-center min-h-screen gap-2">
          <h1 className="text-3xl md:text-6xl py-0.5 font-semibold">
            Contact Me
          </h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
            mus phasellus potenti hac. Class blandit gravida semper; pharetra
            amet nibh sem dis? Donec consequat sagittis augue curabitur dapibus
            ornare dapibus facilisis. Venenatis maecenas eros suspendisse nec
            ultrices platea. Bibendum massa nibh ridiculus lorem mus. Egestas
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
    </div>
  );
}
