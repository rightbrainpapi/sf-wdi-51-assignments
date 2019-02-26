import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
import Blogaside from './Blogaside';// import './App.css'; //<-- importing styling
import Blogcomment from './Blogcomment';
import Blogfooter from './Blogfooter';
import './Blog.css';





class Blog extends Component{
    render () {
        return (
            <div>
                <Blogaside/>
                <Blogcomment/>
                <Blogfooter/>
            </div>
        )
    }
}

export default Blog;