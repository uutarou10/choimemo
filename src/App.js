import React from 'react';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import TopContainer from './container/TopContainer';
import LoginContainer from './container/LoginContainer';
import MemosContainer from './container/MemosContainer';
import { setUser, unSetUser } from './module/users';
import { auth } from './util/firebase';

auth.onAuthStateChanged(user => {
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
          <Route exact path='/memos' component={MemosContainer} />
        </Switch>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
