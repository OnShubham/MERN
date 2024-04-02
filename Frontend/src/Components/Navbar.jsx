import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import './Navbar.css'; // Import your custom CSS file

export const Navbar = () => {
  return (
    <BootstrapNavbar bg="dark" expand="lg">
      <div className="container">
        <BootstrapNavbar.Brand as={NavLink} to="/" className="navbar-brand">
          Logo
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav "
          className="justify-content-end"
        >
          <Nav className="ml-auto fs-3 gap-5">
            <Nav.Link as={NavLink} to="/" exact className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/register" className="nav-link">
              Register
            </Nav.Link>
            <Nav.Link as={NavLink} to="/login" className="nav-link">
              Login
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link">
              Services
            </Nav.Link>
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};
