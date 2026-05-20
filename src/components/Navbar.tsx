import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from '../../assets/logo.png'

const navLinks = [
  { label: "Home", to: "/home" },
  { label: "Requests", to: "/requests" },
  { label: "Events", to: "/events" },
  { label: "Crew", to: "/crew" },
  { label: "Projects", to: "/projects" },
]

export default function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const linkClass =
    "font-bold no-underline px-4 py-4 text-[hsl(204,98%,15%)] hover:bg-[hsl(195,80%,90%)] transition-colors"

  const activeLinkClass = ({ isActive }: { isActive: boolean }) =>
    `${linkClass} ${isActive ? "underline underline-offset-4" : ""}`

  return (
    <div>
      {/* Main bar */}
      <div
        className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 min-[600px]:px-8"
        style={{
          backgroundColor: "hsla(190, 85%, 80%, 0.7)",
          backdropFilter: "blur(8px)",
          borderBottom: "hsl(190, 85%, 80%) solid 1px",
        }}
      >
        {/* Logo + name */}
        <Link
          to="/"
          className="flex gap-1 font-bold no-underline text-[hsl(204,98%,15%)]"
        >
          <img
            src={logo}
            alt="Campus Coders Crew Logo"
            className="h-8 w-8 -mb-[0.6rem] -mt-[0.3rem]"
          />
          Campus Coders Crew
        </Link>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="min-[600px]:hidden bg-transparent border-none cursor-pointer text-[hsl(204,98%,15%)]"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? (
            <svg
              style={{ transition: "transform 0.5s ease", transform: "rotate(360deg)" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6m0 12L6 6" />
            </svg>
          ) : (
            <svg
              style={{ transition: "transform 0.5s ease" }}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Desktop nav */}
      <nav className="fixed top-0 right-4 z-50 hidden min-[600px]:flex flex-row">
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
            backgroundColor: "hsla(190, 85%, 80%, 0.7)",
            backdropFilter: "blur(8px)",
            borderTop: "hsl(190, 85%, 80%) solid 1px",
            borderBottom: "hsl(190, 85%, 80%) solid 1px",
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
  )
}