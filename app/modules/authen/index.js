import { login, logout } from './controller';

module.exports = (router) => {
  router.route('/login').post(login);
  router.route('/logout').put(logout);
}
