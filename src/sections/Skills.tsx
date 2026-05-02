import type { SkillCategory } from "../types";

const SKILL_CHIPS: string[] = [
  "React", "TypeScript", "Angular", "JavaScript", "Next.js", "RxJS", "NgRx",
  "Django", "Python", "PostgreSQL", "REST", "HTML", "CSS / SCSS", "Git",
  "Jenkins", "JIRA", "Postman", "Claude Code",
];

const SKILL_CATS: SkillCategory[] = [
  { h: "Frameworks", items: ["React", "Angular", "Next.js", "Django"] },
  { h: "Languages", items: ["TypeScript", "JavaScript", "Python", "HTML", "CSS / SCSS"] },
  { h: "State & data", items: ["RxJS", "NgRx", "REST APIs", "PostgreSQL"] },
  { h: "Tooling", items: ["Git", "Jenkins", "JIRA", "Postman", "Claude Code"] },
];

export function Skills() {
  return (
    <section id="skills" className="shell">
      <div className="section-head reveal">
        <div className="label">
          <span className="eyebrow">04 — Stack</span>
        </div>
        <h2 className="display">
          Tools I <em className="italic" style={{ fontStyle: "italic" }}>reach for.</em>
        </h2>
      </div>

      <div className="reveal">
        <div className="marquee">
          <div className="marquee-track">
            {[...SKILL_CHIPS, ...SKILL_CHIPS].map((s, i) => (
              <span className="skill-chip" key={i}>
                <span className="glyph">✦</span>
                {s}
              </span>
            ))}
          </div>
        </div>

        <div className="skills-grid">
          {SKILL_CATS.map((c) => (
            <div className="skill-cat" key={c.h}>
              <div className="h">{c.h}</div>
              <ul>
                {c.items.map((i) => <li key={i}>{i}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
