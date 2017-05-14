import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import api from './utils/api';
import reducer from './reducers';

export const history = createHistory();

const middleware = applyMiddleware(
  routerMiddleware(history),
  promiseMiddleware(),
  thunk.withExtraArgument(api),
  logger,
);

export default createStore(reducer, middleware);
