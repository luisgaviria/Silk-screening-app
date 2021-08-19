import React, { useEffect, useState } from "react";
import {
  DropdownButton,
  Button,
  Form,
  ListGroup,
  Spinner,
} from "react-bootstrap";
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
    searchEnabled: false,
    page: 1,
    limit: 50,
    pages: 0,
    search: "",
  });
  // const [isShown, setIsShown] = useState(false);
 
  // const onToggleHandler = (isOpen, e, metadata) => {
  //   if (metadata.source !== "select") {
  //     setIsShown(isOpen);
  //   }
  // };
 
  const handleInputFromSearchBar = (event) => {
    setState((prevState) => {
      return {
        ...prevState,
        search: event.target.value,
      };
    });
  };
 
  const clickOnSearchButton = async () => {
    setState((prevState) => {
      return {
        ...prevState,
        loading: true,
      };
    });
    const { data } = await axios.get(
      `/api/catalog/search/${state.search}?page=${state.page}&limit=${state.limit}`,
      {
        headers: {
          "Content-type": "application/json",
        },
      }
    );
 
    console.log(data.products);
 
    setState((prevState) => {
      return {
        ...prevState,
        items: data.products,
        loading: false,
        page: data.page,
        limit: data.limit,
        pages: data.pages,
        searchEnabled: true,
      };
    });
  };
 
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
          <Pagination.Item
            style={{ listStyleType: "none" }}
            onClick={() => onClickPage(i)}
          >
            {i}
          </Pagination.Item>
        );
      } else {
        array.push(
          <Pagination.Item onClick={() => onClickPage(i)}>{i}</Pagination.Item>
        );
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
    setState({
      ...state,
      category: props.category,
      categories: data.categories,
    });
  }, []);
 
  useEffect(async () => {
    if (!state.searchEnabled) {
      const { data } = await axios.get(
        `/api/catalog?category=${state.category}&page=${state.page}&limit=${state.limit}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      // console.log(data);
      if (data.products.length) {
        setState({
          ...state,
          items: data.products,
          loading: false,
          searchEnabled: false,
          page: data.page,
          limit: data.limit,
          pages: data.pages,
        });
      }
    } else {
      const { data } = await axios.get(
        `/api/catalog/search/${state.search}?page=${state.page}&limit=${state.limit}`,
        {
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      // console.log(data);
      if (data.products.length) {
        setState({
          ...state,
          items: data.products,
          loading: false,
          searchEnabled: true,
          page: data.page,
          limit: data.limit,
          pages: data.pages,
        });
      }
    }
  }, [state.category, state.page]);
 
  if (state.loading) {
    return (
      <div className="categories-container">
        <h1 className="categories-title">Categories</h1>
        <Spinner
          style={{ width: "10rem", height: "10rem" }}
          animation="border"
          variant="primary"
        />
        <DropdownButton
          className="dropdown-button"
          id="dropdown-button-dark"
          title="Dropdown Menu"
          variant="secondary"
          menuVariant="dark"
          // onSelect={() => document.click()}
        >
          {state.categories.map((category) => {
            return (
              <ListGroup.Item
                className="categories-list-item"
                action
                active={state.category === category ? true : false}
                style={{ cursor: "pointer" }}
                onClick={() => {
                  props.updateCategory(category);
                  setState({
                    ...state,
                    loading: true,
                    category: category,
                    page: 1,
                  });
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
      <>
        <Form style={{ width: "300px", marginLeft: "1200px", display: "flex" }}>
          <Form.Control
            value={state.search}
            onChange={handleInputFromSearchBar}
            type="text"
            placeholder="Search Products"
          />
          <Button onClick={clickOnSearchButton}>Search</Button>
        </Form>
        <div className="categories-container">
          <h1 className="categories-title">Categories</h1>
 
          {/* <ListGroup> */}
          <DropdownButton
            className="dropdown-button"
            id="dropdown-button-dark"
            title="Dropdown Menu"
            variant="secondary"
            menuVariant="dark"
            data-toggle="dropdown"
          >
            {state.categories.map((category) => {
              return (
                <ListGroup.Item
                  className="categories-list-item"
                  action
                  active={state.category === category ? true : false}
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    props.updateCategory(category);
                    setState({
                      ...state,
                      category: category,
                      searchEnabled: false,
                    });
                  }}
                >
                  {category}
                </ListGroup.Item>
              );
            })}
          </DropdownButton>
          {/* </ListGroup> */}
 
          {state.category.length || state.items.length ? (
            <div className="item-container">
              {state.items.map((item, index) => {
                return (
                  <div
                    onClick={() => clickOnProduct(item._id)}
                    className="not-item-container"
                    // style={{ cursor: "pointer" }}
                  >
                    <img
                      className="product-image"
                      src={item.images[1]}
                      alt="product-image"
                    />
                    <h6 className="product-title">{item.title}</h6>
                    {/* <h6>{item.sizes}</h6> */}
                  </div>
                );
              })}
            </div>
          ) : (
            <h1>No items found</h1>
          )}
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
        <Pagination style={{ listStyle: "none" }}>
          <ReturnPages />
        </Pagination>
      </>
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
