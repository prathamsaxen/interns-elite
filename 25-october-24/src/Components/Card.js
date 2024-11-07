import React,{useContext} from 'react';
import './Card.css';
import Temp from './Temp';

function Card({name}) {
  return (
    <div className='card'>
      <p>{name}</p>
      <Temp/>
      </div>
  )
}

export default Card