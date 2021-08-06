import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

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
    <div className='details-page-container'>
      <h1 className='details-title'>{state.product.title}</h1>
      <img className='product-details-image' src={state.product.images[1]} />
      <h6 className='product-description'>{state.product.description}</h6>
      {state.product.colors.map((color) => {
        // return (
        //   <img
        //     src={"https://cdnl.sanmar.com/imglib/mres/" + color}
        //     width="50px"
        //     height="50px"
        //   />
        // );
      })}

      {state.product.images.map((image) => {
        // if (image.search("https") != -1) {
        //   return <img src={image} width="100px" height="100px" />;
        // }
      })}
    </div>
  );
};

export default ItemDetails;
