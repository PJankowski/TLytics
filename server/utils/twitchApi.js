import request from 'request';
import { twitchClient } from '../config';

const twitchApi = {};

twitchApi.createRequest = (endpoint, type, token) => {
  const options = {
    url: `https://api.twitch.tv/kraken/${endpoint}`,
    method: type,
    headers: {
      'Client-ID': twitchClient,
      Accept: 'application/vnd.twitchtv.v5+json',
      Authorization: `OAuth ${token}`,
    },
  };

  return new Promise((resolve, reject) => {
    request(options, (error, response, body) => {
      if (response && response.statusCode === 200) {
        resolve(JSON.parse(body));
      } else {
        reject(error);
      }
    });
  });
};

export default twitchApi;
