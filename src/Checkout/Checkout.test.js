import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Checkout from "./Checkout";

describe("Smoke test", () => {
  it("Checkout component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Checkout />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
