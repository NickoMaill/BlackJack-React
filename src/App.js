import React from "react";
import "./App.css";

import Button from "./components/Button.js";
import Cards from "./components/Cards";
import Players from "./components/Player";
import Score from "./components/Score";

class App extends React.Component {

  constructor() {

    super();

    this.state = {

    };

  }

  componentDidMount() {

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then(res => res.json())
      .then(data => {
        data.map((cards) => {

          console.log(cards);
        })
        
      })
  }

  componentDidMount() {
    fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        console.log(res.image);
      });
  }

  render() {

    return (

      <div>
{/* 
        <Button />
        <Cards />
        <Players />
        <Score /> */}

      </div>

    );

  }

}

export default App;
