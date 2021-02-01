import Product from "../Product/Product";
import React, { Component } from "react";
import "./ProductList.css";
import Context from "../Context/Context";

class ProductList extends Component {
  static contextType = Context;

  renderProducts(productList = []) {
    return productList.map((product) => (
      <Product key={product.id} product={product} />
    ));
  }

  render() {
    const { productList = [] } = this.context;
    const firstRow = productList.slice(0, 2);
    const secondRow = productList.slice(2, 5);
    const thirdRow = productList.slice(5, productList.length);
    return (
      <>
        <div className="home">
          <div className="home__container">
            <img
              className="home__image"
              src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
              alt="ad-img"
            />
            <div className="home__row">{this.renderProducts(firstRow)}</div>
            <div className="home__row">{this.renderProducts(secondRow)}</div>
            <div className="home__row">{this.renderProducts(thirdRow)}</div>
          </div>
        </div>
      </>
    );
  }
}

export default ProductList;
