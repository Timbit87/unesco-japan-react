import React from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';

function UnescoMiniCard({card, zoomTo}) {
  return (
  <div class="mini-card">
  {/* <img src={card.img} alt={card.title}/> */}
  <div class="mini-card-infos">
    <h2>{card.title}</h2>
    <p></p>
    <Button className="unesco-button" variant="primary" onClick={ () => zoomTo(card) }>Zoom to</Button>
  </div>
</div>
  )
}

export default UnescoMiniCard;
