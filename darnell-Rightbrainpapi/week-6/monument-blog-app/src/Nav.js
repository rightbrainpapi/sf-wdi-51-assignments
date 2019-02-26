import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
import './Blog';
import './Main.css';

class Nav extends Component{
    render () {
        return (
            <nav>
                <a class="hamburger" href=""><i class="fa fa-bars"></i></a>
                <ul>
                    <li><a href="./#about">About</a></li>
                    <li><a href="./#gallery">Gallery</a></li>
                    <li><a href={"./Blog"}>Blog</a></li>
                    <li><a href="./#contact">Contact</a></li>
                </ul>
            </nav>
        )
    }
}

export default Nav;