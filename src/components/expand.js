import React from 'react';
import UnescoMiniCard from './unesco_mini_card'
import Map from './map'
import UnescoObject from './unesco_object'

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
