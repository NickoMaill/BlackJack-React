import React from "react";

class Score extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>
            score {this.props.character}: {this.props.score}
          </p>
        </div>
      </div>
    );
  }
}

export default Score;
