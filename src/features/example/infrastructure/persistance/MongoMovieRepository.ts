import { Pagination } from '../../../../shared/infrastructure/interfaces/Pagination';
import { MongoRepository } from '../../../../shared/infrastructure/persistance/mongo/MongoRepository';
import { MovieRepository } from '../interface/MovieRepository';

export class MongoMovieRepository extends MongoRepository implements MovieRepository<Pagination | unknown, unknown> {
  protected collectionName(): string {
    return 'movies';
  }

  async findAll(params: Pagination): Promise<unknown[]> {
    const collection = await this.collection();
    const result = await collection.find({})
    .limit(params.limit)
    .skip(params.skip)
    .toArray();

    return result;
  }
}