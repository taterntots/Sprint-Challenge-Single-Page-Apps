import React from 'react';
import styled from 'styled-components';

const CardStyle = styled.div`
  text-align: center;
  background-color: #12B0C9;
`

export default function LocationCard(props) {
  return (
    <CardStyle>
      <div className='location-info'>
        <h1>{props.name}</h1>
        <p>{props.type}</p>
        <p>{props.dimension}</p>
        <p>Residents: {props.residents}</p>
      </div>
    </CardStyle>
  )
}