import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import axios from "axios";

const Quote = () => {
  const [state, setState] = useState({
    company_name: "",
    order_description: "",
    name: "",
    email: "",
    phone_number: "",
    product_id: "",
    contact: "",
    image: null,
    sent: false,
    company_name_set: false,
    phone_set: false,
  });

  const handleInputChange = (event) => {
    if (event.target.name == "company_name") {
      setState({
        ...state,
        company_name_set: true,
        phone_set: true,
        [event.target.name]: event.target.value,
      });
    } else {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    }
  };

  // if (event.target.name == "phone_number") {
  //   setState({
  //     ...state,
  //     phone_set: true,
  //     [event.target.name]: event.target.value,
  //   });
  // }

  const handleUploadImage = (event) => {
    setState({
      ...state,
      image: event.target.files[0],
    });
  };

  const handleButtonClick = async () => {
    const form_data = new FormData();

    if (!state.company_name.length) {
      setState({
        ...state,
        company_name_set: true,
      });
      return;
    }

    if (!state.phone_number.length) {
      setState({
        ...state,
        phone_set: true,
      });
      return;
    }

    console.log(state);
    form_data.append("image", state.image);
    form_data.append("phone_number", state.phone_number);
    form_data.append("email", state.email);
    form_data.append("message", state.order_description);
    form_data.append("title", state.company_name);
    form_data.append("name", state.name);
    form_data.append("product_id", state.product_id);
    form_data.append("product_id", state.contact);

    try {
      await axios.post("/api/quote/send", form_data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      setState({
        company_name: "",
        order_description: "",
        name: "",
        email: "",
        phone_number: "",
        product_id: "",
        image: null,
        sent: true,
      });
      document.getElementById("file_stuff").value = null;
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className='not-container' style={{ marginBottom: "-6rem" }}></div>
      <h1 style={{ margin: "auto", maxWidth: "600px", marginBottom: "2rem" }}>
        Request a Quote
      </h1>
      {/* <h3 style={{ marginBottom: "1rem", margin: "auto", maxWidth: "600px" }}>
        All fields are required.
      </h3>
      <h3 style={{ marginBottom: "4rem", margin: "auto", maxWidth: "600px" }}>
        Please enter an image as well.
      </h3> */}
      <Form
        style={{
          maxWidth: "600px",
          margin: "auto",
          marginBottom: "50px",
          marginTop: "1rem",
        }}
      >
        <Form.Group>
          <Form.Control
            style={{ marginBottom: "10px" }}
            type='text'
            placeholder='Subject or Company Name'
            name='company_name'
            onChange={handleInputChange}
            value={state.company_name}
            isInvalid={state.company_name_set && !state.company_name.length}
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a title.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            type='text'
            placeholder='Contact'
            name='name'
            onChange={handleInputChange}
            value={state.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            as='textarea'
            style={{ height: "100px", marginBottom: "2rem" }}
            type='text'
            placeholder='Order Description'
            name='order_description'
            onChange={handleInputChange}
            value={state.order_description}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            type='text'
            placeholder='Product ID'
            name='product_id'
            onChange={handleInputChange}
            value={state.product_id}
          />
        </Form.Group>

        <Form.Group>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            type='email'
            placeholder='Email'
            name='email'
            onChange={handleInputChange}
            value={state.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            type='tel'
            placeholder='Phone Number'
            name='phone_number'
            value={state.phone_number}
            onChange={handleInputChange}
            isInvalid={state.phone_set && !state.phone_number.length}
          />
          <Form.Control.Feedback type='invalid'>
            Please enter a phone number.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group>
          <p style={{ marginBottom: "5px", fontWeight: "400" }}>
            Add image below
          </p>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            id='file_stuff'
            type='file'
            placeholder='image'
            onChange={handleUploadImage}
          />
        </Form.Group>
        <Button onClick={handleButtonClick}>Submit</Button>
      </Form>
      {state.sent ? (
        <Container>
          <Alert variant='success'>
            <Alert.Heading>Hey, thanks for contacting us!</Alert.Heading>
            <p>
              Aww yeah, you successfully read this important alert message. This
              means you have successfully sent a inquiry to us!
            </p>
            <hr />
            <p className='mb-0'>Someone will contact you shortly!</p>
          </Alert>
        </Container>
      ) : null}
    </>
  );
};

export default Quote;
