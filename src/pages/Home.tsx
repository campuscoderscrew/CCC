import React from "react";

import "../index.css"

// import HeroNavBar from "../components/HomePage/HeroNavbar";
import Hero from "../components/HomePage/Hero";
import Events from "../components/HomePage/Events";
import WebApply from "../components/HomePage/WebApply";
import Join from "../components/HomePage/Join";
import FAQ from "../components/HomePage/FAQ";
import Contact from "../components/HomePage/Contact";
import Footer from "../components/HomePage/Footer";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      {/** <HeroNavbar />*/}
      <NavBar/>
      <Hero />
      <Events />
      <WebApply />

      <div className="py-4 space-y-8 bg-linear-to-b from-sky-light to-sky-dark">
        <Join />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
