import React from "react";
import "./App.css";

import Button from "./components/Button.js";
import Cards from "./components/Cards";
import Players from "./components/Player";
import Result from "./components/Result";
import Score from "./components/Score";

const cardsDeck = [];

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      cardCount: 0,
      bankCards: [],
      playerCard: [],
      playerCardValue: [],
      scoreBank: null,
      scorePlayer: null,
      totalScoreBank: null,
      totalScorePlayer: null,
      messageResult: "",
    };

    // Bind fonction onCLick tirage des cartes du joueur
    this.drawCard = this.drawCard.bind(this);
    // this.endGame = this.endGame.bind(this);
  }

  //appel de l'API "DeckOfCardsApi" et tirage initial des cartes de la banque avec score

  componentDidMount() {
    // Requête initial de l'API
    fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=52")
      .then((res) => res.json())
      .then((res) => {
        cardsDeck.push(res);
        console.log(cardsDeck);

        // Score spécifiques pour les "têtes" (+10 ou +1 pour l'AS)
        if (
          cardsDeck[0].cards[this.state.cardCount].value === "QUEEN" ||
          cardsDeck[0].cards[this.state.cardCount].value === "KING" ||
          cardsDeck[0].cards[this.state.cardCount].value === "JACK"
        ) {
          this.setState({
            scoreBank: 10 + this.state.scoreBank,
          });
        } else if (cardsDeck[0].cards[this.state.cardCount].value === "ACE") {
          this.setState({
            scoreBank: 1 + this.state.scoreBank,
          });
        } else {
          this.setState({
            // Score des cartes "standards"
            scoreBank:
              parseInt(cardsDeck[0].cards[this.state.cardCount].value) +
              this.state.scoreBank,
          });
        }

        // Récupération de l'image de la carte tirée par la banque
        this.setState({
          bankCards: [
            cardsDeck[0].cards[this.state.cardCount].image,
            ...this.state.bankCards,
          ],
          cardCount: this.state.cardCount + 1,
        });
      });
  }

  //
  componentDidUpdate(_prevProps, prevState) {
    if (prevState.scorePlayer !== this.state.scorePlayer) {
      // GUARD FIN DE PARTIE
      if (this.state.scorePlayer === 21) {
        this.setState({
          messageResult: "WINNER",
        });
      } else if (this.state.scorePlayer > 21) {
        this.setState({
          messageResult: "LOOSER",
        });
      }
    }
    // GUARD
    if (prevState.playerCardValue !== this.state.playerCardValue) {
      // REGLE SPECIALE DU SCORE 21 TETE + AS
      if (
        this.state.playerCardValue.toString().match(/QUEEN|JACK|KING|10/) &&
        this.state.playerCardValue.toString().match(/ACE/) &&
        this.state.playerCardValue.length === 2
      ) {
        this.setState({
          scorePlayer: 21,
        });
      }
    }
  }

  // Fonction tirage cartes joueur et ajout au score
  drawCard() {
    // GUARD FIN DE PARTIE
    // if (this.state.scorePlayer === 21) {
    //   this.setState({
    //     messageResult: "WINNER",
    //   });
    // } else if (this.state.playerScore > 21) {
    //   this.setState({
    //     messageResult: "LOOSER",
    //   });
    // }

    let playerScore = cardsDeck[0].cards[this.state.cardCount].value;

    console.log(playerScore);

    playerScore = parseInt(playerScore);

    // Récupération de l'image et valeur de la carte tirée
    this.setState({
      playerCard: [
        cardsDeck[0].cards[this.state.cardCount].image,
        ...this.state.playerCard,
      ],
      playerCardValue: [
        cardsDeck[0].cards[this.state.cardCount].value,
        ...this.state.playerCardValue,
      ],
    });
    console.log(this.state.playerCardValue);

    // Score spécifiques pour les "têtes" (+10 ou +1 pour l'AS)
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
      //Score des cartes standards
      this.setState({
        scorePlayer: playerScore + this.state.scorePlayer,
        cardCount: this.state.cardCount + 1,
      });
    }
  }

  endGame() {
    if (
      this.state.scorePlayer <= 21 &&
      this.state.scorePlayer > this.state.scoreBank
    ) {
      this.setState({
        messageResult: "WINNER",
      });
    } else {
      this.setState({
        messageResult: "LOOSER",
      });
    }
  }

  // RENDER
  render() {
    return (
      <div>
        <Result resultGame={this.state.messageResult} />
        <Cards cards={this.state.bankCards} />
        <Button onClick={this.drawCard} children="Draw Card" />
        <Button onClick={() => this.endGame()} children="Stop Game" />
        <Cards cards={this.state.playerCard} />
        <Players />
        <Score score={this.state.scorePlayer} character={"du joueur 1"} />
        <Score score={this.state.scoreBank} character={"de la banque"} />
      </div>
    );
  }
}

export default App;
