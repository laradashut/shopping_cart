import React from "react";
import PromoCodeView from "./PromoCodeView";

class PromoCode extends React.Component {
  constructor() {
    super();
    this.state = {
      open: false

    };

    this.changeTitle = this.changeTitle.bind(this);
  }

  changeTitle() {
    this.setState({
      open: !this.state.open
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.changeTitle} className="ButtonPromoCode">
          {this.state.open
          ?
          "Hide promo code -"
          :
          "Apply promo code +"
          }</button>
          {this.state.open
          ?
          <PromoCodeView />
          :
          null
          }
      </div>
    )
  }
}

module.exports = PromoCode;
