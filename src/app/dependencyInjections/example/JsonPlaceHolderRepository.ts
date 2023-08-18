import { Reference } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import JsonPlaceHolderRepository from '@features/example/infrastructure/persistance/JsonPlaceHolderRepository';

container
  .register('Posts.Repository', JsonPlaceHolderRepository)
  .addArgument(new Reference('Shared.Connection.JsonPlaceHolder'));

export default container;
