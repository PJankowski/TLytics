import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter } from 'react-router-redux';

import store from './store';

import App from './layouts/App';

const history = createHistory();

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
