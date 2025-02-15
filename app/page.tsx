import Image from "next/image";

export default function Home() {
  return (
    <div className="items-center justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
      <main className="w-full sm:w-[640] md:w-[768] lg:w-[1024] h-screen p-16 flex flex-col gap-8 items-center justify-center sm:items-start">
        <div className="w-full flex flex-col md:flex-row gap-12">
          <Image
            className="rounded-2xl lg:w-64 lg:h-64 w-48 h-48 md:order-1"
            src="/professional_photo.jpeg"
            alt="Next.js logo"
            width={2344}
            height={2344}
            priority
          />
          <div className="flex-1 flex flex-col gap-2">
            <h1 className="text-5xl sm:text-8xl py-0.5 rounded font-semibold">
              Gabriel Shiu
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
        <a
          className="absolute bottom-8 left-1/2 -translate-x-1/2 w-fit rounded-lg bg-foreground text-background hover:bg-[#383838] dark:hover:bg-[#ccc] py-4 px-4 sm:px-5"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          My Work
        </a>
      </main>
    </div>
  );
}
