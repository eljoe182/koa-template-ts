import { ObjectId } from 'mongodb';
import { MongoRepository } from '@persistance/mongo/MongoRepository';
import { Comment } from '../../domain/interface/Comments';
import { CommentRepository } from '../interface/CommentRepository';

export default class MongoCommentRepository extends MongoRepository implements CommentRepository {
  protected collectionName(): string {
    return 'comments';
  }

  async add(params: Comment): Promise<unknown> {
    const collection = await this.collection();
    const result = await collection.insertOne({
      ...params,
      date: new Date(),
      movie_id: new ObjectId(params.movie_id)
    });

    return result;
  }
}