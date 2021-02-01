import React, { Component } from "react";
import "./App.css";
import ProductList from "../ProductList/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Context from "../Context/Context";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";

class App extends Component {
  static contextType = Context;

  render() {
    return (
      <Router>
        <div className="app">
          <Header />
          <Switch>
            <Route exact path={"/"} component={ProductList} />

            <Route path={"/checkout"} component={Checkout} />

            <Route path="/login" component={Login} />

            <Route path="/payment" component={Payment} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
