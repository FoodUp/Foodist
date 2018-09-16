import React from 'react';

const Recipe = ({match}) => {
    return (
        <h2> { match.params.id }  </h2>
       
    );
}
export default Recipe;