import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./ThankyouForShopping.css";

class ThankyouForShopping extends Component {
  render() {
    return (
      <div className="thankyou">
        <Link to="/">
          <img
            className="thankyou__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
            alt="back_to_homepage"
          />
        </Link>

        <div className="thankyou__container">
          <h2>Thank you, your order has been placed.</h2>

          <p>
            Please check your email for order confirmation and detailed delivery
            information or visit{" "}
            <a href="https://www.amazon.com/gp/message#!/inbox">
              Message Center
            </a>{" "}
            to review your notifications. <br />
            <br />
            New! Get shipment notifications on your mobile device with the free
            Amazon app. <strong>Shipping to Dunder,</strong> 16 Happy RD,
            NEWTON, MA, 02466
          </p>
        </div>
      </div>
    );
  }
}

export default ThankyouForShopping;
