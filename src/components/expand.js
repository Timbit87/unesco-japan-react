import React from 'react';
import UnescoMiniCard from './unesco_mini_card'
import UnescoObject from './unesco_object'

function Expand( {site} ) {
  return (
    <>
      {site.coordinates.map((coord) => (
        console.log(coord),
        <UnescoMiniCard key={coord.id} card={coord}/>
      ))}
    </>
  );
}
export default Expand
