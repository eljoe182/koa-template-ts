import { RecordMetadata } from 'kafkajs';
import KafkaSerializer from '@shared/domain/KafkaSerializer';
import KafkaClient from './KafkaClient';
import { Producer } from '@shared/domain/interfaces/Producer';

export default class KafkaProducer implements Producer<RecordMetadata[] | undefined> {
  constructor(
    private client: KafkaClient,
    private serializer: KafkaSerializer
  ) {}

  async send(topic: string, data: unknown) {
    const value = this.serializer.serialize(data);
    const producer = await this.client.producerInstance();
    await producer.connect();
    const responseStream = await producer.send({
      topic,
      messages: [
        {
          value,
        },
      ],
    });
    await producer.disconnect();
    return responseStream;
  }
}
