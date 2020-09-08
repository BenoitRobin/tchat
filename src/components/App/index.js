// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import ListMessages from '../../containers/MessageList';
import FormMessage from '../../containers/MessageForm';
import Settings from '../Settings';

// == Composant
const App = () => (
  <div className="app">
    <Settings />
    <ListMessages />
    <FormMessage />
  </div>
);

// == Export
export default App;
