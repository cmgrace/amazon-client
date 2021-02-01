import React, { Component } from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import Context from "../Context/Context";

class Subtotal extends Component {
  static defaultProps = {
    history: {},
  };
  static contextType = Context;

  renderSignInPage = () => {
    if (!this.context.user) this.props.history.push("/login");
    else this.props.history.push("/payment");
    //console.log(this.props.history);
  };

  render() {
    const { basket = [] } = this.context;
    return (
      <div className="subtotal">
        <p>
          Subtotal ({basket.length} items):{" "}
          <strong>
            <CurrencyFormat
              value={this.context.getBasketTotal(basket)}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </strong>
        </p>
        <small className="subtotal__gift">
          <input type="checkbox" /> This order contains a gift
        </small>

        <button onClick={(e) => this.renderSignInPage()}>
          Proceed to Checkout
        </button>
      </div>
    );
  }
}

export default Subtotal;
