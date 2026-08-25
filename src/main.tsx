import { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, useLocation, Routes, Route } from "react-router";

import Home from "./pages/Home";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import Crew from "./pages/Crew";
import Meetings from "./pages/Meetings";
import Projects from "./pages/Projects";
import Requests from "./pages/Requests";
import Apply from "./pages/Apply";
import Members from "./pages/Members";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="crew" element={<Crew />} />
        <Route path="meetings" element={<Meetings />} />
        <Route path="projects" element={<Projects />} />
        <Route path="requests" element={<Requests />} />
        <Route path="apply" element={<Apply />} />
        <Route path="members" element={<Members />} />
        {/* Catch-all. Must stay last. */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
