import React, { Component } from 'react';
import axios from 'axios';
import { CLIENT_URL } from "../constants.js";
// import {Link} from 'react-router-dom';

class ActiveGif extends Component{
    
        state = {
            activegiphy:[]
        }
  
    
    componentDidMount = async () => {
        const title = this.props.location.state.gif;
        axios.get(`${CLIENT_URL + title}&limit=10&api_key=eCfhYUeRMBa0ssvEoB1QQajaBAGtyvQh`) //<-- simply combining the giphy Url from Client with the desire query which is Darnell. I could have written this a few other ways including without using the client variable
        .then( res => {
                
                // console.log(res.data.data[0])
                let activateddata = res.data.data[0]
                this.setState({
                    activegiphy:activateddata        
                });
                // let example = this.state.activegiphy.images.fixed_height_still.url;
                //   console.log(this.state.activegiphy);
                //   debugger;
            }
        
        )
        .catch( //<--this part of the axios is dealing with the error object.
            error => {
                console.log('Error fetching and parsing data', error);
            }
        );

        console.log(title)
        console.log('--------Activated Data-------')
    }
    
        render(){
            const giphy = this.state.activegiphy
            console.log(this.state.activegiphy)
            console.log("//////////////////////")
            console.log(giphy)
            // debugger;

       
    if (giphy.length === 0){
        console.log("this is empty");
    } else { 
        return  (
                <div className="container">
                    <img className="active-giphy"src={giphy.images.fixed_height.url} alt={giphy.title}/>
                    <h3>Title: {giphy.title}</h3>
                    <h4>Rating: {giphy.rating}</h4>
                    {/* <h4> Source: 

                    <Link to={{pathname: `${giphy.source_tld}` }}> View Source</Link>
                    </h4> */}
                    <h5>Created: {giphy.trending_datetime}</h5>
                    <a></a>
                </div>
             )
        }
        
        return(
            <div>   
                
            </div>
        );
    }
}
export default ActiveGif;