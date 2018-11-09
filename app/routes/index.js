
const ROUTES = [
  'authen',
  'user',
];

module.exports = (router) => {
  ROUTES.forEach((routeName) => {
    require(`./${routeName}`)(router);
  });
}
