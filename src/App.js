import React from 'react';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import TopContainer from './container/TopContainer';
import LoginContainer from './container/LoginContainer';
import fb from 'firebase/app';
import 'firebase/auth';
import { setUser, unSetUser } from './module/users';

export const firebase = fb.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DB_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID 
});

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(setUser(user));
  } else {
    store.dispatch(unSetUser());
  }
})

const App = () => {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Switch>
          <Route exact path="/" component={TopContainer} />
          <Route exact path='/login' component={LoginContainer} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
