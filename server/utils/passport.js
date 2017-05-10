import Passport from 'passport';
import passportOauth from 'passport-oauth';
import request from 'request';

import config from '../config.js';

export default function setup() {
  const OAuthStrategy = passportOauth.OAuth2Strategy;

  OAuthStrategy.prototype.userProfile = (accessToken, done) => {
    const options = {
      url: 'https://api.twitch.tv/kraken/user',
      method: 'GET',
      headers: {
        'Client-ID': config.twitchClient,
        Accept: 'application/vnd.twitchtv.v5+json',
        Authorization: `OAuth ${accessToken}`,
      },
    };

    request(options, (error, response, body) => {
      if (response && response.statusCode === 200) {
        done(null, JSON.parse(body));
      } else {
        done(JSON.parse(body));
      }
    });
  };

  Passport.serializeUser((user, done) => {
    done(null, user);
  });

  Passport.deserializeUser((user, done) => {
    done(null, user);
  });

  Passport.use('twitch', new OAuthStrategy({
    authorizationURL: 'https://api.twitch.tv/kraken/oauth2/authorize',
    tokenURL: 'https://api.twitch.tv/kraken/oauth2/token',
    clientID: config.twitchClient,
    clientSecret: config.twitchSecret,
    callbackURL: config.twitchCallbackUrl,
    state: true,
  },
  (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;

    // Securely store user profile in your DB
    // User.findOrCreate(..., function(err, user) {
    //  done(err, user);
    // });

    done(null, profile);
  },
  ));
}
