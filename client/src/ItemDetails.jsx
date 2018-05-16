import React from "react";
import ItemView from "./ItemView";

class ItemDetails extends React.Component{
  constructor () {
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
        <button onClick={this.changeTitle} className="ButtonItemDetails">
          {this.state.open
          ?
          "Hide item details -"
          :
          "See item details +"
          }</button>
          {this.state.open
          ?
          <ItemView />
          :
          null
          }        
      </div>
    )
  }
}

module.exports = ItemDetails;
