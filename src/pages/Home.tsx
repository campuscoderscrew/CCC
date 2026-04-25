import React from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Events from "../components/Events";
import WebApply from "../components/WebApply";
import Join from "../components/Join";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
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
