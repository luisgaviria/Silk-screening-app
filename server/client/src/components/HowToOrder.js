import React from "react";
import { Button } from "react-bootstrap";

const HowToOrder = () => {
  return (
    <div className='how-to-container'>
      <h2 className='about-us-title'>How To Order</h2>
      <br />
      <ul style={{ listStyle: "circle" }}>
        <li className='about-us-text'>
          First we encourage you to look through our catalog to see which items
          work for you.
        </li>
        <li className='about-us-text'>
          Make sure to note the product number and color of your choice as this
          will be needed to complete an order.
        </li>
        <li className='about-us-text'>
          Go to the Request A Quote form and fill in the information. The order
          description should include the quantity and sizes, if they are known.
          You can also let us know if you need us to design the
          print/embroidery. If you have a file upload it using the Choose File
          button
        </li>
        <li className='about-us-text'>
          Finally press the submit button and someone we will contact you to
          finalize your order.
        </li>
      </ul>
      <div className='how-to-image'></div>
      <Button
        href='/catalog'
        style={{ marginRight: "10px" }}
        variant='secondary'
      >
        Browse Catalog
      </Button>
      <Button href='/quote' variant='secondary'>
        Request A Quote
      </Button>
    </div>
  );
};

export default HowToOrder;
