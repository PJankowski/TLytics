import mongoose from 'mongoose';

const FollowersSchema = mongoose.Schema({
  channel_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  followers: Number,
  date: { type: Date, default: Date.now() },
});

const Followers = mongoose.model('Followers', FollowersSchema);

export default Followers;
