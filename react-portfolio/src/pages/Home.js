import React from "react";
import { Container, Row, Col } from "../components/Project";
import bioImg from "../assets/biopicsquare.png"
// import CreatePostForm from "../components/CreatePostForm";
// import PostsList from "../components/PostsList";

const Home = () => {
  return (
    <Container>
      <div className="card">
      <Row>
      <Col size="md-12">
      <div className="card-header text-center" id="homeHeader">
            HI, I'M MORGAN
          </div>
          </Col>
        <Col size="md-4">
         
          <img
            className="card-img"
            src={bioImg}
            alt="bio"

          />
          
        </Col>


        <Col size="md-8">
       
          <div class="card-body">
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
          </div>
        </Col>
        </Row>
      </div>
    </Container>
  );
};

export default Home;
