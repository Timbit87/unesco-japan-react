import React from 'react';
import '../index.css';
import UnescoObject from './unesco_object'

function UnescoCard() {
  return (
    UnescoObject.map(site =>
    <card>
      <h1>{site.name}</h1>
      <h3>{site.prefecture}</h3>
      <p>{site.shortDescription}</p>
      <a href='#'>Wikipedia link I guess</a>
    </card>
  ))
}

export default UnescoCard;
