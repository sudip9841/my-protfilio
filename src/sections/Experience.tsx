import type { ExperienceItem } from "../types";

const EXPERIENCE: ExperienceItem[] = [
  {
    when: "Sept 2024 — Present",
    role: "Software Engineer",
    company: "Maitri Holdings Services",
    where: "Lalitpur, Nepal",
    pill: "Healthcare · RCM",
    bullets: [
      "Frontend-led with Django responsibilities on outsourcing tooling for ECLAT Health, a US-based RCM and medical-coding provider.",
      "Built a browser extension that integrates directly with external EHR systems like Athena.",
      "Cross-functional delivery — shipping interfaces that hold up under daily clinical workflows.",
    ],
  },
  {
    when: "Dec 2023 — Sept 2024",
    role: "Software Engineer",
    company: "F1Soft International",
    where: "Lalitpur, Nepal",
    pill: "Fintech",
    bullets: [
      "Frontend lead on FoneMoney, a cross-border remittance platform, owning performance and UX of high-traffic flows.",
      "Mentored junior engineers, ran code reviews, and shaped feature planning with PMs and design.",
      "Tightened critical paths with measurable wins on usability and load.",
    ],
  },
  {
    when: "Apr 2022 — Dec 2023",
    role: "Junior Frontend Engineer",
    company: "InfoDevelopers",
    where: "Lalitpur, Nepal",
    pill: "Management & Fintech",
    bullets: [
      "Drove frontend on management systems and fintech apps, end-to-end through ship.",
      "Integrated REST APIs, refactored for maintainability, and pushed best-practice adoption across the team.",
      "Adopted emerging frontend tooling early, bringing the team's stack forward.",
    ],
  },
  {
    when: "Feb 2022 — Mar 2022",
    role: "Frontend Trainee",
    company: "InfoDevelopers — Winter Code Camp",
    where: "Lalitpur, Nepal",
    pill: "Bootcamp",
    bullets: [
      "Completed the Winter Intake Code Camp, then built a self-directed e-commerce app on Angular + Django to cement the fundamentals.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="shell">
      <div className="section-head reveal">
        <div className="label">
          <span className="eyebrow">02 — Work</span>
        </div>
        <h2 className="display">
          Where I've <em className="italic" style={{ fontStyle: "italic" }}>shipped.</em>
        </h2>
      </div>

      <div className="timeline">
        {EXPERIENCE.map((it, i) => (
          <article key={i} className="tl-item reveal" data-cursor="hover">
            <div className="when">{it.when}</div>
            <div>
              <h3>{it.role}</h3>
              <div className="company">
                {it.company} <span className="pill">{it.pill}</span>
              </div>
              <ul>
                {it.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
            <div className="arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                <path d="M7 17L17 7M9 7h8v8" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
