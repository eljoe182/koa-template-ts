import Router from 'koa-router';
import { HealthDependency as container } from '../dependencies'
import { IBaseController } from '../../shared/domain/BaseController';
import { Context } from 'koa';

export const register = (router: Router): void => {
  const controller: IBaseController = container.get('Health.Controller.GetStatus');

  router.get('/health', async (ctx: Context) => {
    return controller.run(ctx);
  });
}