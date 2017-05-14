import { CHANNEL_GET } from '../utils/constants';

export default function getChannel() {
  return (dispatch, _, api) => {
    return api.getChannel()
      .then((data) => {
        const {
        status,
        game,
        channel_id,
        partner,
        logo,
        video_banner,
        profile_banner,
        profile_banner_background_color,
        url,
        views,
        followers,
        broadcaster_type,
      } = data.data;

        dispatch({ type: CHANNEL_GET,
          payload: {
            status,
            game,
            channel_id,
            partner,
            logo,
            video_banner,
            profile_banner,
            profile_banner_background_color,
            url,
            views,
            followers,
            broadcaster_type,
          },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
