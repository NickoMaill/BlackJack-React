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
    if (prevState.actualCard !== this.state.actualCard) {
      fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
        .then((res) => res.json())
        .then((res) => {
          this.setState({
            chosenCard: res.cards[0].image,
          });
          console.log(this.state.chosenCard);
        });
    }
  }

  drawCard() {
    this.setState({
      actualCard: 1,
    });
  }

  render() {
    return (
      <div>
        <Button onClick={this.drawCard} />
        <Cards cards={this.state.chosenCard} />
        <Players />
        <Score />
      </div>
    );
  }
}

export default App;
