import React from "react";
import { Container, Row, Col } from "../components/Project";
// import CreatePostForm from "../components/CreatePostForm";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container>
      <div className="card">
        <Col size="md-8">
          <img
            className="card-img"
            src="../assets/biopicsquare.png"
            alt="bio"

          />
        </Col>

        <Col size="md-8">
          <div className="card-title" id="homeHeader">
            HI, I'M MORGAN
          </div>
          <p className="card-text" id="homeSubHeader">
            product manager, performance marketer{" "}
          </p>
          <p className="card-text" id="homeSubHeader">
            {" "}
            web developer
          </p>
          <p className="card-text">
            my background is in developing tech-driven solutions for performance
            marketers.
          </p>
          <button
            onclick="location.href = 'portfolio.html';"
            type="button"
            className="btn btn-outline-secondary homeButton"
          >
            SEE MY WORK
          </button>
        </Col>
      </div>
    </Container>
  );
};

export default Home;
