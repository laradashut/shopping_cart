import React from "react";
import Tooltip from "./Tooltip";

class OrderSummary extends React.Component{
  constructor() {
    super();
    this.state = {
      subtotal: 102.96,
      pickupSavings: -3.85,
      taxesAndFees: 8.92,
      hover: false
    };

    this.handleMouseHover = this.handleMouseHover.bind(this);
  }

  handleMouseHover(){
    this.setState({
      hover: !this.state.hover
    })
  }

  render() {
    return (
      <div className="OrderSummary">
        <table className="OrderTable">
          <tbody>
            <tr className="Subtotal">
              <td>Subtotal</td>
              <td><strong>${this.state.subtotal}</strong></td>
            </tr>
            <tr className="PickupSavings">
              <td onMouseOver={this.handleMouseHover} onMouseOut={this.handleMouseHover}>
                Pickup Savings <Tooltip hover={this.state.hover} />
              </td>
              <td><strong>${this.state.pickupSavings}</strong></td>
            </tr>
            <tr className="TaxesFees">
              <td>Est. taxes & fees <br /> (Based on 94085)</td>
              <td><strong>${this.state.taxesAndFees}</strong></td>
            </tr>
            <tr>
              <td></td>
              <td></td>
            </tr>
            <tr className="EstTotal">
              <td>Est. total</td>
              <td className="EstTotalAmount">${this.state.subtotal + this.state.pickupSavings + this.state.taxesAndFees}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

module.exports = OrderSummary;