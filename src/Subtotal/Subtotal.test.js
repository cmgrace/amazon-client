import React from "react";
import ReactDOM from "react-dom";

import Subtotal from "./Subtotal";

describe("All component", () => {
  it("Subtotal component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<Subtotal />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
