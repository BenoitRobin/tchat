// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import ListMessages from '../../containers/MessageList';
import FormMessage from '../../containers/MessageForm';

// == Composant
const App = () => (
  <div className="app">
    <ListMessages />
    <FormMessage />
  </div>
);

// == Export
export default App;
