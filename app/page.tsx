import Image from "next/image";
import Link from "next/link";
import ScrollButton from "./ui/ScrollButton";

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)] bg-[radial-gradient(#262626_3px,transparent_3px)] [background-size:36px_36px]">
      <div
        style={{
          background: "radial-gradient(ellipse, black 0%, transparent 70%)",
        }}
      >
        <div
          style={{
            background: "radial-gradient(ellipse, black 0%, transparent 80%)",
          }}
        >
          <div className="w-full sm:w-[640] md:w-[768] lg:w-[1024] p-16 mx-auto flex flex-col justify-between h-screen">
            <h1 className="text-xl py-0.5 rounded font-semibold text-center">
              work in progress...
              <br />
              <Link
                href={"https://github.com/s-leirbag/portfolio"}
                className="hover:underline text-sky-500"
              >
                https://github.com/s-leirbag/portfolio
              </Link>
            </h1>
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
                <h1 className="text-5xl sm:text-8xl py-0.5 rounded font-semibold bg-gradient-to-r from-sky-500 to-sky-100 bg-clip-text text-transparent">
                  Gabriel Shiu
                </h1>
                <p>
                  Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum
                  nostra mus phasellus potenti hac. Class blandit gravida
                  semper; pharetra amet nibh sem dis? Donec consequat sagittis
                  augue curabitur dapibus ornare dapibus facilisis. Venenatis
                  maecenas eros suspendisse nec ultrices platea. Bibendum massa
                  nibh ridiculus lorem mus. Egestas
                </p>
              </div>
            </div>
            <ScrollButton />
          </div>
        </div>
        <div
          style={{
            background: "radial-gradient(ellipse, black 0%, transparent 80%)",
          }}
        >
          <div className="w-full md:w-[640] lg:w-[768] px-16 m-auto">
            <h2
              className="text-3xl sm:text-6xl py-0.5 rounded font-semibold"
              style={{
                textShadow:
                  "0 0 50px black, 0 0 50px black, 0 0 50px black, 0 0 50px black, 0 0 50px black, 0 0 50px black, 0 0 50px black",
              }}
            >
              Work
            </h2>
            <p
              style={{
                textShadow:
                  "0 0 20px black, 0 0 20px black, 0 0 20px black, 0 0 20px black, 0 0 20px black, 0 0 20px black, 0 0 20px black",
              }}
            >
              Lorem ipsum odor amet, consectetuer adipiscing elit.
            </p>
          </div>
          <div className="w-full sm:w-[640] md:w-[768] lg:w-[1024] pt-8 p-16 mx-auto grid md:grid-cols-2 gap-8">
            <Link
              href={"/work/oll-trainer"}
              className="bg-neutral-800 border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
            >
              <h3 className="text-xl sm:text-3xl rounded font-semibold">
                Rubiks Cube Trainer
              </h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <p className="font-medium hover:underline">view project {"->"}</p>
              <Image
                src="/train-mui.png"
                alt="project thumbnail"
                width={2852}
                height={2112}
                priority
              />
            </Link>
            <Link
              href={"/work/oll-trainer"}
              className="bg-neutral-800 border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
            >
              <h3 className="text-xl sm:text-3xl rounded font-semibold">
                Rubiks Cube Trainer
              </h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <p className="font-medium hover:underline">view project {"->"}</p>
              <Image
                src="/train-mui.png"
                alt="project thumbnail"
                width={2852}
                height={2112}
                priority
              />
            </Link>
            <Link
              href={"/work/oll-trainer"}
              className="bg-neutral-800 border-neutral-700 border rounded-xl p-6 flex flex-col gap-2"
            >
              <h3 className="text-xl sm:text-3xl rounded font-semibold">
                Rubiks Cube Trainer
              </h3>
              <p>Lorem ipsum odor amet, consectetuer adipiscing elit.</p>
              <p className="font-medium hover:underline">view project {"->"}</p>
              <Image
                src="/train-mui.png"
                alt="project thumbnail"
                width={2852}
                height={2112}
                priority
              />
            </Link>
          </div>
        </div>
        <div
          style={{
            background: "radial-gradient(ellipse, black 0%, transparent 80%)",
          }}
        >
          <div className="w-full sm:w-[640] md:w-[768] lg:w-[1024] p-16 mx-auto flex flex-col justify-center h-screen gap-2">
            <h1 className="text-3xl sm:text-6xl py-0.5 rounded font-semibold">
              Contact Me
            </h1>
            <p>
              Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
              mus phasellus potenti hac. Class blandit gravida semper; pharetra
              amet nibh sem dis? Donec consequat sagittis augue curabitur
              dapibus ornare dapibus facilisis. Venenatis maecenas eros
              suspendisse nec ultrices platea. Bibendum massa nibh ridiculus
              lorem mus. Egestas
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
