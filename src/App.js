import React, { Component } from "react";
import PlanetPic from "./components/PlanetPic";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import planets from "./planets.json";
import Score from "./components/Score"

class App extends Component {

  state = {
    planets,
    score: ""
  };

  addScore = id => {
  
    const planets = this.state.planets.filter(planet => planet.id !== id);
 
    this.setState({ planets });
  };

  
  render() {
    return (
      
      <Wrapper>
        <Score>
          
        </Score>
        <Title>SOLAR SYSTEM</Title>
        {this.state.planets.map(planet => (
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
