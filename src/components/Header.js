import "../Styles.css";
import { Link } from "react-router-dom";

function Header({ onBodyChange }) {
  return (
    <header className="header">
      <Link
        to="/about"
        onClick={() => onBodyChange("about")}
        className="header-link"
      >
        <h3>ABOUT ME</h3>
      </Link>
      <Link
        to="/projects"
        onClick={() => onBodyChange("projects")}
        className="header-link"
      >
        <h3>PROJECTS</h3>
      </Link>
      <Link
        to="/funfact"
        onClick={() => onBodyChange("funfact")}
        className="header-link"
      >
        <h3>FUN FACT OF THE DAY</h3>
      </Link>
      <a
        href="https://fineartamerica.com/profiles/guillermo-lizondo"
        className="header-link"
        target="_blank"  // Opens the link in a new tab
        rel="noopener noreferrer"
      >
        <h3>PHOTOGRAPHY</h3>
      </a>
    </header>
  );
}
export default Header;
