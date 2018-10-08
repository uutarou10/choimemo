import { connect } from 'react-redux';
import RedirectIfLoggedIn from '../component/RedirectIfLoggedIn';

const mapStateToProps = state => ({
  currentUser: state.users.currentUser
});

export default connect(mapStateToProps)(RedirectIfLoggedIn);