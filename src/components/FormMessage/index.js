// == Import : npm
import React from 'react';
import PropTypes from 'prop-types';

// == Import : local
import './styles.scss';

// == Composant
const FormMessage = ({ messageText, onMessageSubmit, onChangeInput }) => (
  <form
    className="message-form"
    onSubmit={(event) => {
      event.preventDefault();
      console.log('clic');
      onMessageSubmit();
    }}
  >
    <input
      type="text"
      placeholder="Saisissez un message !"
      className="form-input"
      value={messageText}
      onChange={(event) => {
        const text= event.target.value;
        console.log(text);
        onChangeInput(text);
      }}
    />
    <div className="container-button">
      <button
        className="form-button"
        type="submit"
      >
        send
      </button>
    </div>
  </form>
);

FormMessage.propTypes = {
  messageText: PropTypes.string.isRequired,
  onMessageSubmit: PropTypes.func.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
// == Export
export default FormMessage;
