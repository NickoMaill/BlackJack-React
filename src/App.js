import React from "react";
import "./App.css";

import Button from "./components/Button.js";
import Cards from "./components/Cards";
import Players from "./components/Player";
import Score from "./components/Score";

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div>
        <Button />;
        <Cards />;
        <Players />
        <Score />
      </div>
    );
  }
}

export default App;
