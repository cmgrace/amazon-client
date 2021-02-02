import React from "react";
import ReactDOM from "react-dom";

import ProductList from "./ProductList";

describe("Smoke test", () => {
  it("ProductList component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<ProductList />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
