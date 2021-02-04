import React, { Component } from "react";
import "./App.css";
import ProductList from "../ProductList/ProductList";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "../Checkout/Checkout";
import Context from "../Context/Context";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Payment from "../Payment/Payment";
import Footer from "../Footer/Footer";
import Aboutme from "../Aboutme/Aboutme";
import ThankyouForShopping from "../ThankyouForShopping/ThankyouForShopping";

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

            <Route path={"/login"} component={Login} />

            <Route path={"/payment"} component={Payment} />

            <Route path={"/aboutme"} component={Aboutme} />

            <Route path={"/thankyou"} component={ThankyouForShopping} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
