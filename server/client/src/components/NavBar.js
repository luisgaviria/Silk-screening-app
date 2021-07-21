import React from "react";
import { Link } from "react-router-dom";

import {
  Navbar,
  Nav,
  Form,
  FormControl,
  NavDropdown,
  Button,
} from "react-bootstrap";

const NavBar = (props) => {
  const renderContent = () => {
    switch (props.auth) {
      case null:
        return;
      case false:
        return <Link to='/auth/google'>Login With Google</Link>;
      default:
        return (
          // <li key='3' style={{ margin: "0 10px" }}>
          //   Credits: {this.props.auth.credits}
          // </li>,

          <Link to='/api/logout'>Logout</Link>
        );
    }
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
              src='https://i.postimg.cc/gcw0FY8B/circle-cropped-4-1.png'
            ></img>
          </a>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
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

            <Nav.Link>
              <Link to={props.auth ? "/surveys" : "/"}>APP-SILK-SCREENING</Link>
            </Nav.Link>

            <Nav.Link className='navbar-brand-text'>
              <Link className='navbar-brand-text' to='/favorites'>
                Favorites
              </Link>
            </Nav.Link>
            <Nav.Link className='navbar-brand-text'>
              <Link className='navbar-brand-text' to='/about'>
                About Us
              </Link>
            </Nav.Link>
            <Nav.Link>{renderContent()}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavBar;
