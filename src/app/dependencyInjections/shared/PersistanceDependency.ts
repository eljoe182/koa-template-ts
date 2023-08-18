import { Reference, Definition } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import { MongoFactory } from '@shared/infrastructure/persistance/mongo/MongoFactory';
import { MongoConfigFactory } from '@shared/infrastructure/persistance/mongo/MongoConfig';
import AxiosClientFactory from '@shared/infrastructure/client/AxiosClientFactory';
import JsonPlaceHolderClient from '@shared/infrastructure/client/JsonPlaceHolderClient';
import WinstonLogger from '@shared/infrastructure/implementation/WinstonLogger';

const definitionConfig = new Definition();
definitionConfig.setFactory(MongoConfigFactory, 'create');
container.setDefinition('Shared.Connection.Config.Mongo', definitionConfig);

const definitionClient = new Definition();
definitionClient.setFactory(MongoFactory, 'createClient');
container
  .setDefinition('Shared.Connection.Mongo', definitionClient)
  .addArgument('entities')
  .addArgument(new Reference('Shared.Connection.Config.Mongo'));

container.register('Shared.Logger', WinstonLogger);

container.register('Shared.Connection.Axios', AxiosClientFactory);
container
  .register('Shared.Connection.JsonPlaceHolder', JsonPlaceHolderClient)
  .addArgument(new Reference('Shared.Connection.Axios'));

export default container;
