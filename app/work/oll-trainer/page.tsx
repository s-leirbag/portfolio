import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="justify-items-center font-[family-name:var(--font-geist-sans)]">
      <main className="w-full sm:w-[640] md:w-[768] lg:w-[1024]">
        <div className="w-full pt-[calc(30vh)] p-16 gap-8 flex flex-col justify-center">
          <h1 className="text-5xl sm:text-8xl py-0.5 rounded font-semibold">
            {"Rubik's"} Cube Trainer
          </h1>
          <p>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Rutrum nostra
            mus phasellus potenti hac. Class blandit gravida semper; pharetra
            amet nibh sem dis? Donec consequat sagittis augue curabitur dapibus
            ornare dapibus facilisis. Venenatis maecenas eros suspendisse nec
            ultrices platea. Bibendum massa nibh ridiculus lorem mus. Egestas
          </p>
          <div className="pt-4 grid grid-cols-3 gap-2">
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
                className="block w-fit rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] py-4 px-4 sm:px-5"
                target="_blank"
                rel="noopener noreferrer"
              >
                view site {"->"}
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-screen p-16 flex flex-col justify-center">
          <div className="flex flex-col gap-2">
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
      </main>
    </div>
  );
}
