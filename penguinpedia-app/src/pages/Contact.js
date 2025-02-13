import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import '../components/styles/App.css';

function Contact() {
  return (
    <Container>
      <h1>Contact Us</h1>
      <Form className="contact-form">
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formMessage">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" name="message" rows={3} placeholder="Enter your message" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>

      <h2>Follow us on social media</h2>
      <ul className="social-media-links">
        <li><a href="https://www.facebook.com/james.floyd.372/">Facebook</a></li>
        <li><a href="https://x.com/JamesFloydIV">Twitter</a></li>
        <li><a href="https://www.instagram.com/commanderpip/">Instagram</a></li>
      </ul>
    </Container>
  );
}

export default Contact;