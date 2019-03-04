import React, {Component} from 'react';
import SearchBar from './SearchBar';
import ListofResults from './ListofResults';
import axios from 'axios';
import { CLIENT_URL } from "../constants.js";

class SearchContainer extends Component {
    
    constructor() {
        super();
        this.state = {
            query:'Darnell',
        response:[]
        };
    } 

    search = () => {
        axios.get(`http://api.giphy.com/v1/gifs/search?q=${query}&limit=24&api_key=eCfhYUeRMBa0ssvEoB1QQajaBAGtyvQh`)
        .then((res) =>{
            this.setState({
                response: res.data.data
            });
        })
    }

    shouldComponentUpdate = (nextProps, nextState) => {
        if(this.state.response.length === 0 &&
            this.state.query === nextState.query){
                return false;
            }
            return true;
    }

    componentDidUpdate = (prepProps, prevState) => {
        if (prevState.query !== this.state.query){
            this.search();
        }
    }

    onInput = (e) => {
        this.setState({
            query:e.target.value
        })
    }

    render(){
        let results;
        if(this.state.response){
            results = this.state.response.map((result)=>{
                return(
                    <section>
                        <div>
                            <ListofResults
                                result={result}
                                key={result.id}
                            />
                        </div>
                    </section>
                )
            })
        }
        return(
            <div>
                <SearchBar onInput={this.onInput}/>
            </div>
        )
    }
}

export default SearchContainer;