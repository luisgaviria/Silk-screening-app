import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
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
      <Form
        style={{
          maxWidth: "600px",
          margin: "auto",
          marginBottom: "50px",
          marginTop: "-1rem",
        }}
      >
        <Form.Group>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            type='text'
            placeholder='Company Name'
            name='company_name'
            onChange={handleInputChange}
            value={state.company_name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Control
            style={{ marginBottom: "2rem" }}
            type='text'
            placeholder='Contact'
            name='contact'
            onChange={handleInputChange}
            value={state.contact}
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
          />
        </Form.Group>
        <Form.Group>
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
        <p style={{ color: "green" }}>Succesfully sent email</p>
      ) : null}
    </>
  );
};

export default Quote;
