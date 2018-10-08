import { connect } from 'react-redux';
import Top from '../component/screen/Top';

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(Top);