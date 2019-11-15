import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios
      .get('https://rickandmortyapi.com/api/character/')
      .then(response => {
        console.log(response.data.results);
        setCharacters(response.data.results);
      })
      .catch(error => {
        console.log('Ya done goofed, kiddo', error);
      })
  }, []);

  return (
    <section className="character-list">
        <SearchForm />
      {characters.map((char, index) => {
        return (
          <h1>{char.name}</h1>
        )
      })}
    </section>
  );
}