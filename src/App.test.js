// import { render, screen } from '@testing-library/react';
// import App from './App';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App/App";
import Header from "./Header/Header";
import ProductList from "./ProductList/ProductList";
import Product from "./Product/Product";
import Checkout from "./Checkout/Checkout";
import CheckoutProduct from "./CheckoutProduct/CheckoutProduct";
import Subtotal from "./Subtotal/Subtotal";
import Login from "./Login/Login";
import Payment from "./Payment/Payment";

describe("All component", () => {
  it("App component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Header component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(
      <Router>
        <Header />
      </Router>,
      div
    );
    ReactDOM.unmountComponentAtNode(div);
  });

  it("ProductList component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProductList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Product component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Product />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it("Checkout component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Checkout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("CheckoutProduct component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckoutProduct />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  it("Subtotal component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Subtotal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
  // it("Login component renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Login />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
  // it("Payment component renders without crashing", () => {
  //   const div = document.createElement("div");
  //   ReactDOM.render(<Payment />, div);
  //   ReactDOM.unmountComponentAtNode(div);
  // });
});
