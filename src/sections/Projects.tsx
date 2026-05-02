import type { Project } from "../types";

const PROJECTS: Project[] = [
  {
    num: "01",
    name: "ECLAT Health",
    sub: "RCM Platform",
    role: "Frontend + Django",
    company: "Maitri Holdings",
    year: "2024 — Now",
    domain: "Healthcare",
    blurb:
      "Outsourcing tooling for a US-based revenue-cycle-management and medical-coding provider. Calm, dense interfaces for power users who live in the product all day.",
    tags: ["React", "Angular", "Django", "PostgreSQL"],
  },
  {
    num: "02",
    name: "Athena EHR",
    sub: "Browser Extension",
    role: "Frontend Engineer",
    company: "Maitri Holdings",
    year: "2024 — Now",
    domain: "Healthtech",
    blurb:
      "A Chrome extension that grafts itself onto Athena and other EHRs, surfacing internal tooling beside the medical record without breaking native workflows.",
    tags: ["React", "Chrome MV3", "TypeScript"],
  },
  {
    num: "03",
    name: "FoneMoney",
    sub: "Cross-border Remittance",
    role: "Frontend Lead",
    company: "F1Soft International",
    year: "2023 — 2024",
    domain: "Fintech",
    blurb:
      "Led frontend on a high-volume remittance platform serving the Nepali diaspora. Performance, accessibility and trust were non-negotiable.",
    tags: ["Angular", "RxJS", "NgRx", "TypeScript"],
  },
];

export function Projects() {
  return (
    <section id="projects" className="shell">
      <div className="section-head reveal">
        <div className="label">
          <span className="eyebrow">03 — Projects</span>
        </div>
        <h2 className="display">
          Selected <em className="italic" style={{ fontStyle: "italic" }}>work.</em>
        </h2>
      </div>

      <div className="projects-list">
        {PROJECTS.map((p, i) => (
          <article className="proj reveal" key={i} data-cursor="hover">
            <span className="proj-num">{p.num}</span>
            <div className="proj-head">
              <h3 className="proj-title">
                {p.name}
                <em className="italic proj-sub" style={{ fontStyle: "italic" }}>{p.sub}</em>
              </h3>
              <span className="proj-arrow" aria-hidden="true">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
                  <path d="M7 17L17 7M9 7h8v8" />
                </svg>
              </span>
            </div>
            <div className="proj-meta">
              <div><span className="proj-k">Role</span><span className="proj-v">{p.role}</span></div>
              <div><span className="proj-k">For</span><span className="proj-v">{p.company}</span></div>
              <div><span className="proj-k">Year</span><span className="proj-v">{p.year}</span></div>
              <div><span className="proj-k">Domain</span><span className="proj-v">{p.domain}</span></div>
            </div>
            <p className="proj-blurb">{p.blurb}</p>
            <div className="proj-tags">
              {p.tags.map((t) => <span className="tag" key={t}>{t}</span>)}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
