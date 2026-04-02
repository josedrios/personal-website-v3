import Header from "@/components/Header";
import Note from "@/components/Note";
import { ProjectCard } from "@/components/ProjectCard";
import Link from "next/link";

export default function Projects() {
  return (
    <main>
      <Header type={1}>Projects</Header>
      <ProjectCard />
      <ProjectCard />
      <ProjectCard />
      <Note>
        The rest of my projects can be found on my{" "}
        <Link
          target="_blank"
          rel="noopener noreferrer"
          href={"https://github.com/josedrios"}
        >
          Github
        </Link>
      </Note>
    </main>
  );
}
