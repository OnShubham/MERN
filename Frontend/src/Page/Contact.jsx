import { useState } from "react";
import { Form, Image, Button, Container, Row, Col } from "react-bootstrap";
import {} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formData);

    try {
      const response = await fetch(`http://localhost:5000/api/form/contact`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(" res from server", data);

        alert("Message Sent");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      }
    } catch (error) {
      console.log("Register", error);
    }
  };

  return (
    <div>
      {/*  */}

      <Container className="">
        <Row className="mt-5 gap-3  ">
          {/* Column with Image */}
          <Col md={4} xs={10}>
            <Image src="/images/info.png" fluid />
          </Col>

          {/* Column with Form */}
          <Col md={6} className="p-5 ">
            <h1 style={{fontSize:"5rem"}}>Contact </h1>
            <Form
              onSubmit={handleSubmit}
              className="justify-content-center gap-2"
            >
              {/* name */}
              <Form.Group controlId="formName">
                <Form.Label className="fs-2">Name</Form.Label>
                <Form.Control
                  type="text"
                  className="fs-2"
                  placeholder="Enter your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* phone */}

              <Form.Group controlId="fromphone">
                <Form.Label className="fs-2">Phone</Form.Label>
                <Form.Control
                  className="fs-2"
                  type="number"
                  placeholder="Enter your Number"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* email */}
              <Form.Group controlId="formEmail">
                <Form.Label className="fs-2">Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  className="fs-2"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              {/* message */}

              <Form.Group controlId="formMessage">
                <Form.Label className="fs-2">Message</Form.Label>
                <Form.Control
                  as="textarea"
                  className="fs-2"
                  rows={3}
                  placeholder="Enter your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </Form.Group>

              <br />

              <Button variant="primary" type="submit">
                Send
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
