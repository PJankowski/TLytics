import { USER_GET } from 'Utility/constants';

export default function user(state = {
  display_name: '',
  accessToken: '',
}, action) {
  switch (action.type) {
    case USER_GET: {
      const { display_name, accessToken } = action.payload;
      return {
        ...state,
        display_name,
        accessToken,
      };
    }

    default: {
      return state;
    }
  }
}
