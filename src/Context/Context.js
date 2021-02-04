import React, { Component } from "react";
import AamzonApiService from "../services/amazon-api-service";

const Context = React.createContext({
  basket: [],
  productList: [],
  error: null,
  setError: () => {},
  clearError: () => {},
  setProductList: () => {},
  setBasketList: () => {},
  UpdateBasketList: () => {},
  removeItemFromBasket: () => {},
  setUser: () => {},
  getBasketTotal: () => {},
  setItemIdInOrder: () => {},
});
export default Context;

export class ProductProvider extends Component {
  state = {
    basket: [],
    productList: [],
    user: "",
    itemIdInOrder: [],
    error: null,
  };

  componentDidMount() {
    this.clearError();
    AamzonApiService.getProducts()
      .then(this.setProductList)
      .catch(this.setError);
    AamzonApiService.getProductsInBasket()
      .then(this.setBasketList)
      .catch(this.setError);
  }

  setProductList = (productList) => {
    this.setState({ productList });
  };
  setBasketList = (basket) => {
    this.setState({ basket });
  };

  UpdateBasketList = (item) => {
    this.setState({ basket: [...this.state.basket, item] });
  };

  removeItemFromBasket = (itemId) => {
    this.setState({
      basket: this.state.basket.filter((product) => product.item_id !== itemId),
    });
  };

  setUser = (user) => {
    this.setState({ user });
  };

  setItemIdInOrder = (itemIdInOrder) => {
    this.setState({ itemIdInOrder });
  };

  getBasketTotal = (basket) => {
    const total = basket?.reduce(
      (amount, item) => parseFloat(item.price) + amount,
      0
    );
    return total;
  };

  setError = (error) => {
    console.error(error);
    this.setState({ error });
  };

  clearError = () => {
    this.setState({ error: null });
  };

  render() {
    const value = {
      basket: this.state.basket,
      productList: this.state.productList,
      user: this.state.user,
      itemIdInOrder: this.state.itemIdInOrder,
      error: this.state.error,
      setError: this.setError,
      clearError: this.clearError,
      setProductList: this.setProductList,
      UpdateBasketList: this.UpdateBasketList,
      setBasketList: this.setBasketList,
      removeItemFromBasket: this.removeItemFromBasket,
      setUser: this.setUser,
      getBasketTotal: this.getBasketTotal,
      setItemIdInOrder: this.setItemIdInOrder,
    };
    return (
      <Context.Provider value={value}>{this.props.children}</Context.Provider>
    );
  }
}
