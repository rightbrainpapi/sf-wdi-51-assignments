import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
// import './App.css'; //<-- importing styling



class Header extends Component{
    render () {
        return (
            <header className="vertical-center">

                <div>
                    <h1><a href="">Monument</a></h1>
                    <h2>A Lifestyle Magazine</h2>
                </div>
            </header>
        )
    }
}

export default Header;





