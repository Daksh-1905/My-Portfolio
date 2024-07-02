import React from "react";
import { Element } from "react-scroll";

const Contact = () => {
  return (
    <Element name="Contact">
      <div className="container contact-form" id="Contact">
        <h1 className="heading text-center">Contact Me</h1>
        <form
          action="https://formspree.io/f/mpwazpon"
          method="POST"
          className="d-flex flex-column"
        >
          <div>
            <h5 className="text-light">Name</h5>
            <input
              type="text"
              name="Username"
              placeholder="Enter Your Name"
              autoComplete="off"
              required
              className="input-field"
            />
          </div>

          <div className="my-3">
            <h5 className="text-light">Email</h5>
            <input
              type="email"
              name="Email"
              placeholder="Enter Your Email"
              autoComplete="off"
              required
              className="input-field"
            />
          </div>

          <div>
            <h5 className="text-light">Message</h5>
            <textarea
              name="Message"
              cols="74"
              rows="6"
              autoComplete="off"
              required
              className="message-field"
              placeholder="Enter Your Message"
              style={{ border: "none" }}
            ></textarea>
          </div>

          <div className="text-center">
            <input
              type="submit"
              className="btn btn-primary my-3 send-button"
              value="Send (via Email)"
              style={{ width: "30%", borderRadius: "30px" }}
            />
          </div>
        </form>
      </div>
    </Element>
  );
};

export default Contact;
