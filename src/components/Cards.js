import React from "react";

class Cards extends React.Component {
  render() {
    return (
      <div>
        <p>CARDS</p>
        <div>
          <ul>
            {this.props.cards.map((item, index) => {
              return (
                <li key={index}>
                  <p>
                    <img src={item} />
                  </p>
                  <p></p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Cards;
