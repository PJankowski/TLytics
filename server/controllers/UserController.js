import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';
import User from '../models/User';
import config from '../config';

mongoose.Promise = global.Promise;

export function signup(req, res) {
  const user = new User(req.body);

  user.save((err, data) => {
    if (err) {
      res.status(500).json(err);
    } else {
      res.status(200).json(data);
    }
  });
};

export function login(req, res) {
  const {username, password} = req.body;

  User.findOne({username}, (err, user) => {
    if (err) {
      res.status(500).json(err);
    } else if(!user) {
      res.status(401).json({status: 'Error', message: 'Please try again.'});
    } else {
      user.comparePassword(password)
        .then((response) => {
          if (response === true) {
            const {username, _id} = user;
            req.session.user = jwt.sign({_id, username}, config.jwtSecret);
            res.status(200).json({_id, username, token: req.session.user});
          } else {
            res.status(401).json({status: 'Error', message: 'Please try again.'});
          }
        });
    }
  });
}
