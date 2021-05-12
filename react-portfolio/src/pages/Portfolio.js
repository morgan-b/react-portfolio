import { Container, Row, Col, Card } from "../components/Project";
import foodImg from "../assets/foodist.png";
import workVibe from "../assets/workvibe.png";
import vidInt from "../assets/VideoIntel.png";
import wrkDay from "../assets/calendar.png";

const Portfolio = () => {
  return (
    <Container>
      
      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center">THE FOODIST</div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={foodImg} alt="bio" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Foodist app provides a place for “foodies” to plan trips to
              their dream restaurants. Users can discover restaurants based on
              food type and location to save to their various lists. Think of it
              as your foodie bucket list.
            </div>
          </Col>
        </Row>
        <a
          class="btn btn-outline-secondary"
          href="https://stevegekas.github.io/FoodApp/"
          target="_blank"
          rel="noreferrer"
        >
          Live App
        </a>
        <a
          class="btn btn-outline-secondary"
          href="https://github.com/morgan-b/FoodApp.git"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>




      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center">
              QUICKFRAME VIDEO INTELLIGENCE
            </div>
          </Col>
          <Col size="md-6">
            <div className="card-body">
              Video Intelligence allows for marketers to gain insight into what
              elements of their video content is driving performance
            </div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={vidInt} alt="bio" />
          </Col>
        </Row>
        <a
          class="btn btn-outline-secondary"
          href="https://www.figma.com/proto/gxv7CSSNL0N3zEY8izq3Zu/Video-Intelligence?node-id=2314%3A0&scaling=scale-down"
          target="_blank"
          rel="noreferrer"
        >
          Figma Prototype
        </a>
      </Card>





      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center">WORK VIBE</div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={workVibe} alt="bio" />
          </Col>
          <Col size="md-6">
            <div className="card-body">
              Work Vibe is a virtual workspace that allows users to track
              progress on any ongoing projects, organize and plan for upcoming
              work, and connect with other workers on Work Vibe
            </div>
          </Col>
        </Row>
        <a
          class="btn btn-outline-secondary"
          href="https://work-vibe.herokuapp.com/"
          target="_blank"
          rel="noreferrer"

        >
          Live App
        </a>
        <a
          class="btn btn-outline-secondary"
          href="https://github.com/burtk33/work-vibe"
          target="_blank"
          rel="noreferrer"

        >
          Git Repo
        </a>
      </Card>




      <Card>
        <Row>
          <Col size="md-12">
            <div className="card-header text-center">WORK DAY SCHEDULER</div>
          </Col>
          <Col size="md-6">
            <div className="card-body">
              The Work Day Scheduler allows for users to plan their workday
              based on meetings they enter into the app.
            </div>
          </Col>
          <Col size="md-6">
            <img className="card-img" src={wrkDay} alt="bio" />
          </Col>
        </Row>
        <a
          class="btn btn-outline-secondary"
          href="https://morgan-b.github.io/calendar-planner/"
          target="_blank"
          rel="noreferrer"
        >
          Live App
        </a>
        <a
          class="btn btn-outline-secondary"
          href="https://github.com/morgan-b/calendar-planner.git"
          target="_blank"
          rel="noreferrer"
        >
          Git Repo
        </a>
      </Card>
    </Container>
  );
};
export default Portfolio;
