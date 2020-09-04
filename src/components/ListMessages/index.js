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
    <div className="message-author">Benoit Robin</div>
    <p className="message-content">Comment ça va ?</p>
  </div>
);

// == Export
export default ListMessages;
