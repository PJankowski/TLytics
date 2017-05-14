import Passport from 'passport';
import passportOauth from 'passport-oauth';

import { twitchClient, twitchSecret, twitchCallbackUrl } from '../config';
import twitchApi from '../utils/twitchApi';

export default function setup() {
  const OAuthStrategy = passportOauth.OAuth2Strategy;

  OAuthStrategy.prototype.userProfile = (accessToken, done) => {
    twitchApi.createRequest('user', 'GET', accessToken)
      .then((data) => {
        done(null, data);
      })
      .catch((error) => {
        done(error);
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
    clientID: twitchClient,
    clientSecret: twitchSecret,
    callbackURL: twitchCallbackUrl,
    state: true,
  },
  (accessToken, refreshToken, profile, done) => {
    profile.accessToken = accessToken;
    profile.refreshToken = refreshToken;

    done(null, profile);
  },
  ));
}
