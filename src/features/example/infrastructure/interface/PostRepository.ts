import { Post } from '@features/example/domain/adapter/Post';

export interface PostRepository {
  getPosts(): Promise<Post[]>;
}
