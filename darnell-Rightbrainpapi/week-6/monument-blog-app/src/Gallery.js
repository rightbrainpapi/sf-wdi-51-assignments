import React, { Component } from 'react'; //<--es6 way of importing the react library and Component class
// import './App.css'; //<-- importing styling



class Gallery extends Component{
    render () {
        return (
        <section id="gallery">
                <div className="wrap">
                    <h2>Issue Twenty</h2>
                    <h3>A visual guide to the Southwest</h3>
                    <div className="masonry">
                        <img src="images/gallery_1.jpg" alt=""/>
                        <img src="images/gallery_3.jpg" alt=""/>
                        <img src="images/gallery_4.jpg" alt=""/>
                        <img src="images/gallery_2.jpg" alt=""/>
                        <img src="images/gallery_5.jpg" alt=""/>
                        <img src="images/gallery_6.jpg" alt=""/>
                    </div>
                </div>
        </section>

        )
    }
}

export default Gallery;