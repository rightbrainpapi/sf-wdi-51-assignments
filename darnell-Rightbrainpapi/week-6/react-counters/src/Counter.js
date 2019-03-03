import React, { Component } from "react";


class Counter extends Component {
    state ={
        count: 0
    }
    //^need this to track the count

    increment = () => {
        console.log("Inside increment function")
        let newCount = this.state.count + 1 //<--The variable newCount contains this.state.counter+1
        this.setState({count: newCount}) //<--I am revising the state to the newCount variable which contains this.state.count+1
      }
    //^just copied the content of app.js since I needed increment function
      decrement = () => {
        console.log("Inside decrement function")
        let newCount = this.state.count - 1 //<--The variable newCount contains this.state.counter-1
        this.setState({count: newCount}) //<--I am revising the state to the newCount variable which contains this.state.count-1
      }
      //^just copied the content of app.js since I needed decrement function. 


    render (){
        return (
            <div className="Counter" >
                <h4>Counter: {this.state.count}</h4> 
                <button onClick={this.increment}>Increment</button> 
                <button onClick={this.decrement}>Decrement</button>
            </div>
        ); //---^onClick of increment button initiate the increment function  -------- onClick of the decrement button initite the decrement function
    }


    
}

export default Counter;


