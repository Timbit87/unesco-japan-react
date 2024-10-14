import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';

function UnescoCard({site}) {
  return (
    <div>
    <div className='medium-card'>
    <div className='medium-card-content'>
      <img src={site.img} alt={site.name}></img>
        <h1>{site.name}</h1>
        <h3>{site.prefecture}</h3>
        <p>{site.shortDescription}</p>
      </div>
    </div>
    </div>
  )
}

export default UnescoCard;
