import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ClickCard from "./components/ClickCards";
import Wrapper from "./components/Wrapper";
import Cards from "./Cards.json";
import "./App.css";
import Title from "./components/Title";
import Divider from "./components/Divider";

const maxValue = Cards.length;

class App extends Component {

  state = {
    Cards,
    clickedCards: [],
    Score: 0,
    TopScore: 0,
  };

  componentDidMount() {
    this.setState({ Cards: this.shuffleCards(this.state.Cards) });
  }


  shuffleCards = () => {
    const shuffleCards = this.shuffleArr(Cards)
    this.setState({Cards:shuffleCards})
  }

  shuffleArr = (data) => {

    let i = data.length - 1;

    while (i > 0) {
      const randomIndex = Math.floor(Math.random() * (i + 1));
      const itemAtIndex = data[i];
      data[i] = data[randomIndex];
      data[randomIndex] = itemAtIndex;
      i--;
    }
    return data;

  };


  handleClick = id => {

    if (this.state.clickedCards.includes(id)) {
      this.resetCards();
    }

    else {

      const newScore = this.state.Score + 1

      if (newScore > this.state.TopScore) {
        this.setState({Score:newScore})
        this.setState({TopScore: newScore})
      }

      if (newScore === maxValue) {
        this.resetCards();
      }

      else {
        this.setState({selected:this.state.clickedCards.push(id)})
        this.setState({Score:newScore})
        this.shuffleCards()
      }
    }
    
  }


  resetCards = () => {

    this.setState({Score:0})
    this.setState({clickedCards:[]})
    this.shuffleCards()

  }


  render() {
    return (
      <div>
        <Navbar Score={this.state.Score} TopScore={this.state.TopScore}></Navbar>
        <Title></Title>
        <Divider></Divider>
        <Wrapper>
        {Cards.map(card => (
          <ClickCard
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
            handleClick={this.handleClick}
          />
        ))}
      </Wrapper>
      </div>
    );
  }
}

export default App;
