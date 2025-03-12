
import './App.css';
import ScrollReveal from "scrollreveal";
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import { useEffect, useState } from 'react';
import Footer from './components/Footer';





function App() {
 
  const [scrollShadow, setScrollShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollShadow(window.scrollY > 50);
      scrollActive();
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sr = ScrollReveal({
      origin: "top",
      distance: "80px",
      duration: 2000,
      reset: true,
    });
    
    sr.reveal(".featured-text-card");
    sr.reveal(".featured-name", { delay: 100 });
    sr.reveal(".featured-text-info", { delay: 200 });
    sr.reveal(".featured-text-btn", { delay: 200 });
    sr.reveal(".social_icons", { delay: 200 });
    sr.reveal(".featured-image", { delay: 300 });
    sr.reveal(".project-box", { interval: 200 });
    sr.reveal(".top-header");
    sr.reveal(".about-info", { origin: "left", delay: 100 });
    sr.reveal(".contact-info", { origin: "left", delay: 100 });
    sr.reveal(".skills-box", { origin: "right", delay: 100 });
    sr.reveal(".form-control", { origin: "right", delay: 100 });
  }, []);

  const scrollActive = () => {
    const sections = document.querySelectorAll("section[id]");
    const scrollY = window.scrollY;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const sectionId = current.getAttribute("id");

      const link = document.querySelector(`.nav-menu a[href*=${sectionId}]`);
      if (link) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add("active-link");
        } else {
          link.classList.remove("active-link");
        }
      }
    });
  };

  return (
    <>
      <div className="container">
        {/* --------------- HEADER --------------- */}
        <Navbar scrollShadow={scrollShadow}/>
        {/* -------------- MAIN ---------------- */}
        <Hero />
        {/* --------------- FOOTER --------------- */}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
