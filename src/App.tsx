import { CustomCursor } from "./components/CustomCursor";
import { Nav } from "./components/Nav";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Experience } from "./sections/Experience";
import { Projects } from "./sections/Projects";
import { Skills } from "./sections/Skills";
import { Education } from "./sections/Education";
import { Contact } from "./sections/Contact";
import { useReveal } from "./hooks/useReveal";
import { useTheme } from "./hooks/useTheme";

export function App() {
  const [theme, setTheme] = useTheme();
  useReveal();

  return (
    <>
      <div className="aurora" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />
      <CustomCursor />
      <Nav theme={theme} setTheme={setTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Education />
        <Contact />
      </main>
    </>
  );
}
