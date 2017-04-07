export default function error(state = {
  status: '',
  message: '',
  active: false
}, action) {
  switch(action.type) {
    case "ADD_ERROR": {
      const {status, message} = action.payload;

      return {
        ...state,
        status,
        message,
        active: true
      }
    }

    case "CLEAR_ERROR": {
      return {
        ...state,
        status: '',
        message: '',
        active: false
      }
    }
  }

  return state;
}
