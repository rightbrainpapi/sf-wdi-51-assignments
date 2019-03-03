import React, { Component } from 'react';
import './Home.css';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import GifList from './components/GifList';
import { CLIENT_URL } from "./constants.js";

class Home extends Component {
    
    // constructor() {
    //     super();
    //     console.log(`Home.js: In constructor()`)
    //     this.state = {
    //         // gifs: [],

            
    //         loading: true
    //     };
    // } 

    state = {
        gifs: [],

        
        loading: true
    };

    componentWillMount() {
        this.searchFunction(); //<--I am initiating the searchFunction() as soon as we are in this component. But the searchFunction() is being executed on SearchForm so react to execute the searchFunction.
        console.log(`Home.js: componentWillMount()`)
        // debugger;
    }

    componentDidMount() {
        this.searchFunction(); //<--Execute this function as soon as we are in the component
        console.log(`Home.js: componentDidMount()`)
        // debugger;
    }

    searchFunction = (query = 'Darnell') => { //<-- This query is the same as saying e or event. I'm just setting it to my name so that this would be the first thing people see on page load. (Also the query avriable could have been anything even tacos. )
        axios.get(`${CLIENT_URL + query}&limit=10&api_key=eCfhYUeRMBa0ssvEoB1QQajaBAGtyvQh`) //<-- simply combining the giphy Url from Client with the desire query which is Darnell. I could have written this a few other ways including without using the client variable
        .then( // <-- axios is promise based client so it promises to return a success in the form of the exectuted function below. checkout the console logged statement below to see what I mean.
            response => {
                this.setState({
                    gifs:response.data.data,
                    loading: false
                    
                });
                // debugger;
                console.log('--------Data-------')
                let data = response.data.data
                  console.log(data);

                console.log('Promises will return either a response object or an error object ') //<-- highlights the point of a 
            }
        )
        .catch( //<--this part of the axios is dealing with the error object.
            error => {
                console.log('Error fetching and parsing data', error);
            }
        );
    }
    

    //^---------------The Above needs to be done so users are not waiting-----------------^//
    //^---------------before home.js is rendered the searchFunction() --------------------^//
    //^---------------is initiated which is initiated here on this file ------------------^//
    //^---------------but it is  executed on the SearchForm.js Comment in-----------------^//
    //^---------------all of the debuggers to follow the course --------------------------^//
    
    render() { 
        console.log("Finally made it to the Home render")
        return (
            <main>
                 {/* <div className="container">
                    <h1>Darnell's Giphy Search</h1>
                    <p>Home of the React Routed giphy</p>
                </div> */}

                <div className="main-header">
                    <div className="inner">
                        <h1 className="main-title">Darnell's GifSearch</h1>
                        <h2>React Routed giphy</h2>
                        <SearchForm onSearch={this.searchFunction} />      
                    </div>   
                </div>    

                <div className="main-content">
                
                 {
                    (this.state.loading) ? <p>Loading...</p> : <GifList data={this.state.gifs}  /> //<-- sending props called this.state.data to GifList 
                 }
                </div>

                

            </main>
        );
    }
}

export default Home;
