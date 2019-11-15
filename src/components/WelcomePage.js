import React from 'react';
import styled from 'styled-components';

const WelcomeStyle = styled.header`
  display: flexbox;
  border-radius: 5px;
  background-color: #12B0C9
  margin: 2rem 2rem;
`
const ImageStyle = styled.img`
  border-radius: 5px;
`
const WubbaStyle = styled.div`
  display: flexbox;
  justify-content: center;
`

export default function WelcomePage() {
  return (
    <section className='welcome-page'>
      <WelcomeStyle>
        <div>
          <ImageStyle className='main-img' src='https://rickandmortyapi.com/api/character/avatar/1.jpeg' alt='rick'/>
        </div>
        <WubbaStyle>
          <h1>Wubba lubba dub dub!</h1>
        </WubbaStyle>
      </WelcomeStyle>
    </section>
  );
}