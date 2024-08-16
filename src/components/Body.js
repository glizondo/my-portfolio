import "../Styles.css";
import AboutBody from "./About/AboutBody";
import AboutSlide from "./About/AboutSlide";
import ProjectsSlide from "./Projects/ProjectsSlide";
import ProjectsBody from "./Projects/ProjectsBody";

import Slide from "./Slide";
import FunFactBody from "./FunFact/FunFactBody";

function Body({ bodyName }) {
  return (
    <div>
      {bodyName === "about" && (
        <div>
          <AboutSlide />
          <AboutBody />
        </div>
      )}
      {bodyName === "projects" && (
        <div>
          <ProjectsSlide />
          <ProjectsBody />
        </div>
      )}
      {bodyName === "funfact" && (
        <div>
          <FunFactBody />
        </div>
      )}
    </div>
  );
}

export default Body;
