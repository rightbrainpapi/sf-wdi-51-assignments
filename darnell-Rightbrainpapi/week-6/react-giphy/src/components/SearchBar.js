import React from 'react';

const search = (props) =>{
    return (
        <div>
                <input 
                type='text'
                placeholder='Silly Words'
                onKeyUp={props.onInput}
                /> 
        </div> 
    )
}

export default search;

