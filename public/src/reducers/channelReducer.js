import { CHANNEL_GET } from '../utils/constants';

export default function user(state = {
  status: '',
  game: '',
  channel_id: '',
  partner: false,
  logo: '',
  video_banner: '',
  profile_banner: '',
  profile_banner_background_color: '',
  url: '',
  views: 0,
  followers: 0,
  broadcaster_type: '',
}, action) {
  switch (action.type) {
    case CHANNEL_GET: {
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
      } = action.payload;
      return {
        ...state,
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
      };
    }

    default: {
      return state;
    }
  }
}
