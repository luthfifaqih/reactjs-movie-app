import { Navbar, Nav, Container } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar>
        <Container>
          <Navbar.Brand>Movie App</Navbar.Brand>
          <Nav>
            <Nav.Link href="/">Trending</Nav.Link>
            <Nav.Link href="/">Superheroes</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
