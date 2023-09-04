import { Kafka } from 'kafkajs';
import { KafkaConfigOptions } from './KafkaConfig';

export default class KafkaFactory {
  public client: Kafka;
  constructor(readonly config: KafkaConfigOptions) {
    this.client = new Kafka({
      brokers: this.config.brokers.split(','),
      clientId: this.config.clientId,
    });
  }
}
