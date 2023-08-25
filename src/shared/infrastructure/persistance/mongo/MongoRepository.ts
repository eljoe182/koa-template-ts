import { Collection, MongoClient } from 'mongodb';

export abstract class MongoRepository {
  constructor(private _client: Promise<MongoClient>) {}

  protected abstract collectionName(): string;

  protected client(): Promise<MongoClient> {
    return this._client;
  }

  protected async collection(): Promise<Collection> {
    const client = await this.client();
    return client.db().collection(this.collectionName());
  }
}
