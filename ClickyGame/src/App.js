import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ClickCard from "./components/ClickCards";
import Wrapper from "./components/Wrapper";
import Cards from "./Cards.json";
import "./App.css";
import Title from "./components/Title";
import Divider from "./components/Divider";

class App extends Component {

  state = {
    Cards,
    Score: 0,
    TopScore: 0
  };

  componentDidMount() {
    this.setState({ Cards: this.shuffle(this.state.Cards) });
  }

  shuffle = data => {

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

  render() {
    return (
      <Wrapper>
        <Navbar score={this.state.score} topScore={this.state.topScore}></Navbar>
        <Title></Title>
        <Divider></Divider>
        {this.state.Cards.map(card => (
          <ClickCard
            id={card.id}
            key={card.id}
            name={card.name}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
