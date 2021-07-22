import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";

const Quote = () => {
  const [state, setState] = useState({
    title: "",
    message: "",
    email: "",
    phone_number: "",
    image: null,
    sent: false,
  });

  const handleInputChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    });
  };

  const handleUploadImage = (event) => {
    setState({
      ...state,
      image: event.target.files[0],
    });
  };

  const handleButtonClick = async () => {
    const form_data = new FormData();

    console.log(state);
    form_data.append("image", state.image);
    form_data.append("phone_number", state.phone_number);
    form_data.append("email", state.email);
    form_data.append("message", state.message);
    form_data.append("title", state.title);
    try {
      await axios.post("/api/quote/send", form_data, {
        headers: {
          "Content-type": "multipart/form-data",
        },
      });
      setState({
        title: "",
        message: "",
        email: "",
        phone_number: "",
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
      <div className='not-container'></div>
      <Form
        style={{
          maxWidth: "600px",
          margin: "auto",
          marginBottom: "50px",
          marginTop: "-6rem",
        }}
      >
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='title'
            name='title'
            onChange={handleInputChange}
            value={state.title}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='text'
            placeholder='message'
            name='message'
            onChange={handleInputChange}
            value={state.message}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='email'
            placeholder='email'
            name='email'
            onChange={handleInputChange}
            value={state.email}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            type='tel'
            placeholder='phone_number'
            name='phone_number'
            value={state.phone_number}
            onChange={handleInputChange}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            id='file_stuff'
            type='file'
            placeholder='image'
            onChange={handleUploadImage}
          />
        </Form.Group>
        <Button onClick={handleButtonClick}>Submit</Button>
      </Form>
      {state.sent ? (
        <p style={{ color: "green" }}>Succesfully sent email</p>
      ) : null}
    </>
  );
};

export default Quote;
