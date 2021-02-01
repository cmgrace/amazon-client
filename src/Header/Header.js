import React, { Component } from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import { Link } from "react-router-dom";
import Context from "../Context/Context";
import TokenService from "../services/token-service";

class Header extends Component {
  static contextType = Context;

  handleClickSignOut = () => {
    TokenService.clearAuthToken();
    this.context.setUser("");
  };

  renderSignOut = () => {
    return (
      <Link to="/" onClick={this.handleClickSignOut}>
        <div className="header__option">
          <span className="header__optionLineOne">
            Hello {this.context.user.user_name}
          </span>
          <span className="header__optionLineTwo">Sign out</span>
        </div>
      </Link>
    );
  };

  renderSignIn = () => {
    return (
      <Link to="/login">
        <div className="header__option">
          <span className="header__optionLineOne">Hello Guest</span>
          <span className="header__optionLineTwo">Sign in</span>
        </div>
      </Link>
    );
  };

  render() {
    const { basket = [] } = this.context;
    return (
      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="amazon-logo"
          />
        </Link>

        <div className="header__search">
          <input className="header__searchInput" type="text" />
          <SearchIcon className="header__searchIcon" />
        </div>

        <div className="header__nav">
          {!this.context.user ? this.renderSignIn() : this.renderSignOut()}

          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    );
  }
}

export default Header;
