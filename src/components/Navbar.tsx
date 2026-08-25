import { useState, useEffect } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

import logo from "@assets/logo.png";

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Requests", to: "/requests" },
  { label: "Apply", to: "/apply" },
  { label: "Members", to: "/members" },
  { label: "Meetings", to: "/meetings" },
  // { label: "Crew", to: "/crew" },
  // { label: "Projects", to: "/projects" },
];

/** Routes that paint their own dark background, so the navbar inverts to white. */
const DARK_ROUTES = ["/members"];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { pathname } = useLocation();
  const onDark = DARK_ROUTES.includes(
    pathname.toLowerCase().replace(/\/+$/, "") || "/"
  );

  useEffect(() => {
    const handleScroll = () => {
      // Toggle once we've scrolled past a small threshold
      setScrolled(window.scrollY > 10);
    };

    // Run once on mount in case the page loads already scrolled
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkClass =
    "font-bold no-underline px-4 py-4 transition-colors " +
    (onDark
      ? "text-white hover:bg-white/15"
      : "text-[hsl(204,98%,15%)] hover:bg-[hsl(195,80%,90%)]");

  // On a dark page the translucent white scroll bar would swallow white text.
  const barSolid = scrolled && !onDark;

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkClass} ${isActive ? "underline underline-offset-4" : ""}`;

  return (
    <div>
      {/* Main bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 min-[600px]:px-8 transition-colors duration-300"
        style={{
          backgroundColor: barSolid ? "hsla(0, 0%, 100%, 0.85)" : "transparent",
          backdropFilter: barSolid ? "blur(8px)" : "none",
          borderBottom: barSolid
            ? "hsl(195, 80%, 90%) solid 1px"
            : "1px solid transparent",
        }}
      >
        {/* Logo + name */}
        <Link
          to="/"
          className={`flex items-center gap-1 font-bold no-underline ${
            onDark ? "text-white" : "text-[hsl(204,98%,15%)]"
          }`}
        >
          <span className="relative inline-flex items-center justify-center">
            <span
              className="absolute inset-0 m-auto h-10 w-10 rounded-full"
              style={{
                backgroundColor: "hsl(204, 91%, 25%)",
                transform: "translateX(-3px)",
              }}
            />
            <img
              src={logo}
              alt="Campus Coders Crew Logo"
              className="relative h-8 w-auto"
            />
          </span>
          CCC
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`min-[600px]:hidden bg-transparent border-none cursor-pointer ${
            onDark ? "text-white" : "text-[hsl(204,98%,15%)]"
          }`}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              style={{
                transition: "transform 0.5s ease",
                transform: "rotate(360deg)",
              }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeWidth="2"
                d="M6 18L18 6m0 12L6 6"
              />
            </svg>
          ) : (
            <svg
              style={{ transition: "transform 0.5s ease" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="fixed top-0 left-1/2 -translate-x-1/2 z-50 hidden min-[600px]:flex flex-row">
        {navLinks.map(({ label, to }) => (
          <NavLink key={to} to={to} className={activeLinkClass}>
            {label}
          </NavLink>
        ))}
      </nav>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div
          className="fixed left-0 right-0 z-50 flex justify-between min-[600px]:hidden px-4"
          style={{
            top: "3.5rem",
            backgroundColor: onDark
              ? "hsla(204, 98%, 15%, 0.9)"
              : "hsla(190, 85%, 80%, 0.7)",
            backdropFilter: "blur(8px)",
            borderTop: onDark
              ? "hsla(0, 0%, 100%, 0.25) solid 1px"
              : "hsl(190, 85%, 80%) solid 1px",
            borderBottom: onDark
              ? "hsla(0, 0%, 100%, 0.25) solid 1px"
              : "hsl(190, 85%, 80%) solid 1px",
          }}
        >
          {navLinks.map(({ label, to }) => (
            <NavLink
              key={to}
              to={to}
              className={activeLinkClass}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
