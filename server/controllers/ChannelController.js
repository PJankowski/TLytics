import twitchApi from '../utils/twitchApi';

export default function getChannel(req, res) {
  const { accessToken } = req.session.passport.user;
  twitchApi.createRequest('channel', 'GET', accessToken)
    .then((data) => {
      res.status(200).json(data);
    })
    .catch((error) => {
      res.status(404).json(error);
    });
}
