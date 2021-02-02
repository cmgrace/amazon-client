import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./Header";

describe("Smoke test", () => {
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
});
