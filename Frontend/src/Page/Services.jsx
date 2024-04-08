import { useState, useEffect } from "react";
import { Card, Col, Row } from "react-bootstrap";

export const Services = () => {
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/services", {
        method: "GET",
      });
      const data = await response.json();
      setServices(data);
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  return (
    <div className="container">
      
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 gap-5 m-2">
        
        {services.map((service, index) => (
          <div className="col" key={index}>
            <Card className="border-0">
              <Card.Img
                variant="top"
                src={"images/design.png"}
                className="p-5"
                style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "" }}
                alt="Card image"
              />
              <Card.Body className="p-3">
                <Row>
                  {/* Left side: Title and Description */}
                  <Col md={6}>
                    <Card.Title>
                      <h2
                        style={{
                          color: "white",
                          fontSize: "2rem",
                          background: "blue",
                          margin: "",
                          padding: "10px",
                          borderRadius: "12px",
                        }}
                      >
                        {service.title}{" "}
                      </h2>
                    </Card.Title>
                  </Col>

                  {/* Right side: Price and Provider */}
                  <Col md={"4"}>
                    <Row>
                      <Col>
                        <Card.Text>
                          <h4 style={{ color: "black" }}>{service.price}</h4>
                        </Card.Text>
                      </Col>
                      <Col>
                        <Card.Text>
                          <small style={{ color: "black" }}>
                            {service.provider}
                          </small>
                        </Card.Text>
                      </Col>
                    </Row>
                  </Col>

                  <hr style={{ color: "black" }} />
                  {/* description */}
                  <Card.Text>
                    <small style={{ color: "black" }}>
                      {service.description}
                    </small>
                  </Card.Text>
                </Row>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
