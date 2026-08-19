import "../index.css";

import Hero from "../components/HomePage/Hero";
import Events from "../components/HomePage/Events";
import Contact from "../components/HomePage/Contact";
import Footer from "../components/HomePage/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="relative flex flex-col">
      <Navbar />
      <Hero />
      <Events />

      <div className="py-4 space-y-8 bg-linear-to-b from-sky-light to-sky-dark">
        <Contact />
        <Footer />
      </div>
    </div>
  );
}
