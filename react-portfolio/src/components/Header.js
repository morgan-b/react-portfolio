import React from "react";
import { Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import resume from "../assets/Morgan_Bailey_Resume.pdf";
import Navbar from 'react-bootstrap/Navbar';

library.add(fab);

// Depending on the current path, this component sets the "active" class on the appropriate navigation link item
function Header() {
  return (
      <header>
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">
        Morgan Bailey
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      
      <Navbar.Collapse id="basic-navbar-nav">
         
          <ul className="navbar-nav">
            <li className="nav-item nav-link">
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

            <li className="nav-item nav-link">
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

            <li className="nav-item nav-link">
            <a  className="nav-item nav-link"
               href={resume} download>Resumé
              </a>
            </li>

            <li className="nav-item nav-link">
              <a
                className="nav-item nav-link"
                href="https://www.linkedin.com/in/morganabailey/"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "linkedin"]} />
              </a>
            </li>

            <li className="nav-item nav-link">
              <a
                className="nav-item nav-link"
                href="https://github.com/morgan-b"
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={["fab", "github"]} />
              </a>
            </li>
          </ul>
      
        </Navbar.Collapse>
</Navbar>
</header>
  );
}

export default Header;
