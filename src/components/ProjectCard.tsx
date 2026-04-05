import Header from "@/components/Header";
import Link from "next/link";
import type { ProjectType } from "@/lib/data/projects";
import Image from "next/image";

export function ProjectCard({ project }: { project: ProjectType }) {
  return (
    <Link
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
      className="project-card"
    >
      <div className="project-card__header">
        <Header type={2}>{project.title}</Header>
        <span className="project-card__header-suffix">-&gt;</span>
      </div>
      <div className="project-card__image-container">
        <Image
          width={0}
          height={0}
          sizes="100vw"
          src={project.image}
          className="project-card__image"
          alt={"This is a screenshot of " + project.title}
        />
      </div>
      <Skills skills={project.skills} />
      <p className="project-card__description">
        {project.description}{" "}
        <span className="project-card__fake-link">[Github Link]</span>
      </p>
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
