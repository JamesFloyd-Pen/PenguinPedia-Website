import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//The website nagivation top bar
class PENGUIN_NAVBAR extends Component {
    state = {  }
    render() { 
        return ( 
            <div>
                <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand> PenguinPedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link to="/About">Home</Nav.Link>
                        <Nav.Link><Link to="/About">About</Link></Nav.Link>
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

            </div>
            
         );
    }
}
 
export default PENGUIN_NAVBAR;