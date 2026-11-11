import { useEffect } from "react";
import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import { About, Skills, Experience } from "./components/Sections.jsx";
import Projects from "./components/Projects.jsx";
import { EducationCerts, Contact, Footer } from "./components/Closing.jsx";

// Scroll-triggered reveal: any element with class "reveal" fades up as it enters view.
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function App() {
  useReveal();
  useEffect(() => {
    const handleScroll = () => {
      const scrollProgress = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
      document.documentElement.style.setProperty("--scroll-progress", Math.min(scrollProgress, 1).toString());
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
      </div>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <EducationCerts />
        <Contact />
      </main>
      <Footer />
    </MotionConfig>
  );
}