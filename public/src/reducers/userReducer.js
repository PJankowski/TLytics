export default function user(state = {
  id: '',
  username: '',
  token: ''
}, action) {
  switch(action.type) {
    case "USER_LOGGED_IN": {
      const {_id, username, token} = action.payload;
      return {
        ...state,
        id: _id,
        username,
        token
      }
    }
  }

  return state;
}
