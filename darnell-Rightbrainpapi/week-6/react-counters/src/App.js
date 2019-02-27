import React, { Component } from "react";
import Header from "./Header";
import CounterList from "./CounterList";

class App extends Component {
  state = {
    counters: this.props.data.counters
  }


  increaseCounters = () => {
    console.log("Inside increaseCounters function back on the App.js")
    let counters = this.state.counters + 1
    this.setState({counters})
  }
  //^This is a call back functions being excuted in the child component called CounterList when a button is pressed^



  decreaseCounters = () => {
    console.log("Inside decreaseCounters function back on the App.js")
    let counters = this.state.counters - 1
    this.setState({counters})
    console.log({counters})
  }
  //^This is a call back functions being excuted in the child component called CounterList when a button is pressed^


  //I need numberOfCounters to render from here.
  render() {
    return (
      <div className="App">
        <Header 
         countersCount={this.state.counters} // <--not entirely sure where this comes from. 
         increaseCounters={this.increaseCounters} // <-- <--the current state of counters is determined on header.js page then sent back to App.js
         decreaseCounters={this.decreaseCounters} // <-- <--the current state of counters is determined on header.js page then sent back to App.js
        />
  
        <CounterList 
          counters={this.state.counters} // <--the current state of counters is determined on the counterlist.js
          /> 
      </div>
    );
  }
}

export default App;