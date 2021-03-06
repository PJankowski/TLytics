import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { Route } from 'react-router';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from './store';

import App from 'Containers/App';

ReactDom.render(
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path="/" component={App} />
    </ConnectedRouter>
  </Provider>, document.getElementById('root'));
