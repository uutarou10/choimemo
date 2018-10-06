import { createStore, applyMiddleware } from 'redux';
import { history } from '.';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './module'

export default createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(
    routerMiddleware(history),
  ))
);