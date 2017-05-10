export default function getUser(req, res) {
  const { user } = req.session.passport;
  res.status(200).json(user);
}
