import JsonPlaceHolderClient from '@shared/infrastructure/client/JsonPlaceHolderClient';
import { PostRepository } from '../interface/PostRepository';
import { Post } from '@features/example/domain/adapter/Post';
import config from '../config';

export default class JsonPlaceHolderRepository extends JsonPlaceHolderClient implements PostRepository {
  async getPosts() {
    const { status, data } = await this.get<Post[]>(config.GET_ALL_POSTS, { 'content-type': 'application/json' });
    if (status === 200) {
      return data;
    }
    return [];
  }

  async getPost(id: number) {
    const { status, data } = await this.get<Post>(`/posts/${id}`, { 'content-type': 'application/json' });

    if (status === 200) {
      return data;
    }
    return null;
  }

  async createPost(post: Post) {
    const { status, data } = await this.post<Post, any>('/posts', post, { 'content-type': 'application/json' });

    if (status === 201) {
      return data;
    }
  }

  async updatePost(post: Post) {
    const { status, data } = await this.put<any, any>(`/posts/${post.id}`, post, {
      'content-type': 'application/json',
    });

    if (status === 200) {
      return data;
    }
  }

  async deletePost(id: number) {
    const { status, data } = await this.delete(`/posts/${id}`, { 'content-type': 'application/json' });

    if (status === 200) {
      return data;
    }
  }
}
