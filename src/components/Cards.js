import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div>
        <p>CARDS</p>
        <div>
          <img src={this.props.cards} />
        </div>
      </div>
    );
  }
}

export default Cards;
