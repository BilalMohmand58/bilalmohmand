import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_p7wyb1z",
        "template_k7t8otb",
        form.current,
        "cMNNjmUXIJptewPZr"
      )
      .then(
        (result) => {
          console.log(result.text);
          setMessage(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div className="contact" id="contact">
      <div className="left">
        <h4>Contact Us</h4>
        <h1>Let's talk</h1>
        <button class="btn btn-contact">
          <span class="text-muted">
            <a
              className="twitter"
              href="https://twitter.com/BilalMohmand58"
              target="_blank"
              rel="opener noreferrer"
            >
              <i class="fab fa-twitter fa-2x"></i>
            </a>

            <a
              className="github"
              href="https://github.com/BilalMohmand58"
              target="_blank"
              rel="opener noreferrer"
            >
              <i class="fab fa-github fa-2x"></i>
            </a>
          </span>
        </button>
      </div>
      <div className="right">
        <div className="rightItem">
          <h2>Send us message</h2>
          <form ref={form} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input
              type="email"
              placeholder="example@gmail.com"
              name="user_email"
            />
            <textarea
              placeholder="Message"
              name="message"
              id=""
              cols="30"
              rows="6"
            ></textarea>
            <button className="form-btn">Send</button>
            {message && <span>Thanks! will get back to you shortly 😊</span>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
