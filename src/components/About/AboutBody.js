import { ReactComponent as FacebookIcon } from "../../Icons/facebook.svg";
import { ReactComponent as GithubIcon } from "../../Icons/github.svg";
import { ReactComponent as InstagramIcon } from "../../Icons/instagram.svg";
import { ReactComponent as LinkedInIcon } from "../../Icons/linkedin.svg";
import { ReactComponent as TwitterIcon } from "../../Icons/twitter.svg";
import "../../Styles.css";

function AboutBody() {
  return (
    <div className="about-body">
      <section className="about-body-contact">
        <div className="social-media">
          <a
            href="https://linkedin.com/in/guillermo-lizondo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon width={30} height={30} />
          </a>
          <a
            href="https://facebook.com/lizonman"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon width={30} height={30} />
          </a>
          <a
            href="https://twitter.com/glizondo1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon width={30} height={30} />
          </a>
          <a
            href="https://instagram.com/glizondo1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <InstagramIcon width={30} height={30} />
          </a>
          <a
            href="https://github.com/glizondo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GithubIcon width={30} height={30} />
          </a>
        </div>
      </section>
      <section className="about-body-content">
        <h2>About me</h2>
        <p>
        Hey there! I’m Will Lizondo, a Full-Stack Software Engineer with a degree in 
        Digital Media Software Engineering. I’m all about building tech that makes a 
        difference, whether it's optimizing backend systems or creating dynamic front-end designs. 
        I’ve built machine learning models for image classification and predicting 
        logistics, and I love finding new ways to make things work better. I’m into teamwork, cross-collaboration,
        and learning new concepts. Let’s connect and see what awesome things we can build together!
        </p>
      </section>
    </div>
  );
}

export default AboutBody;
