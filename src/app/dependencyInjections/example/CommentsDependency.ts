import { Reference } from 'node-dependency-injection';
import container from '@dependency'

import AddCommentController from '@controllers/example/AddComment.Controller';
import AddCommentUseCase from '@features/example/application/AddComment.UseCase';

container.register('Comments.UseCase.Add', AddCommentUseCase).addArgument(new Reference('Comments.Repository'));
container.register('Comments.Controller.Add', AddCommentController).addArgument(new Reference('Comments.UseCase.Add'));

export default container;