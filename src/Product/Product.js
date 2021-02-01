import React, { Component } from "react";
import "./Product.css";
import Context from "../Context/Context";
import AamzonApiService from "../services/amazon-api-service";

class Product extends Component {
  static contextType = Context;

  state = { error: null };

  handleClickAddToBasket = () => {
    this.setState({ error: null });
    const item = { product_id: this.props.product.id };

    AamzonApiService.postProductToBasket(item)
      .then((productId) => {
        //console.log(productId);

        this.context.UpdateBasketList(productId);
      })
      .catch((error) => {
        this.setState({ error });
        console.error({ error });
      });
  };

  render() {
    const { product } = this.props;
    return (
      <div className="product">
        <div className="product__info">
          <p>{product.title}</p>
          <p className="product__price">
            <small>$</small>
            <strong>{product.price}</strong>
          </p>
          <div className="product__rating">
            {Array(product.rating)
              .fill()
              .map((_, i) => (
                <p key={i}>🌟</p>
              ))}
          </div>
        </div>

        <img src={product.img_link} alt="" />

        <button
          onClick={
            //console.log(e.target.value);
            this.handleClickAddToBasket
          }
        >
          Add to Basket
        </button>
      </div>
    );
  }
}

export default Product;
