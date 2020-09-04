// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const ListMessages = ({ list }) => (
  <div className="message-container">
    {
    list.map((listObject) => (

      <Message key={listObject.id} {...listObject} />
    ))
    }
  </div>

);
ListMessages.propTypes = {
  list: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};

const Message = ({ author, content }) => (
  <div className="message">
    <div className="message-author">{ author }</div>
    <p className="message-content">{ content }</p>
  </div>
);

Message.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

// == Export
export default ListMessages;
