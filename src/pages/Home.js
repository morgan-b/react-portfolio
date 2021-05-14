import React from "react";
import { Container, Row, Col,Card } from "../components/Project";
import bioImg from "../assets/biopicsquare.png";
import { Link } from "react-router-dom";
import  Footer  from "../components/Footer";


const Home = () => {
  return (
      <div>
    <Container>
 <Card>
        <Row>
       
          <Col size="md-6">
            <img className="card-img" src={bioImg} alt="bio" />
          </Col>

          <Col size="md-6">
          
            <div className="card-body">
            <Row>
            <div className="heading">
              HI, I'M MORGAN
            </div>
            <div className="blockquote">
                product manager, performance marketer & web developer

              </div>
              </Row>
              <Row>
              <p className="card-text">
                my background is in developing tech-driven solutions for
                performance marketers.
              </p>
              </Row>
              
            </div>
            
          </Col>

          </Row>
          <Link
                className="btn btn-outline-secondary"
                to="/portfolio"
              >
       
                SEE MY WORK
              </Link>
       
              </Card>
              
    </Container>
 <Footer></Footer>
 </div>
  );
};

export default Home;
