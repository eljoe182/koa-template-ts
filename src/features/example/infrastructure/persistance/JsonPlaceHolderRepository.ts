import JsonPlaceHolderClient from '@shared/infrastructure/client/JsonPlaceHolderClient';
import { PostRepository } from '../interface/PostRepository';
import { Post } from '@features/example/domain/adapter/Post';
import config from '../config';

export default class JsonPlaceHolderRepository extends JsonPlaceHolderClient implements PostRepository {
  async getPosts() {
    const { status, data } = await this.get<Post[]>(config.GET_ALL_POSTS);
    if (status === 200) {
      return data;
    }
    return [];
  }
}
