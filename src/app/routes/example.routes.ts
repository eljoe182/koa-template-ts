import Router from 'koa-router';
import { Context } from 'koa';
import { IBaseController } from '../../shared/infrastructure/interfaces/BaseController';
import { MoviesDependency as container } from '../dependencyInjections'

export const register = (router: Router): void => {
  const controller: IBaseController = container.get('Movies.Controller.Find');

  router.get('/movies', async (ctx: Context) => {
    return controller.run(ctx);
  });
}