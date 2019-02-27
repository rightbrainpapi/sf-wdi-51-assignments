import React, { Component } from "react";


class Counter extends Component {
    state ={
        count: 0
    }
    //^need this to track the count

    increment = () => {
        console.log("Inside increment function")
        let newCount = this.state.count + 1
        this.setState({count: newCount})
      }
    //^just copied the content of app.js since I needed increment function
      decrement = () => {
        console.log("Inside decrement function")
        let newCount = this.state.count - 1
        this.setState({count: newCount})
      }
      //^just copied the content of app.js since I needed decrement function
    render (){
        return (
            <div className="Counter" >
                <h4>Counter: {this.state.count}</h4>
                <button onClick={this.increment}>Increment</button>
                <button onClick={this.decrement}>Decrement</button>
            </div>
        );
    }


    
}

export default Counter;


