import React from "react";
import { Container, Row, Col, Card } from "../components/Project";
import Footer from "../components/Footer";

const Contact = () => {
    return(
        <div>
  <Container>
       <Card>
    <Row>
    <Col size="md-12">
       
        <div className="card-header text-center">
            Contact Me
          </div>
          </Col>
       
          <Col size="md-12">
          <div className="card-body">

          <p className="blockquote text-center" id="homeSubHeader">
            Email:
            <a href="mailto:mabailey079@gmail.com"> mabailey079@gmail.com</a>
          </p>

          <p className="blockquote text-center" id="homeSubHeader">
            Phone: (610)-724-6633
          </p>
          </div>
          </Col>
      
   
    </Row>
    </Card>
  </Container>
  <Footer></Footer>
  </div>
  )
};
export default Contact;
