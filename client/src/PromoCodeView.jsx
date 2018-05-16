import React from "react";

function PromoCodeView(props) {
  return (
    <div className="PromoCodeView">
      <div className="PromoLabel">
        Promo Code
        <div>
          <input className="PromoCodeInput" />
          <button className="ApplyButton"><strong>Apply</strong></button>
        </div>
      </div>
    </div>
  );
}

module.exports = PromoCodeView;
