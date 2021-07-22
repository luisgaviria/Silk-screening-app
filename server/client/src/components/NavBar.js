import "./app.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { Navbar, Nav } from "react-bootstrap";

const NavBar = (props) => {
  const renderContent = () => {
    // console.log(props.auth);
    // switch (props.auth) {
    //   case null:
    //     return;
    //   case false:
    //     return (
    //       <a className='log-in-button' href='/auth/google'>
    //         Login With Google
    //       </a>
    //     );
    //   default:
    //     return (
    //       // <li key='3' style={{ margin: "0 10px" }}>
    //       //   Credits: {this.props.auth.credits}
    //       // </li>,
    //       <a href='/api/logout'>Logout</a>
    //     );
    // }
  };

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
          <a href='http://www.urabatv.com' className='navbar-brand'>
            <img
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
            <Nav.Link className='navbar-brand-text'>
              <Link className='navbar-brand-text' to='/'>
                Home
              </Link>
            </Nav.Link>

            <Nav.Link className='navbar-brand-text'>
              <Link className='navbar-brand-text' to='/quote'>
                Request A Quote
              </Link>
            </Nav.Link>
            <Nav.Link className='navbar-brand-text'>
              <Link className='navbar-brand-text' to='/about'>
                Catalog
              </Link>
            </Nav.Link>
            <Nav.Link className='navbar-brand-text'>
              <Link className='navbar-brand-text' to='/about'>
                About Us
              </Link>
            </Nav.Link>
            {renderContent()}
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
