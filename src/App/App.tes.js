import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";

describe("Smoke test", () => {
  it("App component renders without crashing", () => {
    const div = document.createElement("div");
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
