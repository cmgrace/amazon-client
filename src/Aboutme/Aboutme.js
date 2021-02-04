import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Aboutme.css";

class Aboutme extends Component {
  render() {
    return (
      <div className="aboutme">
        <Link to="/">
          <img
            className="aboutme__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="back_to_homepage"
          />
        </Link>

        <div className="aboutme__container">
          <h1>Welcome!</h1>

          <p>
            We offer the most pleasant shopping experience. <br />
            <br />
            Feel free to add/remove the product you like to the cart. Customers
            can view their cart without login
            <br />
            <br />
            For checkout, please log in with one of our authenticated user,
          </p>
          <ul>
            <li>
              User email: <strong>dunder@gmail.com</strong>
            </li>
            <li>
              Password: <strong>password</strong>
            </li>
          </ul>
          <p>
            Order history feature is still under devlopment but will be
            delivered soon. Thank you!
          </p>
        </div>
      </div>
    );
  }
}

export default Aboutme;
