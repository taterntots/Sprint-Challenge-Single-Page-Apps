import React, { useState } from 'react';

export default function SearchForm(props) {
 
  return (
    <section className="search-form">
      <form>
        <input
          type='text'
          name='name'
          placeholder='search by name'
          autoComplete='off'
          value={props.input}
          onChange={props.handleInputChange}
        />
      </form>
    </section>
  );
}