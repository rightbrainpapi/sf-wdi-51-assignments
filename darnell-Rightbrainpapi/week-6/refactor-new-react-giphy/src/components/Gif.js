import React from 'react';

const Gif = props => (

  <div className="gif-wrap">
    <img src={props.url} alt=""/>
    <p>{props.title}</p> 
  </div>

  //the code above workes 
  // <li className="gif-wrap">
  //   <img src={props.url} alt=""/>
  //   <p>{props.title}</p>
  // </li>
);

export default Gif;