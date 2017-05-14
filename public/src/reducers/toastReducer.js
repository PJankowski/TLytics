export default function toast(state = {
  status: '',
  message: '',
  type: '',
  active: false,
}, action) {
  switch (action.type) {
    case 'ADD_TOAST_NOTIFY': {
      const { status, message, type } = action.payload;

      return {
        ...state,
        status,
        message,
        type,
        active: true,
      };
    }

    case 'ADD_TOAST_ERROR': {
      const { status, message, type } = action.payload;

      return {
        ...state,
        status,
        message,
        type,
        active: true,
      };
    }

    case 'CLEAR_TOAST': {
      return {
        ...state,
        status: '',
        message: '',
        type: '',
        active: false,
      };
    }

    default: {
      return state;
    }
  }
}
