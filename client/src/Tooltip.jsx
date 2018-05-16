import React from "react";

class Tooltip extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        {
          this.props.hover
          ?
          <div className="TooltipText">
            Picking up your order in the store helps cut costs, and we pass the savings to you.
          </div>
          :
          null
        }

      </div>
    )
  }
}

module.exports = Tooltip;