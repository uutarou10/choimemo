const SET_USER = 'user/SET_USER';
const UNSET_USER = 'user/UNSET_USER';

export const setUser = (user) => ({
  type: SET_USER,
  payload: user
});

export const unSetUser = () => ({
  type: UNSET_USER
});

const defaultState = null;

export default (state = defaultState, action) => {
  switch(action.type) {
    case SET_USER:
      return action.payload;
    case UNSET_USER:
      return null;
    default:
      return state;
  }
}