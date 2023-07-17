import Router from 'koa-router';
import { Context } from 'koa';
import { IBaseController } from '../../shared/infrastructure/interfaces/BaseController';
import { MoviesDependency, CommentsDependency } from '../dependencyInjections'
import { CommentSchema } from '../../features/example/domain/adapter/CommentAdapter';

export const register = (router: Router): void => {
  const movieControllerFind: IBaseController = MoviesDependency.get('Movies.Controller.Find');
  const commentControllerAdd: IBaseController = CommentsDependency.get('Comments.Controller.Add');


  router.get('/movies', async (ctx: Context): Promise<void> => {
    await movieControllerFind.run(ctx);
  });

  router.post('/movies/add-comment', async (ctx: Context): Promise<void> => {
    const body = ctx.request.body;
    CommentSchema.parse(body);
    await commentControllerAdd.run(ctx);
  });
}