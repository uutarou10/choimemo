import { combineReducers } from 'redux';
import users from './users';
import memos from './memos';

export default combineReducers({
  users,
  memos
});