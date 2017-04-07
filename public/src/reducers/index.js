import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import error from './errorReducer';

export default combineReducers({
  user,
  error,
  router: routerReducer
});
