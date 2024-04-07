import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";

export const Services = () => {
  // State to store the fetched services
  const [services, setServices] = useState([]);

  // Function to fetch services from the API
  const fetchServices = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/data/services", {
        method: "GET",
      }); // Assuming your API is served from the same host
      const data = await response.json();
      setServices(data); // Update state with fetched services
    } catch (error) {
      console.error("Error fetching services:", error);
    }
  };

  // Fetch services when the component mounts
  useEffect(() => {
    fetchServices();
  }, []); // Empty dependency array to fetch services only once when the component mounts

  return (
    <div className="container">
      <div className="row">
        {/* Map through the fetched services and render a card for each service */}
        {services.map((service, index) => (
          <div className="col-lg-4 col-md-6 "  key={index}>
            <Card className=""  >
              <Card.Img
                variant="top"
                src={"images/design.png"} // Assuming your service object has an 'image' field
                className="p-5"
                alt="Card image"
              />
              <Card.Body className="m-3">
                <Card.Title>
                  {" "}
                  <h1 style={{ color: "black" }}> {service.title}</h1>
                </Card.Title>{" "}
                {/* Assuming your service object has a 'title' field */}
                <div className="row">
                  <div className="col-md-6">
                    <Card.Text>{service.description}</Card.Text>{" "}
                    {/* Assuming your service object has a 'description' field */}
                    <Card.Text>{service.price}</Card.Text>{" "}
                    {/* Assuming your service object has a 'price' field */}
                  </div>
                  <div className="col-md-6 ">
                    <Card.Text>{service.provider}</Card.Text>{" "}
                    {/* Assuming your service object has a 'provider' field */}
                  </div>
                </div>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};
