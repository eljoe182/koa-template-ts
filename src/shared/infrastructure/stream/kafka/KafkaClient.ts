import KafkaFactory from './KafkaFactory';

export default class KafkaClient {
  constructor(private factory: KafkaFactory) {}
  async consumerInstance() {
    return this.factory.client.consumer({
      groupId: this.factory.config.groupId || 'test',
    });
  }

  async producerInstance() {
    return this.factory.client.producer({
      createPartitioner: () => () => 0,
    });
  }
}
