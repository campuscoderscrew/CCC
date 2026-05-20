import React, {useState} from "react"
import logo from '../../assets/logo.png'

// logo, nav links (Events, Project Requests, Join) 
export default function HeroNavbar() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div>
            {/* main bar */}
            <div className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 min-[600px]:px-8"
                style={{ backgroundColor: 'hsla(190, 85%, 80%, 0.7)', backdropFilter: 'blur(8px)', borderBottom: 'hsl(190, 85%, 80%) solid 1px' }}>
                {/* logo + name */}
                <a href="#" className="flex gap-1 font-bold no-underline"
                    style={{ color: 'hsl(204, 98%, 15%)' }}>
                    <img src={logo} alt="Campus Coders Crew Logo" style={{ height: '2rem', width: '2rem', marginBottom: '-0.6rem', marginTop: '-0.3rem' }} />
                    Campus Coders Crew
                </a>
                {/* hamburger */}
                <button onClick={() => setMenuOpen(!menuOpen)}
                    className="min-[600px]:hidden bg-transparent border-none cursor-pointer"
                    style={{ color: 'hsl(204, 98%, 15%)' }}>
                    {menuOpen ? (
                        <svg style={{ transition: 'transform 0.5s ease', transform: 'rotate(360deg)' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M6 18L18 6m0 12L6 6" />
                        </svg>
                    ) : (
                        <svg style={{ transition: 'transform 0.5s ease' }} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    )}
                </button>

            </div>
            {/* desktop nav */}
            <nav className="fixed top-0 z-50 hidden min-[600px]:flex flex-row" style={{ right: '1rem' }}>
                <a href="#events" className="font-bold no-underline hover:bg-[hsl(195,80%,90%)]" style={{ padding: '1rem 1rem', color: 'hsl(204, 98%, 15%)' }}>Events</a>
                <a href="#request-website" className="font-bold no-underline hover:bg-[hsl(195,80%,90%)]" style={{ padding: '1rem 1rem', color: 'hsl(204, 98%, 15%)' }}>Project Requests</a>
                <a href="#join-us" className="font-bold no-underline hover:bg-[hsl(195,80%,90%)]" style={{ padding: '1rem 1rem', color: 'hsl(204, 98%, 15%)' }}>Join</a>
            </nav>
            {/* mobile dropdown */}
            {menuOpen && (
                <div className="fixed left-0 right-0 z-50 flex justify-between min-[600px]:hidden"
                    style={{ top: '3.5rem', paddingLeft: '1rem', paddingRight: '1rem', backgroundColor: 'hsla(190, 85%, 80%, 0.7)', backdropFilter: 'blur(8px)', borderTop: 'hsl(190, 85%, 80%) solid 1px', borderBottom: 'hsl(190, 85%, 80%) solid 1px' }}>
                    <a href="#events" className="font-bold no-underline hover:bg-[hsl(195,80%,90%)]" style={{ padding: '1rem 1rem', color: 'hsl(204, 98%, 15%)' }}>Events</a>
                    <a href="#request-website" className="font-bold no-underline hover:bg-[hsl(195,80%,90%)]" style={{ padding: '1rem 1rem', color: 'hsl(204, 98%, 15%)' }}>Project Requests</a>
                    <a href="#join-us" className="font-bold no-underline hover:bg-[hsl(195,80%,90%)]" style={{ padding: '1rem 1rem', color: 'hsl(204, 98%, 15%)' }}>Join</a>
                </div>
            )}
        </div>
    )
}