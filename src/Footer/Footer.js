import React, { Component } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

class Footer extends Component {
  state = {};
  render() {
    return (
      <div className="footer">
        <div className="footer__nav">
          <Link to="/aboutme">
            <div className="footer__option">
              <span className="footer__optionLineTwo">Get to Know Us</span>
            </div>
          </Link>

          <div className="footer__option">
            <span className="footer__optionLineOne">Careers</span>
          </div>
          <div className="footer__option">
            <span className="footer__optionLineOne">Customer Service</span>
          </div>
          <div className="footer__option">
            <span className="footer__optionLineOne">Blog</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
