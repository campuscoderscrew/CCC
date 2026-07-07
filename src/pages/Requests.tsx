import NavBar from "../components/Navbar";
import ContactFooter from "../components/ContactFooter";
import WebsiteApply from "../components/RequestsPage/WebsiteApply";
import { Waves1, Waves2 } from "../components/Icons";
import Join from "../components/RequestsPage/Join";


export default function Requests() {
  return (
    <>
      <NavBar />
      {/*
       * Navbar is fixed, not sticky; additional space is inserted after the
       * navbar until the issue is resolved
       */}
      <div className="h-14" />

      <WebsiteApply/>

      <Waves1 className="w-full h-48 -my-24 -scale-x-100 bg-transparent fill-white" />

      {/* TODO: Add new theme color #BAEBF8 */}
      {/* "Want to Join" Section */}
      {/* `-mt-48` and `pt-48` must match the height of the wave graphic above */}
      <Join/>

      <Waves2
        className="relative z-20 w-full h-96 
          bg-transparent fill-[#BAEBF8]"
      />
      <Waves1
        className="relative z-10 w-full h-96 -mt-48 
          bg-transparent fill-sky-light"
      />

      {/* Contacts */}
      {/* `-mt-48` and `pt-48` must match the height of the wave graphic above */}
      <div className="relative -mt-48 pt-48 bg-sand-light">
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
