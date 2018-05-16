import React from "react";
import ReactDOM from 'react-dom';
import Checkout from "./Checkout";

const styles = {
  fontFamily: "sans-serif",
  textAlign: "center"
};

const App = () => (
  <div style={styles}>
    <Checkout />
  </div>
);

ReactDOM.render(<App />, document.getElementById("root"));
