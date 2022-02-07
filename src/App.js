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
      cardCount: 0,
      bankCard: "",
      playerCard: [],
      scoreBank: null,
      scorePlayer: null,
      totalScoreBank: null,
      totalScorePlayer: null,
    };

    this.drawCard = this.drawCard.bind(this);
  }

  //appelle de l'API "DeckOfCardsApi"

  componentDidMount() {
    // fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
    //   .then((res) => res.json())
    //   .then((res) => {
    //     this.setState({
    //       chosenCard: res.cards[1].image,
    //     });
    //     console.log(this.state.chosenCard);
    //   });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.cardCount !== this.state.cardCount) {
      fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            playerCard: [
              res.cards[this.state.cardCount].image,
              ...prevState.playerCard,
            ],
          });
          console.log(this.state.playerCard);
        });
    }
  }

  // Fonction tirage carte
  drawCard() {
    this.setState({
      cardCount: this.state.cardCount + 1,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.drawCard} />
        <Cards cards={this.state.playerCard} />
        <Players />
        <Score />
      </div>
    );
  }
}

export default App;
