import axios from 'axios';
import Storage from '../utils/storage';

export default function loginAction(user) {
  return (dispatch) => {
    axios.post('/login', user)
      .then((data) => {
        const {_id, username, token} = data.data;

        Storage.set('tlytics_token', token);

        dispatch({type: 'USER_LOGGED_IN', payload: {
          _id,
          username,
          token
        }});
      })
      .catch((err) => {
        const {status, message} = err.response.data;
        dispatch({type: 'ADD_ERROR', payload: {
          status,
          message
        }});

        setTimeout(() => {
          dispatch({type: 'CLEAR_ERROR'});
        }, 2000);
      });
  }
}
