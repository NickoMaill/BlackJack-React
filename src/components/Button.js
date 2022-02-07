import React from "react";

class Button extends React.Component {
  render() {
    return (
      <div>
        <button
          onClick={this.props.onClick}
          type={this.props.type}
          className={this.props.class}
        >
          {this.props.children}
        </button>
      </div>
    );
  }
}

export default Button;
