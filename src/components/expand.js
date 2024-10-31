import React from 'react';
import UnescoMiniCard from './unesco_mini_card'


function Expand( {site, zoomTo} ) {
  return (
    <>
      {site.coordinates.map((coord) => (
        <UnescoMiniCard key={coord.id} card={coord} zoomTo={zoomTo}/>
      ))}
    </>
  );
}
export default Expand
