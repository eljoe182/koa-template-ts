import Router from 'koa-router';
import { Context } from 'koa';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';
import { TaskDependency as container } from '@dependencies';

export const register = (router: Router): void => {
  const addController: IBaseController = container.get('Tasks.Controller.Add');
  const getAllController: IBaseController = container.get('Tasks.Controller.GetAll');
  const findController: IBaseController = container.get('Tasks.Controller.Find');
  const updateController: IBaseController = container.get('Tasks.Controller.Update');
  const destroyController: IBaseController = container.get('Tasks.Controller.Destroy');

  router.get('/all-tasks', async (ctx: Context): Promise<void> => {
    await getAllController.run(ctx);
  });

  router.post('/add-task', async (ctx: Context): Promise<void> => {
    await addController.run(ctx);
  });

  router.get('/get-task/:id', async (ctx: Context): Promise<void> => {
    await findController.run(ctx);
  });

  router.put('/update-task/:id', async (ctx: Context): Promise<void> => {
    await updateController.run(ctx);
  });

  router.delete('/destroy-task/:id', async (ctx: Context): Promise<void> => {
    await destroyController.run(ctx);
  });
};
