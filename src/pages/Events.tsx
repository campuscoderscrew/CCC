import React, { useState } from "react"
import NavBar from "../components/NavBar"
import EventCard from "../components/EventCard"

const events = [
    { date: "June 11", time: "4:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 11", time: "6:00 - 7:00 PM", title: "Team Zebra Meeting", tags: ["Team Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 16", time: "4:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 18", time: "4:00 - 6:00 PM", title: "Team Tiger Meeting", tags: ["Team Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 19", time: "5:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
    { date: "June 26", time: "4:00 - 6:00 PM", title: "General Body Meeting", tags: ["Open Meeting", "Club Meeting"], description: "Some general details about the events, what's covered, purpose, etc. Lorem ipsum sit amet dolor, lorem ipsum...", contact: "primary_contact@gmail.com", location: "Some St. Place, Building" },
]

export default function Events() {

    return (
        <>
            <NavBar />



            <div style={{ position: 'relative', marginTop: '4rem' }}>

                {/* top waves */}
                <div style={{ position: 'relative', height: '350px', zIndex: 1 }}>
                    <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <path d="M0,150 C500,250 900,10 1440,120 L1440,350 L0,350 Z" fill="url(#Lightgradient)" />
                        <defs>
                            <linearGradient id="Lightgradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#3595C1', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#034478', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <path d="M0,180 C700,300 1000,10 1440,150 L1440,350 L0,350 Z" fill="url(#middle)" />
                        <defs>
                            <linearGradient id="middle" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" style={{ stopColor: '#075588', stopOpacity: 1 }} />
                                <stop offset="100%" style={{ stopColor: '#073488', stopOpacity: 1 }} />
                            </linearGradient>
                        </defs>
                    </svg>
                    <svg viewBox="0 0 1440 250" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" style={{ display: 'block', position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
                        <path d="M0,200 C900,330 1100,30 1440,180 L1440,350 L0,350 Z" fill="#193463" />
                    </svg>
                </div>

                {/* background */}
                <div style={{ position: 'relative', height: '30rem', backgroundColor: '#193463', zIndex: 2 }} />

                {/* cards grid */}
                <div style={{ position: 'relative', padding: '3rem 2rem', paddingTop: '120px', marginTop: '-50rem', marginBottom: '-15rem', zIndex: 3 }}>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10 max-w-5xl mx-auto">
                        {events.map((event, i) => (
                            <EventCard key={i} {...event} />
                        ))}
                    </div>
                </div>

                {/* bottom waves */}
                <div style={{ position: 'relative', height: '350px', transform: 'scale(-1, -1)', zIndex: 1, marginTop: '-5rem' }}>
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





            </div>



        </>
    )
}