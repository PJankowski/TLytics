import request from 'request';
import config from '../config.js';

export default function getChannel(req, res) {
  const options = {
    url: 'https://api.twitch.tv/kraken/channel',
    method: 'GET',
    headers: {
      'Client-ID': config.twitchClient,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: `OAuth ${req.session.passport.user.accessToken}`,
    },
  };

  request(options, (error, response, body) => {
    if (response && response.statusCode === 200) {
      res.status(200).json(body);
    } else {
      res.status(403).json(error);
    }
  });
}