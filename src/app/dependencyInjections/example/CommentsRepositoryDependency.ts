import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency'

import MongoCommentRepository from '@features/example/infrastructure/persistance/MongoCommentRepository';

container.register('Comments.Repository', MongoCommentRepository)
  .addArgument(new Reference('Shared.Connection.Mongo'));

export default container;
