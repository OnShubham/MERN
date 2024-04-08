import { Container, Row, Col, Image } from "react-bootstrap";
import {
  FaDatabase,
  FaBrain,
  FaCog,
  FaShieldAlt,
  FaFileAlt,
  FaRocket,
  FaPhoneAlt,
} from "react-icons/fa";

export const About = () => {
  return (
    <div>
      {" "}
      <Container>
        <Row>
          <Col md={4} xs={10}>
            <Image src="/images/home.png" fluid />
          </Col>
          <Col md={6} className="p-5 mt-5">
            <h1 className="display-2 mb-4 text-white">
              About Tech-Tide <FaBrain />{" "}
            </h1>
            <br />
            <p className="fs-3 text-white">
              Tech-Tide is a groundbreaking endeavor aimed at delivering
              unparalleled web solutions through the power of MERN stack
              technologies. Our team of dedicated developers has meticulously
              crafted a platform that combines innovation, functionality, and
              scalability to meet the evolving needs of modern businesses.{" "}
              <FaDatabase />
            </p>
            <br />
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col className="p-5 mt-5">
            <h1 className="display-2 mb-4 text-white">
              Admin Dashboard <FaCog />
            </h1>
            <br />
            <p className="fs-3 text-white">
              Empower your administrators with our robust Admin Dashboard. From
              adding new services to monitoring user activity, our dashboard
              provides all the tools you need to manage your platform
              efficiently.
            </p>
            <br />
            <h2 className="display-2 mb-4 text-white">
              Security <FaShieldAlt />
            </h2>
            <p className="fs-3 text-white">
              Your security is our priority. With advanced JWT encryption and
              authentication mechanisms, we prioritize safeguarding your data
              and ensuring confidentiality at every step.
            </p>
            <h2 className="display-2 mb-4 text-white">
              Contact Us <FaPhoneAlt />
            </h2>
            <p className="fs-3 text-white">
              Have questions or inquiries? Were here to help! Reach out to our
              team via our contact page, and well be delighted to assist you.
            </p>
            <br />
          </Col>
          <Col className=" mt-5">
            <br />
            <h2 className="display-2 mb-4 text-white">
              Models and Contact Pages <FaFileAlt />
            </h2>
            <p className="fs-3 text-white">
              Our meticulously crafted models ensure seamless data management,
              while our user-friendly contact pages facilitate easy
              communication with your audience.
            </p>
            <br />
            <h2 className="display-2 mb-4 text-white">
              Get Started <FaRocket />
            </h2>
            <p className="fs-3 text-white">
              Ready to embark on your journey with [Your Project Name]? Contact
              us today to learn more about how our innovative platform can
              elevate your web development experience. Whether youre a startup
              looking to make your mark or an established enterprise seeking to
              stay ahead of the curve, [Your Project Name] is here to help you
              succeed.
            </p>
            <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};
