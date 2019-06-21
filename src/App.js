import React, { Component } from "react";
import PlanetPic from "./components/PlanetPic";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import planets from "./planets.json";
import Score from "./components/Score"

console.log(planets)

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

console.log(shuffle(planets))
class App extends Component {

  state = {
    planets,
    points: 0
  };

  

  addScore = id => {
    const planets = this.state.planets.filter(planet => planet.id !== id);
    let points = this.state.points
    points++
    shuffle(planets)
    this.setState({ points })
    this.setState({ planets })
    console.log(points)
  };

  
  render() {
    return (
      
      <Wrapper>
        <Score points = {this.state.points}>
        </Score>
        <Title>SOLAR SYSTEM</Title>
        {shuffle(this.state.planets).map(planet => (
          <PlanetPic
            addScore={this.addScore}
            id={planet.id}
            key={planet.id}
            name={planet.name}
            image={planet.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
