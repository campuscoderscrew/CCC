import { useState } from "react"
import Navbar from "../components/Navbar"
import EventCard from "../components/EventCard"
import Contact from "..//components/HomePage/Contact"
import Footer from "../components/HomePage/Footer"

const events = [
    { date: "June 11", time: "4:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 11", time: "6:00 - 7:00 PM", title: "Team Zebra Meeting", tags: ["Team Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 16", time: "4:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 18", time: "4:00 - 6:00 PM", title: "Team Tiger Meeting", tags: ["Team Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 19", time: "5:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 26", time: "4:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
]

const TAG_OPTIONS = ["All", "Development Meeting", "Committee Meeting", "General Body Meeting"]


export default function Events() {

    const [searchText, setSearchText] = useState("")
    const [selectedTag, setSelectedTag] = useState("All")
    const [dropdownOpen, setDropdownOpen] = useState(false)

    const filteredEvents = events.filter((event) => {
        const matchesSearch = event.title.toLowerCase().includes(searchText.toLowerCase())
        const matchesTag = selectedTag === "All" || event.tags.includes(selectedTag)
        return matchesSearch && matchesTag
         })

    return (
        <>
            <Navbar />

            {/* page bg */}
            <div style={{ backgroundColor: '#193463' }}>

                {/* top section bg light blue */}
                <div style={{ position: 'relative', backgroundColor: 'hsl(190, 85%, 80%)', height: '450px', zIndex: 0 }} />

                {/* Title + Search*/}
                <div style={{ position: 'relative', marginTop: '-400px', zIndex: 20 }}>

                    {/* Title */}
                    <div className="w-full text-center pt-16 pb-4 px-4">
                        <h1 className="text-4xl font-bold" style={{ color: '#193463' }}>
                            Upcoming Events & Meetings
                        </h1>
                    </div>

                    {/* Search Bar */}
                    <div className="flex justify-center px-4 pb-48" style={{ position: 'relative', zIndex: 10 }}>
                        <div className="relative flex items-center bg-white rounded-full shadow px-3 py-2 w-full max-w-xl">
                             <div className="relative">
                                <button
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                className="flex items-center gap-1 text-sm font-medium text-gray-700 pr-3 border-r border-gray-300 cursor-pointer"
                            >
                                    {selectedTag}
                                    <span className="text-xs">▾</span>
                                </button>
                                    {dropdownOpen && (
                                    <div className="absolute top-8 left-0 bg-white border border-gray-200 rounded-lg shadow-lg w-48" style={{ zIndex: 50 }}>
                                    {TAG_OPTIONS.map((tag) => (
                                        <button
                                            key={tag}
                                            onClick={() => { setSelectedTag(tag); setDropdownOpen(false) }}
                                            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                        >
                                            {tag}
                                        </button>
                                    ))}
                                </div>
                            )}
                             </div>

                            <input
                            type="text"
                            placeholder="Search..."
                            value={searchText}
                            onChange={(e) => setSearchText(e.target.value)}
                            className="flex-1 px-3 text-sm outline-none bg-transparent text-gray-700"
                            />
                            <span className="text-gray-400">🔍</span>
                         </div>
                     </div>
                </div>

                {filteredEvents.length > 0 ? (
                    <div style={{ position: 'relative', marginTop: '0', pointerEvents: 'none' }}>

                        {/* top waves */}
                        <div style={{ position: 'relative', height: '350px', marginTop: '-15rem', zIndex: 1, pointerEvents: 'none' }}>
                            <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                <path d="M0,150 C500,250 900,10 1440,120 L1440,350 L0,350 Z" fill="url(#Lightgradient)" />
                                <defs>
                                    <linearGradient id="Lightgradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#3595C1', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#034478', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                <path d="M0,180 C700,300 1000,10 1440,150 L1440,350 L0,350 Z" fill="url(#middle)" />
                                <defs>
                                    <linearGradient id="middle" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" style={{ stopColor: '#075588', stopOpacity: 1 }} />
                                        <stop offset="100%" style={{ stopColor: '#073488', stopOpacity: 1 }} />
                                    </linearGradient>
                                </defs>
                            </svg>
                            <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', pointerEvents: 'none' }}>
                                <path d="M0,200 C900,330 1100,30 1440,180 L1440,350 L0,350 Z" fill="#193463" />
                            </svg>
                        </div>

                        {/* background */}
                        <div style={{ position: 'relative', height: filteredEvents.length <= 3 ? '15rem' : '30rem', backgroundColor: '#193463', zIndex: 2, pointerEvents: 'none' }} />

                        {/* cards grid */}
                        <div style={{ position: 'relative', padding: '3rem 2rem', paddingTop: '120px', marginTop: filteredEvents.length <= 3 ? '-35rem' : '-50rem', marginBottom: '-15rem', zIndex: 3 }}>
                            <div className="grid gap-x-10 gap-y-10 mx-auto justify-center" style={{ gridTemplateColumns: 'repeat(auto-fit, 320px)', maxWidth: '1080px' }}>
                                {filteredEvents.map((event, i) => (
                                    <div key={i} style={{ pointerEvents: 'auto' }}>
                                        <EventCard {...event} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* bottom waves */}
                        <div style={{ position: 'relative', height: '350px', transform: 'scale(-1, -1)', zIndex: 1, marginTop: filteredEvents.length <= 3 ? '13rem' : '-5rem', marginBottom: '-16rem' }}>
                            <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                <path d="M0,150 C500,250 900,10 1440,120 L1440,350 L0,350 Z" fill="url(#Lightgradient)" />
                            </svg>
                            <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                <path d="M0,180 C700,300 1000,10 1440,150 L1440,350 L0,350 Z" fill="url(#middle)" />
                            </svg>
                            <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                                <path d="M0,200 C900,330 1100,30 1440,180 L1440,350 L0,350 Z" fill="#193463" />
                            </svg>
                        </div>

                        {/*Contact+ Footer */}
                        <div className="pt-48 pb-4 space-y-8" style={{ backgroundColor: 'hsl(190, 85%, 80%)', position: 'relative', zIndex: 0, pointerEvents: 'auto' }}>
                            <Contact/>
                            <Footer/>
                        </div>

                    </div>
                ) : (
                    /* no results */
                    <div style={{ position: 'relative', marginTop: '0' }}>
                        <div className="text-center text-white py-32" style={{ position: 'relative', zIndex: 1 }}>
                            <p className="text-2xl font-semibold">No events match your search.</p>
                            <p className="text-white/70 mt-2">Try a different search term or filter.</p>
                        </div>

                        {/*Contact+ Footer */}
                        <div className="pt-12 pb-4 space-y-8" style={{ backgroundColor: 'hsl(190, 85%, 80%)', position: 'relative', zIndex: 0, pointerEvents: 'auto' }}>
                            <Contact/>
                            <Footer/>
                        </div>
                    </div>
                )}

            </div>

        </>
    )
}