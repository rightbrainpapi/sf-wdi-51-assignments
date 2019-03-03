import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

const data = {
    counters: 5
}

ReactDOM.render(<App data={data}/>, document.getElementById("root")); 
//-------------------------^this is a prop being passed down to App.js
