import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import MongoTaskRepository from '@features/example/infrastructure/persistance/MongoTaskRepository';

container.register('Tasks.Repository', MongoTaskRepository).addArgument(new Reference('Shared.Connection.Mongo'));

export default container;
