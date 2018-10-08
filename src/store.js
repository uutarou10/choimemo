import { createStore, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './module'
import { createBrowserHistory } from 'history';

export const history = createBrowserHistory();

export default createStore(
  connectRouter(history)(rootReducer),
  composeWithDevTools(applyMiddleware(
    thunk,
    routerMiddleware(history),
  ))
);