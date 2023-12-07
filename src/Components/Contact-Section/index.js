import "./index.css";
import { Form, Button } from "react-bootstrap";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactSection = () => {
  const formRef = useRef();

  const sendEmail = async (event) => {
    event.preventDefault();

    try {
      // Use the form reference to get the form element
      const form = formRef.current;

      // Information from emailjs to link my account to whomever emails me
      const response = await emailjs.sendForm(
        "service_ylpr0l8",
        "template_gtuv76k",
        form,
        "pyPG30-p25nCgWYpg"
      );

      window.alert("Email sent successfully", response);
    } catch (error) {
      window.alert("Email failed to send", error);
    }
  };

  return (
    <div className="email-submission-container">
      <div className="thanks-txt">
        <h1>
          Thank you for viewing this portfolio! <br></br>Please feel free to
          send me an message using this form, and I will get back to you at my
          earliest convenience.
        </h1>
      </div>

      <Form ref={formRef} onSubmit={sendEmail}>
        {/* Your form fields go here */}
        <Form.Group controlId="formName">
          <h4 className="txt-words">Name</h4>
          <Form.Control
            type="text"
            placeholder="Ex: Tom Brady"
            name="name"
            required
          />
        </Form.Group>

        <Form.Group controlId="formEmail">
          <h4 className="txt-words">Email</h4>
          <Form.Control
            type="email"
            placeholder="Ex: TomB@Patriots.com"
            name="email"
            required
          />
        </Form.Group>

        <Form.Group className="form-msg-box" controlId="formMessage">
          <h4 className="txt-words">Message</h4>
          <Form.Control
            as="textarea"
            id="message-box"
            rows={5} // Set an initial number of visible rows
            placeholder="Enter your message"
            name="message"
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Send Message
        </Button>
      </Form>
    </div>
  );
};

export default ContactSection;
