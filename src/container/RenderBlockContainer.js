import { connect } from 'react-redux';
import RenderBlock from '../component/RenderBlock';

const mapStateToProps = state => ({
  isFetched: state.users.isFetched
});

export default connect(mapStateToProps)(RenderBlock);