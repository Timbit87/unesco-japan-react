import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function UnescoCard({site, addMarker}) {
  return (
    <div>
    <div className='medium-card'>
    <div className='medium-card-content'>
      <img src={site.img} alt={site.name}></img>
        <h1>{site.name}</h1>
        <h3>{site.prefecture}</h3>
        <p>{site.shortDescription}</p>
      </div>
      <Button className="unesco-button" variant="primary" onClick={() => addMarker(site)}>Click for more</Button>
    </div>
    </div>
  )
}

export default UnescoCard;
