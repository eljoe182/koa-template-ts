import Router from 'koa-router';
import { Context } from 'koa';
import { IBaseController } from '../../shared/infrastructure/interfaces/BaseController';
import { MoviesDependency, CommentsDependency } from '../dependencyInjections'

export const register = (router: Router): void => {
  const movieControllerFind: IBaseController = MoviesDependency.get('Movies.Controller.Find');
  const commentControllerAdd: IBaseController = CommentsDependency.get('Comments.Controller.Add');


  router.get('/movies', async (ctx: Context) => {
    return movieControllerFind.run(ctx);
  });

  router.post('/movies/add-comment', async (ctx: Context) => {
    return commentControllerAdd.run(ctx);
  });
}