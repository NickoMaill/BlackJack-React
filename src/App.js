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
      chosenCard: "",
    };
  }

  //appelle de l'API "DeckOfCardsApi"

  componentDidMount() {

    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => res.json())
      .then((res) => {
        this.setState({
          chosenCard: res.cards[1].image,
        });
        console.log(this.state.chosenCard);
      });
  }

  render() {

    return (

      <div>

        <Button />
        <Cards cards={this.state.chosenCard} />
        <Players />
        <Score />

      </div>

    );

  }

}

export default App;
