import Memos from "../component/screen/Memos";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createMemo } from '../module/memos';

const mapStateToProps = (state) =>({
  currentUser: state.users.currentUser
});

const mapDispatchToProps = (dispatch) => bindActionCreators({
  createMemo
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Memos);