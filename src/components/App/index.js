// == Import npm
import React from 'react';

// == Import
import './styles.scss';
import ListMessages from '../ListMessages';
import FormMessage from '../FormMessage';

const data = [
  {
    id: 1,
    author: 'Benoit Robin',
    content: 'Salut comment ça va ?',
  },
  {
    id: 2,
    author: 'Elon Musk',
    content: 'Va bien, on fait couler!',
  },
  {
    id: 3,
    author: 'Steve Jobs',
    content: 'Qu\'est-ce tu racontes?',
  },
  {
    id: 4,
    author: 'Steve Wozniak',
    content: 'H\é ! les gars je suis là!!',
  },
  {
    id: 5,
    author: 'Benoit Robin',
    content: '....',
  },
  
];

// == Composant
const App = () => (
  <div className="app">
    <ListMessages list={data} />
    <FormMessage messageText="" />
  </div>
);

// == Export
export default App;
