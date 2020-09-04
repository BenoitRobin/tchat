// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import MessageForm from '../components/FormMessage';
import { onSubmit, onChange } from '../actions/messageForm';

const mapStateToProps = (state) => ({
  messageText: state.message.messageText,
});

const mapDispatchToProps = (dispatch) => ({
  onChangeInput: (texteSaisi) => {
    dispatch(onChange(texteSaisi));
  },
  onMessageSubmit: () => {
    dispatch(onSubmit());
  },
});

// Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MessageForm);
