import Router from 'koa-router';
import { glob } from 'glob';

export function registerRoutes(router: Router) {
  const routes = glob.sync(__dirname + '/**/*.routes.*');
  routes.forEach((route) => {
    return register(route, router);
  });
}

function register(routePath: string, router: Router) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const route = require(routePath);
  route.register(router);
}
