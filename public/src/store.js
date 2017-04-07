import { createStore, applyMiddleware } from 'redux';
import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import promiseMiddleware from 'redux-promise-middleware';
import logger from 'redux-logger';

import reducer from './reducers';

const history = createHistory();

const middleware = applyMiddleware(routerMiddleware(history), promiseMiddleware(), thunk, logger);

export default createStore(reducer, middleware);
