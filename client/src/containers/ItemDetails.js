import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import axios from "axios";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

import Button from "react-bootstrap/Button";

let i = 0;

const ItemDetails = (props) => {
  const [state, setState] = useState({
    product: { colors: [], images: [""] },
  });

  const params = useParams();

  useEffect(async () => {
    const response = await axios.get(`/api/catalog/details/${params.itemId}`);

    console.log(response.data);
    setState({ product: response.data.product });
  }, []);
  return (
    // fix css naming convention on titles and other items
    <div className='item-container'>
      <Helmet>
        <title>{state.product.title}</title>
        <meta name='description' content={state.product.description} />
        {/* <link rel='canonical' href='http://localhost:3001.com/' /> */}
      </Helmet>

      <div className='product-description'>
        <h1>{state.product.title}</h1>
      </div>
      <div className='details-image'>
        <img
          alt='product'
          className='details-picture'
          src={state.product.images[1]}
        />
      </div>
      <h6 className='product-description'>{state.product.description}</h6>
      <h6 className='product-description'> {state.product.sizes} </h6>
      <h6 className='product-description'> ${state.product.price} </h6>

      <div className='d-grid gap-2'>
        <Button variant='primary' size='lg' href='/quote'>
          Request A Quote
        </Button>
      </div>
      {state.product.colors.map((color) => {
        return (
          <></>
          // <img
          //   src={"https://cdnl.sanmar.com/imglib/mres/" + color}
          //   width='50px'
          //   height='50px'
          // />
        );
      })}

      {state.product.images.map((image, index) => {
        if (image.search("https") !== -1) {
          // console.log(index);
          return (
            <>
              <CardGroup>
                <Card style={{ width: "18rem", marginTop: "1em" }}>
                  <Card.Img
                    alt='product color'
                    className='color-image'
                    src={image}
                  />
                  <Card.Title>
                    <h6
                      className='color-name'
                      style={{ textAlign: "center", fontWeight: "bolder" }}
                    >
                      {state.product.colors[index - ++i]?.color}
                    </h6>
                  </Card.Title>
                  {/* <img
                  className='color-image'
                 
                  // width='100vw'
                  // height='100vh'
                  // style={{ marginRight: "2rem", marginTop: "1rem" }}
                /> */}
                </Card>
              </CardGroup>
            </>
          );
        }
      })}
    </div>
  );
};

export default ItemDetails;
