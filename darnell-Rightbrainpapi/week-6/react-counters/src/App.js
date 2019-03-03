import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: this.props.data.counters //<-- this is a prop being passed from index.js and I am specifically targeting the 5 which is cfound in counters.
  }



  //defining the increaseCounter function 
  increaseCounters = () => {
    console.log("Inside increaseCounters function back on the App.js")
    let counters = this.state.counters + 1 //<--this.state.counters +1
    this.setState({counters}) //<--I am revising the state to the counter variable which contains this.state.counter+1
  }
  //^This is a call back functions being excuted in the child component called CounterList when a button is pressed^


 //defining the decreaseCounter function 
  decreaseCounters = () => {
    console.log("Inside decreaseCounters function back on the App.js")
    let counters = this.state.counters - 1 //<--this.state.counters -1
    this.setState({counters}) //<--I am revising the state to the counter variable which contains this.state.counter-1
    console.log({counters}) ////<--console.log this.state.counter-1
  }
  //^This is a call back functions being excuted in the child component called CounterList when a button is pressed^


  //I need numberOfCounters to render from here.
  render() {
    return (
      <div className="App">
        <Header 
         countersCount={this.state.counters} // <--this.state.counters is a prop being passed to the Header and it contains this.props.data.counters which is being passed from data on the index.js to App.js
         increaseCounters={this.increaseCounters} // <--this.increaseCounters is a function that is defined here on App.js an is being passed to the header as a prop to be executed there
         decreaseCounters={this.decreaseCounters} // <--this.decreaseCounters is a function that is defined here on App.js an is being passed to the header as a prop to be executed there
        />
  
        <CounterList 
          counters={this.state.counters} // <--this.state.counters is a prop being passed to the CounterList and it contains this.props.data.counters which is being passed from data on the index.js to App.js
          /> 
      </div>
    );
  }
}

export default App;