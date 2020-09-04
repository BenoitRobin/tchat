// == Import : npm
import React from 'react';

// == Import : local
import './styles.scss';

// == Composant
const ListMessages = () => (
  <Message />
);

const Message = () => (
  <div className="message">
    <span className="message-author">Benoit Robin</span>
    <p className="message-content">Comment ça va ?</p>
  </div>
);

// == Export
export default ListMessages;
