import path from 'path';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({ path: path.join(__dirname, '../variables.env') });
}

export const db = process.env.MONGOURI;
export const jwtSecret = process.env.JWTSECRET;
export const sessionSecret = process.env.SESSIONSECRET;
export const port = process.env.PORT;
export const twitchClient = process.env.TWITCHCLIENT;
export const twitchSecret = process.env.TWITCHSECRET;
export const twitchCallbackUrl = process.env.TWITCHCALLBACK;