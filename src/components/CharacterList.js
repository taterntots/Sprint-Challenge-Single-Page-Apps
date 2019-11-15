import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import CharacterCard from './CharacterCard';
import styled from 'styled-components';

const GridStyle = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: auto;
  grid-gap: 20px;
  grid-auto-flow: row;
  justify-content: center;
  align-items: start;
  margin: 0 2rem;
  background-color: #C8DD5D;
`

export default function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        // console.log(response.data.results);
        // setCharacters(response.data.results);
        const searchChar = response.data.results.filter(char => 
          char.name.toLowerCase().includes(input.toLowerCase())
        )
        setCharacters(searchChar);
      })
      .catch(error => {
        console.log('Ya done goofed, kiddo', error);
      })
  }, [input]);

  const handleInputChange = event => {
    event.preventDefault();
    setInput(event.target.value);
  }

  return (
    <section className="character-list">
      <SearchForm handleInputChange={handleInputChange} />
      <GridStyle>
        {characters.map((char, index) => {
          return (
            <CharacterCard
              key={index}
              name={char.name}
              gender={char.gender}
              image={char.image}
              species={char.species}
              status={char.status}
            />
          )
        })}
      </GridStyle>
    </section>
  );
}