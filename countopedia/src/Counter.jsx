import React from "react";
import Attack from "../src/images/attack.png";
import Defend from "../src/images/defend.png";
//class based component
class Counter extends React.Component {
  //when you add constructor you need to add props
  constructor(props) {
    super(props);
    //you have to bind
    this.HandleAttack = this.HandleAttack.bind(this);
    this.HandleDefence = this.HandleDefence.bind(this);
    //state is immutable
    this.state = {
      count: 0,
      lastPlay: "",
      gameStatus: ""
    };
  }
  HandleAttack = () => {
    //alert("Attack Clicked");
    this.setState((previousState) => {
      let newCount = previousState.count + Math.round(Math.random() * 10)
      return {
        count: newCount,
         lastPlay: "attack",
        gameStatus: newCount>10? "You Won!!": previousState.gameStatus,
      };
    });

    //this.setState({count: this.state.count + 1 });
  }
  HandleDefence = () => {
    //alert("Defend Clicked");
    this.setState((previousState) => {
      let newCount = previousState.count - Math.round(Math.random() * 10)
      return {
        count: newCount,
        lastPlay: "defense",
        
        gameStatus: newCount<-10? "You Lost!!": previousState.gameStatus,
      };
    });
    //this.setState({count: this.state.count - 1 });
  }
  handleRandomPlay = () => {
    let playMode = Math.round(Math.random());
    if(playMode == 0){
      this.HandleAttack();
    } else {
      this.HandleDefence();
    }
  }
  HandleReset= () => {
    //alert("Defend Clicked");
    this.setState(() => {
    
      return {
        count: 0,
        gameStatus: "",
        lastPlay: "",
      };
    });
    //this.setState({count: this.state.count - 1 });
  }
  render() {
    return (
      <div className="row text-center">
        <h1>Game Score: {this.state.count}</h1>
        <p>You win at +10 and lose at -10 points!</p>
        <p>Last Play: {this.state.lastPlay}</p>
        <h3>Game Status: {this.state.gameStatus}</h3>
        <div className="col-6 col-md-3 offset-md-3" > 
        <img style={{
          width: "100%",
          cursor: "pointer",
          border: "1px solid green"
        }}
        className="p-4 rounded" src={Attack} onClick={this.HandleAttack} alt="attack sword"
        />
        </div>
        <div className="col-6 col-md-3" > 
        <img style={{
          width: "100%",
          cursor: "pointer",
          border: "1px solid red"
        }}
        className="p-4 rounded" src={Defend} onClick={this.HandleDefence} alt="defend shield"
        />
        </div>
    
        <div className="col-12 col-md-4 offset-md-4">
        <button className="btn btn-secondary w-100 mt-2" onClick={this.handleRandomPlay} >Random play</button>
        <button className="btn btn-warning w-100 mt-2" onClick={this.HandleReset} >Reset</button>
        </div>
      </div>
    );
  }
}

export default Counter;
