import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
    return (
      <>
         <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#/about">About</Nav.Link>
            <Nav.Link href="#/work">Work</Nav.Link>
            <Nav.Link href="#/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>      
      </>
    );
}
 
export default NavBar;