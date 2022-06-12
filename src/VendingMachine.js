import React from "react";
import { Link } from "react-router-dom";

const VendingMachine = () => {
  return (
    <div>
      <h4>This is vending machine.</h4>
      <h5>This is what we have available:</h5>
      <ul>
        <Link to="/skittles">
          <li>Skittles</li>
        </Link>
        <Link to="/coke">
          <li>Coke</li>
        </Link>
        <Link to="/ramen">
          <li>Ramen</li>
        </Link>
      </ul>
    </div>
  )
}

export default VendingMachine