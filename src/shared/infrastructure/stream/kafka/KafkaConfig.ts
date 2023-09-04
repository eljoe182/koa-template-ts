import config from '@app/config';

export interface KafkaConfigOptions {
  clientId: string;
  brokers: string;
  groupId?: string;
}

export class KafkaConfig {
  static getConfig(): KafkaConfigOptions {
    return {
      clientId: config.STREAM.KAFKA.CLIENT_ID,
      brokers: config.STREAM.KAFKA.BROKERS,
      groupId: config.STREAM.KAFKA.GROUP_ID,
    };
  }
}
