import { Container, Card, CardImg, CardBody, CardText } from "react-bootstrap";
import "./index.css";
import ProfilePic from "../../assets/images/profile-pic.jpg";
import FullStack from "../../assets/images/FullStackBadge.png";
import BackEnd from "../../assets/images/BackendBadge.png";
import FrontEnd from "../../assets/images/FrontEndBadge.png";
import Foundations from "../../assets/images/JavaScriptFoundationsBadge.png";
import StackPic from "../../assets/images/MERN-logo.png";

import {
  faCss3Alt,
  faGithub,
  faHtml5,
  faJs,
  faMdb,
  faNodeJs,
  faReact,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBug,
  faCoins,
  faDollarSign,
  faMap,
  faMobileScreenButton,
  faShield,
} from "@fortawesome/free-solid-svg-icons";
const AboutSection = () => {
  return (
    <Container className="cardContainer">
      <h1 className="about-header-txt">Certifications</h1>
      <div className="cards-badge">
        <Card>
          <CardImg variant="top" src={FullStack} />
          <CardBody>
            <CardText>Full-Stack JavaScript Software Development</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg variant="top" src={FrontEnd} />
          <CardBody>
            <CardText>Front End React Development</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg variant="top" src={BackEnd} />
          <CardBody>
            <CardText>Express and MongoDB Back End Development</CardText>
          </CardBody>
        </Card>

        <Card>
          <CardImg variant="top" src={Foundations} />
          <CardBody>
            <CardText>JavaScript Foundational Applications</CardText>
          </CardBody>
        </Card>
      </div>
      <h1 className="about-header-txt">Skills & Technologies</h1>
      <div className="tech-img-multi">
        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faHtml5} />
          <CardText>HTML5</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faCss3Alt} />
          <CardText>CSS3</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faJs} />
          <CardText>JavaScript</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faGithub} />
          <CardText>Github</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faReact} />
          <CardText>React</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faNodeJs} />
          <CardText>Node.js</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faMap} />
          <CardText>Leaflet</CardText>
        </Card>
      </div>

      <div className="tech-img-multi">
        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faDollarSign} />
          <CardText>Stripe Integration</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faShield} />
          <CardText>Bcrypt</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faCoins} />
          <CardText>JSON Web Token</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faBug} />
          <CardText>Debugging</CardText>
        </Card>

        <Card>
          <FontAwesomeIcon className="icons-tech" icon={faMobileScreenButton} />
          <CardText>Mobile Optimization</CardText>
        </Card>
      </div>
    </Container>
  );
};
export default AboutSection;
