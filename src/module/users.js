import { auth } from '../util/firebase'

const SET_USER = 'user/SET_USER';
const UNSET_USER = 'user/UNSET_USER';
const LOGIN_ERROR = 'user/LOGIN_ERROR';
const FETCHED = 'user/FETCHED';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const unSetUser = () => ({
  type: UNSET_USER
});

export const loginError = (error) => ({
  type: LOGIN_ERROR,
  payload: error
});

export const fetched = () => ({
  type: FETCHED
});

export const loginWithEmailAndPassword = (email, password) => (
  async (dispatch) => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
    } catch(e) {
      console.error(e);
      dispatch(loginError(e));
    }
  }
);
  
const defaultState = {
  currentUser: null,
  error: null,
  isFetched: false
};

export default (state = defaultState, action) => {
  switch(action.type) {
    case SET_USER:
      return {
        ...state,
        currentUser: action.payload
      };

    case UNSET_USER:
      return {
        ...state,
        currentUser: null
      };

    case LOGIN_ERROR:
      return {
        ...state,
        error: action.payload
      };

    case FETCHED:
      return {
        ...state,
        isFetched: true
      };

    default:
      return state;
  }
}