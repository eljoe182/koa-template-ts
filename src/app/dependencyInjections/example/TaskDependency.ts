import { Reference } from 'node-dependency-injection';
import container from '@dependency';

import AddTaskController from '@controllers/example/AddTask.Controller';
import AddTaskUseCase from '@features/example/application/AddTask.UseCase';

import GetAllTaskController from '@controllers/example/GetAllTasks.Controller';
import GetAllTaskUseCase from '@features/example/application/GetAllTasks.UseCase';

import FindTaskController from '@app/controllers/example/FindTask.Controller';
import FindTaskUseCase from '@features/example/application/FindTask.UseCase';

import UpdateTaskController from '@app/controllers/example/UpdateTask.Controller';
import UpdateTaskUseCase from '@features/example/application/UpdateTask.UseCase';

import DestroyTaskController from '@app/controllers/example/DestroyTask.Controller';
import DestroyTaskUseCase from '@features/example/application/DestroyTask.UseCase';

container.register('Tasks.UseCase.Add', AddTaskUseCase).addArgument(new Reference('Tasks.Repository'));
container
  .register('Tasks.Controller.Add', AddTaskController)
  .addArgument(new Reference('Tasks.UseCase.Add'))
  .addArgument(new Reference('Shared.Stream.Kafka.Producer'));

container.register('Tasks.UseCase.GetAll', GetAllTaskUseCase).addArgument(new Reference('Tasks.Repository'));
container.register('Tasks.Controller.GetAll', GetAllTaskController).addArgument(new Reference('Tasks.UseCase.GetAll'));

container.register('Tasks.UseCase.Find', FindTaskUseCase).addArgument(new Reference('Tasks.Repository'));
container.register('Tasks.Controller.Find', FindTaskController).addArgument(new Reference('Tasks.UseCase.Find'));

container.register('Tasks.UseCase.Update', UpdateTaskUseCase).addArgument(new Reference('Tasks.Repository'));
container.register('Tasks.Controller.Update', UpdateTaskController).addArgument(new Reference('Tasks.UseCase.Update'));

container.register('Tasks.UseCase.Destroy', DestroyTaskUseCase).addArgument(new Reference('Tasks.Repository'));
container
  .register('Tasks.Controller.Destroy', DestroyTaskController)
  .addArgument(new Reference('Tasks.UseCase.Destroy'));

export default container;
