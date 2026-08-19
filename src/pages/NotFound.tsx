import { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import { Waves1 } from "../components/Icons";

import sailboat from "@assets/sailboat.svg";

export default function NotFound() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Page Not Found | Campus Coders Crew";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <>
      <Navbar />

      {/*
       * The navbar is fixed and transparent until scrolled, so the sky gradient
       * runs underneath it rather than starting below it. `to-60%` parks the
       * gradient on sky-light well before the wave, so the wave's top edge
       * meets a flat color instead of a mid-gradient seam.
       */}
      <main
        className="flex min-h-[70vh] flex-col items-center justify-center gap-6
          px-8 pt-40 pb-28 text-center font-sans text-ocean-dark
          bg-linear-to-b from-sky-dark to-sky-light to-60%"
      >
        <img
          src={sailboat}
          alt=""
          aria-hidden="true"
          className="h-40 w-auto sm:h-52"
          style={{
            animation: "sailboat-wave 5s ease-in-out infinite",
            transformOrigin: "20% 20%",
          }}
        />

        <p className="text-7xl font-bold tracking-tight sm:text-8xl">404</p>

        <h1 className="text-3xl font-semibold text-balance sm:text-4xl">
          This page drifted off the map
        </h1>

        <p className="max-w-prose text-balance">
          The link may be out of date, or the page may have been renamed. Head
          back to shore and we'll point you in the right direction.
        </p>

        <div className="mt-2 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="rounded-lg bg-ocean-light px-8 py-4
              font-semibold text-sand-light no-underline
              transition duration-300 hover:bg-ocean-dark"
          >
            Back to Home
          </Link>
          <Link
            to="/requests"
            className="rounded-lg px-8 py-4 outline-2 outline-ocean-light
              font-semibold text-ocean-light no-underline
              transition duration-300 hover:bg-ocean-light hover:text-sand-light"
          >
            Request a Product
          </Link>
        </div>
      </main>

      {/*
       * Fades the wave below from the sky-light section above into the
       * sand-light contact section. Referenced by `fill-[url(#skyToSand)]`.
       * Stop offsets are relative to the wave path's bounding box, so 0% is
       * the top of the wave shape and 100% is its lowest point.
       */}
      <svg aria-hidden="true" className="absolute size-0">
        <defs>
          <linearGradient id="skyToSand" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--color-sky-light)" />
            <stop offset="100%" stopColor="var(--color-sand-light)" />
          </linearGradient>
        </defs>
      </svg>

      {/*
       * `bg-sand-light` backs the wave so the area below its curve reads as the
       * contact section. `-mb-px` only closes the subpixel seam. Do not add
       * negative block margins here: the contact section below is `relative`,
       * so it paints over this unpositioned SVG and would hide the wave.
       */}
      <Waves1
        className="w-full h-48 -mb-px -scale-x-100
          bg-sand-light fill-[url(#skyToSand)]"
      />

      {/* Contacts */}
      <div className="relative bg-sand-light">
        {/* Grainy sand noise */}
        <svg
          className="absolute z-0 inset-0 size-full
            grayscale brightness-150 constrast-120 mix-blend-multiply"
        >
          <filter id="noiseFilter404">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>

          <rect className="size-full" filter="url(#noiseFilter404)" />
        </svg>
        <ContactFooter
          className="relative z-10 px-8 py-8 text-ocean-dark
          [&_a]:transition [&_a]:duration-300 [&_a]:hover:text-ocean-light"
        />
      </div>
    </>
  );
}
