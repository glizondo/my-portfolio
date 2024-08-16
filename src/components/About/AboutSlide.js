import "../../Styles.css";
import Profile from "../../Icons/photo.png";

function AboutSlide() {
  return (
    <div className="slide">
      <div className="slide-content">
        <img className="icon-profile-photo" src={Profile} alt="profile"></img>
        <p>
          Embracing life’s challenges through code and collaboration—let’s build
          something great together.
        </p>
      </div>
    </div>
  );
}

export default AboutSlide;
