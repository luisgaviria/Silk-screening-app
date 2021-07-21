import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import NavBar from "../components/NavBar";

class Header extends Component {
  render() {
    return <NavBar auth={this.props.auth} />;
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
