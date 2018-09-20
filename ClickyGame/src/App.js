import React, { Component } from "react";
import ClickCard from "./components/ClickCards";
import Wrapper from "./components/Wrapper";
import Cards from "./Cards.json";
import "./App.css";
import Title from "./components/Header/Title";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    Cards
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title></Title>
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
