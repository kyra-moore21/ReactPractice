import React from 'react'

class Counter extends React.Component {
 //when you add constructor you need to add props
  constructor(props){
    super(props);
    //you have to bind 
    this.HandleAttack = this.HandleAttack.bind(this);
    this.HandleDefence = this.HandleDefence.bind(this);
    //state is immutable
    this.state = {
      count: 0,
    }
  }
  HandleAttack(){
    //alert("Attack Clicked");
   this.setState({count: this.state.count + 1 });
  };
 HandleDefence(){
  //alert("Defend Clicked");
  this.setState({count: this.state.count - 1 });
  };
  render(){
  return (
    <div className="row ">
      <h1>Counter: {this.state.count}</h1>
      <button onClick={this.HandleAttack} style={{ width: "200px" }}>+1</button>
      <button  onClick={this.HandleDefence}  style={{ width: "200px" }}>-1</button>
    </div>
  );
}
}

export default Counter;
