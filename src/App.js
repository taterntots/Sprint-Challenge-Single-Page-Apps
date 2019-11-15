import React from 'react';
import { Route } from 'react-router-dom';
import Header from './components/Header.js';
import CharacterList from './components/CharacterList';
import LocationsList from './components/LocationsList';
import WelcomePage from './components/WelcomePage';

export default function App() {
  return (
    <main>
      <Header />
      <Route exact path='/' component={WelcomePage} />
      <Route path='/characters' component={CharacterList} />
      <Route path='/locations' component={LocationsList} />
    </main>
  );
}