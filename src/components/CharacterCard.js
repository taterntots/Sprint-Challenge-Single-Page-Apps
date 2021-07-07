import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: #12B0C9;
`
const ImageStyle = styled.img`
  width: 100%;
`

export default function CharacterCard(props) {
  return (
    <CardStyle>
      <div className='character-image'>
        <ImageStyle src={props.image} alt='character headshot' />
      </div>
      <div className='character-info'>
        <h1>{props.name}</h1>
        <p>{props.gender}</p>
        <p>{props.species}</p>
        <p>{props.status}</p>
      </div>
    </CardStyle>
  )
}