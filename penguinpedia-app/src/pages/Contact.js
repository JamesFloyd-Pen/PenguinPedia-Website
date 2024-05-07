import React from 'react';
import '../components/styles/App.css';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Email:
          <input type="email" name="email" />
        </label>
        <label>
          Message:
          <textarea name="message"></textarea>
        </label>
        <input type="submit" value="Submit" />
      </form>

      <h2>Follow us on social media</h2>
      <ul className="social-media-links">
        <li><a href="https://www.facebook.com">Facebook</a></li>
        <li><a href="https://www.twitter.com">Twitter</a></li>
        <li><a href="https://www.instagram.com">Instagram</a></li>
      </ul>
    </div>
  );
}

export default Contact;