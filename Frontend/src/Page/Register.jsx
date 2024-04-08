import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import {} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

export const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { storeTokenInLS } = useAuth();

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

      if (response.ok) {
        const data = await response.json();
        console.log(" res from server", data);

        toast.success("Register successful");
        storeTokenInLS(data.token);
        setFormData({
          username: "",
          phone: "",
          email: "",
          password: "",
        });
        navigate("/login");
      } else {
        toast.error("Invalid credentials");
        console.log("Register", response);
      }
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
          className=" "
        >
          <Form onSubmit={handleSubmit} className="" style={{}}>
            <h1 style={{ fontSize: "5rem" }}>Register </h1>
            <div className="fs-5">
              <Form.Group controlId="formusername">
                <Form.Label className="fs-2">First Name</Form.Label>
                <Form.Control
                  type="text"
                  className="fs-3 mb-2"
                  placeholder="Enter first name"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formphone">
                <Form.Label className="fs-3 mb-2">Last Phone</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter last name"
                  className="fs-3 mb-2"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formEmail">
                <Form.Label className="fs-3 mb-2"> Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  className="fs-3 mb-2"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label className="fs-3 mb-2">Password</Form.Label>
                <Form.Control
                  type="password"
                  className="fs-3 mb-2"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                />
              </Form.Group>
            </div>

            <br />
            <Button
              variant="primary"
              className="fs-2"
              style={{ width: "100%", height: "5rem" }}
              type="submit"
            >
              Register
            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
