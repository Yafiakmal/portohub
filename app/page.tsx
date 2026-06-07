"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  SiExpress,
  SiGithub,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  type IconType,
} from "@icons-pack/react-simple-icons";
import { SiGo } from "react-icons/si";
import { type IconType as ReactIconType } from "react-icons";

import { SlSocialLinkedin } from "react-icons/sl";

const navItem: { name: string; href: string; className: string }[] = [
  {
    name: "Me",
    href: "#",
    className: "underline",
  },
  {
    name: "Watch it",
    href: "#",
    className: "underline",
  },
  {
    name: "Blog",
    href: "#",
    className: "underline",
  },
];

const contacts: {
  icon: IconType | ReactIconType;
  name: string;
  url: string;
}[] = [
  {
    icon: SlSocialLinkedin,
    name: "Linkedin",
    url: "https://linkedin.com/in/muhamadyafiakmal",
  },
  {
    icon: SiGithub,
    name: "Github",
    url: "https://github.com/Yafiakmal",
  },
];

const techList: { name: string; icon: IconType | ReactIconType }[] = [
  {
    name: "Node.JS",
    icon: SiNodedotjs,
  },
  {
    name: "Typescript",
    icon: SiTypescript,
  },
  {
    name: "React",
    icon: SiReact,
  },
  {
    name: "Next.JS",
    icon: SiNextdotjs,
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
  },
  {
    name: "Golang",
    icon: SiGo,
  },
  {
    name: "Express",
    icon: SiExpress,
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
  },
];

export default function HomePage() {
  function Header() {
    return (
      <header
        className={cn(
          "flex justify-center items-center h-20 px-8 mb-4 ",
          // "bg-linear-to-b from-accent to-transparent",
          "bg-accent/40",
          "backdrop-blur-md sticky top-0 left-0 ",
        )}
      >
        <div className={cn("flex justify-between w-full md:px-8")}>
          <div>
            <i className={cn("font-black")}>Reconna</i>
          </div>
          <nav className={cn("flex gap-4")}>
            {navItem.map((item, index) => (
              <Link key={index} href={item.href} className={item.className}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </header>
    );
  }

  function Main() {
    return (
      <main
        className={cn(
          "flex flex-col flex-1  gap-8",
          "w-full px-4 md:px-10 lg:px-15",
        )}
      >
        {/* Hero */}
        <section
          className={cn(
            "flex flex-col gap-8 justify-center",
            "h-[70vh] md:h-[80vh] w-full",
            "p-8 md:p-16",
            "bg-secondary",
            "text-secondary-foreground",
            "border-4 border-foreground shadow-lg shadow-black",
          )}
        >
          <div>
            <h1 className={cn("font-semibold text-xl md:text-2xl lg:text-4xl")}>
              just call me,{" "}
              <span
                className={cn("font-black text-2xl md:text-3xl lg:text-5xl")}
              >
                Yafi
              </span>
            </h1>
            <h2 className={cn("text-xl md:text-2xl lg:text-4xl")}>
              Fullstack Web Developer
            </h2>
          </div>
          <div>
            <p
              className={cn(
                "w-[80%] md:w-[60%]  text-lg md:text-xl lg:text-2xl",
              )}
            >
              Building web applications with <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, and any other modern frontend
              technologies. create business logic with <strong>Golang</strong>{" "}
              or
              <strong> NodeJS</strong>
            </p>
          </div>
          <div className={cn("flex  justify-end w-full ")}>
            <p
              className={cn(
                "w-[80%] md:w-[60%] text-lg md:text-xl lg:text-2xl",
              )}
            >
              I love learning technologies. Modern abstractions are becoming
              increasingly complex. Understanding the{" "}
              <strong className={cn("font-bold")}>fundamentals </strong>
              matters more than ever. BUT ...{" "}
            </p>
          </div>
        </section>

        {/* Tech Stack */}
        <section
          className={cn(
            "flex gap-16 justify-center items-center",
            "h-[10vh]",
            "bg-primary",
            "border-4 border-foreground shadow-lg shadow-black",
          )}
        >
          {techList.map(({ name, icon: Icon }) => (
            <div
              key={name}
              className={cn("flex justify-center items-center", "h-11 w-11  ")}
            >
              <Icon size={"full"} />
            </div>
          ))}
        </section>

        {/* projects */}
        <section
          className={cn(
            "h-[70vh] md:h-[80vh] w-full",
            "p-16",
            "bg-secondary",
            "text-secondary-foreground",
            "border-4 border-foreground shadow-lg shadow-black",
          )}
        >
          <h1></h1>
        </section>
      </main>
    );
  }

  function Footer() {
    return (
      <footer
        className={cn(
          "flex items-center justify-center gap-8",
          "h-30 w-full mt-8",
          "bg-primary border-t-4 border-foreground",
        )}
      >
        <div
          className={cn(
            "flex flex-col justify-center items-center",
            "h-full w-full ",
          )}
        >
          <strong>
            <i>Reconna</i>
          </strong>
        </div>
        <div
          className={cn(
            "flex gap-8 justify-center items-center",
            "h-full w-full ",
          )}
        >
          {contacts.map(({ icon: Icon, name, url }) => (
            <a
              href={url}
              className={cn(
                "flex gap-2 justify-center items-center",
                "underline",
              )}
            >
              <span className={cn("h-4 w-4")}>
                <Icon size={"full"} />
              </span>
              <span>{name}</span>
            </a>
          ))}
        </div>
        <div
          className={cn(
            "flex flex-col justify-center items-center",
            "h-full w-full ",
          )}
        >
          <nav className={cn("flex gap-4")}>
            {navItem.map((item, index) => (
              <Link key={index} href={item.href} className={item.className}>
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
      </footer>
    );
  }
  return (
    <>
      <div className={cn("flex flex-col", "min-h-screen w-full")}>
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}
