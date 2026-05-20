import { useEffect } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, useLocation, Routes, Route } from 'react-router'


import Home from './pages/Home'


function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

import Crew from './pages/Crew';
import Events from './pages/Events';
import Projects from './pages/Projects';
import Requests from './pages/Requests';

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="crew" element={<Crew />} />
        <Route path="events" element={<Events />} />
        <Route path="projects" element={<Projects />} />
        <Route path="requests" element={<Requests />} />

      </Routes>
    </>
  );
}



createRoot(document.getElementById('root')!).render(
  <HashRouter >
    <App />
  </HashRouter >
)