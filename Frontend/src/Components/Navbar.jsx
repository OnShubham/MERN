import { NavLink } from "react-router-dom";
import { Navbar as BootstrapNavbar, Nav } from "react-bootstrap";
import "./Navbar.css"; // Make sure this path is correct
import { useAuth } from "../store/auth"; // Ensure the useAuth hook is correctly implemented
import { FaReact } from "react-icons/fa";

export const Navbar = () => {
  const { isLoggedIn } = useAuth(); // This assumes your useAuth hook correctly provides isLoggedIn
  console.log("Login status: ", isLoggedIn);

  return (
    <BootstrapNavbar bg="dark" expand="lg">
      <div className="container">
        <BootstrapNavbar.Brand as={NavLink} to="/" className="navbar-brand text-white">
           <FaReact />  Tech-Tide
        </BootstrapNavbar.Brand>
        <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
        <BootstrapNavbar.Collapse
          id="basic-navbar-nav" // Fixed the extra space issue
          className="justify-content-end"
        >
          <Nav className="ml-auto fs-3 gap-5">
            {/* Removed `exact` as it's not a valid prop on Nav.Link */}
            <Nav.Link as={NavLink} to="/" className="nav-link">
              Home
            </Nav.Link>
            <Nav.Link as={NavLink} to="/about" className="nav-link">
              About
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contact" className="nav-link">
              Contact
            </Nav.Link>
            <Nav.Link as={NavLink} to="/services" className="nav-link">
              Services
            </Nav.Link>

            {isLoggedIn ? (
              <Nav.Link as={NavLink} to="/logout" className="nav-link">
                Logout
              </Nav.Link>
            ) : (
              <>
                <Nav.Link as={NavLink} to="/register" className="nav-link">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/login" className="nav-link">
                  Login
                </Nav.Link>
              </>
            )}
          </Nav>
        </BootstrapNavbar.Collapse>
      </div>
    </BootstrapNavbar>
  );
};
