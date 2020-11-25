import React from "react";
import { Form } from "react-bootstrap";
import { Grid, Box, Button, Typography } from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import Navbar from "./Navbar";
import "./Contact.css";

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;

    return (
      <Box component="div" style={{ background: "#233" }}>
        <Navbar />
        <Grid container>
          <Grid container justify="center">
            <Typography
              variant="h5"
              style={{
                color: "tomato",
                textAlign: "center",
                textTransform: "uppercase",
                marginTop: "12px",
              }}
            >
              hire or contant me...
            </Typography>
          </Grid>
          <form
            onSubmit={this.submitForm}
            action="https://formspree.io/f/mrgoaeld"
            method="POST"
            className="form"
          >
            <Form.Group controlId="name" className="formgroup">
              <Form.Label style={{ color: "white", fontSize: "16px" }}>
                Full Name
              </Form.Label>
              <Form.Control
                type="text"
                name="name"
                // value={state.name}
                placeholder="Enter your full name"
                // onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="email" className="formgroup">
              <Form.Label style={{ color: "white", fontSize: "16px" }}>
                Email
              </Form.Label>
              <Form.Control
                type="email"
                name="email"
                // value={state.email}
                placeholder="Enter your email"
                // onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="subject" className="formgroup">
              <Form.Label style={{ color: "white", fontSize: "16px" }}>
                Subject
              </Form.Label>
              <Form.Control
                type="text"
                name="subject"
                // value={state.subject}
                placeholder="Enter subject"
                // onChange={onInputChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="subject" className="formgroup">
              <Form.Label style={{ color: "white", fontSize: "16px" }}>
                Message
              </Form.Label>
              <Form.Control
                as="textarea"
                name="message"
                // value={state.message}
                rows="3"
                placeholder="Enter your message"
                // onChange={onInputChange}
                required
              />
            </Form.Group>
            <Button
              className="button"
              variant="outlined"
              endIcon={<SendIcon />}
              type="submit"
              value="Send Message"
            >
              contact me
            </Button>

            {status === "SUCCESS" ? (
              <p className="message">Thanks for reaching out!</p>
            ) : (
              ""
            )}
            {status === "ERROR" && (
              <p className="message1">Ooops! There was an error.</p>
            )}
          </form>
        </Grid>
      </Box>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

export default ContactForm;
