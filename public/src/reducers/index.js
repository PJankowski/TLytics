import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './userReducer';
import channel from './channelReducer.js';
import toast from './toastReducer';

export default combineReducers({
  user,
  channel,
  toast,
  router: routerReducer,
});
