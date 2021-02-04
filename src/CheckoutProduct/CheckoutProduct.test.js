import React from "react";
import ReactDOM from "react-dom";

import CheckoutProduct from "./CheckoutProduct";

describe("Smoke test", () => {
  it("CheckoutProduct component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<CheckoutProduct />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
