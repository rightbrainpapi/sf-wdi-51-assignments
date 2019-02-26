import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
// import './App.css'; //<-- importing styling



class Blogfooter extends Component{
    render () {
        return (
            <footer>
            <div class="wrap">
                <div class="social-links">
                    <a href=""><i class="fa fa-facebook-square" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                    <a href=""><i class="fa fa-instagram" aria-hidden="true"></i></a>
                </div>
                <input type="text" placeholder="Email Address"/>
                <button type="submit">Keep in Touch</button>
            </div>
    
            <p class="copyright">&copy;2019 Darnell</p>
        </footer>

        )
    }
}

export default Blogfooter;