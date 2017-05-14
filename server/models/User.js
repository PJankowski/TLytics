import mongoose from 'mongoose';

const UserSchema = mongoose.Schema({
  user_id: 44322889,
  bio: String,
  created_at: Date,
  display_name: String,
  email: String,
  email_verified: Boolean,
  logo: String,
  name: String,
  notifications: {
    email: Boolean,
    push: Boolean,
  },
  partnered: Boolean,
  twitter_connected: Boolean,
  type: String,
  updated_at: { type: Date, default: Date.now() },
});

const User = mongoose.model('User', UserSchema);

export default User;
