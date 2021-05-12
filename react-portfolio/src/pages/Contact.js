import React from "react";
import { Container, Row, Col, Card } from "../components/Project";
import mabIMG from "../assets/mab.png";

const Contact = () => {
    return(
  <Container>
       <Card>
    <Row>
    <Col size="md-12">
       
        <div className="card-header text-center">
            Contact Me
          </div>
          </Col>
          <Col size="md-2">
            <img className="card-img" src={mabIMG} alt="bio" />
          </Col>
          <Col size="md-10">
          <div className="card-body">

          <p className="blockquote" id="homeSubHeader">
            Email:
            <a href="mailto:mabailey079@gmail.com"> mabailey079@gmail.com</a>
          </p>

          <p className="blockquote" id="homeSubHeader">
            Phone: (610)-724-6633
          </p>
          </div>
          </Col>
      
   
    </Row>
    </Card>
  </Container>
  )
};
export default Contact;
