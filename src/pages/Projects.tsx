import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaPython,
  FaNodeJs,
  FaUser,
} from "react-icons/fa";
import type { IconType } from "react-icons";

import NavBar from "../components/NavBar";
import Footer from "../components/HomePage/Footer";
import singleShark from "@assets/single-shark.png";

type TechIcon = "html" | "css" | "js" | "react" | "python" | "node";

type Project = {
  name: string;
  team: string;
  semester: string;
  year: number;
  techStack: TechIcon[];
  memberCount: number;
};

const projects: Project[] = [
  {
    name: "Example Project Name",
    team: "Team X",
    semester: "Summer '25",
    year: 2025,
    techStack: ["html", "css", "js"],
    memberCount: 3,
  },
  {
    name: "Example Project Name",
    team: "Team X",
    semester: "Summer '25",
    year: 2025,
    techStack: ["html", "css", "js"],
    memberCount: 3,
  },
  {
    name: "Example Project Name",
    team: "Team X",
    semester: "Summer '25",
    year: 2025,
    techStack: ["html", "css", "js"],
    memberCount: 3,
  },
  {
    name: "Example Project Name",
    team: "Team X",
    semester: "Summer '25",
    year: 2025,
    techStack: ["html", "css", "js"],
    memberCount: 3,
  },
];

const filters = ["All", "2026", "2025", "Team X", "Team Y"];

const techIconMap: Record<
  TechIcon,
  { Icon: IconType; color: string; bg: string }
> = {
  html: { Icon: FaHtml5, color: "white", bg: "#E34F26" },
  css: { Icon: FaCss3Alt, color: "white", bg: "#1572B6" },
  js: { Icon: FaJs, color: "black", bg: "#F7DF1E" },
  react: { Icon: FaReact, color: "#1572B6", bg: "#222" },
  python: { Icon: FaPython, color: "white", bg: "#3776AB" },
  node: { Icon: FaNodeJs, color: "white", bg: "#339933" },
};

