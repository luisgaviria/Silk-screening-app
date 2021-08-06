import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import axios from "axios";

// import Card from "react-bootstrap/Card";

const Catalog = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    categories: [],
    category: "",
    items: [],
    page: 1,
    limit: 50,
  });

  const clickOnProduct = (itemId) => {
    history.push(`/catalog/details/${itemId}`);
  };

  useEffect(async () => {
    const { data } = await axios.get("/api/catalog/categories", {
      headers: {
        "Content-type": "application/json",
      },
    });
    setState({ ...state, categories: data.categories });
  }, []);

  useEffect(async () => {
    const { data } = await axios.get(
      `/api/catalog?category=${state.category}&page=${state.page}&limit=${state.limit}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
    console.log(data);
    setState({
      ...state,
      items: data.products,
      page: data.page,
      limit: data.limit,
    });
  }, [state.category]);

  return (
    <div className=''>
      <h1>Categories</h1>
      <ListGroup>
        {state.categories.map((category) => {
          return (
            <ListGroup.Item
              action
              active={state.category == category ? true : false}
              style={{ cursor: "pointer" }}
              onClick={() => {
                setState({ ...state, category: category });
              }}
            >
              {category}
            </ListGroup.Item>
          );
        })}
      </ListGroup>
      {state.category.length ? (
        <div className='item-container'>
          {state.items.map((item, index) => {
            return (
              <div
                onClick={() => clickOnProduct(item._id)}
                className='not-item-container'
                // style={{ cursor: "pointer" }}
              >
                <img
                  className='product-image'
                  src={item.images[1]}
                  alt='product-image'
                />
                <h6 className='product-title'>{item.title}</h6>
                {/* <h6>{item.sizes}</h6> */}
              </div>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default Catalog;
