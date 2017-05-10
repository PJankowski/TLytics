import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../variables.env') });
}

export default {
  db: process.env.MONGOURI,
  jwtSecret: process.env.JWTSECRET,
  sessionSecret: process.env.SESSIONSECRET,
  port: process.env.PORT,
  twitchClient: process.env.TWITCHCLIENT,
  twitchSecret: process.env.TWITCHSECRET,
  twitchCallbackUrl: process.env.TWITCHCALLBACK,
};
