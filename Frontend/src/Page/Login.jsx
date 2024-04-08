import { useState } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import {  } from "react-icons/fa";

const URL = "http://localhost:5000/api/auth/login";

export const Login = () => {
  const [formData, setFormData] = useState({
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
    // console.log(formData);

    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      console.log("login", response);

      if (response.ok) {
        const data = await response.json();

        storeTokenInLS(data.token);

        alert("Login successful");
        setFormData({ email: "", password: "" });
        navigate("/");
      } else {
        alert("Invalid credentials");
        console.log("Login", response);
      }
    } catch (error) {
      console.log("Login", error);
    }
  };
  return (
    <div className="container">
      <Row className="mt-5 ml-2">
        <Col className="" xs={12} md={4}>
          <img
            src="/images/login.png"
            alt="placeholder"
            className="img-fluid sm:w-1/2 md:w-3/4 lg:w-1/2 xl:w-3/4"
          />
        </Col>
        <Col
          xs={8}
          md={4}
          style={{ color: "white", margin: "6rem" }}
          className="shadow"
        >
          <Form onSubmit={handleSubmit} className="p-4" style={{}}>
          <h1 style={{ fontSize: "5rem" }}>Login </h1>
            <div className="fs-5">
              <Form.Group controlId="formEmail">
                <Form.Label  className="fs-3 mb-2">Email address</Form.Label>
                <Form.Control
                  type="email"
                  className="fs-3 mb-2"
                  placeholder="Enter email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>

              <Form.Group controlId="formPassword">
                <Form.Label  className="fs-3 mb-2">Password</Form.Label>
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
              type="Login"
            >
              Register 

            </Button>
          </Form>
        </Col>
      </Row>
    </div>
  );
};
