import React from 'react';
import '../index.css';
import UnescoObject from './unesco_object'

function UnescoCard() {
  return (
    UnescoObject.map(site =>
    <div className='medium-card'>
      <img src={site.img} alt={site.name}></img>
      <div className='medium-card-content'>
        <h1>{site.name}</h1>
        <h3>{site.prefecture}</h3>
        <p>{site.shortDescription}</p>
      <a href='#'>Wikipedia link I guess</a>
      </div>
    </div>
  ))
}

export default UnescoCard;
