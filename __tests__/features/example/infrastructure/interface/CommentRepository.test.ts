import { Comment } from '@features/example/domain/interface/Comments';
import { CommentRepository } from '@features/example/infrastructure/interface/CommentRepository';
import { CommentsRepositoryDependency } from '@dependencies';

describe('CommentRepository: ', () => {
  it('should add a comment', async () => {
    const repository: CommentRepository = CommentsRepositoryDependency.get('Comments.Repository');
    const comment: Comment = {
      email: 'example@domain.ltd',
      movie_id: '1',
      name: 'Example',
      text: 'Text Example',
      date: new Date(),
    };

    jest.spyOn(repository, 'add').mockResolvedValueOnce(comment);

    const result = await repository.add(comment);
    expect(result).toHaveProperty('email');
  });
});