import React, {useState} from 'react';
import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Button from 'react-bootstrap/Button';
import Expand from './expand'

function UnescoCard({site}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded((prev) => !prev )
  };

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
      <Button className="unesco-button" variant="primary" onClick={handleExpand}>
        {isExpanded ? 'Collapse' : 'Expand' }</Button>
      </div>
    </div>
    { isExpanded && <Expand site={site} />} { /* Render Expand conditionally */}
    </div>
  )
}

export default UnescoCard;
