import "./app.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  // const renderContent = () => {
  //   console.log(props.auth);
  //   switch (props.auth) {
  //     case null:
  //       return;
  //     case false:
  //       return (
  //         <a href='/auth/google' style={{ marginLeft: "26rem" }}>
  //           <img
  //             alt='sign in button'
  //             src='https://i.postimg.cc/QNYWWTqH/btn-google-signin-dark-normal-web.png'
  //           ></img>
  //         </a>

  // <button
  //   className='align-items-end'
  //   style={{ marginLeft: "26rem", marginTop: "-0.8rem" }}
  // >
  //   <a href='/auth/google'>Login With Google</a>
  // </button>
  //   );
  // default:
  //   return (
  // <li key='3' style={{ margin: "0 10px" }}>
  //   Credits: {this.props.auth.credits}
  // </li>,
  //         <a href='/api/logout'>Logout</a>
  //       );
  //   }
  // };

  return (
    <header>
      <Navbar
        className='navbar'
        collapseOnSelect
        expand='md'
        bg='light'
        variant='light'
      >
        <Navbar.Brand>
          <a href='/' className='navbar-brand'>
            <img
              alt='company logo'
              className='d-inline-block'
              src='https://i.postimg.cc/DygJdcXm/APPS.png'
            ></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav>
            {/* <Nav.Link className="navbar-brand-text">
          <Link className="navbar-brand-text" to="/">
            Home
          </Link>
        </Nav.Link>  */}
            <Nav.Link
              style={{ marginTop: "-0.8rem" }}
              className='navbar-brand-text'
            >
              <Link className='navbar-brand-text' to='/'>
                Home
              </Link>
            </Nav.Link>

            <Nav.Link
              className='navbar-brand-text'
              style={{ marginTop: "-0.8rem" }}
            >
              <Link className='navbar-brand-text' to='/quote'>
                Request A Quote
              </Link>
            </Nav.Link>
            <Nav.Link
              className='navbar-brand-text'
              style={{ marginTop: "-0.8rem" }}
            >
              <Link className='navbar-brand-text' to='/catalog'>
                Catalog
              </Link>
            </Nav.Link>
            <Nav.Link
              className='navbar-brand-text'
              style={{ marginTop: "-0.8rem" }}
            >
              <Link className='navbar-brand-text' to='/about'>
                About Us
              </Link>
            </Nav.Link>
            {/* {renderContent()} */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(NavBar);
