import { Card } from "react-bootstrap";
import { FaReact, FaNodeJs, FaDatabase, FaLock } from "react-icons/fa";

export const Home = () => {
  // Array of key features
  const keyFeatures = [
    {
      title: "MERN Stack Integration",
      description:
        "Harness the power of React.js, Node.js, Express.js, and Mongoose to create dynamic, responsive, and feature-rich web applications.",
    },
    {
      title: "Admin Dashboard",
      description:
        "Take control of your operations with our intuitive Admin Dashboard. Seamlessly manage services and monitor user details with ease.",
    },
    {
      title: "JWT Security",
      description:
        "Rest assured, your data is in safe hands. Our platform employs JWT security measures to protect your information and ensure privacy.",
    },
    {
      title: "RESTful API",
      description:
        "Utilize our RESTful API to streamline communication between your front-end and back-end systems, enabling smooth data exchange and seamless integration. ",
    },
  ];

  return (
    <>
      <div className="p-5">
        <section className="jumbotron text-center p-4 mt-5">
          <div className="container gap-5 ">
            <h1 className="display-2 mb-4 text-white">
              Welcome to Tech-Tide <br />
              <FaReact /> <FaNodeJs /> <FaDatabase />{" "}
            </h1>

            <div className="row">
              <div className="col-md-6">
                {/* Left content */}
                <div className="col-md-12"></div>
              </div>
              <div className="col-md-4">
                {/* Right content */}
                <div className="col-md-12">
                  <img
                    src="images/ai.png"
                    className="img-fluid rounded"
                    alt="Description of the image"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <br /> <br />
        {/* card */}
        <section>
          <div>
            <h1 className="display-4 text-center mt-5  text-white ">
              Key Features <FaLock />
            </h1>
          </div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="col-md-3">
                  <Card className="mb-4 custom-card">
                    <Card.Body>
                      <Card.Title className="fs-1 p-2  ">
                        {feature.title}
                      </Card.Title>
                      <br />
                      <Card.Text className="fs-4 p-2">
                        {feature.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* <section>
          <div>
            <h1 className="display-4 text-center mt-5  text-white ">
              Key Features <FaLock />
            </h1>
          </div>
          <div className="container mt-5">
            <div className="row justify-content-center">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="col-md-3">
                  <Card className="mb-4" style={{ height: "23rem" }}>
                    <Card.Body>
                      <Card.Title className="fs-1 p-2  ">
                        {feature.title}
                      </Card.Title>
                      <br />
                      <Card.Text className="fs-4 p-2">
                        {feature.description}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section> */}
      </div>
    </>
  );
};
