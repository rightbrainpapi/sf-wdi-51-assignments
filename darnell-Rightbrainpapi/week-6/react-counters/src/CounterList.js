import React, { Component } from "react";
import Counter from "./Counter";


//This component contains the list of duplicates of the counters
class CounterList extends Component {
  render() {
    let counters = []; //<--Empty array called counter to store the each counter as it is added or deleted using the Counter component 
    
    for (let idx = 0; idx < this.props.counters; idx++){//<---this.props.counters is a coming from app.js
        counters.push(<Counter key={idx}/>); //<--Push what ever is comming from the Counter component I need the key...
    }
    return (
        <div className="Counter-row">
            {counters} 
        </div>
    );//^ the counters above is an array containing everything in the array
  }
}

export default CounterList;