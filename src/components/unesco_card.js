import React, {useState} from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function UnescoCard({site, addMarker}) {
  return (
    <div>
    <div className='medium-card'>
    <div className='medium-card-content'>
      <img src={site.cardImg} alt={site.name}></img>
        <h1>{site.name}</h1>
        <h3>{site.prefecture}</h3>
        <p>{site.shortDescription}</p>
      </div>
      <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
      <Button className="unesco-button" variant="primary" onClick={() => addMarker(site)}>Zoom to</Button>
      <Button className="unesco-button" variant="primary">Find Directions</Button>
      <Button className="unesco-button" variant="primary">Find out more</Button>
      </div>
    </div>
    </div>
  )
}

export default UnescoCard;
