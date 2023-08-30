
import './appnav.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartShopping} from '@fortawesome/free-solid-svg-icons'




function Appnav(props) {

  return (
    <div className='app-nav'>
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <NavDropdown title="Shop" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#allproducts">All Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#popularitems">
                Popular Items
              </NavDropdown.Item>
              <NavDropdown.Item href="#newarrival">
                New Arrival
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
          <Button variant="outline-dark" className='cart-btn'>
            <div className="icon">
            <FontAwesomeIcon icon={faCartShopping} />
            </div>
            <div>Cart</div>
            <div className='cart-num'>{props.value}</div>
          </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Appnav