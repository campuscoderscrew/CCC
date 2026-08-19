import NavBar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import WebsiteApply from "../components/RequestsPage/ProductApply";
import { Waves1 } from "../components/Icons";

export default function Requests() {
  return (
    <>
      <NavBar />
      {/*
       * Navbar is fixed, not sticky; additional space is inserted after the
       * navbar until the issue is resolved
       */}
      <div className="h-14" />

      {/*
       * Fades the wave below from the white page background into the
       * sand-light contact section. Referenced by `fill-[url(#sandFade)]`.
       * Stop offsets are relative to the wave path's bounding box, so 0% is
       * the top of the wave shape and 100% is its lowest point.
       */}
      <svg aria-hidden="true" className="absolute size-0">
        <defs>
          <linearGradient id="sandFade" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="white" />
            <stop offset="100%" stopColor="var(--color-sand-light)" />
          </linearGradient>
        </defs>
      </svg>

      <WebsiteApply />

      {/*
       * `bg-sand-light` backs the wave so the area below its curve reads as the
       * contact section. `-mb-px` only closes the subpixel seam. Do not add
       * negative block margins here: the contact section below is `relative`,
       * so it paints over this unpositioned SVG and would hide the wave.
       */}
      <Waves1
        className="w-full h-48 -mb-px -scale-x-100
          bg-sand-light fill-[url(#sandFade)]"
      />

      {/* Contacts */}
      <div className="relative bg-sand-light">
        {/* Grainy sand noise */}
        <svg
          className="absolute z-0 inset-0 size-full
            grayscale brightness-150 constrast-120 mix-blend-multiply"
        >
          <filter id="noiseFilter">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.5"
              numOctaves="1"
              stitchTiles="stitch"
            />
          </filter>

          <rect className="size-full" filter="url(#noiseFilter)" />
        </svg>
        <ContactFooter
          className="relative z-10 px-8 py-8 text-ocean-dark
          [&_a]:transition [&_a]:duration-300 [&_a]:hover:text-ocean-light"
        />
      </div>
    </>
  );
}
