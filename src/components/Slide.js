import "../Styles.css";
import Profile from "../Icons/photo.png"


function Slide() {
  return (
    <div className="slide">
      <div className="slide-content">
        <img className="icon-profile-photo" src={Profile} alt="profile"></img>
        <p>
          We are a company dedicated to providing the best services to our
          customers. Our mission is to deliver top-notch solutions with a focus
          on innovation and quality.
        </p>
      </div>
    </div>
  );
}

export default Slide;
