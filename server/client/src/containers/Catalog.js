import React, { useEffect, useState } from "react";
import { ListGroup, Spinner } from "react-bootstrap";
import { DropdownButton, Button } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";
import { useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions/index";
import axios from "axios";

// import Card from "react-bootstrap/Card";

const Catalog = (props) => {
  const history = useHistory();
  const [state, setState] = useState({
    categories: [],
    category: "",
    items: [],
    loading: false,
    page: 1,
    limit: 50,
    pages: 0,
  });
  // const [isShown, setIsShown] = useState(false);

  // const onToggleHandler = (isOpen, e, metadata) => {
  //   if (metadata.source !== "select") {
  //     setIsShown(isOpen);
  //   }
  // };

  const clickOnProduct = (itemId) => {
    history.push(`/catalog/details/${itemId}`);
  };

  const onClickPage = (page) => {
    setState({
      ...state,
      loading: true,
      items: [],
      page: page,
    });
  };

  const ReturnPages = () => {
    const array = [];
    for (let i = 1; i <= state.pages; i++) {
      if (i === state.page) {
        array.push(
          <div className='return-pages'>
            <Button
              style={{ color: "red", textAlign: "center" }}
              onClick={() => onClickPage(i)}
            >
              {i}
            </Button>
          </div>
        );
      } else {
        array.push(<Button onClick={() => onClickPage(i)}>{i}</Button>);
      }
    }
    return array;
  };

  // const goToNextPage = () => {
  //   let page = state.page;
  //   page++;
  //   setState({
  //     ...state,
  //     loading: true,
  //     items: [],
  //     page: page,
  //   });
  // };

  // const goToPreviousPage = () => {
  //   let page = state.page;
  //   page--;
  //   setState({
  //     ...state,
  //     loading: true,
  //     items: [],
  //     page: page,
  //   });
  // };

  useEffect(async () => {
    const { data } = await axios.get("/api/catalog/categories", {
      headers: {
        "Content-type": "application/json",
      },
    });
    console.log(props.category);
    setState({
      ...state,
      category: props.category,
      categories: data.categories,
    });
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
      loading: false,
      page: data.page,
      limit: data.limit,
      pages: data.pages,
    });
  }, [state.category, state.page]);

  if (state.loading) {
    return (
      <div className='categories-container'>
        <h1 className='categories-title'>Categories</h1>
        <Spinner
          style={{ width: "10rem", height: "10rem" }}
          animation='border'
          variant='primary'
        />
        <DropdownButton
          className='dropdown-button'
          id='dropdown-button-dark'
          title='Dropdown Menu'
          variant='secondary'
          menuVariant='dark'
          // onSelect={() => document.click()}
        >
          {state.categories.map((category) => {
            return (
              <ListGroup.Item
                className='categories-list-item'
                action
                active={state.category === category ? true : false}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.updateCategory(category);
                  setState({ ...state, loading: true, category: category });
                }}
              >
                {category}
              </ListGroup.Item>
            );
          })}
        </DropdownButton>
      </div>
    );
  } else {
    return (
      <div className='categories-container'>
        <h1 className='categories-title'>Categories</h1>
        {/* <ListGroup> */}
        <DropdownButton
          className='dropdown-button'
          id='dropdown-button-dark'
          title='Dropdown Menu'
          variant='secondary'
          menuVariant='dark'
          data-toggle='dropdown'
        >
          {state.categories.map((category) => {
            return (
              <ListGroup.Item
                className='categories-list-item'
                action
                active={state.category === category ? true : false}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.updateCategory(category);
                  setState({ ...state, category: category });
                }}
              >
                {category}
              </ListGroup.Item>
            );
          })}
        </DropdownButton>
        {/* </ListGroup> */}

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
        <ReturnPages />
        {/* {state.page == 1 ? (
          <button onClick={goToNextPage}>{">>"}</button>
        ) : (
          <>
            <button onClick={goToPreviousPage}>{"<<"}</button>
            <button onClick={goToNextPage}>{">>"}</button>
          </>
        )} */}
        {/* <Spinner
          style={{ width: "10rem", height: "10rem" }}
          animation="border"
          variant="primary"
        /> */}
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    category: state.category,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updateCategory: (category) => dispatch(actions.updateCategory(category)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
