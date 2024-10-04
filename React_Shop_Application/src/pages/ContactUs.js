import React from 'react';
import '../styles/Contact.css';
function ContactUs() {
  return (
    <div>
      <h2>Contact Us</h2>
      <form>
        <label>Name:</label>
        <input type="text" placeholder="Your Name" />
        <label>Email:</label>
        <input type="email" placeholder="Your Email" />
        <label>Message:</label>
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
