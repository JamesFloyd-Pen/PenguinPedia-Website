import React, { Component } from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


//The website nagivation top bar
class PENGUIN_NAVBAR extends Component {
    state = {  }
    render() { 
        return ( 
            <div><Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand> PenguinPedia</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="./src/index">Home
                                                        </Nav.Link>
                        <Nav.Link href="https://www.knowledgefactory.net
                           /p/knowledefactory-topics.html">Penguins</Nav.Link>
                        <NavDropdown title="Web Development" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                              /p/reactjs-tutorial.html">ReactJS</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                             /p/react-native.html">React Native</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                              /p/node-js.html">NodeJS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=
                                                        "mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

            </div>
            
            /*
            <div>
                <p>PenguinPedia!</p>
                <a href="#penguin">Penguins</a>
                <a href="#about">About</a>
            </div>
            */
         );
    }
}
 
export default PENGUIN_NAVBAR;