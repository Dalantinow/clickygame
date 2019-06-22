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
    points: 0,
  };

  // restartPage = (called) => {
  //   shuffle(planets);
  //   const called = friend.id
  //   if (called = )
  // }

  addScore = id => {
  // Trying to check id vs previously clicked ids
  console.log(planets[id - 1].id)
    if (planets[id - 1].clicked === true) {
      alert("you lose")
      let points = this.state.points;
      points = 0;
      shuffle(planets);
      this.setState({ points });
      this.setState({ planets });
      window.location.reload();
      }
      else {
        let points = this.state.points;
        points++;
        planets[id - 1].clicked = true;
        shuffle(planets);
        this.setState({ points });
        this.setState({ planets });
        
       
      
    
  
    
    }
    
  };


  render() {
    return (

      <Wrapper>
        <Score>
          {this.state.points}
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
