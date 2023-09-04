import KafkaDeserializer from '@shared/domain/KafkaDeserializer';
import KafkaClient from './KafkaClient';

export default class KafkaConsumer {
  constructor(
    private client: KafkaClient,
    private deserializer: KafkaDeserializer
  ) {}

  async listen(topics: string[]) {
    console.log('Listening Kafka on topics:', topics.join(', '));
    const consumer = await this.client.consumerInstance();
    await consumer.connect();
    await consumer.subscribe({ topics, fromBeginning: true });
    await consumer.run({
      eachMessage: async ({ message, topic }) => {
        const data = this.deserializer.deserialize(message);
        console.log({
          topic,
          data,
        });
      },
    });
  }
}
