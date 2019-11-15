import React from 'react';

export default function CharacterCard(props) {
  return (
    <div className='card-container'>
      <div className='character-image'>
        <img src={props.image} alt='character image' />
      </div>
      <div className='character-info'>
        <h1>{props.name}</h1>
        <p>{props.gender}</p>
        <p>{props.species}</p>
        <p>{props.status}</p>
      </div>
    </div>
  )
}