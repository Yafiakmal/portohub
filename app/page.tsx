"use client";

import { Code2, Layers, Wrench, ExternalLink, Mail } from "lucide-react";
import { SiGithub, SiLinkerd } from "@icons-pack/react-simple-icons";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Avatar from "@/components/my/Avatar";
import { Badge } from "@/components/ui/badge";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

// ─── Data ─────────────────────────────────────────────────────────────────────

const profile = {
  firstname: "Muhammad",
  lastname: "Yafi Akmal",
  tagline:
    "You can expect me as a Front-end Web developer. I write clean code and minimalist design interfaces",
};

const contact = {
  email: "yafi@example.com",
  github: "https://github.com/Yafiakmal",
  linkedin: "https://linkedin.com/in/muhammadyafiakmal",
};

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const skillGroups = [
  {
    label: "Programming Language",
    icon: Code2,
    skills: [
      "Javascript",
      "Typescript",
      "Python",
      "Golang",
      "HTML",
      "CSS",
      "SQL",
    ],
  },
  {
    label: "Frameworks & Libraries",
    icon: Layers,
    skills: ["React", "Next.js", "Gorm", "Gin"],
  },
  {
    label: "Tools & Platforms",
    icon: Wrench,
    skills: ["Git", "Docker"],
  },
];

const projects = [
  {
    title: "Inventory System",
    desc: "Full-stack web app with fullstack Next.js and Supabase.",
    href: "https://lpka.muhammadyafiakmal.my.id",
    githuburl: "https://github.com/Yafiakmal/LPKA",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SkillGroup({
  label,
  icon: Icon,
  skills,
}: {
  label: string;
  icon: React.ElementType;
  skills: string[];
}) {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="flex items-center gap-2 text-lg md:text-xl">
        <Icon size={18} aria-hidden />
        {label}
      </h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <Badge
            key={skill}
            variant="outline"
            className="text-primary-foreground"
          >
            {skill}
          </Badge>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  desc,
  href,
  githuburl,
}: {
  title: string;
  desc: string;
  href: string;
  githuburl: string;
}) {
  return (
    <Card className="h-full">
      <CardContent className="flex flex-col justify-between gap-4 p-6 h-full">
        <div className="flex flex-col gap-1">
          <span className="font-semibold text-base">{title}</span>
          <span className="text-sm text-muted-foreground">{desc}</span>
        </div>
        <div className="flex gap-2">
          <Button variant="ghost" size="sm" asChild>
            <a href={githuburl} target="_blank" rel="noopener noreferrer">
              <SiGithub />
              Code
            </a>
          </Button>
          <Button variant="ghost" size="sm" asChild>
            <a href={href} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={14} />
              Live
            </a>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function SectionCard({ children }: { children: React.ReactNode }) {
  return (
    <Card className="bg-primary border-0 shadow-xl w-full md:w-2/3">
      <CardContent className="bg-transparent text-primary-foreground w-full p-4 md:px-8">
        {children}
      </CardContent>
    </Card>
  );
}

function SectionWrapper({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="flex flex-col items-center w-full scroll-mt-20">
      <h2 className="text-2xl md:text-3xl text-center mt-8 mb-4">{title}</h2>
      <SectionCard>{children}</SectionCard>
    </section>
  );
}

// ─── Header ───────────────────────────────────────────────────────────────────
// sticky top-0  → navbar menempel di atas saat scroll
// z-50          → selalu di atas konten lain
// backdrop-blur → efek kaca transparan

function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-16 max-w-5xl items-center justify-center px-4 md:px-8">
        <nav className="flex items-center gap-1 md:gap-2">
          {navItems.map((item) => (
            <Button key={item.label} variant="ghost" size="sm" asChild>
              <a href={item.href}>{item.label}</a>
            </Button>
          ))}
        </nav>
      </div>
    </header>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────

function Footer() {
  const year = new Date().getFullYear();

  const links = [
    { label: "Email", href: `mailto:${contact.email}`, icon: Mail },
    { label: "GitHub", href: contact.github, icon: SiGithub },
    { label: "LinkedIn", href: contact.linkedin, icon: SiLinkerd },
  ];

  return (
    <footer
      id="contact"
      className="scroll-mt-20 w-full border-t bg-muted mt-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 px-4 py-10 md:px-8">
        <p className="text-lg font-semibold">
          {profile.firstname} {profile.lastname}
        </p>

        <div className="flex gap-3">
          {links.map(({ label, href, icon: Icon }) => (
            <Button key={label} variant="outline" size="sm" asChild>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Icon size={14} />
                {label}
              </a>
            </Button>
          ))}
        </div>

        <p className="text-sm text-muted-foreground">
          © {year} {profile.firstname} {profile.lastname}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Home() {
  const fullName = `${profile.firstname} ${profile.lastname}`;

  return (
    <>
      <Header />

      <main className="px-4 md:px-16 flex flex-col items-center gap-4">
        {/* ── About / Profile ── */}
        <section
          id="about"
          className="flex flex-col items-center w-full scroll-mt-20"
        >
          <Avatar
            src="/my3.png"
            name={fullName}
            size="2xl"
            className="-mb-8 bg-background"
          />
          <Card className="bg-primary text-primary-foreground border-0 shadow-xl w-full md:w-2/3">
            <CardHeader className="justify-center pb-4 pt-8 px-12">
              <CardTitle className="text-4xl md:text-5xl text-center leading-14 md:leading-18 break-words min-w-0">
                {profile.firstname} <br /> {profile.lastname}
              </CardTitle>
              <span className="text-center">---</span>
            </CardHeader>
            <CardContent className="bg-background/25 w-full p-4 md:px-8">
              <p className="text-md md:text-lg text-center">
                {profile.tagline}
              </p>
            </CardContent>
            <CardFooter className="justify-center gap-4">
              {/* Button ini sekarang beneran anchor ke section, bukan dummy */}
              <Button variant="secondary" asChild>
                <a href="#projects">See My Work</a>
              </Button>
              <Button variant="secondary" asChild>
                <a href="#contact">Contact me</a>
              </Button>
            </CardFooter>
          </Card>
        </section>

        {/* ── Skills ── */}
        <SectionWrapper id="skills" title="Skills">
          <div className="flex flex-col gap-6">
            {skillGroups.map((group) => (
              <SkillGroup key={group.label} {...group} />
            ))}
          </div>
        </SectionWrapper>

        {/* ── Projects ── */}
        <SectionWrapper id="projects" title="Projects">
          <Carousel opts={{ align: "start" }} className="w-full">
            <CarouselContent className="-ml-2">
              {projects.map((project) => (
                <CarouselItem
                  key={project.title}
                  className="pl-2 basis-4/5 sm:basis-1/2 lg:basis-1/3"
                >
                  <ProjectCard {...project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-end gap-2 mt-4">
              <CarouselPrevious className="static translate-y-0" />
              <CarouselNext className="static translate-y-0" />
            </div>
          </Carousel>
        </SectionWrapper>
      </main>

      <Footer />
    </>
  );
}
