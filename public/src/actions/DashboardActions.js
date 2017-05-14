import getUser from './UserActions.js';
import getChannel from './ChannelActions.js';

export default function getDashboardData() {
  return (dispatch) => {
    dispatch(getUser()).then(() => { dispatch(getChannel()); });
  };
}
