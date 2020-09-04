// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import ListMessages from '../ListMessages';
import FormMessage from '../FormMessage';

// == Composant
const App = () => (
  <div className="app">
    <ListMessages />
    <FormMessage />
  </div>
);

// == Export
export default App;
