import {
    CommentsDependency as container, CommentsRepositoryDependency as repository
} from '@dependencies';
import AddCommentUseCase from '@features/example/application/AddComment.UseCase';
import { Comment } from '@features/example/domain/interface/Comments';
import { CommentRepository } from '@features/example/infrastructure/interface/CommentRepository';
import { IBaseUseCase } from '@shared/infrastructure/interfaces/BaseUseCase';

const useCaseDependency: IBaseUseCase = container.get('Comments.UseCase.Add');
const repositoryDependency: CommentRepository = repository.get('Comments.Repository');
let useCase: AddCommentUseCase;

describe('AddComment.UseCase: ', () => {
  beforeEach(() => {
    useCase = new AddCommentUseCase(repositoryDependency);
  });

  it('should what dependency and class is same', () => {
    expect(useCaseDependency).toBeInstanceOf(AddCommentUseCase);
    expect(useCase).toBeInstanceOf(AddCommentUseCase);
  });

  it('should create a comment', async () => {

    const data: Comment = {
      email: 'example@domain.ltd',
      name: 'Example',
      text: 'Text Example',
      movie_id: '1',
      date: new Date(),
    };

    jest.spyOn(repositoryDependency, 'add').mockResolvedValueOnce(data);

    const comment = await useCase.execute(data);

    expect(comment).toBeInstanceOf(Object);
    expect(comment).toHaveProperty('email');
  });
});
