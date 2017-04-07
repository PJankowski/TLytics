import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

mongoose.Promise = global.Promise;

let UserSchema = mongoose.Schema({
  username: {type: String, unique: true, required: 'Please enter a valid Username.'},
  password: String
});

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) return next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) return next(err);

    bcrypt.hash(user.password, salt, (err, hash) => {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function(password) {  
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
