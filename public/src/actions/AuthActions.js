import axios from 'axios';
import Storage from '../utils/storage';

export default function loginAction(user) {
  return (dispatch) => {
    return axios.post('/login', user)
      .then((data) => {
        const { _id, username, token } = data.data;

        Storage.set('tlytics_token', token);

        dispatch({ type: 'USER_LOGGED_IN',
          payload: {
            _id,
            username,
            token,
          },
        });
      })
      .catch((err) => {
        const { status, message } = err.response.data;
        dispatch({ type: 'ADD_ERROR',
          payload: {
            status,
            message,
          },
        });

        setTimeout(() => {
          dispatch({ type: 'CLEAR_ERROR' });
        }, 2000);
      });
  };
}

export function oAuthLogin() {
  return () => {
    return axios.get('/twitch')
      .then((data) => {
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  };
}
