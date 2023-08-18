import { Reference, Definition } from 'node-dependency-injection';
import container from '@shared/infrastructure/dependency';

import { MongoFactory } from '@shared/infrastructure/persistance/mongo/MongoFactory';
import { MongoConfigFactory } from '@shared/infrastructure/persistance/mongo/MongoConfig';

const definitionConfig = new Definition();
definitionConfig.setFactory(MongoConfigFactory, 'create');
container.setDefinition('Shared.Connection.Config.Mongo', definitionConfig);

const definitionClient = new Definition();
definitionClient.setFactory(MongoFactory, 'createClient');
container
  .setDefinition('Shared.Connection.Mongo', definitionClient)
  .addArgument('entities')
  .addArgument(new Reference('Shared.Connection.Config.Mongo'));

export default container;
