import twitchApi from '../utils/twitchApi';
import Channel from '../models/Channel';
import Followers from '../models/Followers';

function getMaxFollowers(followers) {
  return new Promise((resolve) => {
    const maxFollowers = followers.reduce((total, follower) => {
      if (follower.followers > total) {
        return follower.followers;
      }
      return total;
    }, 0);

    resolve(maxFollowers);
  });
}

export default function getChannel(req, res) {
  const { accessToken, twitch_id } = req.session.passport.user;

  const promise = new Promise((resolve, reject) => {
    twitchApi.createRequest('channel', 'GET', accessToken)
      .then((data) => {
        const {
          display_name,
          game,
          status,
          mature,
          broadcaster_language,
          language,
          name,
          created_at,
          partner,
          logo,
          profile_banner,
          profile_banner_background_color,
          url,
          views,
          followers,
          broadcaster_type,
          email,
        } = data;

        Channel.findOne({ twitch_id }).populate('followers').exec((err, channel) => {
          if (err) {
            reject(err);
          } else if (channel) {
            const newFollowers = new Followers({ channel_id: channel._id, followers });

            newFollowers.save((error, doc) => {
              if (error) {
                reject(error);
              } else {
                channel.followers.push(doc);

                resolve(channel);
              }
            });
          } else {
            const channelObject = {
              twitch_id,
              display_name,
              game,
              status,
              mature,
              broadcaster_language,
              language,
              name,
              created_at,
              partner,
              logo,
              profile_banner,
              profile_banner_background_color,
              url,
              views,
              broadcaster_type,
              email,
            };
            const newChannel = new Channel(channelObject);
            const newFollowers = new Followers({ channel_id: newChannel._id, followers });

            newFollowers.save((error, doc) => {
              if (error) {
                reject(error);
              } else {
                newChannel.followers.push(doc);

                newChannel.save((newChannelErrror, newChannelData) => {
                  if (err) {
                    reject(err);
                  } else {
                    resolve(newChannelData);
                  }
                });
              }
            });
          }
        });
      })
      .catch((error) => {
        reject(error);
      });
  });

  promise.then((data) => {
    getMaxFollowers(data.followers)
      .then((maxFollowers) => {
        data.maxFollowers = maxFollowers;
        res.status(200).json(data);
      });
  }, (error) => {
    res.status(404).json(error);
  });
}
