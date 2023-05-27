import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {
    Link
  } from "react-router-dom";
function CollapsibleExample() {
    return (
        <Navbar className='Navbar-container' collapseOnSelect expand="lg"  variant="dark">
            <Container>
                <Navbar.Brand href="/">Aarya Moktan</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto"><Nav.Link className='me-auto-linl'  href="/">Home</Nav.Link>
                        <Nav.Link className='me-auto-linl'  ><Link to="/Project" style={{textDecoration:"none"}}>Projects</Link></Nav.Link>
                        <Nav.Link className='me-auto-linl' ><Link to="/Skills">Skills</Link></Nav.Link>
                        <Nav.Link className='me-auto-linl' ><Link to="/Contact">Contact</Link></Nav.Link>
                        <Nav.Link className='me-auto-linl me-auto-input' ><input type="text"/></Nav.Link>   
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default CollapsibleExample;