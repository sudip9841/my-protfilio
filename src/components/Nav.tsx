import type { Theme } from "../types";

interface NavProps {
  theme: Theme;
  setTheme: (t: Theme) => void;
}

export function Nav({ theme, setTheme }: NavProps) {
  return (
    <nav className="nav" aria-label="Primary">
      <a href="#top" className="navlink">Sudip</a>
      <a href="#about" className="navlink">About</a>
      <a href="#experience" className="navlink">Work</a>
      <a href="#projects" className="navlink">Projects</a>
      <a href="#skills" className="navlink">Stack</a>
      <a href="#contact" className="navlink">Contact</a>
      <button
        className="theme-toggle"
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        aria-label="Toggle theme"
        title="Toggle theme"
      >
        {theme === "dark" ? (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4 12H2M22 12h-2M5.6 5.6L4.2 4.2M19.8 19.8l-1.4-1.4M5.6 18.4l-1.4 1.4M19.8 4.2l-1.4 1.4" />
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
          </svg>
        )}
      </button>
    </nav>
  );
}
