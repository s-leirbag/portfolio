import { AtSign, Mail, MessageCircleHeart, User } from "lucide-react";
import SvgCollage from "../SvgCollage";
import Socials from "./Socials";

export default function ContactMe() {
  return (
    <section className="relative py-16 px-4 md:p-16 flex flex-col justify-center min-h-screen gap-2">
      <SvgCollage
        x={"30vw"}
        y={"-10vh"}
        count={10}
        size={128}
        svgs={[User, AtSign, Mail, MessageCircleHeart]}
      />
      <h2 className="text-5xl lg:text-6xl py-0.5 font-semibold">Contact Me</h2>
      <p className="text-neutral-600 dark:text-neutral-300">
        You can find me on social media! Email form coming soon...
      </p>
      <Socials />
    </section>
  );
}
