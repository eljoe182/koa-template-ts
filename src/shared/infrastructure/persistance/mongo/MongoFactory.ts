import { MongoClient } from 'mongodb';
import MongoConfig from './MongoConfig';

export class MongoFactory {
  private static clients: { [key: string]: MongoClient } = {};

  private static getClient(client: string): MongoClient {
    return MongoFactory.clients[client];
  }

  private static async connectClient(config: MongoConfig): Promise<MongoClient> {
    const client = new MongoClient(config.url);
    await client.connect();
    return client;
  }

  private static register(client: MongoClient, name: string): void {
    MongoFactory.clients[name] = client;
  }

  static async createClient(newClient: string, config: MongoConfig): Promise<MongoClient> {
    let clientInstance = MongoFactory.getClient(newClient);
    if (!clientInstance) {
      clientInstance = await MongoFactory.connectClient(config);
      MongoFactory.register(clientInstance, newClient);
    }
    return clientInstance;
  }
}