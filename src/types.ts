export type Theme = "light" | "dark";

export interface ExperienceItem {
  when: string;
  role: string;
  company: string;
  where: string;
  pill: string;
  bullets: string[];
}

export interface Project {
  num: string;
  name: string;
  sub: string;
  role: string;
  company: string;
  year: string;
  domain: string;
  blurb: string;
  tags: string[];
}

export interface SkillCategory {
  h: string;
  items: string[];
}
