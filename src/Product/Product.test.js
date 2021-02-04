import React from "react";
import ReactDOM from "react-dom";

import Product from "./Product";

describe("Smoke test", () => {
  it("Product component renders without crashing", () => {
    const productTest = {
      id: 1,
      title:
        "The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback",
      price: "11.96",
      rating: 5,
      img_link:
        "https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg",
      date_published: new Date("2021-01-29 17:19:49"),
    };
    const div = document.createElement("div");
    ReactDOM.render(<Product product={productTest} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});
