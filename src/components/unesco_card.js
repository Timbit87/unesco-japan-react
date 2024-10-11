import React from 'react';
import '../index.css';
import UnescoObject from './unesco_object'

function UnescoCard() {
  return (
    UnescoObject.map((site, index) =>
    <div className='medium-card' key={index}>
      <img src={site.img} alt={site.name}></img>
      <div className='medium-card-content'>
        <h1>{site.name}</h1>
        <h3>{site.prefecture}</h3>
        <p>{site.shortDescription}</p>
      </div>
    </div>
  ))
}

export default UnescoCard;
