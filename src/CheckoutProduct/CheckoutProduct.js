import React, { Component } from "react";
import "./CheckoutProduct.css";
import AamzonApiService from "../services/amazon-api-service";
import Context from "../Context/Context";

class CheckoutProducts extends Component {
  static contextType = Context;

  handleClickDelete = () => {
    const item_id = this.props.item_id;

    AamzonApiService.deleteItemInBasket(item_id)
      .then((item) => {
        console.log("item need to delete:", item[0].item_id);
        this.context.removeItemFromBasket(item[0].item_id);
      })
      .catch((error) => {
        this.context.setError(error);
      });
  };
  render() {
    const { item_id, img_link, title, price, rating, hideButton } = this.props;
    return (
      <div key={item_id} className="checkoutProduct">
        <img
          className="checkoutProduct__image"
          src={img_link}
          alt="checkout_ad"
        />

        <div className="checkoutProduct__info">
          <p className="checkoutProduct__title">{title}</p>
          <p className="checkoutProduct__price">
            <small>$</small>
            <strong>{price}</strong>
          </p>
          <div className="checkoutProduct__rating">
            {Array(rating)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
          {!hideButton && (
            <button onClick={this.handleClickDelete}>Remove from Basket</button>
          )}
        </div>
      </div>
    );
  }
}

export default CheckoutProducts;
