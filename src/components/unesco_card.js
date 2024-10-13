import React from 'react';
import '../index.css';
import App from '../App'
import UnescoObject from './unesco_object'

function UnescoCard({site}) {
  return (
    <div className='medium-card'>
      <img src={site.img} alt={site.name}></img>
      <div className='medium-card-content'>
        <h1>{site.name}</h1>
        <h3>{site.prefecture}</h3>
        <p>{site.shortDescription}</p>
      </div>
    </div>
  )
}

export default UnescoCard;
