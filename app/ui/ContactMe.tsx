import Link from "next/link";

export default function ContactMe() {
  return (
    <div className="gradient-bg-100">
      <div className="relative w-full sm:w-[640px] md:w-[768px] lg:w-[1024px] py-16 px-8 md:p-16 mx-auto flex flex-col justify-center min-h-screen gap-2">
        <h2 className="text-3xl md:text-6xl py-0.5 font-semibold">
          Contact Me
        </h2>
        <p className="text-neutral-600 dark:text-neutral-300">
          You can find me on social media! Email form coming soon...
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
        <Link
          href={"https://github.com/s-leirbag/portfolio"}
          className="w-full absolute left-0 bottom-0 block p-8 sm:text-xl text-center hover:underline text-sky-500"
        >
          https://github.com/s-leirbag/portfolio
        </Link>
      </div>
    </div>
  );
}
