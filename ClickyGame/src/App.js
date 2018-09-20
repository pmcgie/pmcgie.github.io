import React, { Component } from "react";
import Navbar from "./components/Navbar";
import ClickCard from "./components/ClickCards";
import Wrapper from "./components/Wrapper";
import Cards from "./Cards.json";
import "./App.css";
import Title from "./components/Title";
import Divider from "./components/Divider";

class App extends Component {
  // Setting this.state.friends to the marvel json array
  state = {
    Cards
  };

  // Map over this.state.friends and render a marvelCard component for each marvel object
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
