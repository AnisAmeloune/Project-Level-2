import React from "react";
import { Button , Navbar , Nav , Form , Container} from "react-bootstrap";

function NavScrollExample() {
  return (
    <Navbar className="background">
      <Container fluid>
        <Navbar.Brand className="whiteColor" href="#">
          My Coocking{" "}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
          
          <Nav.Link className="whiteColor" href="#action1">
                Home
              </Nav.Link>
            
              <Nav.Link className="whiteColor" href="#action2">
                Draft
              </Nav.Link>
              <Nav.Link className="whiteColor" href="#action1">
                Home
              </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScrollExample;
