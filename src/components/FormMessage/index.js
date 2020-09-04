// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const FormMessage = ({ messageText }) => (
  <form
    className="message-form"
    onSubmit={(event) => {
      event.preventDefault();
      console.log('clic');
    }}
  >
    <input
      type="text"
      className="form-input"
      value={messageText}
      onChange={(event) => {
        const text= event.target.value;
        console.log(text);
      }}
    />
    <button
      className="form-button"
      type="submit"
    >
      &gt;
    </button>
  </form>
);

FormMessage.propTypes = {
  messageText: PropTypes.string.isRequired,
};
// == Export
export default FormMessage;
