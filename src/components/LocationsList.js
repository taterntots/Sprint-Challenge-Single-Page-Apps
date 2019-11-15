import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import LocationCard from './LocationCard';
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

export default function LocationsList() {
  const [locations, setlocations] = useState([]);
  const [input, setInput] = useState('');

  useEffect(() => {
    axios
      .get('https://rickandmortyapi.com/api/location/')
      .then(response => {
        // console.log(response.data.results);
        // setlocations(response.data.results);
        const searchLoc = response.data.results.filter(loc => 
          loc.name.toLowerCase().includes(input.toLowerCase())
        )
        setlocations(searchLoc);
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
    <section className='location-list'>
      <SearchForm handleInputChange={handleInputChange} />
      <GridStyle>
        {locations.map((loc, index) => {
          return (
            <LocationCard
              key={index}
              name={loc.name}
              type={loc.type}
              dimension={loc.dimension}
              residents={loc.residents.length}
            />
          )
        })}
      </GridStyle>
    </section>
  );
}