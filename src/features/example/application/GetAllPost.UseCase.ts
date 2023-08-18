import { PostRepository } from '../infrastructure/interface/PostRepository';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

export default class GetAllPostUseCase implements IBaseUseCase {
  constructor(private repository: PostRepository) {}

  async execute() {
    return this.repository.getPosts();
  }
}
