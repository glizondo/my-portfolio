import "../../Styles.css";
import ProjectsList from "./ProjectsList";

function ProjectsBody() {
  return (
    <div className="about-body">
      <section className="about-body-content">
        <h2>Projects and Experience</h2>
        <p>
          <ProjectsList/>
        </p>
      </section>
    </div>
  );
}

export default ProjectsBody;
