import { Reference, Definition } from 'node-dependency-injection';
import container from '@dependency';

import KafkaClient from '@shared/infrastructure/stream/kafka/KafkaClient';
import KafkaFactory from '@shared/infrastructure/stream/kafka/KafkaFactory';
import { KafkaConfig } from '@shared/infrastructure/stream/kafka/KafkaConfig';

import KafkaConsumer from '@shared/infrastructure/stream/kafka/KafkaConsumer';
import KafkaProducer from '@shared/infrastructure/stream/kafka/KafkaProducer';
import KafkaSerializer from '@shared/domain/KafkaSerializer';
import KafkaDeserializer from '@shared/domain/KafkaDeserializer';

const definitionConfig = new Definition();
definitionConfig.setFactory(KafkaConfig, 'getConfig');
container.setDefinition('Shared.Stream.Kafka.Config', definitionConfig);

container.register('Shared.Domain.Kafka.Serializer', KafkaSerializer);
container.register('Shared.Domain.Kafka.Deserializer', KafkaDeserializer);

container
  .register('Shared.Stream.Kafka.Factory', KafkaFactory)
  .addArgument(new Reference('Shared.Stream.Kafka.Config'));

container.register('Shared.Stream.Kafka.Client', KafkaClient).addArgument(new Reference('Shared.Stream.Kafka.Factory'));

container
  .register('Shared.Stream.Kafka.Consumer', KafkaConsumer)
  .addArgument(new Reference('Shared.Stream.Kafka.Client'))
  .addArgument(new Reference('Shared.Domain.Kafka.Deserializer'));

container
  .register('Shared.Stream.Kafka.Producer', KafkaProducer)
  .addArgument(new Reference('Shared.Stream.Kafka.Client'))
  .addArgument(new Reference('Shared.Domain.Kafka.Serializer'));

export default container;
