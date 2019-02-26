import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
import Header from './Header';
import Body from './Body';
import About from './About';
import Gallery from './Gallery';
import Contact from './Contact';
import Footer from './Footer';
import './App.css';
import './Main.css';



class Main extends Component{
    render () {
        return (
            <div>
                <Header/>
                <Body/>
                <About/>
                <Gallery/>
                <Contact/>
                <Footer />
            </div>
        )
    }
}

export default Main;