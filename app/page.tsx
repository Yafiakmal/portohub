"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";

export default function HomePage() {
  function Header() {
    const navItem = [
      {
        name: "Me",
        href: "/Me",
      },
      {
        name: "Watch it",
        href: "/Project",
      },
    ];
    return (
      <header
        className={cn(
          "flex justify-center items-center h-20 px-8 mb-4 bg-accent/60 sticky top-0 left-0 ",
        )}
      >
        <div className={cn("flex justify-between w-full px-8")}>
          <div>
            <i className={cn("font-black")}>Reconna</i>
          </div>
          <nav className={cn("flex gap-4")}>
            {navItem.map((item, index) => (
              <Link key={index} href={item.href}>
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
        <section
          className={cn(
            "flex flex-col gap-8 justify-center",
            "h-[70vh] md:h-[80vh] w-full",
            "p-16",
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
              Web Fullstack Developer
            </h2>
          </div>
          <div>
            <p className={cn("w-[60%] text-lg md:text-xl lg:text-2xl")}>
              Building web applications with <strong>React</strong>,{" "}
              <strong>TypeScript</strong>, and any other modern frontend
              technologies. create business logic with <strong>Golang</strong>{" "}
              or
              <strong> NodeJS</strong>
            </p>
          </div>
          <div className={cn("flex  justify-end w-full ")}>
            <p className={cn("w-[60%] text-lg md:text-xl lg:text-2xl")}>
              {" "}
              I love technology, but right now, the abstractions are so thick.{" "}
              <strong className={cn("font-bold")}>fundamentals </strong>
              really important.{" "}
            </p>
          </div>
        </section>
        <section
          className={cn(
            "flex gap-2 justify-center items-center",
            "h-[10vh]",
            "bg-primary",
            "border-4 border-foreground shadow-lg shadow-black",
          )}
        >
          <div className="h-6 w-6 bg-secondary"></div>
          <div className="h-6 w-6 bg-secondary"></div>
          <div className="h-6 w-6 bg-secondary"></div>
        </section>
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
          "bg-accent/60",
        )}
      >
        <div className="h-full w-full bg-primary"></div>
        <div className="h-full w-full bg-primary"></div>
        <div className="h-full w-full bg-primary"></div>
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
