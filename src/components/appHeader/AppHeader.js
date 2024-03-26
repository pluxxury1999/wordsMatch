import "./appHeader.css";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

const AppHeader = () => {
    return (
        <Navbar expand="lg" data-bs-theme="dark" className="app-header">
            <Container>
                <Navbar.Brand href="#home" className="logo">Words Match</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto" style={{fontSize: 20}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#link">LeaderBoard</Nav.Link>
                        <NavDropdown title="Game" data-bs-theme="light" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Mode 1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Mode 2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Mode 3</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Project on GitHub</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default AppHeader;
