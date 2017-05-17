import Passport from 'passport';
import passportOauth from 'passport-oauth';
import User from '../models/User';

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

    const {
      display_name,
      bio,
      type,
      name,
      logo,
      created_at,
      email,
      partnered,
    } = profile;

    const promise = new Promise((resolve, reject) => {
      User.findOne({ twitch_id: profile._id }, (err, user) => {
        if (err) {
          reject(err);
        } else if (user) {
          User.findOneAndUpdate({ twitch_id: profile._id }, { accessToken }, (updateError, doc) => {
            if (updateError) {
              reject(updateError);
            } else {
              resolve(doc);
            }
          });
        } else {
          const userObj = {
            twitch_id: profile._id,
            bio,
            display_name,
            type,
            name,
            logo,
            created_at,
            email,
            partnered,
            accessToken,
          };
          const newUser = new User(userObj);

          newUser.save((newUserErr, createdUser) => {
            if (newUserErr) {
              reject(newUserErr);
            } else {
              resolve(createdUser);
            }
          });
        }
      });
    });

    promise.then((data) => {
      done(null, data);
    }, (err) => {
      console.log(err);
    });
  },
  ));
}
