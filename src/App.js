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

  //appelle de l'API "DeckOfCardsApi"

  componentDidMount() {

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then(res => res.json())
      .then(data => {
      
          console.log("test", data.cards[0].image);
          
      })

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
