import { Context } from 'koa';
import Router from 'koa-router';

import { ExampleAddTaskSchema } from '@app/middleware/schemas/ExampleTask.schemas';
import { SchemaValidator } from '@app/middleware/SchemaValidator';
import { JsonPlaceHolderDependency as JPHContainer, TaskDependency as container } from '@dependencies';
import { IBaseController } from '@shared/infrastructure/interfaces/BaseController';

export const register = (router: Router): void => {
  const schemas = new ExampleAddTaskSchema();
  const schemaValidator = new SchemaValidator();
  const addController: IBaseController = container.get('Tasks.Controller.Add');
  const getAllController: IBaseController = container.get('Tasks.Controller.GetAll');
  const findController: IBaseController = container.get('Tasks.Controller.Find');
  const updateController: IBaseController = container.get('Tasks.Controller.Update');
  const destroyController: IBaseController = container.get('Tasks.Controller.Destroy');

  const getAllPostController: IBaseController = JPHContainer.get('Posts.Controller.GetAll');

  router.get('/all-tasks', async (ctx: Context): Promise<void> => {
    await getAllController.run(ctx);
  });

  router.post('/add-task', async (ctx: Context): Promise<void> => {
    schemaValidator.validate(schemas.addTask(), ctx.request);
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

  router.get('/all-posts', async (ctx: Context): Promise<void> => {
    await getAllPostController.run(ctx);
  });
};
