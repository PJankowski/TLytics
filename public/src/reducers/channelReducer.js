import { CHANNEL_GET } from 'Utility/constants';

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
  followers: [],
  maxFollowers: 0,
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
        maxFollowers,
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
        maxFollowers,
        broadcaster_type,
      };
    }

    default: {
      return state;
    }
  }
}
