import React from "react";
import projectsData from "../../ProjectsData";
import ProjectCard from "./ProjectCard";

function ProjectList() {
  return (
    <div className="project-list">
      {projectsData.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </div>
  );
}

export default ProjectList;
