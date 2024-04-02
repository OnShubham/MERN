import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
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
      const response = await fetch(`http://localhost:5000/api/auth/register`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log(response);
    } catch (error) {
      console.log("Register", error);
    }
  };
  return (
    <div className="container">
      <Row className="mt-5 ml-2">
        <Col className="" xs={12} md={4}>
          <img
            src="/images/register.png"
            alt="placeholder"
            className="img-fluid sm:w-1/2 md:w-3/4 lg:w-1/2 xl:w-3/4"
          />
        </Col>
        <Col
          xs={8}
          md={4}
          style={{ color: "white", margin: "6rem" }}
          className="shadow p-2 "
        >
          <Form onSubmit={handleSubmit} className="p-5" style={{}}>
            <h1 className="">Register</h1>
            <div className="fs-5">
              <Form.Group controlId="formusername">
                <Form.Label>First Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter first name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formphone">
                <Form.Label>Last Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <br />
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
