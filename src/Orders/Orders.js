import React, { Component } from "react";
import "./Orders.css";
import Context from "../Context/Context";

class Orders extends Component {
  static contextType = Context;
  state = {};
  render() {
    const { basket = [] } = this.context;
    return (
      <div className="orders">
        <h1>Your Orders</h1>

        <div className="orders__order">
          {/* {orders?.map(order => (
                <Order order={order} />
            ))} */}
        </div>
      </div>
    );
  }
}

export default Orders;
