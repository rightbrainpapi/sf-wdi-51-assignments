import React from 'react';

const results = (props) => {
    return (
        <div>   
            <h2>{props.result.title}</h2>
            <img 
                src={props.result.images.fixed_height.url} 
                alt={props.result.title}
                />
        </div>
    )
}

export default results;