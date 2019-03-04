import React from 'react';
// import Gif from './Gif';
import NoGifs from './NoGifs';
import {Link} from 'react-router-dom';



const GifList = props => { 

    const results = props.data;

    console.log (props.data)
    console.log (`-------`)
    let gifs;
    if(results.length > 0) {
        gifs = results.map(gif =>
            // <Gif url={gif.images.fixed_height.url} title={gif.title} key={gif.id} />
            <div>
               <img src={gif.images.fixed_height.url} alt={gif.title}/>
            <p>{gif.title}</p>
            <button>
                <Link to={{
                pathname: `/gif/${gif.id}`,
                state: {gif: gif.title}
            }}>View</Link>
            </button>
            </div>
           
        );
        
    } else {
        gifs = <NoGifs />
    }

    return(
        <ul className="gif-list">
            <div className="gif-wrap">
                {gifs}
            </div>
           
        </ul> 
        
    );
}

export default GifList;