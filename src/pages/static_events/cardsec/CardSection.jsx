import './cardsection.scss';
import Card from '../card/Card'
import React from 'react';
import {edata} from '../dataset.js';

const CardSection = () => {
  
  return (
    <>
      <div className="event-container">
        <div className="mname">Events</div>
        <br /><br />
        <div className="card-contain">
          {edata?.map((d, index) => (
            <Card d={d} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default CardSection
