import Header from "@/components/Header";
import Link from "next/link";
import type { ProjectType } from "@/lib/data/projects";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link href={"/"} className="project-card">
      <div className="project-card__header">
        <Header type={2}>{project.title}</Header>
        <span className="project-card__header-suffix">-&gt;</span>
      </div>
      <div className="project-card__image" />
      <Skills skills={project.skills} />
      <p className="project-card__description">{project.description}</p>
    </Link>
  );
}

function Skills({ skills }: { skills: string[] }) {
  return (
    <div className="project-card__skills">
      {skills.map((skill, i) => (
        <SkillChip key={i} skill={skill} />
      ))}
    </div>
  );
}

function SkillChip({ skill }: { skill: string }) {
  return <div className="project-card__skill-chip">{skill}</div>;
}
