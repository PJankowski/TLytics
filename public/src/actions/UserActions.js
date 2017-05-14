import axios from 'axios';
import Storage from '../utils/storage';

export default function getUser() {
  return (dispatch) => {
    return axios.get('/user')
      .then((data) => {
        const { display_name, accessToken, refreshToken } = data.data;
        const storage = new Storage();

        storage.set('tlytics_token', refreshToken);

        dispatch({ type: 'USER_LOGGED_IN',
          payload: {
            display_name,
            accessToken,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
