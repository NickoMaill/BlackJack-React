import React from "react";
import "./App.css";

import Button from "./components/Button.js";
import Cards from "./components/Cards";
import Players from "./components/Player";
import Score from "./components/Score";

const cardsDeck = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardCount: 0,
      bankCards: [],
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
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => res.json())
      .then((res) => {
        cardsDeck.push(res);
        console.log(cardsDeck);
        this.setState({
          bankCards: [
            cardsDeck[0].cards[this.state.cardCount].image,
            ...this.state.bankCards,
          ],
        });
      });
  }

  componentDidUpdate(_prevProps, prevState) {
    if (prevState.bankCards !== this.state.bankCards) {
    }
  }

  // Fonction tirage carte
  drawCard() {
    let playerScore = cardsDeck[0].cards[this.state.cardCount].value;

    console.log(playerScore);

    playerScore = parseInt(playerScore);

    if (
      cardsDeck[0].cards[this.state.cardCount].value === "QUEEN" ||
      cardsDeck[0].cards[this.state.cardCount].value === "KING" ||
      cardsDeck[0].cards[this.state.cardCount].value === "JACK"
    ) {
      this.setState({
        scorePlayer: 10 + this.state.scorePlayer,
        cardCount: this.state.cardCount + 1,
      });
    } else if (cardsDeck[0].cards[this.state.cardCount].value === "ACE") {
      this.setState({
        scorePlayer: 1 + this.state.scorePlayer,
        cardCount: this.state.cardCount + 1,
      });
    } else {
      this.setState({
        scorePlayer: playerScore + this.state.scorePlayer,
        cardCount: this.state.cardCount + 1,
      });
    }

    this.setState({
      playerCard: [
        cardsDeck[0].cards[this.state.cardCount].image,
        ...this.state.playerCard,
      ],
    });
  }

  render() {
    return (
      <div>
        <Cards cards={this.state.bankCards} />
        <Button onClick={this.drawCard} />
        <Cards cards={this.state.playerCard} />
        <Players />
        <Score score={this.state.scorePlayer} character={"du joueur 1"} />
        <Score score={this.state.scoreBank} character={"de la banque"} />
      </div>
    );
  }
}

export default App;
