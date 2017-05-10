import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

mongoose.Promise = global.Promise;

const UserSchema = mongoose.Schema({
  username: { type: String, unique: true, required: 'Please enter a valid Username.' },
  password: String,
});

UserSchema.pre('save', function hashBeforeSave(next) {
  const user = this;
  if (!user.isModified('password')) next();

  bcrypt.genSalt(10, (err, salt) => {
    if (err) next(err);

    bcrypt.hash(user.password, salt, (_, hash) => {
      user.password = hash;
      next();
    });
  });
});

UserSchema.methods.comparePassword = function checkPassword(password) {
  return bcrypt.compare(password, this.password);
};

const User = mongoose.model('User', UserSchema);

export default User;
