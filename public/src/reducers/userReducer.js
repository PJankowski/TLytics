export default function user(state = {
  display_name: '',
  accessToken: '',
}, action) {
  switch (action.type) {
    case 'USER_LOGGED_IN': {
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
