import React from 'react';
const noMatch = ({ location })=>{
    //TODO: 404 page 
    return (
        <div className="container">
            <p>
                No match for <code>{ location.pathname }</code>
            </p>
        </div>   
    );
};
export default noMatch;