function ProjectCard({ project }: { project: Project }) {
  return (
    <div
      className="bg-white border-2 border-white rounded-lg p-4 flex flex-col gap-3
        transition duration-300 hover:shadow-lg hover:-translate-y-1"
    >
      <h3 className="font-bold text-ocean-dark text-lg text-center">{project.name}</h3>
      <div className="aspect-square bg-[#043e6c] rounded" />
      <div className="text-sm text-center text-ocean-dark">
        {project.team} - {project.semester}
      </div>
      <div className="flex justify-between items-center gap-2 flex-wrap">
        <div className="flex gap-1">
          {project.techStack.map((tech, i) => {
            const { Icon, color, bg } = techIconMap[tech];
            return (
              <div
                key={i}
                className="w-7 h-7 rounded flex items-center justify-center"
                style={{ backgroundColor: bg, color }}
              >
                <Icon size={18} />
              </div>
            );
          })}
        </div>
        <div className="flex gap-1">
          {Array.from({ length: project.memberCount }).map((_, i) => (
            <div
              key={i}
              className="w-7 h-7 rounded-full bg-gray-300 flex items-center
                justify-center text-gray-500"
            >
              <FaUser size={14} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  const filtered = projects.filter((p) => {
    if (activeFilter === "All") return true;
    if (/^\d{4}$/.test(activeFilter)) return p.year === parseInt(activeFilter);
    return p.team === activeFilter;
  });

  return (
    <div className="relative flex flex-col">
      <NavBar />

      {/* Title */}
      <section
        className="bg-white flex flex-col items-center"
        style={{ paddingTop: "calc(3rem + 30px)" }}
      >
        <h1 className="relative z-10 text-3xl font-bold text-ocean-dark pt-8 pb-0 leading-none">
          Projects
        </h1>
      </section>

      {/* Top wave divider (SVG, mirror of bottom) */}
      <svg
        className="block w-full -mb-px"
        viewBox="0 0 1200 250"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect width="1200" height="250" fill="#044377" />
        <path
          d="M0,170 C300,90 800,250 1200,180 L1200,0 L0,0 Z"
          fill="#065387"
        />
        <path
          d="M0,130 C350,55 750,210 1200,140 L1200,0 L0,0 Z"
          fill="#2d88b5"
        />
        <path
          d="M0,70 C300,0 800,140 1200,80 L1200,0 L0,0 Z"
          fill="white"
        />
      </svg>

      {/* Projects */}
      <section className="relative overflow-hidden bg-[#044377] text-sand-light py-12 px-4">
        {/* Top-left shark */}
        <div
          aria-hidden
          className="absolute left-4 top-25 w-20 h-20 pointer-events-none rotate-[-15deg]"
          style={{
            WebkitMaskImage: `url(${singleShark})`,
            maskImage: `url(${singleShark})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            backgroundColor: "#1e3362",
          }}
        />

        {/* Top-right shark */}
        <div
          aria-hidden
          className="absolute right-6 top-16 w-40 h-40 pointer-events-none rotate-[20deg] scale-x-[-1]"
          style={{
            WebkitMaskImage: `url(${singleShark})`,
            maskImage: `url(${singleShark})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            backgroundColor: "#1e3362",
          }}
        />

        {/* Bottom-left shark */}
        <div
          aria-hidden
          className="absolute left-8 bottom-14 w-36 h-36 pointer-events-none rotate-[30deg]"
          style={{
            WebkitMaskImage: `url(${singleShark})`,
            maskImage: `url(${singleShark})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            backgroundColor: "#1e3362",
          }}
        />

        {/* Bottom-right shark */}
        <div
          aria-hidden
          className="absolute right-8 bottom-10 w-28 h-28 pointer-events-none rotate-[-10deg] scale-x-[-1]"
          style={{
            WebkitMaskImage: `url(${singleShark})`,
            maskImage: `url(${singleShark})`,
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskSize: "contain",
            maskSize: "contain",
            backgroundColor: "#1e3362",
          }}
        />

        {/* Filters */}
        <div className="relative z-10 -mx-4 flex flex-wrap justify-evenly mb-10">
          {filters.map((f) => {
            return (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className="w-32 py-3 rounded-xl font-bold cursor-pointer
                  border-none transition-colors duration-300 ease-out
                  bg-[#193463] text-sand-light
                  hover:bg-white hover:text-[#193463]"
              >
                {f}
              </button>
            );
          })}
        </div>

        {/* Grid */}
        <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 gap-10 mx-[calc((100vw-40rem)/6+3rem)]">
          {filtered.map((p, i) => (
            <ProjectCard key={i} project={p} />
          ))}
        </div>
      </section>

      {/* Bottom wave + CTA combined */}
      <div className="bg-sky-light">
        {/* Bottom wave divider (SVG) */}
        <svg
          className="block w-full -mt-px -mb-px"
          viewBox="0 0 1200 250"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="1200" height="250" className="fill-sky-light" />
          <path
            d="M0,180 C300,110 700,215 1200,250 L1200,0 L0,0 Z"
            fill="#2d88b5"
          />
          <path
            d="M0,140 C350,65 650,177 1200,215 L1200,0 L0,0 Z"
            fill="#065387"
          />
          <path
            d="M0,80 C300,0 700,120 1200,160 L1200,0 L0,0 Z"
            fill="#044377"
          />
        </svg>

        {/* CTA */}
        <section
          className="px-4 pt-2 pb-12 flex flex-col items-center gap-6 text-ocean-dark"
        >
          <h2 className="text-2xl font-bold text-center">
            Want to see your project here?
          </h2>
          <a
            href="https://go.umd.edu/CCC-website-request"
            className="px-6 py-3 bg-ocean-dark text-sand-light font-bold rounded-lg
              no-underline transition-colors duration-300 ease-out
              hover:bg-sand-light hover:text-ocean-dark"
          >
            Request a Website!
          </a>
        </section>
      </div>

      {/* Footer */}
      <div className="bg-sky-light px-4 pb-4">
        <Footer />
      </div>
    </div>
  );
}
