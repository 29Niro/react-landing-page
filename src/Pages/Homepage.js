import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import OurServices from '../components/OurServices';
// import GridComponent from '../components/GridComponent';
import AboutUs from '../components/AboutUs';
import Technologies from '../components/Technologies';
import HeroComponent from '../components/HeroComponent';
import { useLocation, useNavigate } from 'react-router-dom';

function Homepage() {
  const [isVisible, setIsVisible] = useState(false);
  const hash = useLocation().hash;
  const navigate = useNavigate();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.slice(1));
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
          });
        }
      }, 500);
    }
  }, [hash]);

  const handleHashChange = () => {
    navigate('/');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.onscroll = () => {
    if (document.documentElement.scrollTop > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  return (
    <div>
      <Header />
      <HeroComponent />
      <section id="about-us">
        <AboutUs />
      </section>
      <section id="services">
        <OurServices />
      </section>
      <section id="technologies">
        <Technologies />
      </section>
      <Footer />
      {isVisible && (
        <div
          className="fixed bottom-4 right-4 bg-blue-500 text-white p-4 rounded-full cursor-pointer"
          onClick={handleHashChange}
        >
          Scroll to Top
        </div>
      )}
    </div>
  );
}

export default Homepage;
