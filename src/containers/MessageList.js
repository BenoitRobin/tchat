// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import ListMessages from '../components/ListMessages';

const mapStateToProps = (state) => ({
  list: state.message.list,
});
const mapDispatchToProps = null;

// Export
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ListMessages);
