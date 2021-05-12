import React from "react";
import { Link } from "react-router-dom";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
library.add(fab);

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Morgan Bailey
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/portfolio"
              className={
                window.location.pathname === "/portfolio"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Portfolio
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/contact"
              className={
                window.location.pathname === "/contact"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Contact
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/resume"
              className={
                window.location.pathname === "/resume"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Resumé
            </Link>
          </li>
          <a
          
              className="nav-item nav-link"
              href="https://www.linkedin.com/in/morganabailey/"
              target="_blank"
              rel="noreferrer"
            > 
            <FontAwesomeIcon icon={["fab","linkedin"]}/>
     
            </a>
            <a
              className="nav-item nav-link"
              href="https://github.com/morgan-b"
              target="_blank"
              rel="noreferrer"
            >
               <FontAwesomeIcon icon={["fab","github"]}/>
            </a>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
