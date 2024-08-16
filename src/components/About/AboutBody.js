import "../../Styles.css";
import { ReactComponent as FacebookIcon } from "../../Icons/facebook.svg";
import { ReactComponent as TwitterIcon } from "../../Icons/twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../Icons/linkedin.svg";
import { ReactComponent as InstagramIcon } from "../../Icons/instagram.svg";
import { ReactComponent as GithubIcon } from "../../Icons/github.svg";

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
          Hi there! I’m Guillermo Lizondo, a Full-Stack Software
          Engineer with a B.S. in Digital Media Software Engineering. I love
          crafting innovative solutions that make a real difference, from
          building backend projects to designing dynamic front-end
          experiences. My journey has been all about optimizing processes and
          enhancing productivity, all while collaborating with fantastic teams
          to deliver impactful results. Let’s connect and explore what we can do!
        </p>
      </section>
    </div>
  );
}

export default AboutBody;
