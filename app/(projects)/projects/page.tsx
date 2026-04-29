import { ShowcaseGrid } from "@/components/my/ShowcaseGrid";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const res = await fetch("https://api.example.com/showcase", {
    cache: "no-store", // atau pakai revalidate
  });

  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json();
}

export default async function Page() {
  // const data = await getData();
  const dummyData = [
    {
      id: "1",
      title: "Project One",
      imageUrl: "/default-card-bg.jpeg",
      description:
        "This is a sample project Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      id: "2",
      title:
        "Project Two Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      imageUrl: "/default-card-bg.jpeg",
    },
    {
      id: "3",
      title: "Project Three",
      imageUrl: "/default-card-bg.jpeg",
    },
    {
      id: "4",
      title: "Project Four",
      imageUrl: "/default-card-bg.jpeg",
      description:
        "This is another sample project with a description. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col gap-10 md:mt-10 px-2 md:px-16 bg-background">
      <div className="min-w-full h-30 flex flex-col items-center justify-center">
        <Link href="/">
          <Image
            src="/header-showcase.jpeg"
            alt="header for better visual"
            width={300}
            height={200}
            className="cursor-pointer"
          />
        </Link>
      </div>

      <ShowcaseGrid items={dummyData} />
    </div>
  );
}

// import Link from "next/link";
// export default function ProjectsPage() {
//   return (
//     <div className="min-h-screen flex flex-col items-center gap-10 md:mt-10 px-2 md:px-16 bg-white dark:bg-black">
//       <div className="bg-amber-200 min-w-full h-30 flex flex-col items-center justify-center">
//         <p>thanks for visiting my showcase</p>
//         <p>Enjoy</p>
//       </div>
//       <div className="grid ">
//         <div className="bg-red-300 w-20 h-20">1</div>
//         <div className="bg-red-300 w-20 h-20">2</div>
//         <div className="bg-red-300 w-20 h-20">3</div>
//         <div className="bg-red-300 w-20 h-20">4</div>
//       </div>
//     </div>
//   );
// }
