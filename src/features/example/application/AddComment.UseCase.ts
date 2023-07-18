import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';
import { Comment } from '../domain/interface/Comments';
import { CommentRepository } from '../infrastructure/interface/CommentRepository';

export default class AddCommentUseCase implements IBaseUseCase {
  constructor(private repository: CommentRepository) {}

  async execute(params: Comment): Promise<unknown> {
    return this.repository.add(params);
  }
} 