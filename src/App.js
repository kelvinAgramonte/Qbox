
import React from "react";
import {Routes, Route, useLocation} from 'react-router-dom'
import Home from './routes/Home'
import About from "./routes/About";
import ResearchSection from './routes/Research'
import Contact from "./routes/Contact";
import { AnimatePresence } from "framer-motion";




function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/research' element={<ResearchSection />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
