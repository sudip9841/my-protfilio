import { useEffect, useState } from "react";
import portraitUrl from "../assets/portrait.png";
import cvUrl from "../assets/sudip_tamang_CV.pdf";
import { CvViewer } from "../components/CvViewer";

const CV_FILE_NAME = "sudip_tamang_CV.pdf";

export function Hero() {
  const [time, setTime] = useState("");
  const [cvOpen, setCvOpen] = useState(false);
  useEffect(() => {
    const update = () => {
      const opts: Intl.DateTimeFormatOptions = {
        timeZone: "Asia/Kathmandu",
        hour: "2-digit",
        minute: "2-digit",
        hour12: false,
      };
      setTime(new Intl.DateTimeFormat("en-GB", opts).format(new Date()) + " KTM");
    };
    update();
    const id = window.setInterval(update, 30000);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="hero hero-split shell" id="top" data-screen-label="01 Hero">
      <div className="hero-meta">
        <span>Kathmandu, Nepal — {time}</span>
        <span>v.2026 / portfolio</span>
      </div>

      <div className="hero-grid">
        <div className="hero-text">
          <h1 className="hero-title">
            <span className="line">
              <span>
                <em className="hero-greet">Hi,</em>
                {" "}
                <em className="hero-greet">I&apos;m</em>
                {" "}
                <span className="name-strong">Sudip</span>
                <span className="name-dot">.</span>
              </span>
            </span>
          </h1>

          <p className="hero-lede">
            I&apos;m an independent full-stack engineer from Kathmandu, Nepal — building
            calm, resilient interfaces in React, Angular and Django for fintech and
            healthcare teams.
          </p>

          <div className="hero-tags">
            <span>4 yrs shipping</span>
            <span aria-hidden="true">·</span>
            <span>Frontend-leaning</span>
            <span aria-hidden="true">·</span>
            <span>Currently @ Maitri Holdings</span>
          </div>

          <div className="hero-actions">
            <button
              type="button"
              onClick={() => setCvOpen(true)}
              className="btn btn-primary"
              data-cursor="hover"
            >
              View CV
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7z" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            </button>
            <a href="#contact" className="btn" data-cursor="hover">
              Get in touch
            </a>
          </div>
        </div>

        <div className="hero-portrait" aria-hidden="true">
          <div className="portrait-backdrop">
            <svg className="halftone" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
              <defs>
                <pattern id="halftoneDots" x="0" y="0" width="14" height="14" patternUnits="userSpaceOnUse">
                  <circle cx="3" cy="3" r="1.6" fill="var(--accent-2)" opacity="0.55" />
                </pattern>
                <pattern id="halftoneLines" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                  <line x1="0" y1="0" x2="0" y2="10" stroke="var(--accent-3)" strokeWidth="1" opacity="0.4" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#halftoneDots)" />
              <rect width="100%" height="100%" fill="url(#halftoneLines)" />
            </svg>
          </div>

          <div className="portrait-frame">
            <span className="portrait-blob blob-a" />
            <span className="portrait-blob blob-b" />
            <svg className="portrait-arc" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
              <circle
                cx="50"
                cy="50"
                r="48"
                fill="none"
                stroke="var(--border-strong)"
                strokeWidth="0.4"
                strokeDasharray="1 3"
              />
            </svg>
            <img src={portraitUrl} alt="" className="portrait-img" />
          </div>
        </div>
      </div>

      {cvOpen && (
        <CvViewer src={cvUrl} fileName={CV_FILE_NAME} onClose={() => setCvOpen(false)} />
      )}
    </section>
  );
}
