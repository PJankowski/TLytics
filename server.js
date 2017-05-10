import express from 'express';
import path from 'path';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import MongoStore from 'connect-mongo';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';

const app = express();

/* eslint-disable import/first */
import config from './server/config';
import passportSetup from './server/utils/passport';
import routes from './server/routes';
/* eslint-enable import/first */

mongoose.Promise = global.Promise;

mongoose.connect(config.db, (err) => {
  if (err) {
    console.log(err);
  } else {
    console.log('DB Connected');
  }
});

const Store = MongoStore(session);
const SessionStore = new Store({ mongooseConnection: mongoose.connection });

app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, './server/views'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('combined'));
app.use(cookieParser());
app.use(session({
  secret: config.sessionSecret,
  resave: false,
  saveUninitialized: false,
  store: SessionStore,
}));
app.use(passport.initialize());
app.use(passport.session());
app.set('view engine', 'pug');

passportSetup();

routes(app);

app.listen(config.port, () => {
  console.log(`Server started on port -> ${config.port}`);
});
