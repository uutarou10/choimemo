import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Login from '../component/screen/Login';
import { loginWithEmailAndPassword } from '../module/users';

const mapStateToProps = (state) => ({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  loginWithEmailAndPassword
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Login);