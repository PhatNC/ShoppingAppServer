import routes from './mapping';

// console.log('routes', routes)

const rootRoute = (router) => {
  Object.keys(routes).forEach((routeName) => {
    // console.log(routes[routeName], JSON.stringify(routes[routeName]));
    routes[routeName](router);
  });
};

export default rootRoute;
