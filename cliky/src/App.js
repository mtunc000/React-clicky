import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

function shuffleArray(array){
  let i = array.length - 1;
  for (; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topScore:0,
    win:0,
    loss:0,
    clicked:[]

  };

  // removeFriend = id => {
  //   // Filter this.state.friends for friends with an id not equal to the id being removed
  //   const friends = this.state.friends.filter(friend => friend.id !== id);
  //   // Set this.state.friends equal to the new friends array
  //   this.setState({ friends });
  // };

clickHandler = (id)=> {
  if (this.state.clicked.indexOf(id) === -1) {
    
    this.incrementHandler();
    this.setState({ clicked: this.state.clicked.concat(id) });
  } else {
    this.resetHandler();
  }
  //console.log(clickHandler);
};



incrementHandler = ()=> {

  const newScore= this.state.score +1;
  this.setState({
    score: newScore
  })
  if (this.state.newScore === 12){
    this.setState ({
      win : this.state.win +1,
    })
    this.changeFriendPosition();
  }
  
}

resetHandler = ()=> {
  this.setState ({

    score: 0,
    topScore:0,
    win:0,
    loss:0,
   

  }); 
  this.changeFriendPosition();
}


 

  changeFriendPosition = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const friendsPosition = shuffleArray(friends);
    // Set this.state.friends equal to the new friends array
    this.setState({friends: friendsPosition });
  };
  

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    <div>
      <Nav >
      <ul>
          
         <li> <p>Click image to start</p></li>
          

          <li>
          score= {this.state.score} |
          topScore={this.state.topScore},
          </li>
          
          <li>
          win={this.state.win},
          loss={this.state.loss},
          </li>
          </ul>

        </Nav>
      <Wrapper>
        
        <Title><h2> "Clicky -Game"</h2>
        <p>Do not clik the same picture twice</p>
        </Title>

        {this.state.friends.map(friend => (
          <FriendCard
          changeFriendPosition={this.changeFriendPosition}
          clickHandler={this.clickHandler}
          resetHandler={this.resetHandler}
          scoreHandler={this.scoreHandler}

            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            occupation={friend.occupation}
            location={friend.location}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}


export default App;
