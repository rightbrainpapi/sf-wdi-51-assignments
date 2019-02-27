import React, { Component } from "react";

class Header extends Component {
      handleIncrement = () => {
        console.log("I pressed + !")
        this.props.increaseCounters(console.log('i am here on Header.js')) //<--this prop called increaseCounters comes from the parent App.js and is executed here.
      }

      handleDecrement = () => {

        this.props.countersCount > 0 ? //<--why do i need a question mark? i think its functioning like an if statement
          this.props.decreaseCounters(): //<--this prop called decreaseCounters comes from the parent App.js and is executed here the return is sent back to App.js.
          null
      }


  render() {
    return (
      <header className="App-header">
        <h1 className="App-title">React Counters</h1>
        <button onClick={ this.handleIncrement }>+</button>
        <button onClick={ this.handleDecrement }>-</button>
    </header>
    );
  }
}

export default Header;
