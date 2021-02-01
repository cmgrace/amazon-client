import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Payment.css";
import Context from "../Context/Context";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import AamzonApiService from "../services/amazon-api-service";

class Payment extends Component {
  static contextType = Context;
  state = { error: null };

  handleClickBuyNow = () => {
    this.setState({ error: null });
    const user_id = this.context.user.user_id;
    const product_id = this.context.basket.map((item) => item.product_id);
    //console.log(user_id, product_id);
    const newOrder = {
      user_id: user_id,
      product_id: product_id,
    };
    AamzonApiService.postOrder(newOrder)
      // .then((res) => this.context.setItemIdInOrder(res.product_id))
      .then((res) => console.log(res.product_id))
      .catch((res) => {
        this.setState({ error: res.error });
      });
  };

  render() {
    const { basket = [], user } = this.context;
    return (
      <div className="payment">
        <div className="payment__container">
          <h1>
            Checkout (<Link to="/checkout">{basket?.length} items</Link>)
          </h1>

          {/* Payment section - delivery address */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Delivery Address</h3>
            </div>
            <div className="payment__address">
              <p>{user.user_name}</p>
              <p>{user.user_address}</p>
            </div>
          </div>

          {/* Payment section - Review Items */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Review items and delivery</h3>
            </div>
            <div className="payment__items">
              {basket.map((item) => (
                <CheckoutProduct
                  key={item.item_id}
                  item_id={item.item_id}
                  id={item.product_id}
                  title={item.title}
                  img_link={item.img_link}
                  price={item.price}
                  rating={item.rating}
                />
              ))}
            </div>
          </div>

          {/* Payment section - Payment method */}
          <div className="payment__section">
            <div className="payment__title">
              <h3>Payment Method</h3>
            </div>
            <div className="payment__details">
              <form>
                <div className="payment__priceContainer">
                  <CurrencyFormat
                    renderText={(value) => <h3>Order Total: {value}</h3>}
                    decimalScale={2}
                    value={this.context.getBasketTotal(basket)}
                    displayType={"text"}
                    thousandSeparator={true}
                    prefix={"$"}
                  />
                  <br />
                  <p>Card info: {user.card_info}</p>
                  <button
                    type="button"
                    onClick={(e) => this.handleClickBuyNow()}
                  >
                    Buy Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Payment;
