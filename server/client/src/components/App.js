import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";
import "./app.css";

const Header = lazy(() => import("./Header"));
const Footer = lazy(() => import("./Footer"));
const Landing = lazy(() => import("./Landing"));
const Quote = lazy(() => import("./Quote"));
const ItemDetails = lazy(() => import("../containers/ItemDetails"));
const Catalog = lazy(() => import("../containers/Catalog"));
const About = lazy(() => import("../components/About"));

class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <div>
        <Suspense fallback={<h1>Still Loading…</h1>}>
          <BrowserRouter>
            <div>
              <Header />

              <Route exact path='/' component={Landing} />
              <Route exact path='/about' component={About} />
              <Route
                exact
                path='/catalog/details/:itemId'
                component={ItemDetails}
              />
              <Route exact path='/quote' component={Quote} />
              <Route exact path='/catalog' component={Catalog} />
              <Footer />
            </div>
          </BrowserRouter>
        </Suspense>
      </div>
    );
  }
}

export default connect(null, actions)(App);
