import React, { Component } from 'react';
import store, { history } from './store';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Route, Switch } from 'react-router';
import Top from './component/screen/Top';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Switch>
            <Route exact path="/" component={Top} />
          </Switch>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;