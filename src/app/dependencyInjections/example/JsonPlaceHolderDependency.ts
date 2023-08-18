import { Reference } from 'node-dependency-injection';
import container from '@dependency';

import GetAllPostController from '@controllers/example/GetAllPost.Controller';
import GetAllPostUseCase from '@features/example/application/GetAllPost.UseCase';

container.register('Posts.UseCase.GetAll', GetAllPostUseCase).addArgument(new Reference('Posts.Repository'));
container.register('Posts.Controller.GetAll', GetAllPostController).addArgument(new Reference('Posts.UseCase.GetAll'));

export default container;
