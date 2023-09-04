export default class KafkaSerializer {
  public serialize(data: unknown): Buffer {
    return Buffer.from(JSON.stringify(data));
  }
}
