import { MotionConfig } from "framer-motion";
import Nav from "./components/Nav.jsx";
import Hero from "./components/Hero.jsx";
import { About, Skills, Experience } from "./components/Sections.jsx";
import Projects from "./components/Projects.jsx";
import { EducationCerts, Contact, Footer } from "./components/Closing.jsx";

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="bg-grid absolute inset-0" />
        <div className="glow absolute -top-40 left-1/4 h-[420px] w-[420px] rounded-full bg-azure/25" />
        <div className="glow absolute top-1/3 -right-20 h-[360px] w-[360px] rounded-full bg-violet/20" />
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
