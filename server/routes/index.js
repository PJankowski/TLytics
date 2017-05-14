import Passport from 'passport';

import getUser from '../controllers/UserController';

export default function (app) {
  app.get('/twitch', Passport.authenticate('twitch', { scope: ['user_read', 'channel_subscriptions', 'channel_read'] }));
  app.get('/twitch/callback', Passport.authenticate('twitch', { successRedirect: '/dashboard', failureRedirect: '/' }));

  app.get('/user', getUser);

  app.get('/', (req, res) => {
    res.render('index');
  });

  app.get('/*', (req, res) => {
    res.render('app');
  });
}
