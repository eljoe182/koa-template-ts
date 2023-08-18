import { Post } from '@features/example/domain/adapter/Post';

export interface PostRepository {
  getPosts(): Promise<Post[]>;
  getPost(id: number): Promise<Post | null>;
  createPost(post: Post): Promise<Post>;
  updatePost(post: Post): Promise<Post>;
  deletePost(id: number): Promise<void>;
}
