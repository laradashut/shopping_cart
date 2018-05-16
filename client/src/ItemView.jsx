import React from "react";

function ItemView(props) {
  return (
    <div className="ItemViewDescription">  
      <p>
        <img src="https://uploads.codesandbox.io/uploads/user/4ae11587-8ec0-4600-8d51-3465f1d90c20/BRWQ-chair.png" />
        Essentials by OFM ESS-3085 Racing Style Leather Gaming Chair, Red
        <table>
          <tr>
            <td>$99.11</td>
            <td>Qty: 1</td>
          </tr>
        </table>
      </p>
    </div>
  );
}

module.exports = ItemView;
