import {signup, login} from '../controllers/UserController';

export default function(app) {
  app.post('/signup', signup);
  app.post('/login', login)

  app.get('/*', (req, res) => {
    res.render('index');
  });
}
