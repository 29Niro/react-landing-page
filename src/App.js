import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './Pages/Homepage';
import Contact from './Pages/Contact';
import WebHosting from './Pages/WebHosting';
import Comingsoon from './Pages/Comingsoon';
import SocialMedia from './Pages/services/SocialMedia';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="social-media" element={<SocialMedia />} />
        <Route path="/web-hosting" element={<WebHosting />} />
        <Route path="/coming-soon" element={<Comingsoon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
