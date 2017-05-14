import mongoose from 'mongoose';

const ChannelSchema = mongoose.Schema({
  mature: Boolean,
  status: String,
  broadcaster_language: { type: String, default: 'en' },
  display_name: String,
  game: String,
  language: { type: String, default: 'en' },
  channel_id: Number,
  name: String,
  created_at: { type: Date, default: Date.now() },
  updated_at: { type: Date, default: Date.now() },
  partner: Boolean,
  logo: String,
  video_banner: String,
  profile_banner: String,
  profile_banner_background_color: String,
  url: String,
  views: Number,
  followers: Number,
  broadcaster_type: String,
  stream_key: String,
  email: String,
});

const Channel = mongoose.model('Channel', ChannelSchema);

export default Channel;
