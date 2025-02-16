import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full sm:w-[640] md:w-[768] lg:w-[1024]">
        <div className="h-screen p-16 flex flex-col justify-center">
          <div className="w-full flex flex-col md:flex-row gap-12">
            <Image
              className="rounded-2xl lg:w-64 lg:h-64 w-48 h-48 md:order-1"
              src="/professional_photo.jpeg"
              alt="portrait photo"
              width={2344}
              height={2344}
              priority
            />
            <div className="flex-1 flex flex-col gap-2">
              <h1 className="text-5xl sm:text-8xl py-0.5 rounded font-semibold">
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
            </div>
          </div>
        </div>
        <a
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-fit rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] py-4 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Work
        </a>
        <div className="w-full py-16">
          <div className="w-full md:w-[640] lg:w-[768] px-16 m-auto">
            <h2 className="text-3xl sm:text-6xl py-0.5 rounded font-semibold">
              Work
            </h2>
            <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
          </div>
          <div className="mt-8 w-full px-16 grid grid-cols-2 gap-8">
            <div className="bg-neutral-800 border-neutral-700 border rounded-xl p-6 flex flex-col gap-2">
              <h3 className="text-xl sm:text-3xl rounded font-semibold">
                Rubiks Cube Trainer
              </h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <Link
                href={"/work/oll-trainer"}
                className="font-medium hover:underline"
              >
                view project {"->"}
              </Link>
              <Image
                src="/train-mui.png"
                alt="project thumbnail"
                width={2852}
                height={2112}
                priority
              />
            </div>
            <div className="bg-neutral-800 border-neutral-700 border rounded-xl p-6 flex flex-col gap-2">
              <h3 className="text-xl sm:text-3xl rounded font-semibold">
                Rubiks Cube Trainer
              </h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <Link
                href={"/work/oll-trainer"}
                className="font-medium hover:underline"
              >
                view project {"->"}
              </Link>
              <Image
                src="/train-mui.png"
                alt="project thumbnail"
                width={2852}
                height={2112}
                priority
              />
            </div>
            <div className="bg-neutral-800 border-neutral-700 border rounded-xl p-6 flex flex-col gap-2">
              <h3 className="text-xl sm:text-3xl rounded font-semibold">
                Rubiks Cube Trainer
              </h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <Link
                href={"/work/oll-trainer"}
                className="font-medium hover:underline"
              >
                view project {"->"}
              </Link>
              <Image
                src="/train-mui.png"
                alt="project thumbnail"
                width={2852}
                height={2112}
                priority
              />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
