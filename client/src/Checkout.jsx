import React from "react";
import OrderSummary from "./OrderSummary";
import ItemDetails from "./ItemDetails";
import PromoCode from "./PromoCode";

function Checkout() {
    return (
      <div className="Checkout">
          <OrderSummary />
          <ItemDetails />
          <PromoCode />
      </div>
    );
}

module.exports = Checkout;
