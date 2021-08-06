import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Header from "./Header";
import Footer from "./Footer";
import Landing from "./Landing";
import Quote from "./Quote";
import Dashboard from "./Dashboard";
import ItemDetails from "../containers/ItemDetails";
import Catalog from "../containers/Catalog";

import "./app.css";

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Header />

            <Route exact path='/' component={Landing} />
            <Route
              exact
              path='/catalog/details/:itemId'
              component={ItemDetails}
            />
            <Route exact path='/quote' component={Quote} />
            <Route exact path='/catalog' component={Catalog} />
            <Route exact path='/surveys' component={Dashboard} />
            <Footer />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
