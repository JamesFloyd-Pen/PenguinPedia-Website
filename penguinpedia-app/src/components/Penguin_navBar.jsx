import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//The website nagivation top bar
class PENGUIN_NAVBAR extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">PenguinPedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <Nav.Link as={Link} to="/Penguins">Penguins</Nav.Link>
                        <Nav.Link as={Link} to="/Location">Locations</Nav.Link>
                        <Nav.Link as={Link} to="/Contact">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>

            </div>
            
         );
    }
}
 
export default PENGUIN_NAVBAR;
/*            <Outlet />
NavDropdown, Form, Button, FormControl from 'react-bootstrap';

<Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand as={Link} to="/"> PenguinPedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/About">About</Nav.Link>
                        <NavDropdown title="Penguins" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                              /p/reactjs-tutorial.html">List of Penguins</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                             /p/react-native.html">Pegnuins by Biome</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                              /p/node-js.html">Emperor Penguin</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="https://www.penguinsinternational.org/donate/">Donate</Nav.Link>

                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

*/