import twitchApi from '../utils/twitchApi';
import Channel from '../models/Channel';
import Followers from '../models/Followers';

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
                channel.currentFollowers = doc.followers;

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
                    newChannelData.currentFollowers = doc.followers;
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
    res.status(200).json(data);
  }, (error) => {
    res.status(404).json(error);
  });
}
