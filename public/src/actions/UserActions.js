import Storage from '../utils/storage';
import { USER_GET } from '../utils/constants';

export default function getUser() {
  return (dispatch, _, api) => {
    return api.getUser()
      .then((data) => {
        const { display_name, accessToken, refreshToken } = data.data;
        const storage = new Storage();

        storage.set('tlytics_token', refreshToken);

        dispatch({ type: USER_GET,
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
