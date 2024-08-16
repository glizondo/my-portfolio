

function ProjectCard({ project }) {
    return (
      <div className="project-card">
        <h3>{project.title}</h3>
        <p><strong>{project.company}</strong> - {project.date}</p>
        <p>{project.description}</p>
        <div className="skills">
          {project.key_skills.map(skill => (
            <span key={skill} className="skill">{skill}</span>
          ))}
        </div>
        {project.link && (
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Learn More
          </a>
        )}
      </div>
    );
  }

  export default ProjectCard;