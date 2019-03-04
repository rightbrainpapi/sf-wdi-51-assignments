import React, { Component } from 'react';

class SearchForm extends Component {

    constructor(props) {
        super(props); //<-- super initiatizes the parent props then the other classes 
        console.log('SearchForm.js: In constructor()')
      }

    state = {
        searchText: 'kdkdkd' //<-- it does not matter what is in these strings. but why? Because it is being overridden right away.
    }
  
    componentWillMount(){
        console.log('SearchForm.js: In componentWillMount() in SearchForm.js'); //<-- comment this in to see what gets console.logged first
        // debugger;
    }


    componentDidMount(){
        console.log('SearchForm.js: In componentDidMount() in SearchForm.js'); //<-- comment this in to see what gets console.logged first
        // debugger;
    }

    onSearchChange = e => {
        this.setState({ searchText: e.target.value });
    }
  
    handleSubmit = e => {
        e.preventDefault();
        this.props.onSearch(this.query.value);
        e.currentTarget.reset();
    }
  
// debugger;
    componentDidUpdate(prevProps, prevState){
        console.log(`SearchForm.js: In componentDidUpdate(). prevState: ${JSON.stringify(prevState)}`);
      }

    render() {  
        return (
            <form className="search-form" onSubmit={this.handleSubmit} >
                <label className="is-hidden" htmlFor="search">Search</label>
                <input  type="search" 
                        onChange={this.onSearchChange}
                        name="search" 
                        ref={(input) => this.query = input}
                        placeholder="Something Silly" />
                <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
            </form>      
        );
    }
}

export default SearchForm

