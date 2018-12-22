import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import Nav from "./components/Nav";
import friends from "./friends.json";
import "./App.css";

function shuffleArray(array){
  
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));

    [array[i], array[j]] = [array[j], array[i]];
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
    selected:[]

  };
/////////randomly selects the pictures using the previous loop//////
  changeFriendPosition = (id) => {
    
    this.setState({friendsPosition: shuffleArray(friends) });

     this.incrementHandler()
    // this.clickHandler (id)

  }
  /////check for double click for the same image////

  // clickHandler = (id)=> {
  //   if (this.state.selected.indexOf(id) ===-1) {
      
  //     this.incrementHandler();
  //     this.setState({ selected: [...this.state.selected,id ] });
  //   } 
  //   // else{
  //   //   this.resetHandler
  //   // }
      
    
  //   //console.log(clickHandler);
  // };
  

  incrementHandler = ()=> {
    
    const newScore= this.state.score +1;
    this.setState({
      score: newScore,
      
    })
    if (newScore >= this.state.topScore ){this.setState ({topScore: newScore })

  }
   if (newScore % 12===0){
    this.setState({
      win : this.state.win +1})
   
  }

  if (newScore % 12===0){
    this.setState({
      score : 0 })
}
  
  
    }
    
 
// resetHandler = ()=> {
//   const newLoss = this.state.loss +1;
//   this.setState ({
//     loss:newLoss,
//   })
//     if( newLoss >= this.state.loss){
//       this.setState({loss: newLoss})

//     }
  
    
//     // selected: [],
    

 
//   this.changeFriendPosition();
// }


 

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
    <div>
      
      <Nav >
      <ul>
          
         <li> <p>Click X to start</p></li>
    
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
          // removeFriend={this.removeFriend}
          clickHandler={this.changeFriendPosition}
          // resetHandler={this.resetHandler}
          // scoreHandler={this.scoreHandler}

            id={friend.id}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            // occupation={friend.occupation}
            // location={friend.location}
          />
        ))}
      </Wrapper>
    </div>
    );
  }
}


export default App;
